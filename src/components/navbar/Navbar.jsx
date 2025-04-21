import React, { useState, useEffect, useRef } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./navbar.css";
import Logo from "../../assets/images/logo.svg";
import { default as Contact } from "../buttons/contactUsButton/ContactUsButton";

const Menu = ({ closeMenu }) => {
  return (
    <div className="nav-links-mobile">
      <ul>
        <li>
          <Link to="/ " onClick={closeMenu}>
            Home
          </Link>
          <Link to="/culture" onClick={closeMenu}>
            Culture
          </Link>
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
          <Link className="link link--carme" to="/">
            <img src={Logo} alt="logo" />
            <svg className="link__graphic link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                    <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                  </svg>
          </Link>
        </div>
        <div className="navbar-items">
          <div className="nav-links">
            <ul>
              <li>
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `link link--carme ${isActive ? "active" : ""}`
                  }
                >
                  Home
                  <svg className="link__graphic link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                    <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                  </svg>
                </NavLink>

                <NavLink
                  to="/culture"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `link link--carme ${isActive ? "active" : ""}`
                  }
                >
                  Culture
                  <svg className="link__graphic link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                    <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                  </svg>
                </NavLink>
                <NavLink
                  to="/caseStudies"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `link link--carme ${isActive ? "active" : ""}`
                  }
                >
                  Study Case
                  <svg className="link__graphic link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                    <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                  </svg>
                </NavLink>
                <NavLink
                  to="/services"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `link link--carme ${isActive ? "active" : ""}`
                  }
                >
                  Services
                  <svg className="link__graphic link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                    <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                  </svg>
                </NavLink>
                <NavLink
                  to="/packages"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `link link--carme ${isActive ? "active" : ""}`
                  }
                >
                  Packages
                  <svg className="link__graphic link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                    <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                  </svg>
                </NavLink>
                <NavLink
                  to="/about"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `link link--carme ${isActive ? "active" : ""}`
                  }
                >
                  About
                  <svg className="link__graphic link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                    <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                  </svg>
                </NavLink>
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