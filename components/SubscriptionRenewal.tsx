import React from "react";
import { MyAreaChart } from "./charts/AreaChart";

const SubscriptionRenewal = () => {
  const subscriptionRenewalData = [
    { date: "2024-01-01", renewals: 186, expirations: 80 },
    { date: "2024-02-01", renewals: 305, expirations: 200 },
    { date: "2024-03-01", renewals: 237, expirations: 120 },
    { date: "2024-04-01", renewals: 73, expirations: 190 },
    { date: "2024-05-01", renewals: 209, expirations: 130 },
    { date: "2024-06-01", renewals: 214, expirations: 140 },
  ];

  const dataKeys = [
    { key: "renewals", color: "hsl(var(--chart-1))" },
    { key: "expirations", color: "hsl(var(--chart-2))" },
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <MyAreaChart
        title="Subscription Renewal Rate"
        description="January - June 2024"
        data={subscriptionRenewalData}
        dataKeys={dataKeys}
      />
    </div>
  );
};

export default SubscriptionRenewal;
