import React from "react";
import TopBar from "./TopBar";
import { Outlet } from "react-router";
import "../styles/portal.css";
const Portal = () => {
  return (
    <div className="portal">
      <TopBar />
      <Outlet />
    </div>
  );
};

export default Portal;
