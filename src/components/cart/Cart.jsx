// CartDrawer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

import Close from "../../assets/images/close.svg";

const Cart = ({ isOpen, onClose }) => {
    return (
        <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
            <button className="close-btn" onClick={onClose}>
                <img src={Close} alt="" />
            </button>
            <h2>Your Cart</h2>
            <h4>No Items Found</h4>
            <Link className="back-to-packages-cart-btn" to="/packages ">
                Go to Packages
            </Link>

        </div>
    );
};

export default Cart;
