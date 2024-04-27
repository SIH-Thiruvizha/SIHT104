import React from "react";
import "./Navbar.css";

function Navbar() {
  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="nav">
      <h1>e-Vault</h1>
      <ul>
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("services")}>Services</li>
      </ul>
    </div>
  );
}

export default Navbar;
