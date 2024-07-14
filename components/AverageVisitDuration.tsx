import React from "react";
import { MyBarChart } from "./charts/BarChart";

const AverageVisitDuration = () => {
  const averageVisitDurationData = [
    { month: "January", duration: 45 },
    { month: "February", duration: 50 },
    { month: "March", duration: 55 },
    { month: "April", duration: 60 },
    { month: "May", duration: 65 },
    { month: "June", duration: 70 },
  ];

  const dataKeys = [{ key: "duration", color: "hsl(var(--chart-1))" }];

  return (
    <MyBarChart
      title="Average Visit Duration"
      description="January - June 2024"
      data={averageVisitDurationData}
      dataKeys={dataKeys}
      footerText="Visit duration increased by 10% this month"
    />
  );
};

export default AverageVisitDuration;
