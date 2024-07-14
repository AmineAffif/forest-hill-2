import React from "react";
import { MyBarChart } from "./charts/BarChart";

const ExpiredSubscriptions = () => {
  const expiredSubscriptionsData = [
    { month: "January", renewals: 186, expirations: 80 },
    { month: "February", renewals: 305, expirations: 200 },
    { month: "March", renewals: 237, expirations: 120 },
    { month: "April", renewals: 73, expirations: 190 },
    { month: "May", renewals: 209, expirations: 130 },
    { month: "June", renewals: 214, expirations: 140 },
  ];

  const dataKeys = [
    { key: "renewals", color: "hsl(var(--chart-1))" },
    { key: "expirations", color: "hsl(var(--chart-2))" },
  ];

  return (
    <MyBarChart
      title="Expired and Renewing Subscriptions"
      description="January - June 2024"
      data={expiredSubscriptionsData}
      dataKeys={dataKeys}
      footerText="Expirations and renewals for the last 6 months"
    />
  );
};

export default ExpiredSubscriptions;
