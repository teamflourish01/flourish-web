import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Nav/Nav.css";
import logo from "../../assets/f-logo.svg";
import hicon from "../../assets/ham-icon.svg";
import close from "../../assets/close-icon-nav.svg";
import ServiceNav from "../ServiceNav/ServiceNav";
import TabNav from "../TabNav/TabNav";

const TabletNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [count, setCount] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleServiceClick = () => {
    setCount(1); // Set count to 1 when clicking Services
    toggleMenu();
  };
  const handleGoBack = () => {
    setCount(0); // Set count to 1 when clicking Services
    toggleMenu();
  };

  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenus = () => {
    setIsMenuOpen((prev) => !prev); // Toggle the menu visibility
  };
  return count === 0 ? ( // Show Nav when count is 0
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
        <div className={`flex ${menuOpen ? "open" : "close"}`}>
          <div className="menu-navbar">
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
              <li
                className="margin-b-30 dropdown-container"
                onClick={handleServiceClick}
              >
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    isActive ? "nav-link nav-link" : "nav-link"
                  }
                  onClick={(event) => {
                    event.preventDefault(); // Prevent link navigation
                    toggleMenu(); // Open/close the menu
                  }}
                >
                  Services <span className="arrow"></span>
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
          <hr className="hr-animation-servicenav " />
          <div className="dropdown">{isDropdownOpen && <ServiceNav />}</div>
          <div className="menu-header-navbar">
            <button className="close-btn-navbar" onClick={toggleMenu}>
              <img src={close} alt="Close" />
            </button>
          </div>
        </div>
      </div>
    </>
  ) : (
    isMenuOpen && (
      <TabNav handleGoBack={handleGoBack} toggleMenus={toggleMenus} />
    )
  );
};

export default TabletNavBar;
