import React from "react";
import { MyAreaChart } from "./charts/AreaChart";

const FinanceForecast = () => {
  const financeForecastData = [
    { date: "2024-01-01", revenue: 22200, desktop: 15000, mobile: 7200 },
    { date: "2024-02-01", revenue: 9700, desktop: 6000, mobile: 3700 },
    { date: "2024-03-01", revenue: 16700, desktop: 10000, mobile: 6700 },
    { date: "2024-04-01", revenue: 24200, desktop: 18000, mobile: 6200 },
    { date: "2024-05-01", revenue: 37300, desktop: 23000, mobile: 14300 },
    { date: "2024-06-01", revenue: 30100, desktop: 20000, mobile: 10100 },
  ];

  const dataKeys = [
    { key: "revenue", color: "hsl(var(--chart-1))" },
    { key: "desktop", color: "hsl(var(--chart-2))" },
    { key: "mobile", color: "hsl(var(--chart-3))" },
  ];

  return (
    <MyAreaChart
      title="Revenue Forecast"
      description="January - June 2024"
      data={financeForecastData}
      dataKeys={dataKeys}
    />
  );
};

export default FinanceForecast;
