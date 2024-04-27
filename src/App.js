import { useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import UserType from './Components/UserType/UserType';
import UserTypeSignUp from './Components/UserType/UserTypeSignup';
import Dashboard from './Components/UserType//Dashboard';
import React from 'react';


function App() {
  const [userData, setUserData] = useState({
    name: '',
    userType: '',
  });

  const handleUserData = (name, userType) => {
    setUserData({ name, userType });
  };

  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/UserTypeLogin" element={<UserType />} />
          <Route exact path="/UserTypeSignUp" element={<UserTypeSignUp onSignUp={handleUserData} />} />
          <Route path="/dashboard" element={<Dashboard name={userData.name} userType={userData.userType} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
