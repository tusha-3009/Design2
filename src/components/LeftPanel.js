import React from "react";
import "./LeftPanel.css";
import LeftPanel1 from "./LeftPanel1";
function LeftPanel() {
  return (
    <div className="leftPanel">
      <LeftPanel1 type={1} />
      <LeftPanel1 type={2} />
    </div>
  );
}

export default LeftPanel;
