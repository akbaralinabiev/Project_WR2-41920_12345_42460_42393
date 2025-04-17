import React from "react";
import "./culture.css";


// imported Components
import { default as Navbar } from "../../components/navbar/Navbar";

//imported images
import Sculp from "../../assets/images/culture-images/sculp.svg";
import Logo from "../../assets/images/logo.svg";
import Rectangle from "../../assets/images/culture-images/Rectangle.svg";
const Culture = () => {

     return (
          <div className="culture-main">
               <Navbar />
               <div className="culture-container">
                    <div className="container-info-1">
                         <p>Whether you're currently a valued client or considering joining our community, whether you're already a
                              vital member of our professional team or interested in becoming part of our ongoing pursuit of exceptional
                              design, this serves as a concise introduction to our culture, objectives, and preferred modes of collaboration.
                         </p>
                         <span>
                              <h2>
                                   Welcome to
                              </h2>
                              <img src={Logo} alt="" />
                              <h2>agency!</h2>
                         </span>
                         <p>
                              We are a collective of dreamers, thinkers, developers, designers, writers, and makers united by the conviction that
                              truly exceptional products are crafted by individuals who genuinely care. <br /> <br />Founded by Akbarali, Appbuild.agency emerged
                              with the purpose of cultivating a vibrant amalgamation of diverse talents, disciplines, and skills. Our vision is to foster an open,
                              collaborative environment where individuals with a shared passion for problem-solving and exquisitely crafted, human-centered design come together.
                         </p>
                    </div>
                    <div className="culture-info_image">
                         <img src={Sculp} alt="" />
                    </div>
               </div>
               <div className="culture-container">
                    <div className="culture-info_image">
                              <img src={Rectangle} alt="" />
                    </div>
                    <div className="container-info-2">
                         <div className="span-2">
                              <h3>We welcome uniqueness.</h3>
                         </div>
                         <p>
                         We are a purpose-driven agency offering exceptional design and brand communication for a broad spectrum of industries and categories, 
                         spanning different products and services, continents and cultures. <br /> <br />
                         Avoiding generic, one-size-fits-all approaches is an essential part of our philosophy and we encourage you to adopt the same mindset. 
                         That's why we tailor our teams and processes to our clients' heritage, their individual aspirations and their business goals. 
                         For each project, we need to assemble the right experience and expertise to effectively address the specific challenges.
                         </p>
                    </div>
               </div>
               <div className="culture-container">
                    <div className="container-info-1">
                         <div>
                              <h3>Let's remain united.</h3>
                         </div>
                         <p>We understand that our mission is no simple feat, but our strength lies in our unity.
                              Choosing to collaborate with a limited number of clients allows us the flexibility to venture wherever a project leads us.
                              <br /><br /> Gratitude extends to our exceptional team members and the wonders of technology, enabling us to stay seamlessly connected. 
                              This connectivity empowers us to consistently deliver an unparalleled interdisciplinary approach, crafting innovative visual 
                              solutions that not only meet our clients' current needs but also pave the way for their future success.
                         </p>
                    </div>
                    <div className="culture-info_image">
                         <img src={Rectangle} alt="" />
                    </div>
               </div>
          </div>
     );
}

export default Culture;