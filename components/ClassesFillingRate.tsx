import React from "react";
import { MyLineChart } from "./charts/LineChart";

const ClassesFillingRate = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Class Filling Rate</h2>
      <MyLineChart />
    </div>
  );
};

export default ClassesFillingRate;
