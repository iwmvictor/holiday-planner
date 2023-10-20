import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNav from "./dashboardNav";

function dashboardLyout() {
  return (
    <>
      <DashboardNav />
      <Outlet />
    </>
  );
}

export default dashboardLyout;
