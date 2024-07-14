import React from "react";
import { MyPieChart } from "./charts/PieChart";
import { ChartConfig } from "./ui/chart";

const SubscriptionsSummary = () => {
  const subscriptionsData = [
    { type: "Monthly", value: 400, fill: "hsl(var(--chart-1))" },
    { type: "Annual", value: 600, fill: "hsl(var(--chart-2))" },
    { type: "Weekly", value: 200, fill: "hsl(var(--chart-3))" },
  ];

  const chartConfig = {
    members: {
      label: "Members",
    },
    monthly: {
      label: "Monthly",
      color: "hsl(var(--chart-1))",
    },
    annual: {
      label: "Annual",
      color: "hsl(var(--chart-2))",
    },
    weekly: {
      label: "Weekly",
      color: "hsl(var(--chart-3))",
    },
  } satisfies ChartConfig;

  return (
    <MyPieChart
      title="Subscription Types"
      description="Membership distribution by type"
      data={subscriptionsData}
      dataKey="value"
      nameKey="type"
      config={chartConfig}
      footerText="Trending up by 5.2% this month"
    />
  );
};

export default SubscriptionsSummary;
