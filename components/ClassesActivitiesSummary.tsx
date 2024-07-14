import React from "react";
import { MyLineChart } from "./charts/LineChart";

const ClassesActivitiesSummary = () => {
  const classesActivitiesData = [
    { month: "January", value: 50 },
    { month: "February", value: 70 },
    { month: "March", value: 65 },
    { month: "April", value: 80 },
    { month: "May", value: 90 },
    { month: "June", value: 75 },
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <MyLineChart
        title="Classes Activities"
        description="January - June 2024"
        data={classesActivitiesData}
        dataKey="value"
        lineColor="hsl(var(--chart-1))"
        footerText="Trending up by 10% this month"
      />
    </div>
  );
};

export default ClassesActivitiesSummary;
