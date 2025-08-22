import React, { useId } from "react";

function UseIdHook() {
  // const name = useId();
  // const password = useId();
  // const terms = useId();
  // const skill = useId();

  /* Multiple jagah use useId  declayer a variable and assign multiple input and label*/

  const userId = useId();
  return (
    <>
      <form action="">
        {/* <label htmlFor={name}>Enter User Name</label>
        <input type="text" id={name} placeholder='Enter your name'/>
        <br />
        <br/>
        <label htmlFor={password}>Enter User Password</label>
        <input type="text" id={password} placeholder='Enter your Password'/>
        <br />
        <br />
        <input type="checkbox" id={terms} placeholder='Enter your Terms'/>
        <label htmlFor={terms}>Enter User Terms</label>
        <br />
        <br />
        <label htmlFor={skill}>Enter User skill</label>
        <input type="text" id={skill} placeholder='Enter your skill'/> */}

        {/* Multiple jagah use useId  declayer a variable and assign multiple input and label */}

        <label htmlFor={userId+"name"}>Enter User Name</label>
        <input type="text" id={userId+"name"} placeholder="Enter your name" />
        <br />
        <br />
        <label htmlFor={userId+"password"}>Enter User Password</label>
        <input type="text" id={userId+"password"} placeholder="Enter your Password" />
        <br />
        <br />
        <input type="checkbox" id={userId+"terms"} placeholder="Enter your Terms" />
        <label htmlFor={userId+"terms"}>Enter User Terms</label>
        <br />
        <br />
        <label htmlFor={userId+"skill"}>Enter User skill</label>
        <input type="text" id={userId+"skill"} placeholder="Enter your skill" />
      </form>
    </>
  );
}
export default UseIdHook;
