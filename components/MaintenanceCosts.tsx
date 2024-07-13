import React from "react";
import { MyBarChart } from "./charts/BarChart";

const MaintenanceCosts = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Maintenance Costs</h2>
      <MyBarChart />
    </div>
  );
};

export default MaintenanceCosts;
