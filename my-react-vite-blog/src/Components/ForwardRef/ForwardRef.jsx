import React, { useRef } from 'react'
import UserInput from './UserInput';


function ForwardRef() {

    const inputRef = useRef(null)

    const updateInput = () =>{
        inputRef.current.value=100;
        inputRef.current.focus();
        inputRef.current.style.color= "green";
    }

  return (
    <>
      <h1>ForwordRef</h1>
      <UserInput ref = {inputRef}/>
      <button onClick={updateInput}>Update input</button>
    </>
  )
}

export default ForwardRef;


