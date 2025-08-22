import React, { useState } from 'react'

export default function FormControl() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    // const NameHandle = ()=>{
    //     setName('');
    // }

    
    // const PasswordHandle = ()=>{
    //     setPassword('');
    // }

    
    // const EmailHandle = ()=>{
    //     setEmail('');
    // }

  return (
    <>
      <h1>Controller Components</h1>

      <form action="" method='get'>
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder='Enter Value' />
        <br /><br />
        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Enter Password' />
        <br /><br />
        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Enter Email' />
        <br /><br />
        <button>Submit</button>
        <button onClick={()=>{setName('');setPassword('');setEmail('')}}>Clear</button>
        <h3>{name}</h3>
        <h3>{password}</h3>
        <h3>{email}</h3>
      </form>
    </>
  )
}
