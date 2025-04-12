import React from "react";
import "./error.css";


// imported Components
import { default as Navbar } from "../../components/navbar/Navbar";

const ErrorPage = () => {

     return (
          <div>
               <Navbar />
               <h1>ErrorPage</h1>
          </div>
     );
}

export default ErrorPage;