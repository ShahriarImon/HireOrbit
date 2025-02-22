"use client";
import { Box, Card, Stack } from "@mui/material";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { Visits, VisitsStat } from "../../views/dashboard-view";

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// interface DeviceCount {
//   desktop: number;
//   mobile: number;
// }

// interface VisitsStat {
//   monday: DeviceCount;
//   tuesday: DeviceCount;
//   wednesday: DeviceCount;
//   thursday: DeviceCount;
//   friday: DeviceCount;
//   saturday: DeviceCount;
//   sunday: DeviceCount;
// }
// interface OfferSentStat {
//   monday: number;
//   tuesday: number;
//   wednesday: number;
//   thursday: number;
//   friday: number;
//   saturday: number;
//   sunday: number;
// }

// interface Visits {
//   website_visits: VisitsStat;
//   offers_sent: OfferSentStat;
// }

const OfferSentChart = ({ visits }: { filter: string; visits: Visits }) => {
  const orderedDays: (keyof VisitsStat)[] = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  const categories = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Process data for Website Visits Chart

  // Process data for Offers Sent Chart
  const offersSentSeries = visits?.offers_sent && [
    {
      name: "Offers Sent",
      data: orderedDays?.map((day) => visits.offers_sent[day]),
    },
  ];

  // Chart options for Offers Sent (Bar Chart)
  const offersSentOptions: ApexOptions = {
    chart: {
      type: "line",
      height: 300,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
      },
    },
    xaxis: {
      categories: categories,
    },
    yaxis: {
      title: { text: "" },
      min: 0,
      max: 100,
      tickAmount: 5,
    },
    stroke: {
      curve: "smooth", // Makes the line smooth
      width: 3,
    },
    colors: ["#000"], // Black line color
  };

  return (
    <Card sx={{ padding: "30px", paddingX: "15px", paddingBottom: "10px" }}>
      <Stack spacing={3}>
        <Box
          sx={{
            fontWeight: 600,
            fontSize: "1.125rem",
            paddingX: "15px",
            paddingBottom: "10px",
          }}
        >
          Offer sent
        </Box>
        <Chart
          options={offersSentOptions}
          series={offersSentSeries}
          type="line"
          height={350}
        />
      </Stack>
    </Card>
  );
};

export default OfferSentChart;
