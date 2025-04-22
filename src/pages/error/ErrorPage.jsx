import React from "react";
import { Link } from "react-router-dom";
import "./error.css";


// imported Components
import { default as Navbar } from "../../components/navbar/Navbar";

const ErrorPage = () => {

     return (
          <div className="error">
               <Navbar />
               <div>
                    <span>404</span>
                    <h1>Page not found</h1>
                    <h3>The page you are looking for doesn't exist or have been moved.
                    </h3>
                    <div className="error-header-btns">
                         <Link to="/ ">
                              Go Home
                         </Link>
                         <h4>or</h4>
                         <Link to="/packages ">
                              Go to Packages
                         </Link>
                    </div>
               </div>
          </div>
     );
}

export default ErrorPage;