import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="About">
      <Link to={"/"}>Home</Link>
      <h1>About</h1>
    </div>
  );
};

export default About;
