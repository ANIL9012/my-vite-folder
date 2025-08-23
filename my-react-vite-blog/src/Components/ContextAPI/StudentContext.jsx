import React from "react";
import SubjectCollage from "./SubjectCollage";

function StudentContext() {
  return (
    <>
      <div style={{backgroundColor: "green", padding:"15px"}}>
        <h1>Student Component</h1>
        <SubjectCollage/>
      </div>
    </>
  );
}

export default StudentContext;
