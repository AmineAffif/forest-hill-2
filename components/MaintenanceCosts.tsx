import React from "react";
import { MyBarChart } from "./charts/BarChart";

const MaintenanceCosts = () => {
  const maintenanceCostsData = [
    { month: "January", cost: 1000 },
    { month: "February", cost: 1200 },
    { month: "March", cost: 1100 },
    { month: "April", cost: 1300 },
    { month: "May", cost: 1400 },
    { month: "June", cost: 1500 },
  ];

  const dataKeys = [{ key: "cost", color: "hsl(var(--chart-1))" }];

  return (
    <div className="bg-white p-4 rounded shadow">
      <MyBarChart
        title="Maintenance Costs"
        description="January - June 2024"
        data={maintenanceCostsData}
        dataKeys={dataKeys}
        footerText="Maintenance costs increased by 10% this month"
      />
    </div>
  );
};

export default MaintenanceCosts;
