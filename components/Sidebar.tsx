import React from "react";
import {
  Home,
  BarChart2,
  Activity,
  DollarSign,
  Users,
  Settings,
  Box,
  Wrench,
  ClipboardList,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Sidebar = ({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) => {
  return (
    <aside
      className={`fixed inset-y-0 left-0 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0 w-64 bg-gray-800 text-white transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="p-4 flex justify-between items-center w-full">
        <Image
          src="/forest-hill-logo.png"
          alt="Forest Hill Logo"
          width={200}
          height={200}
          priority
        />
        <button className="md:hidden" onClick={toggleSidebar}>
          <X className="text-white" />
        </button>
      </div>
      <nav className="mt-10">
        <Link href="/" className="flex items-center p-2 pl-5 hover:bg-gray-700">
          <Home className="mr-3" /> Dashboard
        </Link>
        <Link
          href="/subscriptions"
          className="flex items-center p-2 pl-5 hover:bg-gray-700"
        >
          <BarChart2 className="mr-3" /> Subscriptions
        </Link>
        <Link
          href="/equipment"
          className="flex items-center p-2 pl-5 hover:bg-gray-700"
        >
          <Box className="mr-3" /> Equipment
        </Link>
        <Link
          href="/classes"
          className="flex items-center p-2 pl-5 hover:bg-gray-700"
        >
          <ClipboardList className="mr-3" /> Classes
        </Link>
        <Link
          href="/finance"
          className="flex items-center p-2 pl-5 hover:bg-gray-700"
        >
          <DollarSign className="mr-3" /> Finance
        </Link>
        <Link
          href="/member-engagement"
          className="flex items-center p-2 pl-5 hover:bg-gray-700"
        >
          <Users className="mr-3" /> Member Engagement
        </Link>
        <Link
          href="/staff-performance"
          className="flex items-center p-2 pl-5 hover:bg-gray-700"
        >
          <Settings className="mr-3" /> Staff Performance
        </Link>
        <Link
          href="/inventory-management"
          className="flex items-center p-2 pl-5 hover:bg-gray-700"
        >
          <ClipboardList className="mr-3" /> Inventory Management
        </Link>
        <Link
          href="/maintenance"
          className="flex items-center p-2 pl-5 hover:bg-gray-700"
        >
          <Wrench className="mr-3" /> Maintenance
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
