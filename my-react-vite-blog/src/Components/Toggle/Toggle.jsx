import React, { useState } from "react";

export default function Toggle() {
  const [display, setdisplay] = useState(false);

  return (
    <>
      <h1>Toggle and react js</h1>
      <button onClick={() => setdisplay(!display)}>Toggle</button>
      {display ? <h1>I ama Toggle Button</h1> : null}
    </>
  );
}
