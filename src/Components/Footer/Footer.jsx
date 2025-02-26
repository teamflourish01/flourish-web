import React, { useEffect, useState } from "react";
import logo from "../../assets/f-logo.svg";
import "../Footer/Footer.css";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { SlSocialInstagram } from "react-icons/sl";
import { LuFacebook } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import { Link, NavLink, useParams } from "react-router-dom";
import call from "../../assets/call.svg";
import mail from "../../assets/mail.svg";
import location from "../../assets/location.svg";

const Footer = () => {
  const { slug } = useParams();

  const [footerContent, setFooterContent] = useState([]);
  const [service, setService] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let url = process.env.REACT_APP_DEV_URL;




  const [logo, setLogo] = useState([]);

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

      setLogo(res.data[0].logo); // Store fetched data in state
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(()=>{
    getLogo();
  },[])
  const getService = async () => {
    try {
      console.log(url);

      setLoading(true);
      const response = await fetch(`${url}/service/`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const res = await response.json();
      console.log(res, "dattta");

      setService(res.data); // Store fetched data in state
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  const getData = async () => {
    setLoading(true);
    setError(null); // Reset error before fetching new data

    try {
      console.log("Fetching data from:", `${url}/footer`);
      const response = await fetch(`${url}/footer`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const res = await response.json();
      setFooterContent(res.data[0] || []); // Handle possible undefined data
      console.log("Fetched footer content:", res.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
    getService();
  }, [url]);

  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-column-1">
            <div className="logo-c">
              <Link to="/">
                <img src={`${url}/logo/${logo}`} alt="Logo" />
              </Link>
            </div>
            <p className="f-desc-txt">{footerContent?.text}</p>
            <hr className="hr-line-footer" />
            <div className="social-icon">
              <div className="wp-icon">
                <a
                  href={`https://wa.me/${footerContent.whatsapp}`}
                  target="_blank"
                >
                  <PiWhatsappLogoLight />
                </a>
              </div>
              <a href={footerContent?.insta} target="_blank">
                <SlSocialInstagram />
              </a>
              <a href={footerContent?.facebook} target="_blank">
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
              </a>
              <a href={footerContent?.linkdin} target="_blank">
                <SlSocialLinkedin />
              </a>
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
                    onClick={() => window.scrollTo(0, 0)}
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
                    onClick={() => window.scrollTo(0, 0)}
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
                    onClick={() => window.scrollTo(0, 0)}
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
                    onClick={() => window.scrollTo(0, 0)}
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
                    onClick={() => window.scrollTo(0, 0)}
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
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-column-3">
              <p className="title-head-f">Services</p>
              <ul>
                {service?.map((s, index) => (
                  <li className="margin-b-8-f" key={index}>
                    <NavLink
                      to={`/service/${s?.slug}`} // Make sure 'slug' comes from 's'
                      className={({ isActive }) =>
                        isActive
                          ? "footer-link active-footer-link"
                          : "footer-link"
                      }
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {s?.name} {/* Assuming you want dynamic service names */}
                    </NavLink>
                  </li>
                ))}

                {/* <li className="margin-b-8-f">
                  <NavLink
                    to="-"
                    className={({ isActive }) =>
                      isActive
                        ? "footer-link active-footer-link"
                        : "footer-link"
                    }
                    onClick={() => window.scrollTo(0, 0)}
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
                    onClick={() => window.scrollTo(0, 0)}
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
                    onClick={() => window.scrollTo(0, 0)}
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
                    onClick={() => window.scrollTo(0, 0)}
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
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Strategy and Consultation
                  </NavLink>
                </li> */}
              </ul>
            </div>
            <div className="footer-column-4">
              <p className="title-head-f">Contact Info</p>
              <ul>
                <a
                  href={`tel:${footerContent?.mobile}`}
                  target="_blank"
                  className="text-deco"
                >
                  <li className="margin-b-8-f flex-con-info-f">
                    <img src={call} alt="" />
                    <p className="con-info-text">{footerContent?.mobile}</p>
                  </li>
                </a>
               
                
                <a
                  href={`mailto:${footerContent?.mail}`}
                  target="_blank"
                  className="text-deco"
                >
                  <li className="margin-b-8-f1 flex-con-info-f">
                    <img src={mail} alt="" />
                    <p className="con-info-text">{footerContent?.mail}</p>
                  </li>
                </a>
              


                
                <a
                  href={footerContent?.address_url}
                  target="_blank"
                  className="text-deco"
                >
                  <li className="margin-b-8-f  flex-con-info-f-l">
                    <div className="loc-top-p">
                      <img src={location} alt="" />
                    </div>
                    <p className="con-info-text">
                      {footerContent?.address}
                      {/* A-206, PNTC, radio mirchi road,
                    <br /> vejalpur, Ahmedabad 380015 */}
                    </p>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
