import React from "react";
import { MyBarChart } from "./charts/BarChart";

const EquipmentUsage = () => {
  const equipmentUsageData = [
    { month: "January", treadmill: 40, bike: 30, rower: 20 },
    { month: "February", treadmill: 45, bike: 35, rower: 25 },
    { month: "March", treadmill: 50, bike: 40, rower: 30 },
    { month: "April", treadmill: 55, bike: 45, rower: 35 },
    { month: "May", treadmill: 60, bike: 50, rower: 40 },
    { month: "June", treadmill: 65, bike: 55, rower: 45 },
  ];

  const dataKeys = [
    { key: "treadmill", color: "hsl(var(--chart-1))" },
    { key: "bike", color: "hsl(var(--chart-2))" },
    { key: "rower", color: "hsl(var(--chart-3))" },
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <MyBarChart
        title="Equipment Usage by Type"
        description="January - June 2024"
        data={equipmentUsageData}
        dataKeys={dataKeys}
        footerText="Usage increased by 15% this month"
      />
    </div>
  );
};

export default EquipmentUsage;
