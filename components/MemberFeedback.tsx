import React from "react";
import { MyRadarChart } from "./charts/RadarChart";

const MemberFeedback = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Member Feedback</h2>
      <MyRadarChart />
    </div>
  );
};

export default MemberFeedback;
