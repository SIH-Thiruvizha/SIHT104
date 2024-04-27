import React, { useState } from 'react';
import './UserTypeSignUp.css';
import { Link, Redirect } from 'react-router-dom';

const UserTypeSignUp = ({ onSignUp }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [userType, setUserType] = useState('');
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    aadharId: '',
    lawyerId: '',
    judgeId: '',
  });
  const [isSignedUp, setIsSignedUp] = useState(false);

  const openDialog = (type) => {
    setIsDialogOpen(true);
    setUserType(type);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setUserType('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const isFormValid = () => {
    // Check if all required fields are filled
    return (
      userData.name.trim() !== '' &&
      userData.email.trim() !== '' &&
      userData.password.trim() !== '' &&
      (userType !== 'client' || userData.aadharId.trim() !== '') &&
      (userType !== 'lawyer' || userData.lawyerId.trim() !== '') &&
      (userType !== 'judge' || userData.judgeId.trim() !== '')
    );
  };
  const saveUserDataToLocalStorage = (userData) => {
    localStorage.setItem('userData', JSON.stringify(userData));
  };
  

  const handleSubmit = () => {
    if (!isFormValid()) {
      alert('Please fill out all required fields');
      return;
    }
  
    // Handle the user data based on the userType here
    console.log('User Data:', userData);
  
    // Save user data to local storage
    saveUserDataToLocalStorage(userData);
  
    closeDialog();
  
    // Call the onSignUp function to pass user data to App.js
    onSignUp(userData.name, userType);
  
    // Set a flag to show the "Signed up successfully" message
    setIsSignedUp(true);
  };
  
  

  return (
    <div className='cards'>
      <h1>New User!! Choose Your User Type</h1>
      <div className='cardsignup'>
        <h3>Judge</h3>
        <p>Login as a Judge to access legal records.</p>
        <button className="login-btn" onClick={() => openDialog('judge')}>
          Sign Up
        </button>
      </div>
      <div className='cardsignup'>
        <h3>Lawyer</h3>
        <p>Login as a Lawyer to access legal records.</p>
        <button className="login-btn" onClick={() => openDialog('lawyer')}>
          Sign Up
        </button>
      </div>
      <div className='cardsignup'>
        <h3>Client</h3>
        <p>Login as a Client to access legal records.</p>
        <button className="login-btn" onClick={() => openDialog('client')}>
          Sign Up
        </button>
      </div>

      {isDialogOpen && !isSignedUp && (
        <div className="dialog">
          <h2>Sign Up as {userType}</h2>
          <input
            type="text"
            placeholder="Name *"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            placeholder="Email *"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="Password *"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
          {userType === 'client' && (
            <>
              <input
                type="text"
                placeholder="Aadhar ID *"
                name="aadharId"
                value={userData.aadharId}
                onChange={handleInputChange}
              />
            </>
          )}
          {userType === 'lawyer' && (
            <>
              <input
                type="text"
                placeholder="Lawyer ID *"
                name="lawyerId"
                value={userData.lawyerId}
                onChange={handleInputChange}
              />
            </>
          )}
          {userType === 'judge' && (
            <>
              <input
                type="text"
                placeholder="Judge ID *"
                name="judgeId"
                value={userData.judgeId}
                onChange={handleInputChange}
              />
            </>
          )}
          <button className="signup-btn" onClick={handleSubmit}>
            Sign Up
          </button>
          <button className="close-btn" onClick={closeDialog}>
            Close
          </button>
        </div>
      )}

      {isSignedUp && (
        <div className="success-message">
          <p>Signed up successfully!</p>
          <Link to='/dashboard'>
            <button className="go-to-dashboard-btn">Go to Dashboard</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserTypeSignUp;
