import React from "react";
import { MyAreaChart } from "./charts/AreaChart";

const SubscriptionRenewal = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Subscription Renewal Rate</h2>
      <MyAreaChart />
    </div>
  );
};

export default SubscriptionRenewal;
