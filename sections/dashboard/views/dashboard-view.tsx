"use client";

import APIClient from "@/services/apiClient";
import {
  FormControl,
  Grid2,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import dynamic from "next/dynamic";
import { ReactNode, Suspense, useLayoutEffect, useState } from "react";
// import OfferSentChart from "../components/Chart/OfferSentChart";
// import WebsiteVisitChart from "../components/Chart/WebsiteVisitChart";
const Summery = dynamic(() => import("../components/Summery"), {
  ssr: false,
});
const WebsiteVisitChart = dynamic(
  () => import("../components/Chart/WebsiteVisitChart"),
  {
    ssr: false,
  }
);
const OfferSentChart = dynamic(
  () => import("../components/Chart/OfferSentChart"),
  {
    ssr: false,
  }
);

export interface DeviceCount {
  desktop: number;
  mobile: number;
}

export interface VisitsStat {
  monday: DeviceCount;
  tuesday: DeviceCount;
  wednesday: DeviceCount;
  thursday: DeviceCount;
  friday: DeviceCount;
  saturday: DeviceCount;
  sunday: DeviceCount;
}
export interface OfferSentStat {
  monday: number;
  tuesday: number;
  wednesday: number;
  thursday: number;
  friday: number;
  saturday: number;
  sunday: number;
}

export interface Visits {
  website_visits: VisitsStat;
  offers_sent: OfferSentStat;
}

export default function DashboardView({ children }: { children: ReactNode }) {
  const [filter, setFilter] = useState<string>("this-week");

  const handleFilter = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
  };

  const [visits, setVisits] = useState<Visits>({} as Visits);
  console.log("visitsqw:", visits);

  const visitService = new APIClient<Visits>(
    `dashboard/stat?filter=${filter}`,
    { cache: "no-store" }
  );
  console.log("visitService:", visitService);

  useLayoutEffect(() => {
    visitService.get().then((data) => {
      setVisits(data);
    });
  }, [filter]);
  return (
    <Stack
      direction={"column"}
      spacing={3}
      style={{
        margin: "15px",
        marginTop: "10px",
        marginRight: "115px",
        lineHeight: "1",
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>Dashboard</div>{" "}
        <FormControl sx={{ minWidth: 120 }}>
          <Select
            value={filter}
            onChange={handleFilter}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{
              "& .MuiSelect-select": {
                padding: 1,
                fontWeight: 600,
                fontSize: "0.875rem",
              },
            }}
          >
            <MenuItem value={"this-week"}>This Week</MenuItem>
            <MenuItem value={"last-week"}>Last Week</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Summery filter={filter} />

      <Grid2 container spacing={3}>
        <Grid2 size={6}>
          {visits?.website_visits && (
            <Suspense fallback={<p>Loading...</p>}>
              <WebsiteVisitChart filter={filter} visits={visits} />
            </Suspense>
          )}
        </Grid2>
        <Grid2 size={6}>
          {visits?.offers_sent && (
            <Suspense fallback={<p>Loading...</p>}>
              <OfferSentChart filter={filter} visits={visits} />
            </Suspense>
          )}
        </Grid2>
      </Grid2>
    </Stack>
  );
}
