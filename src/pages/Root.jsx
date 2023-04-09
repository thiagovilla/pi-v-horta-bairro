import React from "react";
import { Outlet } from "react-router-dom";

import TopBar from "../layout/TopBar";

function Root() {
  return (
    <div>
      <TopBar />
      <div style={{ maxWidth: 768, margin: "auto" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
