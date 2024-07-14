import React from "react";
import { MyBarChart } from "./charts/BarChart";

const EquipmentUsageDuration = () => {
  const equipmentUsageDurationData = [
    { month: "January", treadmill: 30, bike: 20, rower: 15 },
    { month: "February", treadmill: 35, bike: 25, rower: 18 },
    { month: "March", treadmill: 40, bike: 30, rower: 20 },
    { month: "April", treadmill: 45, bike: 35, rower: 25 },
    { month: "May", treadmill: 50, bike: 40, rower: 30 },
    { month: "June", treadmill: 55, bike: 45, rower: 35 },
  ];

  const dataKeys = [
    { key: "treadmill", color: "hsl(var(--chart-1))" },
    { key: "bike", color: "hsl(var(--chart-2))" },
    { key: "rower", color: "hsl(var(--chart-3))" },
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <MyBarChart
        title="Average Usage Duration per Equipment"
        description="January - June 2024"
        data={equipmentUsageDurationData}
        dataKeys={dataKeys}
        footerText="Usage duration increased by 20% this month"
      />
    </div>
  );
};

export default EquipmentUsageDuration;
