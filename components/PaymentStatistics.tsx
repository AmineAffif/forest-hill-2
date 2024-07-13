import React from "react";
import { MyBarChart } from "./charts/BarChart";

const PaymentStatistics = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Payment Statistics</h2>
      <MyBarChart />
    </div>
  );
};

export default PaymentStatistics;
