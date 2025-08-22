import React, { useRef } from 'react'

// import [ useRef ] from "react"

function UseRefHook() {

    const inputRef = useRef(null);
    const h1Ref = useRef(null);

    const inputHandler = () =>{
        console.log(inputRef)
        inputRef.current.focus();
        inputRef.current.style.color="red"
        inputRef.current.placeholder="Enter pass"
        inputRef.current.value="123"
    }

    const toggleHandler = () =>{
      if(inputRef.current.style.display!="none"){
        inputRef.current.style.display="none"
      }else{
        inputRef.current.style.display="inline"
      }
    }

    const handle = () =>{
      if(h1Ref.current.style.color!="green"){
        h1Ref.current.style.color="green"
      }else{
        h1Ref.current.style.color="black"
      }
    }
  return (
    <>
      <h1>Use useRef</h1>
      <button onClick={toggleHandler}>Toggle</button>
      <input type="text" ref={inputRef} placeholder='Enter user name' />
      <button onClick={inputHandler}>Focus on Input field</button>


      <h1 ref={h1Ref}>Anil Kumar</h1>

      <button onClick={handle}>Handle</button>
    </>
  )
}

export default UseRefHook
