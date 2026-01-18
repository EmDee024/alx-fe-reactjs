import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function UserProfile() {
  const user = useContext(UserContext);

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        marginTop: '20px'
      }}
    >
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserProfile;
