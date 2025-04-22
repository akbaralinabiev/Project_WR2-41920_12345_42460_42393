import React from "react";
import { Link } from "react-router-dom";
import "./error.css";


// imported Components
import { default as Navbar } from "../../components/navbar/Navbar";
import { Footer} from "../../components/export.js";

const ErrorPage = ({ openCart }) => {

     return (
          <div>
               <div className="error">
               <Navbar openCart={openCart} />
               <div className="error-header">
                    <span>404</span>
                    <h1>Page not found</h1>
                    <h3>The page you are looking for doesn't exist or have been moved.
                    </h3>
                    <div className="error-header-btns">
                         <Link className="back-to-home-btn" to="/ ">
                              Go Home
                         </Link>
                         <h4>or</h4>
                         <Link className="back-to-packages-btn" to="/packages ">
                              Go to Packages
                         </Link>
                    </div>
               </div>
               </div>
               <Footer />
          </div>
     );
}

export default ErrorPage;