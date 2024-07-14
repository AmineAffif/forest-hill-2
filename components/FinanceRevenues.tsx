import React from "react";
import { MyLineChart } from "./charts/LineChart";

const FinanceRevenues = () => {
  const financeRevenuesData = [
    { month: "January", value: 12000 },
    { month: "February", value: 14000 },
    { month: "March", value: 13000 },
    { month: "April", value: 15000 },
    { month: "May", value: 16000 },
    { month: "June", value: 17000 },
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <MyLineChart
        title="Monthly/Annual Revenues"
        description="January - June 2024"
        data={financeRevenuesData}
        dataKey="value"
        lineColor="hsl(var(--chart-4))"
        footerText="Revenues increased by 15% this quarter"
      />
    </div>
  );
};

export default FinanceRevenues;
