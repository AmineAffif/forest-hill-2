import React from "react";
import { MyBarChart } from "./charts/BarChart";

const EquipmentStatus = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Equipment Status</h2>
      <MyBarChart />
    </div>
  );
};

export default EquipmentStatus;
