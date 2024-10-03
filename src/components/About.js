import React from "react";
import "../styles/about.css"; // Import your new styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About This App</h1>
      <p>
        This application predicts when a machine will need maintenance based on key input parameters like 
        <span> air temperature</span>, 
        <span> process temperature</span>, 
        <span> rotational speed</span>, 
        <span> torque</span>, and 
        <span> tool wear</span>. 
        Built using <span>React</span> for the frontend and <span>Flask</span> for the backend, this app aims to improve 
        industrial machine maintenance scheduling.
      </p>
      {/* <img 
        className="about-image" 
        src="./lathemachine.jpg" 
        alt="Maintenance Illustration" 
      /> */}
    </div>
  );
};

export default About;
