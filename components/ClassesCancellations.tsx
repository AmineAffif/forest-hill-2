import React from "react";
import { MyBarChart } from "./charts/BarChart";

const ClassesCancellations = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">
        Class Cancellations and No-shows
      </h2>
      <MyBarChart />
    </div>
  );
};

export default ClassesCancellations;
