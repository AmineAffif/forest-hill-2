import React from "react";
import { MyBarChart } from "./charts/BarChart";

const PaymentStatistics = () => {
  const paymentStatisticsData = [
    { month: "January", payments: 5000 },
    { month: "February", payments: 6000 },
    { month: "March", payments: 7000 },
    { month: "April", payments: 8000 },
    { month: "May", payments: 9000 },
    { month: "June", payments: 10000 },
  ];

  const dataKeys = [{ key: "payments", color: "hsl(var(--chart-1))" }];

  return (
    <MyBarChart
      title="Payment Statistics"
      description="January - June 2024"
      data={paymentStatisticsData}
      dataKeys={dataKeys}
      footerText="Payments increased by 15% this month"
    />
  );
};

export default PaymentStatistics;
