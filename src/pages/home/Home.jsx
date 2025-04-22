import React from "react";
import "./home.css";
import "../../App.css";
import { Link } from "react-router-dom";

/*imported components */
import { Navbar } from "../../components/export.js";
import { Project } from "../../components/export.js";
import { Testimonals } from "../../components/export.js";
import { Divider } from "../../components/export.js";
import { ContactUsComponents } from "../../components/export.js";
import { Footer} from "../../components/export.js";
import { Featured } from "../../components/export.js";

// import Services from "../../components/services/Services.jsx";
import Contact from "../../components/buttons/contactUsButton/ContactUsButton.jsx";
import OurServicesButton from "../../components/buttons/ourServices/OurServicesBtn.jsx";
import ContactUsWhitebg from "../../components/buttons/contactUsWB/ContactUsWB.jsx";

// imported images
import { default as Image } from "../../assets/images/headerImage.png";
import {default as Scoping} from "../../assets/images/service-images/scoping.svg";
import {default as Roadmap} from "../../assets/images/service-images/roadmap.svg";
import {default as Development} from "../../assets/images/service-images/development.svg";
import {default as Launch} from "../../assets/images/service-images/launch.svg";
import { default as mobile_image } from "../../assets/images/service-images/mobile.svg";
import { default as frontend_image } from "../../assets/images/service-images/frontend.svg";
import { default as uiux_image } from "../../assets/images/service-images/uiux.svg";
import { default as Backend } from "../../assets/images/service-images/backend.svg";

import useFadeInOnScroll from "../../useFadeInOnScroll.js";



const Home = ({ openCart }) => {

  const [ref, isVisible] = useFadeInOnScroll();

  const handleLeftButtonClick = () => {
    const container = document.querySelector(".container");
    const newPosition = container.scrollLeft - container.offsetWidth;

    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  };

  const handleRightButtonClick = () => {
    const container = document.querySelector(".container");
    const newPosition = container.scrollLeft + container.offsetWidth;

    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  };


  return (
    <div className="home">
      {/* Here starts header section ------------------------------------------------*/}
      <div className="home-header">
      <Navbar openCart={openCart} />

        <div className="home-header_text-holder">
          <p>
            We are a development agency
            </p>
          <h1>
            Comprehensive Digital Solutions to Accelerate Your Performance
          </h1>
          <h4>
            Welcome to the cutting-edge mobile solutions—native and
            cross-platform—with industry experts.
          </h4>

          {/* buttons */}
          <div className="home-header_buttons">
            <Contact />
            <OurServicesButton />
          </div>
        </div>
        <div className="home-header_image-holder">
          <img src={Image} className="home-header_image bouncing" alt="" />
        </div>
      </div>

    <section>
      <div>
        <Featured />
      </div>
    </section>

      {/* Here starts Services section -----------------------------------------------*/}
      <section ref={ref} className={`home-services fade-in ${isVisible ? "visible" : ""}`}>
        <div className="home-services_box">
          <div className="home-services_header">
            <h5 className="bouncing">Our Services</h5>
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

      {/* Here starts our process section */}
      <section>
        <div className="home-process">
          <div className="home-process_header">
            <h5 className="bouncing">Our Process</h5>
            <h1>
              We follow a straightforward yet robust and highly effective
              process.
            </h1>
          </div>

          <div className="home-process_container">
            <div className="home-process_container-box">
              <img src={Scoping} alt="" />
              <div className="home-process_container-box-text">
                <h3>1. Project Scoping</h3>
                <p>
                  Native mobile apps represent a focal point in our business. We
                  boast an extensive pool of mobile development talent and a.
                </p>
              </div>
            </div>
            <div className="home-process_container-box">
              <img src={Roadmap} alt="" />
              <div className="home-process_container-box-text">
                <h3>2. Roadmap planning</h3>
                <p>
                  Native mobile apps represent a focal point in our business. We
                  boast an extensive pool of mobile development talent and a.
                </p>
              </div>
            </div>
          </div>
          <div className="home-process_container">
            <div className="home-process_container-box">
              <img src={Development} alt="" />
              <div className="home-process_container-box-text">
                <h3>3. Development Execution</h3>
                <p>
                  Native mobile apps represent a focal point in our business. We
                  boast an extensive pool of mobile development talent and a.
                </p>
              </div>
            </div>
            <div className="home-process_container-box">
              <img src={Launch} alt="" />
              <div className="home-process_container-box-text">
                <h3>4. Launch & Scale</h3>
                <p>
                  Native mobile apps represent a focal point in our business. We
                  boast an extensive pool of mobile development talent and a.
                </p>
              </div>
            </div>
          </div>
          <span className="spacer"></span>
          <Contact />
        </div>
      </section>

      {/* Here starts portfolio section */}

      <section>
        <div className="home-portfolio">
          <div className="home-portfolio_container">
            <div className="home-portfolio_header">
              <h5 className="bouncing">Case Studies</h5>
              <h1>
                Discover how we had helped world class companies in the past.
              </h1>
            </div>
            <div className="home-portfolio_buttons">
              <div className="contact-btn-portfolio">
                <Link to="/contact">Contact Us</Link>
              </div>
              <div className="our-services-btn-outline-white">
                <Link to="/services">Our Services</Link>
              </div>
            </div>
          </div>
          <Project />
          <Project />
        </div>
      </section>

      {/* Here starts testimonals section */}
      <section>
        <Testimonals />
        <Divider />
      </section>

      {/* Here ends contact section */}
      <section>
        <ContactUsComponents />
      </section>

      {/* Here starts footer */}

      <Footer />
    </div>
  );
};

export default Home;