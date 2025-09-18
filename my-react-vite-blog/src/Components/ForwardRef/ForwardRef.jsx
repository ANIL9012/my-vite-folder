import React, { useRef } from "react";
import UserInput from "./UserInput";

// Agar Input ki value React state se control nahi hoti hai aur hum direct DOM se value ko Access karte hai

// Example:- useRef Ya document.getElementById  se toh bo Uncontrolled component kahlate hai

function ForwardRef() {
  const inputRef = useRef(null);

  const updateInput = () => {
    inputRef.current.value = 100;
    inputRef.current.focus();
    inputRef.current.style.color = "green";
  };

  return (
    <>
      <h1>ForwordRef</h1>
      <UserInput ref={inputRef} />
      <button onClick={updateInput}>Update input</button>
    </>
  );
}

export default ForwardRef;
