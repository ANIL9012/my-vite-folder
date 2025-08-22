import React from 'react'

function PassFunction() {

    const displayName = (name) =>{
        alert(name)
    }

  return (
    <>
      <h1>Pass Function in Component as Props</h1>
      <button onClick={()=> displayName("Anil")}>Display user</button>
    </>
  )
}

export default PassFunction;
