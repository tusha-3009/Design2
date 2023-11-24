import React from 'react'

function LeftPanel1({ type }) {

  return (
    <>
      <div
        style={{
          background:
            type === 1
              ? "linear-gradient(#F79393,#D9D9D9)"
              : "linear-gradient(#8EBBDC,#85CED7)",
          width: "227px",
          height: "353px",
          borderRadius: "8px",
          
        }}
      >
        
      </div>
     
    </>
  );
}

export default LeftPanel1