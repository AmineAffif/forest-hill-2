import React from "react";
import { MyLineChart } from "./charts/LineChart";

const MemberEngagementSummary = () => {
  const memberEngagementData = [
    { month: "January", value: 150 },
    { month: "February", value: 180 },
    { month: "March", value: 170 },
    { month: "April", value: 200 },
    { month: "May", value: 220 },
    { month: "June", value: 240 },
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <MyLineChart
        title="Member Engagement"
        description="January - June 2024"
        data={memberEngagementData}
        dataKey="value"
        lineColor="hsl(var(--chart-4))"
        footerText="Member engagement increased by 12% this month"
      />
    </div>
  );
};

export default MemberEngagementSummary;
