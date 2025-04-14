import React from "react";
import "./packages.css";
import { Link } from "react-router-dom";

// imported Components
import { default as Navbar } from "../../components/navbar/Navbar";
import { ContactUsComponents } from "../../components/export.js";
import { Footer } from "../../components/export.js";
import { Divider } from "../../components/export.js";

// imported images
import { default as frontend_image } from "../../assets/images/service-images/frontend.svg";
import { default as checkbox } from "../../assets/images/Vector.svg";

export const Packages = () => {
  return (
    <div>
      <div className="packages">
        <Navbar />
        <div className="packages-header">
          <div className="packages-header-text">
            <h5>Pricing</h5>
            <h1>Pricing for all kinds of businesses and requirements.</h1>
            <p>
              From startups to enterprises, our flexible plans cater to diverse
              needs, ensuring you find the perfect fit. Your success, our
              priority—choose a plan that aligns with your goals.
            </p>
          </div>
        </div>

        <div className="package-container">
          <div className="package-box">
            <img src={frontend_image} alt="" />
            <h5>Standart</h5>
            <p>
              A plan created for small development tasks and simple feature
              additions.
            </p>
            <h2 className="package-box-price">$ 5.000 USD</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width=""
              height="1"
              viewBox="0 0 274 1"
              fill="none"
              className="divider-line"
            >
              <path d="M273.917 0.5L0.583153 0.499988" stroke="#CCCBFF" />
            </svg>
            <div className="price-cons">
              <ul>
                <li>
                  <img src={checkbox} alt="" />
                  100 Hours of Development Time
                </li>
                <li>
                  <img src={checkbox} alt="" />
                  Extra hours at $50/hr
                </li>
                <li>
                  <img src={checkbox} alt="" />
                  Frontend and Backend only
                </li>
                <li>
                  <img src={checkbox} alt="" />
                  Normal Support
                </li>
              </ul>
            </div>

            <div class="dropdown">
              <select>
                <option selected disabled>
                  Select Subscription Duration
                </option>
                <option value="1-month">1 Month</option>
                <option value="3-month">3 Months</option>
                <option value="6-month">6 Months</option>
              </select>
            </div>

            {/* Button to attach package name on contact page when clicked */}
            <div className="contact-btn-long">
              <Link
                to={{
                  pathname: "/contact",
                  state: { package: "Standart package" },
                }}
              >
                Select Standart
              </Link>
            </div>

            <div className="our-services-btn-long">
              <Link to="/products/standart">Learn More</Link>
            </div>
          </div>
          <div className="package-box">
            <img src={frontend_image} alt="" />
            <h5>Premium</h5>
            <p>
              Projects with advanced features and priority support for seamless
              development.
            </p>
            <h2 className="package-box-price">$ 8.000 USD</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width=""
              height="1"
              viewBox="0 0 274 1"
              fill="none"
              className="divider-line"
            >
              <path d="M273.917 0.5L0.583153 0.499988" stroke="#CCCBFF" />
            </svg>
            <div className="price-cons">
              <ul>
                <li>
                  <img src={checkbox} alt="" />
                  250 Hours of Development Time
                </li>
                <li>
                  <img src={checkbox} alt="" />
                  Extra hours at $32/hr
                </li>
                <li>
                  <img src={checkbox} alt="" />
                  Enhanced Performance
                </li>
                <li>
                  <img src={checkbox} alt="" />
                  VIP Support
                </li>
              </ul>
            </div>

            <div class="dropdown">
              <select>
                <option selected disabled>
                  Select Subscription Duration
                </option>
                <option value="1-month">1 Month</option>
                <option value="3-month">3 Months</option>
                <option value="6-month">6 Months</option>
              </select>
            </div>

            {/* Button to attach package name on contact page when clicked */}
            <div className="contact-btn-long">
              <Link
                to={{
                  pathname: "/contact",
                  state: { package: "Premium package" },
                }}
              >
                Select Premium
              </Link>
            </div>

            <div className="our-services-btn-long">
              <Link to="/products/premium">Learn More</Link>
            </div>
          </div>
          <div className="package-box">
            <img src={frontend_image} alt="" />
            <h5>Elite</h5>
            <p className="package-box-price">
              Solutions for complex projects, reaching the pinnacle of our
              premium services.
            </p>
            <h2 className="package-box-price">$ 15.000 USD</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width=""
              height="1"
              viewBox="0 0 274 1"
              fill="none"
              className="divider-line"
            >
              <path d="M273.917 0.5L0.583153 0.499988" stroke="#CCCBFF" />
            </svg>

            <div className="price-cons">
              <ul>
                <li>
                  <img src={checkbox} alt="" />
                  500 Hours of Development Time
                </li>
                <li>
                  <img src={checkbox} alt="" />
                  Extra hours at $30/hr
                </li>
                <li>
                  <img src={checkbox} alt="" />
                  Luxury Design and Branding
                </li>
                <li>
                  <img src={checkbox} alt="" />
                  Dedicated Team of Devs
                </li>
              </ul>
            </div>

            <div class="dropdown">
              <select>
                <option selected disabled>
                  Select Subscription Duration
                </option>
                <option value="1-month">1 Month</option>
                <option value="3-month">3 Months</option>
                <option value="6-month">6 Months</option>
              </select>
            </div>

            {/* Button to attach package name on contact page when clicked */}
            <div className="contact-btn-long">
              <Link
                to={{
                  pathname: "/contact",
                  state: { package: "Elite Package" },
                }}
              >
                Select Elite
              </Link>
            </div>

            <div className="our-services-btn-long">
              <Link to="/products/elite">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
      <Divider />
      <ContactUsComponents />
      <Footer />
    </div>
  );
};

export default Packages;