import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from ".";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      
    </div>
  );
};

export default MainLayout;