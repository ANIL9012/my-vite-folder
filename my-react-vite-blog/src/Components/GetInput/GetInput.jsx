import React, { useState } from 'react'

export default function GetInput() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const ClearAllText = ()=>{
      console.log(name);
      console.log(password);
      console.log(email);
      setName("");
      setPassword("");
      setEmail("");
    }

  return (
    <>
      <input type="text" name="name" id="nameid" value={name} placeholder='Entaer a some text' onChange={(e)=> setName(e.target.value)} />
      <h1>{name}</h1>
      <br />
      <br />
      <input type="password" name="password" id="passwordid" placeholder='Enter your password' value={password} onChange={(e)=> setPassword(e.target.value)} />
      <h1>{password}</h1>
      <br /><br />
       <input type="email" name="email" id="emailid" placeholder='Enter your email' value={email} onChange={(e)=> setEmail(e.target.value)} />
      <h1>{email}</h1>
      <br /><br />
      <button onClick={ClearAllText}>Clear All Text</button>
    </>
  )
}
