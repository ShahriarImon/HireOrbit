"use client";
import APIClient from "@/services/apiClient";
import { Icon } from "@iconify/react";
import { Card, Grid2, Stack } from "@mui/material";
import { useEffect, useState } from "react";

interface SummeryStat {
  active_users: number;
  clicks: number;
  appearance: number;
}
interface Summery {
  current: SummeryStat;
  previous: SummeryStat;
}
const Summery = ({ filter }: { filter: string }) => {
  const [summery, setSummery] = useState<Summery>({} as Summery);

  const summaryService = new APIClient<Summery>(
    `dashboard/summary?filter=${filter}`,
    { cache: "no-store" }
  );

  useEffect(() => {
    summaryService.get().then((data) => {
      setSummery(data);
    });
  }, [filter]);

  const stats =
    summery.current &&
    (Object.keys(summery.current) as (keyof SummeryStat)[]).map((key) => {
      const currentValue = summery.current[key];
      const previousValue = summery.previous[key];
      return { key, currentValue, previousValue };
    });

  return (
    <Grid2 container spacing={3}>
      {stats?.map(({ key, currentValue, previousValue }) => {
        const difference = currentValue - previousValue;
        const percentChange =
          ((currentValue - previousValue) / previousValue) * 100;

        return (
          <Grid2 size={4} key={key}>
            <Card key={key} style={{ padding: "30px" }}>
              <div
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#1C252E",
                }}
              >
                <span style={{ textTransform: "capitalize" }}>Total </span>{" "}
                {`${key}`.replaceAll("_", " ")}
              </div>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "#1C252E",
                  marginTop: "18px",
                }}
              >
                {currentValue / 1000}K
              </div>
              <Stack
                direction={"row"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                style={{
                  marginTop: "12px",
                }}
              >
                {difference >= 0 ? (
                  <Icon
                    icon="ri:arrow-up-double-fill"
                    width="24"
                    height="24"
                    style={{ color: "#22C55E" }}
                  />
                ) : (
                  <Icon
                    icon="ri:arrow-down-double-fill"
                    width="24"
                    height="24"
                    style={{
                      color: "#FF5630",
                    }}
                  />
                )}{" "}
                {Math.abs(percentChange).toFixed(1)}% previous month
              </Stack>
            </Card>
          </Grid2>
        );
      })}
    </Grid2>
  );
};

export default Summery;
