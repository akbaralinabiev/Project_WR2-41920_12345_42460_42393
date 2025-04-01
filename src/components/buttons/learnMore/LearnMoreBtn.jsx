import React from 'react';
import { Link } from 'react-router-dom';
import './learnMoreBtn.css';

export default function LearnMoreBtn() {
     return (
          <div className="learn-more-btn">
               <Link to="/about">Learn More</Link>
          </div>
     );
}