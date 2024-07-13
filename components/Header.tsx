import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-100 p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border rounded"
        />
      </div>
    </header>
  );
};

export default Header;
