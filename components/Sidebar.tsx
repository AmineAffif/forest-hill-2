import React from "react";
import {
  Home,
  BarChart2,
  Activity,
  DollarSign,
  Users,
  Settings,
} from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 h-full bg-gray-800 text-white">
      <div className="p-4">
        <h1 className="text-xl font-bold">Forest Hill Admin</h1>
      </div>
      <nav className="mt-10">
        <Link href="/" className="flex items-center p-2 hover:bg-gray-700">
          <Home className="mr-3" /> Dashboard
        </Link>
        <Link
          href="/subscriptions"
          className="flex items-center p-2 hover:bg-gray-700"
        >
          <BarChart2 className="mr-3" /> Subscriptions
        </Link>
        <Link
          href="/equipment"
          className="flex items-center p-2 hover:bg-gray-700"
        >
          <Activity className="mr-3" /> Equipment
        </Link>
        <Link
          href="/classes"
          className="flex items-center p-2 hover:bg-gray-700"
        >
          <Activity className="mr-3" /> Classes
        </Link>
        <Link
          href="/finance"
          className="flex items-center p-2 hover:bg-gray-700"
        >
          <DollarSign className="mr-3" /> Finance
        </Link>
        <Link
          href="/member-engagement"
          className="flex items-center p-2 hover:bg-gray-700"
        >
          <Users className="mr-3" /> Member Engagement
        </Link>
        <Link
          href="/staff-performance"
          className="flex items-center p-2 hover:bg-gray-700"
        >
          <Users className="mr-3" /> Staff Performance
        </Link>
        <Link
          href="/inventory-management"
          className="flex items-center p-2 hover:bg-gray-700"
        >
          <Settings className="mr-3" /> Inventory Management
        </Link>
        <Link
          href="/maintenance"
          className="flex items-center p-2 hover:bg-gray-700"
        >
          <Settings className="mr-3" /> Maintenance
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
