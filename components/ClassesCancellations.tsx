import React from "react";
import { MyBarChart } from "./charts/BarChart";

const ClassesCancellations = () => {
  const classesCancellationsData = [
    { month: "January", cancellations: 15, noShows: 10 },
    { month: "February", cancellations: 20, noShows: 12 },
    { month: "March", cancellations: 18, noShows: 8 },
    { month: "April", cancellations: 22, noShows: 14 },
    { month: "May", cancellations: 25, noShows: 16 },
    { month: "June", cancellations: 28, noShows: 18 },
  ];

  const dataKeys = [
    { key: "cancellations", color: "hsl(var(--chart-1))" },
    { key: "noShows", color: "hsl(var(--chart-2))" },
  ];

  return (
    <MyBarChart
      title="Class Cancellations and No-shows"
      description="January - June 2024"
      data={classesCancellationsData}
      dataKeys={dataKeys}
      footerText="Cancellations and no-shows increased by 15% this month"
    />
  );
};

export default ClassesCancellations;
