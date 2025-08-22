import React from "react";

import {useFormStatus} from 'react-dom'

function UseFormStatus() {
  const handleSubmitForm = async () => {
    await new Promise((res) => setTimeout(res, 5000));
    console.log("Submit");
  };

  function CustomForm() {

    const {pending} = useFormStatus();
    console.log(pending)

    return (
      <>
        <div>
          <input type="text" placeholder="Enter any text" />
          <br />
          <br />
          <input type="text" placeholder="Enter any password" />
          <button disabled = {pending}>{pending? "Submiting...":"Submit"}</button>
        </div>
      </>
    );
  }

//   export default CustomForm

  return (
    <>
      <h1>useFormStatus Hook in React js</h1>

      <form action={handleSubmitForm}>
        <CustomForm/>
      </form>
    </>
  );
}

export default UseFormStatus;
