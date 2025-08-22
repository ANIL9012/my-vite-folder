import React, { useState } from 'react'

export default function GetInput() {

    const [val, setVal] = useState("")

  return (
    <>
      <input type="text" name="name" id="nameid" value={val} placeholder='Entaer a some text' onChange={(e)=> setVal(e.target.value)} />
      <h1>{val}</h1>
      <button onClick={()=> setVal("")}>Clear Text</button>
    </>
  )
}
