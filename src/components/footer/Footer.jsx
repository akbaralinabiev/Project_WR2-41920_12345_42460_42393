import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

import {default as Subscribe} from "../buttons/subscribe/SubscribeBtn";
import {default as Logo} from "../../assets/images/logo-footer.svg";

import {default as Facebook} from "../../assets/images//social-icons/facebook.svg";
import {default as Twitter} from "../../assets/images//social-icons/twitter.svg";
import {default as Instagram} from "../../assets/images//social-icons/instagram.svg";
import {default as Linkedin} from "../../assets/images//social-icons/linkedin.svg";
import {default as Dribble} from "../../assets/images//social-icons/dribble.svg";
import {default as WhatsApp} from "../../assets/images//social-icons/whatsApp.svg";
import {default as Telegram} from "../../assets/images//social-icons/telegram.svg";
import {default as Behance} from "../../assets/images//social-icons/behance.svg";

export const Footer = () => {

     return (
       <div className="footer">
         <div className="footer-container-text">
           <img src={Logo} alt="" />
           <h2>
             We're all ears and ready to embrace your challenges or aspirations.
           </h2>
         </div>
         <div className="footer-container-input">
           <input
             type="email"
             name=""
             id=""
             placeholder="Enter your email"
             autoComplete="email"
           />
           <Subscribe />
         </div>

         <div className="footer-container-links">
           <div className="footer-links">
             <ul>
               <li>
                 <Link to="/culture">Culture</Link>
               </li>
               <li>
                 <Link to="/caseStudies">Study Case</Link>
               </li>
               <li>
                 <Link to="/services">Services</Link>
               </li>
               <li>
                 <Link to="/packages">Packages</Link>
               </li>
               <li>
                 <Link to="/about">About</Link>
               </li>
             </ul>

             <a href="#0">Legal</a>
           </div>
         </div>

         <div className="footer-social">
           <div className="footer-social-icon-links">
             <a href="#0">
               <img src={Facebook} alt="" />
             </a>
             <a href="#0">
               <img src={Twitter} alt="" />
             </a>
             <a href="#0">
               <img src={Instagram} alt="" />
             </a>
             <a href="#0">
               <img src={Linkedin} alt="" />
             </a>
             <a href="#0">
               <img src={Dribble} alt="" />
             </a>
             <a href="#0">
               <img src={WhatsApp} alt="" />
             </a>
             <a href="#0">
               <img src={Telegram} alt="" />
             </a>
             <a href="#0">
               <img src={Behance} alt="" />
             </a>
           </div>
           <p>
             © 2025 Appbuild agency.&nbsp;All rights reserved.
             <a href="#0">Privacy Policy</a>
           </p>
         </div>
       </div>
     );
}

export default Footer; 