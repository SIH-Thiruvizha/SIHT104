import React from 'react';

const UserDashboard = ({ userType, userData }) => {
  return (
    <div>
      <h1>Welcome to the User Dashboard</h1>
      <p>User Type: {userType}</p>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      {/* Display additional user data based on user type */}
    </div>
  );
};

export default UserDashboard;
