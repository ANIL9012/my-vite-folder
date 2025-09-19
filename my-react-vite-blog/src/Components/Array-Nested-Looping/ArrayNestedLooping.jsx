import React from "react";

function ArrayNestedLooping() {
  const collageData = [
    {
      name: "IIT Kanpur",
      city: "Kanpur",
      website: "www.iitkanpur.com",
      Students: [
        {
          name: "Anil Kumar",
          age: 20,
          email: "Anil@gmail.com",
        },
        {
          name: "Himanshu",
          age: 21,
          email: "Himansh@gmail.com",
        },

        {
          name: "Rahul",
          age: 24,
          email: "Rahul@gmail.com",
        },
      ],
    },
    {
      name: "IIT Dehli",
      city: "Dehli",
      website: "www.iitDehli.com",
      Students: [
        {
          name: "Sanjeev Kumar",
          age: 20,
          email: "Sanjeev@gmail.com",
        },
        {
          name: "Lalit choudhri",
          age: 27,
          email: "Lalit@gmail.com",
        },

        {
          name: "Reshma",
          age: 22,
          email: "Reshma@gmail.com",
        },
      ],
    },
    {
      name: "IIT Ruddki",
      city: "Ruddki",
      website: "www.iitRundki.com",
      Students: [
        {
          name: "Peter",
          age: 19.8,
          email: "Peter@gmail.com",
        },
        {
          name: "Hima",
          age: 23,
          email: "Hima@gmail.com",
        },

        {
          name: "Ankush",
          age: 29,
          email: "Ankush@gmail.com",
        },
      ],
    },
  ];

  return (
    <>
      {/* <h1> Array Nested Looping with component</h1> */}

      {collageData.map((collage, index) => (
        <div key={index}>
          <div
            style={{
              backgroundColor: "#ccc",
              padding: "15px",
              margin: "10px",
              borderBottom: "2px solid #000",
              borderRadius: "10px",
              boxShadow: " 1px 2px 0px 3px #ccc",
            }}
          >
            <h1>Name: {collage.name}</h1>
            <ul>
              <li>
                <h3>City: {collage.city}</h3>
              </li>
              <li>
                <h3>Websit: {collage.website}</h3>
              </li>

              <li>
                <h3>Students:</h3>
                {collage.Students.map((student, index) => (
                  <ul key={index}>
                    <li>Name: {student.name}</li>
                    <li>Age: {student.age}</li>
                    <li>Emale: {student.email}</li>
                  </ul>
                ))}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}

export default ArrayNestedLooping;
