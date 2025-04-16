import React from 'react';
import './project.css';

import {default as LearnMoreButton} from "../buttons/learnMore/LearnMoreBtn"

export default function Project() {
     return (
       <div className="project">
           <div className="project-box">
             <div className="project-left-side">
               <h3>Mobile Application</h3>
               <h1>How we ran a transportation service mobile app</h1>
               <p>
                 Native mobile apps represent a focal point in our business. We
                 boast an extensive pool of mobile development talent and a.
               </p>
               <LearnMoreButton />
             </div>
             <div className="project-right-side">
               <h1>Project Name</h1>
             </div>
           </div>
       </div>
     );
}