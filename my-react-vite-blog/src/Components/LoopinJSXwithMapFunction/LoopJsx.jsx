import React from "react";

import './LoopJsx.css'

export default function LoopJsx() {
  const userData = [
    {
      id: 1,
      name: "Anil Kumar",
      age: 20,
      email: "anil@gmail.com",
    },
    {
      id: 2,
      name: "Himanshu",
      age: 5.6,
      email: "himansh@gmail.com",
    },
    {
      id: 3,
      name: "Monika",
      age: 2.6,
      email: "monika@gmail.com",
    },
    {
      id: 4,
      name: "Rishabh",
      age: 1.8,
      email: "rishabh@gmail.com",
    },
  ];

  return (
    <>
      <div className="tabletext d-flex justify-content-center text-center">
        <table border={"1px"}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {userData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
