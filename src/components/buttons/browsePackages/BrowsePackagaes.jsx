import React from 'react';
import { Link } from 'react-router-dom';
import './browsePackages.css';


export default function BrowsePackages() {

     return (
       <div className="browse-packages-button">
         <Link to="/packages">Browse packages</Link>
       </div>
     );
}