import React, { useState } from 'react'
import Bio from './Bio';

function ToggleComponentorShowHide() {
    const [show, setShow] = useState(false);
  return (
    <div>
      <h1>Anil Kumar</h1>
      <button onClick={()=> setShow(!show)}>
        {
            show ? "Hide" : "show"
        }
        Details
      </button>
      {show && <Bio />}
    </div>
  )
}

export default ToggleComponentorShowHide
