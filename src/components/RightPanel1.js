import React from 'react'

function RightPanel1({type}) {
  return (
    <div
      style={{
        height: type === 1 ? "326px" : "249px",
        background: "linear-gradient(to right,#8EBBDC,#F79393)",
        width: "300px",

        borderRadius: "8px",
      }}
    ></div>
  );
}

export default RightPanel1