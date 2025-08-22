import React, { useState } from "react";

export default function CheckboxSkills() {

    const [skills,setSkills] = useState([])

    const handleCheck = (event)=>{
        console.log(event.target.value,event.target.checked);
        if(event.target.checked){
            setSkills([...skills,event.target.value])
        }else{
            setSkills([...skills.filter((item)=>item!=event.target.value)])
        }
    }

  return (
    <>
      <h1>Select your Skills</h1>
      <form action="">
        <label htmlFor="php">PHP:</label>
        <input onChange={handleCheck} type="checkbox" name="checkbox" id="php" value="php" />
        <br />
        <br />

        <label htmlFor="javascript">JavaScript:</label>
        <input onChange={handleCheck}
          type="checkbox"
          name="javascript"
          id="javascript"
          value="javascript"
        />
        <br />
        <br />

        <label htmlFor="css">CSS:</label>
        <input onChange={handleCheck} type="checkbox" name="css" id="css" value="css" />
        <br />
        <br />

        <label htmlFor="react">REACT.JS:</label>
        <input onChange={handleCheck} type="checkbox" name="react" id="react" value="react" />
        <br />
        <br />

        <label htmlFor="html">HTML:</label>
        <input onChange={handleCheck} type="checkbox" name="html" id="html" value="html" />
        <br />
        <br />
      </form>

      <h1>{skills.toString()}</h1>      
    </>
  );
}
