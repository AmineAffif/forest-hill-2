import React from "react";
import { MyBarChart } from "./charts/BarChart";

const EquipmentStatus = () => {
  const equipmentStatusData = [
    { month: "January", operational: 85, maintenance: 15 },
    { month: "February", operational: 90, maintenance: 10 },
    { month: "March", operational: 88, maintenance: 12 },
    { month: "April", operational: 92, maintenance: 8 },
    { month: "May", operational: 94, maintenance: 6 },
    { month: "June", operational: 95, maintenance: 5 },
  ];

  const dataKeys = [
    { key: "operational", color: "hsl(var(--chart-1))" },
    { key: "maintenance", color: "hsl(var(--chart-2))" },
  ];

  return (
    <MyBarChart
      title="Equipment Status"
      description="January - June 2024"
      data={equipmentStatusData}
      dataKeys={dataKeys}
      footerText="Operational equipment increased by 5% this month"
    />
  );
};

export default EquipmentStatus;
