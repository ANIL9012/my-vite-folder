import React, { useRef } from "react";

function UncontrolledComponent() {
  const handleForm = (event) => {
    event.preventDefault();
    const user = document.querySelector("#user").value;
    const password = document.querySelector("#password").value;
    console.log(user, password);
  };

  const userRef = useRef();
  const passwordRef = useRef();

  const handleFormRef = (event) => {
    event.preventDefault();
    const user = userRef.current.value
    const password = passwordRef.current.value
    console.log(user,password)
  };
  return (
    <>
      <h1>Uncontrolled Component</h1>

      <form action="" method="post" onSubmit={handleForm}>
        <input type="text" id="user" placeholder="Enter user name" />
        <br />
        <br />
        <input
          type="password"
          id="password"
          placeholder="Enter user password"
        />
        <br />
        <br />

        <button>Submit</button>
      </form>

      <hr />

      <h1>User Ref Form Data</h1>
      <form action="" method="post" onSubmit={handleFormRef}>
        <input type="text" id="userRef" ref={userRef} placeholder="Enter user name" />
        <br />
        <br />
        <input
          type="password"
          id="passwordRef" ref={passwordRef}
          placeholder="Enter user password"
        />
        <br />
        <br />

        <button>Submit with Ref</button>
      </form>
    </>
  );
}

export default UncontrolledComponent;
