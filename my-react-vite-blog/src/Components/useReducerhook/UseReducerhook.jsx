import React, { useReducer } from "react";

const emptyData = {
  name: "",
  password: "",
  email: "",
  city: "",
  address: "",
};

const reducer = (data,action) =>{
    return{...data,[action.type]:action.val}
}

function UseReducerhook() {

    const [state, dispatch] = useReducer(reducer,emptyData)

    // console.log(state);

  return (
    <>
      <div>
        <h1>UseReducerhook</h1>
        <input type="text" onChange={(event)=> dispatch({val:event.target.value,type:"name"})} placeholder="Enter name" />
        <br />
        <br />
        <input type="text" onChange={(event)=> dispatch({val:event.target.value,type:"password"})} placeholder="Enter password" />
        <br />
        <br />
        <input type="text" onChange={(event)=> dispatch({val:event.target.value,type:"email"})} placeholder="Enter email" />
        <br />
        <br />
        <input type="text" onChange={(event)=> dispatch({val:event.target.value,type:"city"})} placeholder="Enter city" />
        <br />
        <br />
        <input type="text" onChange={(event)=> dispatch({val:event.target.value,type:"address"})} placeholder="Enter address" />
        <br />
        <br />

        <ul>
            <li>Name: {state.name}</li>
            <li>Password: {state.password}</li>
            <li>Email: {state.email}</li>
            <li>City: {state.city}</li>
            <li>Address: {state.address}</li>
        </ul>

        <button onClick={()=> console.log(state)}>Add Details</button>
      </div>
    </>
  );
}

export default UseReducerhook;
