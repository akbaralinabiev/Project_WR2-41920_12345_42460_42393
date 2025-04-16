import React, { useState, useEffect, useRef } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../../assets/images/logo.svg";
import { default as Contact } from "../buttons/contactUsButton/ContactUsButton";

const Menu = ({ closeMenu }) => {
  return (
    <div className="nav-links-mobile">
      <ul>
        <li>
          <Link to="/caseStudies" onClick={closeMenu}>
            Study Case
          </Link>
          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>
          <Link to="/packages" onClick={closeMenu}>
            Packages
          </Link>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuRef = useRef(null);

  const closeMenu = () => {
    setToggleMenu(false);
    document.body.style.overflow = "auto";
  };

  const openMenu = () => {
    setToggleMenu(true);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-items">
          <div className="nav-links">
            <ul>
              <li>
                <Link to="/caseStudies" onClick={closeMenu}>
                  Study Case
                </Link>
                <Link to="/services" onClick={closeMenu}>
                  Services
                </Link>
                <Link to="/packages" onClick={closeMenu}>
                  Packages
                </Link>
                <Link to="/about" onClick={closeMenu}>
                  About
                </Link>
              </li>
            </ul>
          </div>
          <Contact />
        </div>
        <div className="navbar-menu" style={{ zIndex: 99 }}>
          {toggleMenu ? (
            <div className="close-button" onClick={closeMenu}>
              Close
            </div>
          ) : (
            <RiMenu3Line
              color="#3632FF"
              size={27}
              onClick={toggleMenu ? closeMenu : openMenu}
              className="menu-button"
              style={{ cursor: "pointer" }}
            />
          )}
          <div
            className={`navbar-menu_container ${toggleMenu ? "" : "hidden"}`}
            ref={menuRef}
          >
            <Menu closeMenu={closeMenu} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;