import React from "react";
import { MyLineChart } from "./charts/LineChart";

const VisitFrequency = () => {
  const visitFrequencyData = [
    { month: "January", value: 20 },
    { month: "February", value: 22 },
    { month: "March", value: 21 },
    { month: "April", value: 25 },
    { month: "May", value: 27 },
    { month: "June", value: 30 },
  ];

  return (
    <MyLineChart
      title="Visit Frequency per Member"
      description="January - June 2024"
      data={visitFrequencyData}
      dataKey="value"
      lineColor="hsl(var(--chart-1))"
      footerText="Visit frequency increased by 15% this month"
    />
  );
};

export default VisitFrequency;
