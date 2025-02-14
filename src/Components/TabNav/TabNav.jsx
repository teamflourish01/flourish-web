import React, { useEffect, useState } from "react";
import "../TabNav/TabNav.css";
import orgarw from "../../assets/orgleft.svg";
import closebtn from "../../assets/close-icon-nav.svg";
import { NavLink } from "react-router-dom";

const TabNav = ({ closeAllMenus, goBackToMainMenu }) => {
  let url = process.env.REACT_APP_DEV_URL;
  const [service, setService] = useState([]);

  const getData = async () => {
    try {
      let data = await fetch(`${url}/service`);
      data = await data.json();
      console.log(data.data, "service nav");

      setService(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="service-tabnav">
        <div className="go-back-flex">
          <div className="go-back-txt-flex" onClick={goBackToMainMenu}>
            <img src={orgarw} alt="" />
            <div className="org-go-back">Go Back</div>
          </div>
          {/* Close button with toggleMenu function */}
          <img
            src={closebtn}
            alt="Close"
            // onClick={toggleMenus}
            onClick={closeAllMenus}
            className="close-button"
            style={{ cursor: "pointer" }} // Ensures it's clickable
          />
        </div>
        <div className="service-container-tab">
          {service?.map((e, index) => (
            <div className="service-category-tab" key={index}>
              <h3>
                <NavLink
                  to={`/service/${e?.slug}`}
                  className={({ isActive }) =>
                    isActive ? "nav-link-s active-nav-link-s" : "nav-link-s"
                  }
                  onClick={closeAllMenus}
                >
                  {e?.name}
                </NavLink>
              </h3>

              {e?.subservices && e?.subservices.length > 0 && (
                <ul>
                  {e?.subservices?.map((subname, subIndex) => (
                    <li key={subIndex}>
                      <NavLink
                        to={`/subservice/${subname?.slug}`}
                        className={({ isActive }) =>
                          isActive
                            ? "nav-link-s active-nav-link-s"
                            : "nav-link-s"
                        }
                        onClick={closeAllMenus}
                      >
                        {subname?.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* <div className="service-category-tab">
          <h3>Branding</h3>
          <ul>
            <li>
              <NavLink
                to="/brand-positioning"
                className={({ isActive }) =>
                  isActive ? "nav-link-s active-nav-link-s" : "nav-link-s"
                }
                onClick={toggleMenu}
              >
                Brand Positioning
              </NavLink>
            </li>
            <li>Brand Story</li>
            <li>Brand Messaging</li>
            <li>Brand Theme</li>
            <li>Digital Branding</li>
            <li>Brand Identity</li>
          </ul>
        </div>

        <div className="service-category-tab">
          <h3>Development</h3>
          <ul>
            <li>Website Development</li>
            <li>App Development</li>
            <li>UI/UX Development</li>
            <li>Software Development</li>
          </ul>
        </div>

        <div className="hr-animation-servicenav-tab"></div>

        <div className="service-category-tab">
          <h3>Digital Marketing</h3>
          <ul>
            <li>Social Media Marketing</li>
            <li>Influencer Marketing</li>
            <li>Email Marketing</li>
            <li>SEO</li>
            <li>Meta And Google Ads</li>
            <li>Content Marketing</li>
            <li>WhatsApp Marketing</li>
            <li>Marketing Automation</li>
          </ul>
        </div>

        <div className="service-category-tab">
          <h3>Strategy and Consultation</h3>
          <ul>
            <li>Market Research</li>
            <li>Competitor Analysis</li>
            <li>Audience Segmentation</li>
            <li>Content Strategy Development</li>
            <li>SEO Strategy</li>
            <li>Digital Marketing Strategy</li>
            <li>Social Media Strategy</li>
            <li>Analytics Reporting</li>
            <li>Digital Transformation Roadmap Creation</li>
          </ul>
        </div> */}
      </div>
      {/* </div> */}
    </>
  );
};

export default TabNav;
