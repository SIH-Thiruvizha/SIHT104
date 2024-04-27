import React from 'react';
import './About.css'; // Create a CSS file for styling
import ScrollToTopButton from './ScrollToTopButton';
const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-content">
        <h1>About eVault</h1>
        <p>
          eVault is a secure digital solution for managing your documents and files.
        </p>

        <h2>Our Mission</h2>
        <p>
          We're committed to providing a user-friendly platform with top-notch security for your digital assets.
        </p>

        <h2>Key Features</h2>
        <ul>
          <li>Secure Document Storage</li>
          <li>Easy File Organization</li>
          <li>Privacy and Encryption</li>
          <li>Accessible Anytime, Anywhere</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          Reach out to our support team at support@evaultapp.com.
        </p>
      </div>
      <ScrollToTopButton/>
    </div>
  );
};

export default About;
