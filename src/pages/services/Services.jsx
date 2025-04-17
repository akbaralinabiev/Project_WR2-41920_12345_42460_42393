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
  // const handleLeftButtonClick = () => {
  //   const container = document.querySelector(".container");
  //   const newPosition = container.scrollLeft - container.offsetWidth;

  //   container.scrollTo({
  //     left: newPosition,
  //     behavior: "smooth", // Use smooth scrolling
  //   });
  // };

  // const handleRightButtonClick = () => {
  //   const container = document.querySelector(".container");
  //   const newPosition = container.scrollLeft + container.offsetWidth;

  //   container.scrollTo({
  //     left: newPosition,
  //     behavior: "smooth", // Use smooth scrolling
  //   });
  // };

  return (
    <div className="services">
      <div className="services-header-nav">
        <Navbar />
      </div>
      <section className="home-services services-container">
        <div className="home-services_box home-services_header">
            <h5>Our Services</h5>
            <h1>
              We specialize across various sectors, bringing expertise to the
              industry.
            </h1>
        </div>

        <div className="container-2">
          <div className="box-2">
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
          <div className="box-2">
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
          <div className="box-2">
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
          <div className="box-2">
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
          <div className="box-2">
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
          <div className="box-2">
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