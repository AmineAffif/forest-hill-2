import React from "react";
import { Menu } from "lucide-react";

const Header = ({ toggleSidebar }: { toggleSidebar: any }) => {
  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between">
      <button className="md:hidden" onClick={toggleSidebar}>
        <Menu className="h-6 w-6" />
      </button>
      <h1 className="text-2xl font-bold">Dashboard</h1>
    </header>
  );
};

export default Header;
