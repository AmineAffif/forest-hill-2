import React from "react";
import { MyLineChart } from "./charts/LineChart";

const OrderHistory = () => {
  const orderHistoryData = [
    { month: "January", value: 50 },
    { month: "February", value: 60 },
    { month: "March", value: 70 },
    { month: "April", value: 65 },
    { month: "May", value: 75 },
    { month: "June", value: 85 },
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <MyLineChart
        title="Order History"
        description="January - June 2024"
        data={orderHistoryData}
        dataKey="value"
        lineColor="hsl(var(--chart-5))"
        footerText="Orders increased by 8% this month"
      />
    </div>
  );
};

export default OrderHistory;
