import React from "react";
import StudentContext from "./StudentContext";

function ContextClass() {
  return (
    <>
      <div  style={{backgroundColor: "skyblue", padding:"15px"}}>
        <h1>Context Class Components</h1>
        <StudentContext/>
      </div>
    </>
  );
}

export default ContextClass;
