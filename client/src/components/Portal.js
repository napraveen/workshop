import React from "react";
import TopBar from "./TopBar";
import { Outlet } from "react-router";
import "../styles/portal.css";
const Portal = ({ mode, setMode }) => {
  return (
    <div className="portal">
      <TopBar mode={mode} setMode={setMode} />
      <Outlet />
    </div>
  );
};

export default Portal;
