import React from "react";
import { MyLineChart } from "./charts/LineChart";

const StaffPerformanceSummary = () => {
  const staffPerformanceData = [
    { month: "January", value: 85 },
    { month: "February", value: 88 },
    { month: "March", value: 90 },
    { month: "April", value: 87 },
    { month: "May", value: 92 },
    { month: "June", value: 95 },
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <MyLineChart
        title="Staff Performance"
        description="January - June 2024"
        data={staffPerformanceData}
        dataKey="value"
        lineColor="hsl(var(--chart-4))"
        footerText="Staff performance increased by 10% this month"
      />
    </div>
  );
};

export default StaffPerformanceSummary;
