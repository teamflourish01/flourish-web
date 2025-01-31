import React, { useEffect } from "react";
import "../YourGrowth/YourGrowth.css";
import thriving from "../../assets/thriving.svg";
import strategic from "../../assets/strategic.svg";
import growth from "../../assets/growth.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const YourGrowth = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with desired settings
  }, []);

  return (
    <>
      <div className="your-growth">
        <div className="your-growth-container">
          <p className="your-f-our-c">
            <span className="stroke-txt">Your</span> Growth,
            <span className="stroke-txt"> Our </span>Ethics
          </p>
          <p className="your-f-our-c-mobile">
            <span className="stroke-txt">Your</span> Growth,<br/>
            <span className="stroke-txt"> Our </span>Ethics
          </p>
          <p className="desc-y-o" data-aos="fade-up" data-aos-delay="200">
            At Flourish, we believe that brands, like ideas, don’t just
            grow—they thrive. Our name reflects our commitment to nurturing
            brands, empowering businesses, and crafting identities that make an
            impact.
          </p>
          <p className="flourish-means">Flourish means</p>
          <div className="growth-boxs">
            <div className="growth-box" data-aos="fade-up" data-aos-delay="500">
              <img src={thriving} alt="" />
              <p className="title-txt-growth">Thriving, not just surviving </p>
              <p className="desc-txt-growth">
                We go beyond ordinary branding. Our strategic branding solutions
                are designed to create bold, timeless, and results-driven
                marketing campaigns.
              </p>
              <hr className="hr-width" />
            </div>
            <div className="growth-box" data-aos="fade-up" data-aos-delay="700">
              <img src={strategic} alt="" />
              <p className="title-txt-growth">Strategic creativity </p>
              <p className="desc-txt-growth">
                Every campaign, design, and brand identity we create is rooted
                in data-driven innovation and consumer insights.
              </p>
              <hr className="hr-width" />
            </div>
            <div className="growth-box" data-aos="fade-up" data-aos-delay="900">
              <img src={growth} alt="" />
              <p className="title-txt-growth">Your growth is our growth </p>
              <p className="desc-txt-growth">
                We believe in brand transformation that fuels business success.
                When your brand flourishes, so do we.
              </p>
              <hr className="hr-width" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourGrowth;
