import React from "react";
import { MyLineChart } from "./charts/LineChart";

const VisitFrequency = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Visit Frequency per Member</h2>
      <MyLineChart />
    </div>
  );
};

export default VisitFrequency;
