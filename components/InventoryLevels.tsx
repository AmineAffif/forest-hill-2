import React from "react";
import PieChart from "./charts/PieChart";

const InventoryLevels = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Inventory Levels</h2>
      <PieChart />
    </div>
  );
};

export default InventoryLevels;
