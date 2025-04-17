import React from "react";
import "./contactUs.css";


import Contact from "../../components/buttons/contactUsButton/ContactUsButton.jsx";
import BrowsePackages from "../../components/buttons/browsePackages/BrowsePackagaes.jsx";
import { default as Message } from "../../assets/images/service-images/Message.svg";
import { default as Packages } from "../../assets/images/service-images/Packages.svg";


export const ContactUs = () => {

     return (
       <div id="#contact" className="contact">
         <div className="contact-process">
           <div className="contact-process_header">
             <h5 className="bouncing">Let’s get in touch</h5>
             <h1>Ready to start working together with us ?</h1>
           </div>

           <div className="contact-process_container">
             <div className="contact-process_container-box">
               <img src={Message} alt="" />
               <div className="contact-process_container-box-text">
                 <h3>Send us a message!</h3>
                 <p>
                   Have questions or want to discuss your project in detail?
                   Send us a message, and our team will get back to you shortly
                   to kickstart the conversation.
                 </p>
                 <Contact />
               </div>
             </div>
             <div className="contact-process_container-box">
               <img src={Packages} alt="" />
               <div className="contact-process_container-box-text">
                 <h3>Browse our packages</h3>
                 <p>
                   Looking for predefined service packages tailored to your
                   needs? Explore our packages to find the perfect solution for
                   your project.
                 </p>
                 <BrowsePackages />
               </div>
             </div>
           </div>
           <span className="contact-spacer"></span>
         </div>
       </div>
     );
}

export default ContactUs;