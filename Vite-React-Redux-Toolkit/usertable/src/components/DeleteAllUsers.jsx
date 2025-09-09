import React from 'react'
import { useDispatch } from 'react-redux';
// import { clearAllUser } from '../store/slice/UserSlice';

import { clearAllUsers } from '../store/action';

function DeleteAllUsers() {

  const dispatch = useDispatch()

  const ClearAllUsers = () =>{
    dispatch(clearAllUsers())
  }

  return (
    <>
      <div className='Deleteuserbtn'>
        <button className='clear-btn' onClick={ClearAllUsers}>Clear Btn</button>
      </div>
    </>
  )
}

export default DeleteAllUsers;
