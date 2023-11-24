import React from 'react'
import "./CenterPanel.css"
import CenterPanel1 from './CenterPanel1';
function CenterPanel() {
  return (
    <div className="centerPanel">
      <CenterPanel1 type={1} />
      <div style={{ padding: "19px" }}></div>
      <CenterPanel1 type={2} />
      <CenterPanel1 type={2} />
    </div>
  );
}

export default CenterPanel