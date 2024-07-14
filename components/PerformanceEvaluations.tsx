import React from "react";
import { MyRadarChart } from "./charts/RadarChart";

const PerformanceEvaluations = () => {
  const performanceEvaluationsData = [
    { month: "January", value: 75 },
    { month: "February", value: 80 },
    { month: "March", value: 78 },
    { month: "April", value: 85 },
    { month: "May", value: 88 },
    { month: "June", value: 90 },
  ];

  return (
    <MyRadarChart
      title="Performance Evaluations"
      description="Showing evaluation levels for the last 6 months"
      data={performanceEvaluationsData}
      dataKey="value"
      radarColor="hsl(var(--chart-2))"
      footerText="Performance evaluations increased by 10% this month"
    />
  );
};

export default PerformanceEvaluations;
