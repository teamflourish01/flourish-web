import React from "react";
import "../TopBrandingS/TopBrandingB.css";
import ladyque from "../../../../assets/Branding/ladyque.svg";
import que from "../../../../assets/Branding/que.svg";
import arrowg from "../../../../assets/Branding/garrow.svg";
import { Link } from "react-router-dom";

const SubService = [
  {
    number: "01",
    title: "Brand Positioning",
    description:
      "Defining your brand's unique value in the market to attract the right audience.",
  },
  {
    number: "02",
    title: "Brand Story",
    description:
      "Crafting a compelling narrative that reflects your brand’s mission, vision, and values.",
  },
  {
    number: "03",
    title: "Brand Messaging",
    description:
      "Creating consistent and engaging messages that align with your brand's voice.",
  },
  {
    number: "04",
    title: "Brand Theme",
    description:
      "Establishing visual and tonal consistency across all marketing channels.",
  },
  {
    number: "05",
    title: "Digital Branding",
    description:
      "Building a strong online presence through cohesive and impactful digital assets.",
  },
];

const TopBrandingB = () => {
  return (
    <>
      <div className="brand-top-banner">
        <div className="brand-top-banner-container">
          <div className="que-con">
            <img src={que} alt="" className="que-con-img" />
          </div>
          <div className="img-con">
            <div className="text-des-ladyque">
              <p className="branding-title-t-b">What is branding?</p>
              <p className="craft-desc">
                Craft a powerful brand identity that resonates with your target
                audience and leaves a lasting impression. Our branding services
                ensure your business stands out in a crowded market.
              </p>
            </div>
            <img src={ladyque} alt="" className="ladyqueimg" />
            
          </div>

          <p className="sub-service-t-b-t-b">Sub-Services</p>

          <div className="sub-s-box-container">
            {SubService.map((ss, index) => (
              <div className="sub-s-box" key={index}>
                <div className="p-10-15-d">
                  <p className="s-s-b-01">{ss.number}</p>
                  <p className="s-s-b-b-t">{ss.title}</p>
                </div>
                <div className="p-10-15-d">
                  <p className="bet-desc">{ss.description}</p>
                </div>
                <Link to="/branding-positioning" className="link-txt">
                  <div className="explore-btn">
                    <p className="explore-service-txt">Explore Service</p>
                    <img src={arrowg} alt="" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBrandingB;
