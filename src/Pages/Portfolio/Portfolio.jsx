import React, { useState } from "react";
import axios from "axios";

import "../Portfolio/Portfolio.css";
import portfolio from "../../assets/portfolio.svg";
import Breadcrums from "../../Components/Breadcrums/Breadcrums";
import YellowWhiteBtn from "../../Components/YellowWhiteBtn/YellowWhiteBtn";
import BannerTop from "../../Components/service/BannerTop/BannerTop";
const Portfolio = () => {
  let url = process.env.REACT_APP_DEV_URL;

  const [formdata, setformdata] = useState({
    name: "",
    mobile: "",
    email: "",
    company: "",
    city: "",
    message: "",
  });
  const handleChange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/email/portfolio`, formdata);
      alert("PDF successfully sent to email!");
      setformdata({
        name: "",
        mobile: "",
        email: "",
        company: "",
        city: "",
        message: "",
      });
      console.log("response", response);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send email.");
    }
  };
  return (
    <>
      <BannerTop btitle="Portfolio" />
      <Breadcrums pagename="Portfolio" />
      <div className="portfoilio-100">
        <div className="portfolio-container">
          {/* Left section (form) */}
          <div className="port-left-main">
            <form className="portfolio-left" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formdata.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  name="mobile"
                  value={formdata.mobile}
                  placeholder="Mobile Number"
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formdata.email}
                  placeholder="Email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  name="company"
                  value={formdata.company}
                  placeholder="Company Name"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formdata.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                value={formdata.message}
                onChange={handleChange}
              ></textarea>
              <div className="yellow-btn">
              <YellowWhiteBtn btnName="Submit" />
              </div>
            </form>
          </div>

          {/* Right section (image) */}
          <div className="portfolio-right-main">
            <div className="portfolio-right">
              <img src={portfolio} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
