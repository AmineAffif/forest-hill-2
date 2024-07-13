import React from "react";
import { MyAreaChart } from "./charts/AreaChart";

const FinanceForecast = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Revenue Forecast</h2>
      <MyAreaChart />
    </div>
  );
};

export default FinanceForecast;
