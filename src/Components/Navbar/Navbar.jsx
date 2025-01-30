import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";
import logo from "../../assets/f-logo.svg";
import hicon from "../../assets/ham-icon.svg";
import close from "../../assets/close-icon-nav.svg";
import ServiceNav from "../ServiceNav/ServiceNav";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="logo-c">
            <img src={logo} alt="Logo" />
          </div>
          <div className="h-icon-c" onClick={toggleMenu}>
            <img src={hicon} alt="Hamburger Icon" />
          </div>
        </div>
        <div className={`menu-navbar ${menuOpen ? "open" : "close"}`}>
          <div className="menu-header-navbar">
            <button className="close-btn-navbar" onClick={toggleMenu}>
              <img src={close} alt="Close" />
            </button>
          </div>
          <ul>
            <li className="margin-b-30">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active-nav-link" : "nav-link"
                }
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="margin-b-30">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active-nav-link" : "nav-link"
                }
                onClick={toggleMenu}
              >
                About
              </NavLink>
            </li>
            <li className="margin-b-30 dropdown-container">
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  isActive ? "nav-link active-nav-link" : "nav-link"
                }
                // onClick={toggleMenu}
              >
                Services <span className="arrow"></span>
                <div className="dropdown">
                  <ServiceNav />
                </div>
              </NavLink>
            </li>
            <li className="margin-b-30">
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive ? "nav-link active-nav-link" : "nav-link"
                }
                onClick={toggleMenu}
              >
                Portfolio
              </NavLink>
            </li>
            <li className="margin-b-30">
              <NavLink
                to="/work"
                className={({ isActive }) =>
                  isActive ? "nav-link active-nav-link" : "nav-link"
                }
                onClick={toggleMenu}
              >
                Work
              </NavLink>
            </li>
            <li className="margin-b-30">
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive ? "nav-link active-nav-link" : "nav-link"
                }
                onClick={toggleMenu}
              >
                Blogs
              </NavLink>
            </li>
            <li className="margin-b-30">
              <NavLink
                to="/clients"
                className={({ isActive }) =>
                  isActive ? "nav-link active-nav-link" : "nav-link"
                }
                onClick={toggleMenu}
              >
                Clients
              </NavLink>
            </li>
            <li className="margin-b-30">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active-nav-link" : "nav-link"
                }
                onClick={toggleMenu}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
