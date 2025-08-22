import React, { useState } from "react";

function UpdatingArray() {
  const [arraydata, setArrayData] = useState(["Anil", "Kaisabh", "Rohan"]);

  const handleUser = (name) => {
    arraydata[arraydata.length - 1] = name;
    console.log(arraydata);
    setArrayData([...arraydata]);
  };

  const [datadetails, setDatadetails] = useState([
    {
      name: "Anil",
      age: 20,
      class: "BCA",
    },
    {
      name: "Rahul",
      age: 21,
      class: "BBA",
    },
    {
      name: "Deepak",
      age: 22,
      class: "B.Tecch",
    },
  ]);

  const handleAge = (age) => {
    datadetails[datadetails.length-1].age = age;
    console.log(datadetails)
    setDatadetails([...datadetails])
  }

  return (
    <>
      <h1>Update Array in State</h1>

      <input
        type="text"
        placeholder="Enter any name"
        onChange={(e) => handleUser(e.target.value)}
      />


      <div>
        {arraydata.map((item, unique) => (
          <div key={unique}>
            <h2>{item}</h2>
          </div>
        ))}
      </div>

      <hr />

      <input type="text" placeholder="Enter age and change last age" onChange={(e) => handleAge(e.target.value)} />

      <div>
        Handle dataDetails
        {
            datadetails.map((item,index) => (
                <div key={index}>
                <h2>{item.name} {item.age} {item.class}</h2>
                </div>
            ))
        }
      </div>
    </>
  );
}

export default UpdatingArray;
