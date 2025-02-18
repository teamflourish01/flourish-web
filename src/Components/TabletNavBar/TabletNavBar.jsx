import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../Nav/Nav.css";
import logo from "../../assets/f-logo.svg";
import hicon from "../../assets/ham-icon.svg";
import close from "../../assets/close-icon-nav.svg";
import ServiceNav from "../ServiceNav/ServiceNav";
import TabNav from "../TabNav/TabNav";

const TabletNavBar = ({logo}) => {
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
  const location = useLocation(); // Get current URL path
  let url = process.env.REACT_APP_DEV_URL;

  // Toggle Main Menu
  const toggleMainMenu = () => {
    setIsMainMenuOpen(!isMainMenuOpen);
    setIsServiceMenuOpen(false); // Close Service Menu when toggling main menu
  };

  // Open Service Menu
  const openServiceMenu = () => {
    setIsServiceMenuOpen(true);
  };

  // Go Back to Main Menu
  const goBackToMainMenu = () => {
    setIsServiceMenuOpen(false);
  };

  // Close Everything (Main Menu + Service Menu)
  const closeAllMenus = () => {
    setIsMainMenuOpen(false);
    setIsServiceMenuOpen(false);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <Link to="/">
            <div className="logo-c">
              <img src={`${url}/logo/${logo}`} alt="Logo" />
            </div>
          </Link>
          <div className="h-icon-c" onClick={toggleMainMenu}>
            <img src={hicon} alt="Hamburger Icon" />
          </div>
        </div>
        <div
          className={`flex ${isMainMenuOpen ? "open" : "close"}`}
          style={{ padding: `${isServiceMenuOpen ? "0px" : "50px"}` }}
        >
          {isMainMenuOpen && !isServiceMenuOpen && (
            <div className="menu-navbar">
              <div className="menu-header-navbar">
                <button className="close-btn-navbar" onClick={closeAllMenus}>
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
                    onClick={closeAllMenus}
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
                    onClick={closeAllMenus}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="margin-b-30 dropdown-container">
                  <NavLink
                    to=""
                    className={({ isActive }) =>
                      location.pathname.includes("/service") ||
                      location.pathname.includes("/subservice")
                        ? "nav-link active-nav-link"
                        : "nav-link"
                    }
                    onClick={openServiceMenu}
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
                    onClick={closeAllMenus}
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
                    onClick={closeAllMenus}
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
                    onClick={closeAllMenus}
                  >
                    Blogs
                  </NavLink>
                </li>
                <li className="margin-b-30">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? "nav-link active-nav-link" : "nav-link"
                    }
                    onClick={closeAllMenus}
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
          {isServiceMenuOpen && (
            <TabNav
              goBackToMainMenu={goBackToMainMenu}
              closeAllMenus={closeAllMenus}
            />
          )}

          {/* <hr className="hr-animation-servicenav " /> */}
          {/* <div className="dropdown">{isDropdownOpen && <ServiceNav />}</div> */}
        </div>
      </div>
    </>
  );
};

export default TabletNavBar;
