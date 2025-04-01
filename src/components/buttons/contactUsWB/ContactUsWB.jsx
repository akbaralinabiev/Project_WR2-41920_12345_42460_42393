import React from "react";
import "./contactUsWB.css";
import { Link } from "react-router-dom";


export default function ContactUsWB () {
  return (
    <div className="contact-btn-white-bg">
      <Link to="/contact">Contact Us</Link>
    </div>
  );
}