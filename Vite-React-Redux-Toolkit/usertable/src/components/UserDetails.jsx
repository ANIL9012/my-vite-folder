import React from "react";
import DeleteAllUsers from "./DeleteAllUsers";
import { fakeUserData } from "../Api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slice/UserSlice";
import DisplayUsers from "./DisplayUsers";


function UserDetails() {

    const dispatch = useDispatch()

    const addNewUser = (name) => {
        console.log(name)
        dispatch(addUser(name))
    };

  return (
    <>
      <div className="wrapper">
        <div className="content">
          <div className="admin-table">
            <div className="admin-subtitle">List of users Details</div>
            <button className="btn add-btn" onClick={() => addNewUser(fakeUserData())}>Add New Users</button>
          </div>
          <ul>
            <DisplayUsers/>
          </ul>
          <hr />
          <DeleteAllUsers />
        </div>
      </div>
    </>
  );
}

export default UserDetails;
