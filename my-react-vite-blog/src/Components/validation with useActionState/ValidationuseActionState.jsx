import React, { useActionState } from "react";

function ValidationuseActionState() {
  const handleLogin = (prevData, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");
    let regex = /^[A-Z0-9]+$/i;

    if (!name || name.length > 5) {
      return { error: "Name should not content more then 5 charector", name,password };
    } else if (!regex.test(password)) {
      return {
        error:
          "Password can not axist charector but you should use only numbers and alphabets", name,password
      };
    } else {
      return { message: "Login done", name,password };
    }

    // console.log(name,password);
  };

  const [data, action, pending] = useActionState(handleLogin);
  console.log(data);
  return (
    <>
      <div>
        <h1 style={{margin:"10px 0px"}}>Validation useAcionState in React</h1>

        {
            data?.message && <span style={{color:'green'}}>{data?.message}</span>
        }

        {
            data?.error && <span style={{color:'red'}}>{data?.error}</span>
        }

        <form action={action}>
          <input type="text" defaultValue={data?.name} name="name" placeholder="Enter Your name" />
          <br />
          <br />
          <input
            type="password" defaultValue={data?.password}
            name="password"
            placeholder="Enter Your password"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
      </div>
    </>
  );
}

export default ValidationuseActionState;
