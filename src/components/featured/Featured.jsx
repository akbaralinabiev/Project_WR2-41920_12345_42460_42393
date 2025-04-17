import React from "react";
import "./featured.css";


import { default as Shopify } from "../../assets/images/companies/shopify.svg";
import { default as Tinder } from "../../assets/images/companies/tinder.svg";
import { default as Dropbox } from "../../assets/images/companies/dropbox.svg";
import { default as Hubspot } from "../../assets/images/companies/hubspot.svg";
import { default as Medium } from "../../assets/images/companies/medium.svg";

export const Featured = () => {

    return (
        <div className="featured-main">
            <h3>Trusted by leading brands like</h3>
            <div className="featured">
                <div className="featured-companies">
                    <a href="#0">
                        <img src={Shopify} alt="" />
                    </a>
                    <a href="#0">
                        <img src={Tinder} alt="" />
                    </a>
                    <a href="#0">
                        <img src={Dropbox} alt="" />
                    </a>
                    <a href="#0">
                        <img src={Hubspot} alt="" />
                    </a>
                    <a href="#0">
                        <img src={Medium} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Featured; 