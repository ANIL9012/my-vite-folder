import React, { useState } from "react";

function MultipleConditions() {
  const [status, setStatus] = useState("idle");

  let mainMessage;

  if (status === "idle") {
    mainMessage = "Welcome to any idle processes";
  } else if (status === "loading") {
    mainMessage = "Loading data please wait";
  } else if (status === "success") {
    mainMessage = "Data loaded is Successfully";
  } else if (status === "error") {
    mainMessage = "Oops! Somthing went wrong❌";
  } else {
    mainMessage = "Unknown data";
  }

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
        textAlign: "center",
        margin: "10px",
      }}
    >
      <h2 style={{ marginBottom: "5px" }}>Status Dashboard</h2>
      <p style={{ marginBottom: "5px" }}>{mainMessage}</p>

      {/* Use ternary operator conditions */}

      <p>
        {status === "success"
          ? "you can now your view data."
          : "please wait untile the proccess is done "}
      </p>

      {/* Conditional rendering with && */}

      {status === "error" && (
        <p style={{ color: "red" }}>Try again or contact support</p>
      )}

      {/* Button to change status */}

      <div  style={{marginBottom:"5px"}}>
        <button  style={{marginRight:"5px"}} onClick={() => setStatus("idle")}>Idle</button>
        <button  style={{marginRight:"5px"}} onClick={() => setStatus("loading")}>Loading</button>
        <button  style={{marginRight:"5px"}} onClick={() => setStatus("success")}>Success</button>
        <button onClick={() => setStatus("error")}>Error</button>
      </div>
    </div>
  );
}

export default MultipleConditions;
