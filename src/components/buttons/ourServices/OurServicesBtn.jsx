import React from 'react';
import { Link } from 'react-router-dom';
import './ourServicesBtn.css';

export default function OurServicesBtn() {

     return (
          <div className="our-services-btn">
               <Link to="/services">Our Services</Link>
          </div>
     );
}