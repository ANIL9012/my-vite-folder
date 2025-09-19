import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(username, password)
    }

  return (
    <>
      <div>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name="username"
          id="userId"
          placeholder="Enter username"
        />
        {" "}
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="userpassword"
          id="userPassword"
          placeholder="Enter userpassword"
        />
        <button type="submit" onChange={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default Login;
