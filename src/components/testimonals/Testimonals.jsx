import React from "react";
import "./testimonals.css";

import {default as Client} from "../../assets/images/client1.svg";


export default function Testimonals() {
  const handleLeftButtonClick = () => {
    const container = document.querySelector(".testimonlas-container");
    const newPosition = container.scrollLeft - container.offsetWidth;

    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  };

  const handleRightButtonClick = () => {
    const container = document.querySelector(".testimonlas-container");
    const newPosition = container.scrollLeft + container.offsetWidth;

    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="testimonals">
      <section className="testimonals-services">
        <div className="testimonals-services_box">
          <div className="testimonals-services_header">
            <h5>Testimonals</h5>
            <h1>Don’t take our word for it. See what our clients say.</h1>
          </div>
          <div className="testimonals-buttons">
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

        <div className="testimonlas-container">
          <div className="box">
            <h5>"Mobile App Development"</h5>
            <p>
              Incredible results! Working with Appbuild has been a game-changer
              for our business. Their expertise and dedication have truly
              elevated our digital presence. Highly recommended!
            </p>
            <div className="testimonlas-client">
              <img src={Client} alt="" />
              <div className="testimonlas-client_details">
                <h5>John Carter</h5>
                <p>Head of Product Design at Google</p>
              </div>
            </div>
          </div> 
          <div className="box">
            <h5>“One of the best agencies”</h5>
            <p>
              Incredible results! Working with Appbuild has been a game-changer
              for our business. Their expertise and dedication have truly
              elevated our digital presence. Highly recommended!
            </p>
            <div className="testimonlas-client">
              <img src={Client} alt="" />
              <div className="testimonlas-client_details">
                <h5>Sophia Chen</h5>
                <p>Founder and CEO</p>
              </div>
            </div>
          </div>
          <div className="box">
            <h5>“True Experts in UI/UX Design”</h5>
            <p>
              Incredible results! Working with Appbuild has been a game-changer
              for our business. Their expertise and dedication have truly
              elevated our digital presence. Highly recommended!
            </p>
            <div className="testimonlas-client">
              <img src={Client} alt="" />
              <div className="testimonlas-client_details">
                <h5>Emma Thompson</h5>
                <p>Chief Marketing Officer</p>
              </div>
            </div>
          </div>
          <div className="box">
            <h5>“True Experts in UI/UX Design”</h5>
            <p>
              Incredible results! Working with Appbuild has been a game-changer
              for our business. Their expertise and dedication have truly
              elevated our digital presence. Highly recommended!
            </p>
            <div className="testimonlas-client">
              <img src={Client} alt="" />
              <div className="testimonlas-client_details">
                <h5>Alex Rodriguez</h5>
                <p>Creative Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}