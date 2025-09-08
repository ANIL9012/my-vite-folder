import React from "react";
import { useSelector } from "react-redux";

function DisplayUsers() {
  const data = useSelector((state) => {
    return state.users;
  });

  console.log(data);

  return (
    <>
      <div className="wrapper">
        {data.map((userdata, id) => {
          return <li key={id}>{userdata}</li>;
        })}
      </div>
    </>
  );
}

export default DisplayUsers;
