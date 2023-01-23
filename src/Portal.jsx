import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";

function Portal() {
  return (
    <div id="wrapper">
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content ">
          <Navbar></Navbar>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Portal;
