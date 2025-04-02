import React from "react";
import "./caseStudies.css";

// imported Components
import { default as Navbar } from "../../components/navbar/Navbar";
import { Project } from "../../components/export.js";
import { ContactUsComponents } from "../../components/export.js";
import { Footer } from "../../components/export.js";
import { Divider } from "../../components/export.js";

const CaseStudies = () => {
  return (
    <div className="caseStudies">
      <div className="caseStudies-header-nav">
        <Navbar />
      </div>
      <div className="home-process_header caseStudies-header">
        <h5>Our Process</h5>
        <h1>
          We follow a straightforward yet robust and highly effective process.
        </h1>
      </div>
      <Project />
      <Project />
      <Divider />
      <ContactUsComponents />
      <Footer />
    </div>
  );
};
export default CaseStudies;