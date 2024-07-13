import React from "react";
import { MyPieChart } from "./charts/PieChart";

const SubscriptionsSummary = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Subscription Statistics</h2>
      <MyPieChart />
    </div>
  );
};

export default SubscriptionsSummary;
