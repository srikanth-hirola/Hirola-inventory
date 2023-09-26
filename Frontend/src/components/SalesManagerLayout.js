import React from "react";
import { Outlet } from "react-router-dom";
import SalesSideMenu from "./SalesSideMenu";
import SalesHeader from "./SalesHeader";

function SalesManagerLayout() {
  return (
    <>
      <div className="md:h-16">
        <SalesHeader />
      </div>
      <div className="grid grid-cols-12 bg-gray-100 items-baseline">
        <div className="col-span-2 h-screen sticky top-0 hidden lg:flex">
          <SalesSideMenu />
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default SalesManagerLayout;
