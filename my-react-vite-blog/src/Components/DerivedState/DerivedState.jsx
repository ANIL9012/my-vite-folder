import React, { useState } from 'react';

function DerivedState() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');

  const handleUserls = () => {
    if (user.trim() !== "") {
      setUsers([...users, user]);
      setUser(""); 
    }
  };


  const total = users.length;
  const last = users[users.length-1];
  const unique = [...new Set(users)].length;

  return (
    <>

      <div>
        <h2>Total:{total}</h2>
        <h2>Last:{last}</h2>
        <h2>Unique:{unique}</h2>
      </div>
      <input
        type="text"
        placeholder="Add any values"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={handleUserls}>Add User</button>

      {users.map((item, index) => (
        <div key={index}>
          <h4>{item}</h4>
        </div>
      ))}
    </>
  );
}

export default DerivedState;
