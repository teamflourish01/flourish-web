import React from "react";
import logo from "../../assets/f-logo.svg";
import "../Footer/Footer.css";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { SlSocialInstagram } from "react-icons/sl";
import { LuFacebook } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import call from "../../assets/call.svg";
import mail from "../../assets/mail.svg";
import location from "../../assets/location.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-column-1">
            <div className="logo-c">
              <img src={logo} alt="Logo" />
            </div>
            <p className="f-desc-txt">
              Flourish is a full-service branding and digital marketing agency
              based in Ahmedabad, dedicated to helping businesses grow and
              thrive. Partner with us to elevate your brand and make a lasting
              impact in today's digital world.
            </p>
            <hr className="hr-line-footer" />
            <div className="social-icon">
              <div className="wp-icon">
                <PiWhatsappLogoLight />
              </div>
              <SlSocialInstagram />
              <div className="fbi">
                <svg
                  width="35"
                  height="37"
                  viewBox="0 0 14 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.1304 1.14258H9.90014C8.47228 1.14258 7.1029 1.70979 6.09325 2.71944C5.0836 3.72909 4.51638 5.09847 4.51638 6.52633V9.75658H1.28613V14.0636H4.51638V22.6776H8.82339V14.0636H12.0536L13.1304 9.75658H8.82339V6.52633C8.82339 6.24076 8.93683 5.96688 9.13876 5.76495C9.34069 5.56302 9.61457 5.44958 9.90014 5.44958H13.1304V1.14258Z"
                    stroke="rgba(255, 255, 255, 0.5)"
                    strokeWidth="1.14286"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <SlSocialLinkedin />
            </div>
          </div>
          <div className="res-1024">
            <div className="footer-column-2">
              <p className="title-head-f">Quick Links</p>
              <ul>
                <li className="margin-b-8-f">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "footer-link active-footer-link"
                        : "footer-link"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="margin-b-8-f">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "footer-link active-footer-link"
                        : "footer-link"
                    }
                  >
                    About Us
                  </NavLink>
                </li>
                {/* <li className="margin-b-8-f dropdown-container">
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      isActive
                        ? "footer-link active-footer-link"
                        : "footer-link"
                    }
                  >
                    Services
                  </NavLink>
                </li> */}
                <li className="margin-b-8-f">
                  <NavLink
                    to="/portfolio"
                    className={({ isActive }) =>
                      isActive
                        ? "footer-link active-footer-link"
                        : "footer-link"
                    }
                  >
                    Portfolio
                  </NavLink>
                </li>
                <li className="margin-b-8-f">
                  <NavLink
                    to="/work"
                    className={({ isActive }) =>
                      isActive
                        ? "footer-link active-footer-link"
                        : "footer-link"
                    }
                  >
                    Work
                  </NavLink>
                </li>
                <li className="margin-b-8-f">
                  <NavLink
                    to="/blogs"
                    className={({ isActive }) =>
                      isActive
                        ? "footer-link active-footer-link"
                        : "footer-link"
                    }
                  >
                    Blogs
                  </NavLink>
                </li>
                {/* <li className="margin-b-8-f">
                  <NavLink
                    to="/clients"
                    className={({ isActive }) =>
                      isActive
                        ? "footer-link active-footer-link"
                        : "footer-link"
                    }
                  >
                    Clients
                  </NavLink>
                </li> */}
                <li className="margin-b-8-f">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "footer-link active-footer-link"
                        : "footer-link"
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-column-3">
              <p className="title-head-f">Services</p>
              <ul>
                <li className="margin-b-8-f">
                  <NavLink
                    to="/service/Branding"
                    className={({ isActive }) =>
                      isActive
                        ? "footer-link active-footer-link"
                        : "footer-link"
                    }
                  >
                    Branding
                  </NavLink>
                </li>
                <li className="margin-b-8-f">
                  <NavLink
                    to="-"
                    className={({ isActive }) =>
                      isActive
                        ? "footer-link active-footer-link"
                        : "footer-link"
                    }
                  >
                    Visual Experience
                  </NavLink>
                </li>
                <li className="margin-b-8-f dropdown-container">
                  <NavLink
                    to="-"
                    className={({ isActive }) =>
                      isActive
                        ? "footer-link active-footer-link"
                        : "footer-link"
                    }
                  >
                    Content Creation
                  </NavLink>
                </li>
                <li className="margin-b-8-f">
                  <NavLink
                    to="-"
                    className={({ isActive }) =>
                      isActive
                        ? "footer-link active-footer-link"
                        : "footer-link"
                    }
                  >
                    Digital Marketing
                  </NavLink>
                </li>
                <li className="margin-b-8-f">
                  <NavLink
                    to="-"
                    className={({ isActive }) =>
                      isActive
                        ? "footer-link active-footer-link"
                        : "footer-link"
                    }
                  >
                    Web/App Development
                  </NavLink>
                </li>
                <li className="margin-b-8-f">
                  <NavLink
                    to="-"
                    className={({ isActive }) =>
                      isActive
                        ? "footer-link active-footer-link"
                        : "footer-link"
                    }
                  >
                    Strategy and Consultation
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-column-4">
              <p className="title-head-f">Contact Info</p>
              <ul>
                <li className="margin-b-8-f flex-con-info-f">
                  <img src={call} alt="" />
                  <p className="con-info-text">+91 94996 19901</p>
                </li>
                <li className="margin-b-8-f flex-con-info-f">
                  <img src={mail} alt="" />
                  <p className="con-info-text">info@teamflourish.co</p>
                </li>
                <li className="margin-b-8-f  flex-con-info-f-l">
                  <div className="loc-top-p">
                    <img src={location} alt="" />
                  </div>
                  <p className="con-info-text">
                    A-206, PNTC, radio mirchi road,
                    <br /> vejalpur, Ahmedabad 380015
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
