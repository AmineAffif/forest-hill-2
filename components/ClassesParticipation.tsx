import React from "react";
import { MyBarChart } from "./charts/BarChart";

const ClassesParticipation = () => {
  const classesParticipationData = [
    { month: "January", yoga: 50, pilates: 30, spinning: 40 },
    { month: "February", yoga: 55, pilates: 35, spinning: 45 },
    { month: "March", yoga: 60, pilates: 40, spinning: 50 },
    { month: "April", yoga: 65, pilates: 45, spinning: 55 },
    { month: "May", yoga: 70, pilates: 50, spinning: 60 },
    { month: "June", yoga: 75, pilates: 55, spinning: 65 },
  ];

  const dataKeys = [
    { key: "yoga", color: "hsl(var(--chart-1))" },
    { key: "pilates", color: "hsl(var(--chart-2))" },
    { key: "spinning", color: "hsl(var(--chart-3))" },
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <MyBarChart
        title="Participation by Class Type"
        description="January - June 2024"
        data={classesParticipationData}
        dataKeys={dataKeys}
        footerText="Participation increased by 20% this month"
      />
    </div>
  );
};

export default ClassesParticipation;
