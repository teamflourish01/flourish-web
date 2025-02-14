import React, { useEffect, useState } from "react";
import "../MobNav/MobNav.css";
import { IoIosArrowDown } from "react-icons/io";
import orgarw from "../../assets/orgleft.svg";
import closebtn from "../../assets/close-icon-nav.svg";
import { NavLink } from "react-router-dom";

const MobNav = ({ closeAllMenus, goBackToMainMenu }) => {
  const [openCategory, setOpenCategory] = useState(true);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

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
    <div className="mobile-nav">
      <div className="go-back-flex-mobnav">
        <div className="go-back-txt-flex-mobnav" onClick={goBackToMainMenu}>
          <img src={orgarw} alt="Back Arrow" />
          <div className="org-go-back-mobnav">Go Back</div>
        </div>
        <img
          src={closebtn}
          alt="Close"
          onClick={closeAllMenus}
          className="close-button"
        />
      </div>

      <div className="categories-container">
        {service?.map((category, index) => (
          <div key={index} className="category">
            <button
              onClick={() => toggleCategory(index)}
              className="category-button-mobnav"
            >
              <span>
                {" "}
                <NavLink
                  to={`/service/${category?.slug}`}
                  className="category-button-mobnav"
                  // className={({ isActive }) =>
                  //   isActive
                  //     ? "text-deco nav-link-s active-nav-link-s"
                  //     : "nav-link-s"
                  // }
                >
                  {category?.name}
                </NavLink>
              </span>
              <IoIosArrowDown
                className={`chevron-icon ${
                  openCategory === index ? "rotate" : ""
                }`}
              />
            </button>

            {category?.subservices && (
              <div
                className={`category-items ${
                  openCategory === index ? "open" : ""
                }`}
                onClick={closeAllMenus}
              >
                {category.subservices.map((item, itemIndex) => (
                  <div key={itemIndex} className="category-item">
                    <NavLink
                      to={`/subservice/${item?.slug}`}
                      className={({ isActive }) =>
                        isActive
                          ? "text-deco nav-link-s active-nav-link-s"
                          : "nav-link-s"
                      }
                    >
                      {item?.name}
                    </NavLink>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobNav;
