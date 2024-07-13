import React from "react";

const Overview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold">Total Members</h2>
        <p className="text-3xl">1,234</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold">New Members This Month</h2>
        <p className="text-3xl">56</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold">Retention Rate</h2>
        <p className="text-3xl">89%</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold">Active Members</h2>
        <p className="text-3xl">789</p>
      </div>
    </div>
  );
};

export default Overview;
