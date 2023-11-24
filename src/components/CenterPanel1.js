import React from 'react'

function CenterPanel1({type}) {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(to right,#8EBBDC,#F79393)",
          width: "556px",
          // height:"290px",
          height: type === 1 ? "121px" : "262px",
          borderRadius: "8px",
        }}
      ></div>
    
    </>
  );
}

export default CenterPanel1