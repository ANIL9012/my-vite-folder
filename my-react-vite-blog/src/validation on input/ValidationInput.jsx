import React, { useState } from 'react'

function ValidationInput() {

    const [name, setName] = useState("");
    const [nameErr, setNameErr] = useState();

     const [password, setPassword] = useState("");
    const [passErr, setPassErr] = useState();

    const handleName = (event) =>{
        console.log(event.target.value)
        if(event.target.value.length>5){
            setNameErr("Enter valid username, only 5 characters allowed")
        }else{
            setNameErr("")
        }
    }

    const handlePassword = (event) =>{
        // console.log(event.target.value)
        let regex = /^[A-Z0-9]+$/i;
        if(regex.test(event.target.value)){
            setPassErr()
        }else{
            setPassErr("Enter valid password, only numbers and alphabets allowed")
        }
    }

  return (
    <>
      <input type="text" className={nameErr? "error":""} onChange={handleName} placeholder='Enter Your name' />
      <span className='validation-red'>{nameErr && nameErr}</span>
      <br /><br />
       <input type="password" className={passErr? "error":""} onChange={handlePassword} placeholder='Enter Your password' />
      <span className='validation-red'>{passErr && passErr}</span>
      <br /><br />
      <button disabled={passErr || nameErr}>Login</button>
      
    </>
  )
}

export default ValidationInput;
