import React, { useEffect, useState } from "react";
import "../ServiceNav/ServiceNav.css";
import { NavLink } from "react-router-dom";

const ServiceNav = ({ toggleMenu }) => {
  let url = process.env.REACT_APP_DEV_URL;
  const [service, setService] = useState([]);

  const getData = async () => {
    try {
      let data = await fetch(`${url}/service/`);
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
      <div className="service-container">
        {service?.map((e, index) => (
          <div className="service-category" key={index}>
            <h3>
              <NavLink
                to={`/service/${e?.slug}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-deco nav-link-s active-nav-link-s"
                    : "nav-link-s"
                }
                onClick={() => toggleMenu()} // Close menu when clicked
              >
                {e?.name}
              </NavLink>
            </h3>
            {e.subservices && e.subservices.length > 0 && (
              <ul>
                {e.subservices.map((subname, subIndex) => (
                  <li key={subIndex}>
                    <NavLink
                      to={`/subservice/${subname?.slug}`}
                      className={({ isActive }) =>
                        isActive
                          ? " text-deco nav-link-s active-nav-link-s"
                          : "nav-link-s"
                      }
                      onClick={() => toggleMenu()} // Close menu when subservice clicked
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
    </>
  );
};

export default ServiceNav;
