import React from "react";
import "./services.css";

// imported Components
import { default as Navbar } from "../../components/navbar/Navbar";
import { ContactUsComponents } from "../../components/export.js";
import { Footer } from "../../components/export.js";
import { Divider } from "../../components/export.js";

// import Services from "../../components/services/Services.jsx";
import ContactUsWhitebg from "../../components/buttons/contactUsWB/ContactUsWB.jsx";

// imported images
import { default as mobile_image } from "../../assets/images/service-images/mobile.svg";
import { default as frontend_image } from "../../assets/images/service-images/frontend.svg";
import { default as uiux_image } from "../../assets/images/service-images/uiux.svg";
import { default as Backend } from "../../assets/images/service-images/backend.svg";

const Services = () => {
  const handleLeftButtonClick = () => {
    const container = document.querySelector(".container");
    const newPosition = container.scrollLeft - container.offsetWidth;

    container.scrollTo({
      left: newPosition,
      behavior: "smooth", // Use smooth scrolling
    });
  };

  const handleRightButtonClick = () => {
    const container = document.querySelector(".container");
    const newPosition = container.scrollLeft + container.offsetWidth;

    container.scrollTo({
      left: newPosition,
      behavior: "smooth", // Use smooth scrolling
    });
  };

  return (
    <div className="services">
      <div className="services-header-nav">
        <Navbar />
      </div>
      <section className="home-services services-container">
        <div className="home-services_box">
          <div className="home-services_header">
            <h5>Our Services</h5>
            <h1>
              We specialize across various sectors, bringing expertise to the
              industry.
            </h1>
          </div>
          <div className="buttons">
            <button className="left-button" onClick={handleLeftButtonClick}>
              <svg
                width="34"
                height="10"
                viewBox="0 0 34 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="previous-arrow"
              >
                <path
                  d="M5 0.72461L1 4.71016M1 4.71016L5 8.72461M1 4.71016L33 4.71016"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Previous
            </button>

            <button className="right-button" onClick={handleRightButtonClick}>
              Next
              <svg
                width="34"
                height="10"
                viewBox="0 0 34 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="next-arrow"
              >
                <path
                  d="M29 8.72461L33 4.73906M33 4.73906L29 0.724609M33 4.73906L1 4.73905"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="container">
          <div className="box">
            <img src={mobile_image} alt="" />
            <h5>Mobile App Development</h5>
            <p>
              Native mobile apps are a focal point in our business. We boast an
              extensive pool of mobile talent and a comprehensive understanding
              of all pertinent mobile standards, making us the ideal partner for
              our customers.
            </p>
            <ContactUsWhitebg />
          </div>
          <div className="box">
            <img src={frontend_image} alt="" />
            <h5>Frontend Development</h5>
            <p>
              Our talented developers leverage cutting-edge technologies like
              React.js and Vue.js to craft bespoke front-end applications that
              are not only visually stunning but also scalable and easily
              maintainable.
            </p>
            <ContactUsWhitebg />
          </div>
          <div className="box">
            <img src={Backend} alt="" />
            <h5>Backend Development</h5>
            <p>
              Unlock the potential of your web and mobile apps with our expert
              back-end developers. They create custom APIs, enabling seamless
              integration and reusability of back-end services across different
              front-end implementations.
            </p>
            <ContactUsWhitebg />
          </div>
          <div className="box">
            <img src={uiux_image} alt="" />
            <h5>UI/UX Design</h5>
            <p>
              We are firm believers in functional design and delightful user
              experiences. With a team dedicated to web and mobile design, we
              craft user-centric interfaces that captivate users and ensure a
              smooth and engaging web experience.
            </p>
            <ContactUsWhitebg />
          </div>
        </div>
      </section>
      <Divider />
      <ContactUsComponents />
      <Footer />
    </div>
  );
};

export default Services;