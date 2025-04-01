import React from "react";
import { Link } from "react-router-dom";
import "./contactUsButton.css";

export default function ContactUsButton() {
  return (
    <div className="contact-btn">
      <Link to="/contact">Contact Us</Link>
    </div>
  );
}