import React, { useEffect, useState } from "react";
import "./Clock.css";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [color, setColor] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // cleanup function
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="selectTag">
        <select defaultValue={"red"} onChange={(event) => setColor(event.target.value)}>
          <option value={"red"}>Red</option>
          <option value={"green"}>Green</option>
          <option value={"yellow"}>Yellow</option>
          <option value={"orange"}>Orange</option>
          <option value={"blueviolet"}>Blueviolet</option>
          <option value={"cyan"}>Cyan</option>
        </select>
      </div>
      <div className="clockTime" style={{ color: color }}>
        <h1>{time}</h1>
      </div>
    </>
  );
}

export default Clock;
