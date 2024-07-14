import React from "react";
import { MyLineChart } from "./charts/LineChart";

const EquipmentUsageSummary = () => {
  const equipmentUsageData = [
    { month: "January", value: 186 },
    { month: "February", value: 305 },
    { month: "March", value: 237 },
    { month: "April", value: 73 },
    { month: "May", value: 209 },
    { month: "June", value: 214 },
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <MyLineChart
        title="Equipment Usage Over Time"
        description="January - June 2024"
        data={equipmentUsageData}
        dataKey="value"
        lineColor="hsl(var(--chart-1))"
        footerText="Trending up by 5.2% this month"
      />
    </div>
  );
};

export default EquipmentUsageSummary;
