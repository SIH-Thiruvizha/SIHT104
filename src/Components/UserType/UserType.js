import React, { useState } from 'react';
import './UserType.css';

const UserTypeLogin = () => {
  const [selectedUserType, setSelectedUserType] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = (userType) => {
    setSelectedUserType(userType);
    setIsLoginOpen(true);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Perform your login logic here using the 'username' and 'password' state variables.
    console.log(`Logging in as a ${selectedUserType}: Username - ${username}, Password - ${password}`);
    // Clear the input fields after login
    setUsername('');
    setPassword('');
    // Close the login popup
    setIsLoginOpen(false);
  };

  return (
    <div className='cards'>
      <h1>Choose Your User Type</h1>
      <div className={`card ${selectedUserType === 'Judge' ? 'judge' : selectedUserType === 'Client' ? 'client' : ''}`}>
        <h3>Judge</h3>
        <p>Login as a Judge to access legal records.</p>
        <button className="login-btn" onClick={() => handleLoginClick('Judge')}>Login</button>
      </div>
      <div className={`card ${selectedUserType === 'Lawyer' ? 'lawyer' : ''}`}>
        <h3>Lawyer</h3>
        <p>Login as a Lawyer to access legal records.</p>
        <button className="login-btn" onClick={() => handleLoginClick('Lawyer')}>Login</button>
      </div>
      <div className={`card ${selectedUserType === 'Client' ? 'client' : ''}`}>
        <h3>Client</h3>
        <p>Login as a Client to access legal records.</p>
        <button className="login-btn" onClick={() => handleLoginClick('Client')}>Login</button>
      </div>

      {isLoginOpen && (
        <div className="login-popup-overlay">
          <div className="login-popup">
            <h2>Login as a {selectedUserType}</h2>
            <form onSubmit={handleLoginSubmit}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Login</button>
            </form>
            <button className="close-btn" onClick={() => setIsLoginOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTypeLogin;
