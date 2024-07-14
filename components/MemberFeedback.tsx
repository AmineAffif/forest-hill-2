import React from "react";
import { MyRadarChart } from "./charts/RadarChart";

const MemberFeedback = () => {
  const memberFeedbackData = [
    { month: "January", value: 80 },
    { month: "February", value: 90 },
    { month: "March", value: 85 },
    { month: "April", value: 70 },
    { month: "May", value: 75 },
    { month: "June", value: 80 },
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <MyRadarChart
        title="Member Feedback"
        description="Showing feedback levels for the last 6 months"
        data={memberFeedbackData}
        dataKey="value"
        radarColor="hsl(var(--chart-1))"
        footerText="Trending up by 5.2% this month"
      />
    </div>
  );
};

export default MemberFeedback;
