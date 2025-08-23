import React, { useContext } from "react";
import { SubjectContext } from "./ContextAPI";

function SubjectCollage() {
  const SubjectData = useContext(SubjectContext)
  return (
    <>
      <div style={{backgroundColor: "cyan", padding:"15px"}}>
        <h1>Subject is a: {SubjectData} </h1>
      </div>
    </>
  );
}

export default SubjectCollage;
