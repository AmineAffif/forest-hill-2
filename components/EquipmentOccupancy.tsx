import React from "react";
import { MyLineChart } from "./charts/LineChart";

const EquipmentOccupancy = () => {
  const equipmentOccupancyData = [
    { month: "January", value: 65 },
    { month: "February", value: 70 },
    { month: "March", value: 75 },
    { month: "April", value: 80 },
    { month: "May", value: 85 },
    { month: "June", value: 90 },
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <MyLineChart
        title="Equipment Occupancy Rate"
        description="January - June 2024"
        data={equipmentOccupancyData}
        dataKey="value"
        lineColor="hsl(var(--chart-3))"
        footerText="Equipment occupancy rate increased by 8% this month"
      />
    </div>
  );
};

export default EquipmentOccupancy;
