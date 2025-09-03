import React, { useState } from "react";

export default function CheckboxSkills() {

    const [skills, setSkills] = useState([]);

    const handleCheckSkills = (event) =>{
      console.log(event.target.value, event.target.checked);
      if(event.target.checked){
        setSkills([...skills,event.target.value])
      }else{
        setSkills([...skills.filter((item)=> item!=event.target.value)])
      }
    }

  return (
    <>
      <h1>Select your Skills</h1>

      <form action="">
        <label htmlFor="html">HTML:</label>
        <input onChange={handleCheckSkills} type="checkbox"  id="html" value="HTML"/>
        <br /><br />
        <label htmlFor="css">CSS:</label>
        <input onChange={handleCheckSkills} type="checkbox"  id="css" value="CSS"/>
        <br /><br />
        <label htmlFor="javascript">JavaScript:</label>
        <input onChange={handleCheckSkills} type="checkbox"  id="javascript" value="JAVASCRIPT"/>
        <br /><br />
        <label htmlFor="bootstraps">Bootstraps:</label>
        <input onChange={handleCheckSkills} type="checkbox"  id="bootstraps" value="Bootstraps"/>
        <br /><br />
        <label htmlFor="reactjs">React js:</label>
        <input onChange={handleCheckSkills} type="checkbox"  id="reactjs" value="React js"/>
        <br /><br />
        <label htmlFor="tailwindcss">TailwindCss:</label>
        <input onChange={handleCheckSkills} type="checkbox"  id="tailwindcss" value="tailwindcss"/>
        <br /><br />
      </form>

      <h1>{skills.toString()}</h1>
    
    </>
  );
}
