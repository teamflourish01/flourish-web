import React from "react";
import "../Portfolio/Portfolio.css";
import portfolio from "../../assets/portfolio.svg"
import Breadcrums from "../../Components/Breadcrums/Breadcrums";
const Portfolio = () => {
  return (
    <>
      <Breadcrums pagename="Portfolio" />
      <div className="portfoilio-100">
  <div className="portfolio-container">
    {/* Left section (form) */}
    <div className="port-left-main">
    <div className="portfolio-left">
    <div className="form-row">
        <input type="text" placeholder=" Name" />
      </div>
      <div className="form-row">
        <input type="text" placeholder="Mobile Number" />
        <input type="text" placeholder="Email" />
      </div>
      <div className="form-row">
        <input type="text" placeholder="Company Name " />
        <input type="text" placeholder="City" />
      </div>
     
      <textarea placeholder="Message"></textarea>
      <button type="submit" className="submit-btn">
        Submit <span className="arrow">➜</span>
      </button>
    </div>
    </div>

    {/* Right section (image) */}
    <div className="portfolio-right-main">
    <div className="portfolio-right">
      <img src={portfolio} alt="" srcset="" />
    </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Portfolio;
