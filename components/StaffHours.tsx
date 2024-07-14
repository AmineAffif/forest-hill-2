import React from "react";
import { MyLineChart } from "./charts/LineChart";

const StaffHours = () => {
  const staffHoursData = [
    { month: "January", value: 200 },
    { month: "February", value: 210 },
    { month: "March", value: 220 },
    { month: "April", value: 230 },
    { month: "May", value: 240 },
    { month: "June", value: 250 },
  ];

  return (
    <MyLineChart
      title="Staff Hours and Presence"
      description="January - June 2024"
      data={staffHoursData}
      dataKey="value"
      lineColor="hsl(var(--chart-2))"
      footerText="Staff hours increased by 5% this month"
    />
  );
};

export default StaffHours;
