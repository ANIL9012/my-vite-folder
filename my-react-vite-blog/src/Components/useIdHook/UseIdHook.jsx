import React, { useId } from 'react'

function UseIdHook() {

  const name = useId();
  const password = useId();
  const terms = useId();
  const skill = useId();

  return (
    <>
      <form action="">
        <label htmlFor={name}>Enter User Name</label>
        <input type="text" id={name} placeholder='Enter your name'/>
        <br />
        <br/>
        <label htmlFor={password}>Enter User Password</label>
        <input type="text" id={password} placeholder='Enter your Password'/>
        <br />
        <br />
        <label htmlFor={terms}>Enter User Terms</label>
        <input type="text" id={terms} placeholder='Enter your Terms'/>
        <br />
        <br />
        <label htmlFor={skill}>Enter User skill</label>
        <input type="text" id={skill} placeholder='Enter your skill'/>
      </form>
    </>
  )
}
export default UseIdHook;


