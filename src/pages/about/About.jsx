import React from "react";
import "./about.css";

// imported Components
import { default as Navbar } from "../../components/navbar/Navbar"
import { Footer } from "../../components/export.js";

const About = () => {

     return (
          <div className="about">
               <div className="about-header">

               <Navbar />
               <h1>About</h1>
               </div>
               < Footer />
          </div>
     );
}

export default About;