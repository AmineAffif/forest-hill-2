import React from "react";
import { MyLineChart } from "./charts/LineChart";

const FinanceSummary = () => {
  const financeData = [
    { month: "January", value: 1200 },
    { month: "February", value: 2100 },
    { month: "March", value: 1800 },
    { month: "April", value: 2400 },
    { month: "May", value: 2200 },
    { month: "June", value: 2500 },
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <MyLineChart
        title="Finance Overview"
        description="January - June 2024"
        data={financeData}
        dataKey="value"
        lineColor="hsl(var(--chart-4))"
        footerText="Finance growth by 15% this quarter"
      />
    </div>
  );
};

export default FinanceSummary;
