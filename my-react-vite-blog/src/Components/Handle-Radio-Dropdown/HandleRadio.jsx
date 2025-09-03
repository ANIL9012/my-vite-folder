import React, { useState } from "react";

export default function HandleRadio() {
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");

  return (
    <>
      <h1>Handle Radio Buttons and Dropdown</h1>
      <h4>Select Gender</h4>
      <form action="">
        <label htmlFor="maleid">Male:</label>
        <input
          type="radio"
          name="gender"
          id="maleid"
          value={"male"}
          checked={gender=='male'}
          onChange={(event) => setGender(event.target.value)}
        />
        <label htmlFor="femaleid">Female:</label>
        <input
          type="radio"
          name="gender"
          id="femaleid"
          value={"female"}
          checked={gender=='female'}
          onChange={(event) => setGender(event.target.value)}
        />
      </form>
      <h2>Selected Gender:{gender}</h2>
      <br /><br />

      <h2>Select Any City:</h2>

      <select defaultValue={""} onChange={(e)=> setCity(e.target.value)}>
        <option value="Dehli">Dehli</option>
        <option value="Rampur">Rampur</option>
        <option value="Bengaluru">Bengaluru</option>
        <option value="Chennai">Chennai</option>
      </select>

      <h2>Selected City: {city}</h2>

    </>
  );
}
