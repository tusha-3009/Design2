import React from "react";
import "./RightPanel.css";
import RightPanel1 from "./RightPanel1";
function RightPanel() {
  return (
    <div className="rightPanel">
      <RightPanel1 type={1} />
      <RightPanel1 type={2} />
    </div>
  );
}

export default RightPanel;
