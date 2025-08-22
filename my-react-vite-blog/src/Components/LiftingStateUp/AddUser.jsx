import React from 'react'

function AddUser({setAddUser}) {
  return (
    <>
      <h1>Add User Data</h1>
      <input type="text" placeholder='Add user data value' onChange={(e)=> setAddUser(e.target.value)}/>
      <hr />
    </>
  )
}

export default AddUser;
