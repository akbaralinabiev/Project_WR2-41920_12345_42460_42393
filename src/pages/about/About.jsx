import React from "react";
import "./about.css";

// imported Components
import { default as Navbar } from "../../components/navbar/Navbar"
import { Footer } from "../../components/export.js";
import Contact from "../../components/buttons/contactUsButton/ContactUsButton.jsx";
import OurServicesButton from "../../components/buttons/ourServices/OurServicesBtn.jsx";

const About = () => {

     return (
          <div className="about">
               <div className="about-header">
                    <Navbar />
                    <div className="about-header_text">
                         <div className="about-header_text-holder">
                              <p>We are a development agency</p>
                              <h1>
                                   Comprehensive Digital Solutions to Accelerate Your Performance
                              </h1>

                              {/* buttons */}
                              <div className="about-header_buttons">
                                   <Contact />
                                   <OurServicesButton />
                              </div>
                         </div>
                         <div className="about-header_text-holder">
                              <h4>
                                   
                              </h4>
                         </div>
                    </div>
               </div>
               < Footer />
          </div>
     );
}

export default About;