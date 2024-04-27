import React from 'react';
import './Services.css'; // Use the correct CSS file

const Services = () => {
  return (
    <div className="services-container" id="services">
      <div className="services-content">
        <h1>Our Services</h1>
        <p>
          eVault offers secure services for your digital life.
        </p>

        <div className="service-item">
          <h2>Secure Storage</h2>
          <p>
            Documents and files are stored securely, ensuring tamper-proof data.
          </p>
        </div>

        <div className="service-item">
          <h2>Immutable Records</h2>
          <p>
            Every file is recorded, creating an immutable history.
          </p>
        </div>

        <div className="service-item">
          <h2>Privacy & Encryption</h2>
          <p>
            Encryption ensures data privacy, enhancing security.
          </p>
        </div>

        <div className="service-item">
          <h2>Smart Contracts</h2>
          <p>
            Smart contracts simplify document interactions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
