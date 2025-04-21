import React from "react";
import "./about.css";

// imported Components
import { default as Navbar } from "../../components/navbar/Navbar"
import { Footer } from "../../components/export.js";
import Contact from "../../components/buttons/contactUsButton/ContactUsButton.jsx";
import OurServicesButton from "../../components/buttons/ourServices/OurServicesBtn.jsx";
import Logo from "../../assets/images/logo.svg";
import img5 from "../../assets/images/about-page/image 5.png";
import img6 from "../../assets/images/about-page/image 6.png";
import img7 from "../../assets/images/about-page/image 7.png";

const About = () => {

     return (
          <div className="about">
               <div className="about-header">
                    <Navbar />
                    <div className="about-header_text">
                         <div className="about-header_text-holder">
                              <p>About us</p>
                              <h1>
                                   Appbuild is a development agency like no others
                              </h1>

                              {/* buttons */}
                              <div className="about-header_buttons">
                                   <Contact />
                                   <OurServicesButton />
                              </div>
                         </div>
                         <div className="about-header_text-holder">
                              <h4>
                                   At our core, we believe great tech deserves great collaboration. That’s why we don’t offer one-size-fits-all solutions.
                                   <br /><br />Instead, we work hand-in-hand with your tech team, customizing every part of our web development process to match your
                                   workflow, skills, and goals—turning bold ideas into powerful digital product.
                              </h4>
                              <img src={Logo} alt="" />
                              <div className="divider-about">
                                   <div className="divider-line-about"></div>
                              </div>
                         </div>
                    </div>
               </div>
               {/* Our impact section */}
               <section>
                    <div className="home-process">
                         <div className="home-process_header">
                              <h5 className="bouncing">Our impact in numbers</h5>
                              <h1>
                                   Great work produces great results
                              </h1>
                         </div>
                         <div className="home-process_container">
                              <div className="home-process_container-box">
                                   <h1 className="our-impact-h1">20 <span>+</span>
                                   </h1>
                                   <div className="home-process_container-box-text">
                                        <h3>Team members</h3>
                                        <p>
                                             Native mobile apps represent a focal point in our business. We
                                             boast an extensive pool of mobile development talent and a.
                                        </p>
                                   </div>
                              </div>
                              <div className="home-process_container-box">
                                   <h1 className="our-impact-h1">60 <span>+</span></h1>
                                   <div className="home-process_container-box-text">
                                        <h3>Successful projects</h3>
                                        <p>
                                             Native mobile apps represent a focal point in our business. We
                                             boast an extensive pool of mobile development talent and a.
                                        </p>
                                   </div>
                              </div>
                         </div>
                         <div className="home-process_container">
                              <div className="home-process_container-box">
                                   <h1 className="our-impact-h1">5 <span>m</span></h1>
                                   <div className="home-process_container-box-text">
                                        <h3>Users are using our products</h3>
                                        <p>
                                             Native mobile apps represent a focal point in our business. We
                                             boast an extensive pool of mobile development talent and a.
                                        </p>
                                   </div>
                              </div>
                              <div className="home-process_container-box">
                                   <h1 className="our-impact-h1">95 <span>%</span></h1>
                                   <div className="home-process_container-box-text">
                                        <h3>Client Satisfaction</h3>
                                        <p>
                                             Native mobile apps represent a focal point in our business. We
                                             boast an extensive pool of mobile development talent and a.
                                        </p>
                                   </div>
                              </div>
                         </div>
                         <span className="spacer"></span>
                         <Contact />
                    </div>
               </section>
               <div className="about-section">
                    <div className="about-section-holder">
                         <p className="bouncing">Our Story</p>
                         <h1>
                              We started in 2022 as a small team of passionate developers
                         </h1>
                         <img src={img5} alt="" />
                         <img src={img6} alt="" />
                    </div>
                    <div className="about-section-holder">
                         <h4>
                              In the heart of the bustling tech hub, a group of passionate and visionary individuals came together with a shared dream: to revolutionize the digital landscape by empowering businesses with innovative and impactful mobile and web applications. This dream fueled the birth of Appbuild.agency, a company destined to become a pioneer in the realm of app development.
                         </h4>
                         <img src={img7} alt="" />
                    </div>
               </div>
               < Footer />
          </div>
     );
}

export default About;