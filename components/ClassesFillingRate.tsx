import React from "react";
import { MyLineChart } from "./charts/LineChart";

const ClassesFillingRate = () => {
  const classesFillingRateData = [
    { month: "January", value: 75 },
    { month: "February", value: 85 },
    { month: "March", value: 78 },
    { month: "April", value: 90 },
    { month: "May", value: 88 },
    { month: "June", value: 95 },
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <MyLineChart
        title="Class Filling Rate"
        description="January - June 2024"
        data={classesFillingRateData}
        dataKey="value"
        lineColor="hsl(var(--chart-2))"
        footerText="Class filling rate increased by 5% this month"
      />
    </div>
  );
};

export default ClassesFillingRate;
