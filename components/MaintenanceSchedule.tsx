import React from "react";
import { MyLineChart } from "./charts/LineChart";

const MaintenanceSchedule = () => {
  const maintenanceScheduleData = [
    { month: "January", value: 3 },
    { month: "February", value: 4 },
    { month: "March", value: 5 },
    { month: "April", value: 4 },
    { month: "May", value: 6 },
    { month: "June", value: 5 },
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <MyLineChart
        title="Maintenance Schedule"
        description="January - June 2024"
        data={maintenanceScheduleData}
        dataKey="value"
        lineColor="hsl(var(--chart-5))"
        footerText="Maintenance events increased by 20% this month"
      />
    </div>
  );
};

export default MaintenanceSchedule;
