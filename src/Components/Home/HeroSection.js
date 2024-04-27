import React from 'react';
import './HeroSection.css'; // Import your CSS file for styling
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className='hero' id='home'>
    <Navbar/>
    <div className="hero-container">
      <h1>Want to Secure your Records?</h1>
      <h1>You're at the right place.</h1>
      <p>Experience the future of legal record management with blockchain technology.</p>
      <Link to={'UserTypeLogin'}>
      <button className="loginbtn">Login</button>
      </Link>
      <Link to={'UserTypeSignUp'}>
      <button className="signupbtn">Sign Up</button>
      </Link>
      
    </div>
    </div>
    
  );
};

export default HeroSection;
