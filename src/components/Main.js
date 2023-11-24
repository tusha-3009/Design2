import React from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import CenterPanel from "./CenterPanel";
import "./Main.css"
function Main() {
  return (
    <div className="main">
      <LeftPanel />
      <CenterPanel />
      <RightPanel />
    </div>
  );
}

export default Main;
