import React from "react";
import { MyLineChart } from "./charts/LineChart";

const StaffHours = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Staff Hours and Presence</h2>
      <MyLineChart />
    </div>
  );
};

export default StaffHours;
