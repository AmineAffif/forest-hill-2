import React from "react";
import { MyRadarChart } from "./charts/RadarChart";

const PerformanceEvaluations = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Performance Evaluations</h2>
      <MyRadarChart />
    </div>
  );
};

export default PerformanceEvaluations;
