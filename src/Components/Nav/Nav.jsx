import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../Nav/Nav.css";
import logo from "../../assets/f-logo.svg";
import hicon from "../../assets/ham-icon.svg";
import close from "../../assets/close-icon-nav.svg";
import ServiceNav from "../ServiceNav/ServiceNav";
import TabletNavBar from "../TabletNavBar/TabletNavBar";
import MobileNavBar from "../MobileNavBar/MobileNavBar";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation(); // Get current URL path

   const [logo, setLogo] = useState([]);
  
  
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    let url=process.env.REACT_APP_DEV_URL
  
    const getLogo = async () => {
      try {
        // console.log(url);
        
        setLoading(true);
        const response = await fetch(
          `${url}/logo`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const res = await response.json();
        // console.log(res, "home");
  
        setLogo(res.data[0]); // Store fetched data in state
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }

    useEffect(()=>{
      getLogo();
    })

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setIsDropdownOpen(false);
  };

  const serviceOpen = () => {
    setMenuOpen(true);
  };

  return (
    <>
      <div className="display-in-desk">
        <div className="navbar">
          <div className="navbar-container">
            <div className="logo-c">
            <Link to='/'>
              <img src={`${url}/logo/${logo.logo}`} alt="Logo" />
              </Link>
            </div>
            <div className="h-icon-c" onClick={toggleMenu}>
              <img src={hicon} alt="Hamburger Icon" />
            </div>
          </div>

          <div className={`flex  ${menuOpen ? "open" : "close"}`}>
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
                  // onClick={() => setIsDropdownOpen(true)}
                  onClick={() => {
                    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown state
                    serviceOpen();
                  }}
                >
                  <NavLink
                    to=""
                    className={({ isActive }) =>
                       location.pathname.includes("/service") || location.pathname.includes("/subservice") ? "nav-link active-nav-link" : "nav-link"
                    }
                    // onClick={toggleMenu}
                    onClick={(event) => {
                      event.preventDefault(); // Prevent link navigation
                      toggleMenu(); // Open/close the menu
                    }}
                  >
                    Services <span className="arrow"></span>
                    {/* <div className="dropdown">
                  <ServiceNav />
                </div> */}
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
                {/* <li className="margin-b-30">
                  <NavLink
                    to="/clients"
                    className={({ isActive }) =>
                      isActive ? "nav-link active-nav-link" : "nav-link"
                    }
                    onClick={toggleMenu}
                  >
                    Clients
                  </NavLink>
                </li> */}
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

            <div className="dropdown">
              {isDropdownOpen && <ServiceNav toggleMenu={toggleMenu} />}
            </div>
            <div className="menu-header-navbar">
              <button className="close-btn-navbar" onClick={toggleMenu}>
                <img src={close} alt="Close" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="display-in-tab">
        <TabletNavBar logo={logo.logo}/>
      </div>
      <div className="display-in-mob">
        <MobileNavBar logo={logo.logo}/>
      </div>
    </>
  );
};

export default Nav;
