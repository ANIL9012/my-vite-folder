import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from "../store/slice/UserSlice";

function DisplayUsers() {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.users;
  });

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };


  // console.log(data);

  return (
    <div className="wrapperTwo">
      {data.map((user, id) => (
        <li key={id}>
          {user}
          {/* console.log(user) */}
          <button className="delete-btn" onClick={() => deleteUser(id)}>
            <MdDeleteForever className="delete-icon" />
          </button>
        </li>
      ))}
    </div>
  );
}

export default DisplayUsers;
