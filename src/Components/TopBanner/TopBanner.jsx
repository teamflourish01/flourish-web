import React from "react";
import "../TopBanner/TopBanner.css";
import YellowBtn from "../YellowBtn/YellowBtn";
import { PiHandTap } from "react-icons/pi";

const TopBanner = () => {
  return (
    <>
      <div className="top-banner">
        <div className="top-banner-container">
          <div className="t-b-desc">
            <p className="we-tra-txt">
              We <span className="span-txt-t-b"> transform</span> business{" "}
              <span className="span-txt-t-b">into</span>{" "}
              <span className="under-line">BRAND</span>
            </p>
            <p className="desc-text-area">
              We craft stunning brand identities and digital experiences that
              help businesses grow and thrive. We are a branding and marketing
              agency in Ahmedabad that turns ideas into impactful visuals that
              leave a lasting impression.
            </p>
            <YellowBtn btnName="View Works" />
          </div>
          {/* <div className="view-works-cirlce">
            <PiHandTap />
          </div> */}
          <div className="view-works-container">
  <div className="view-works-circle">
    <svg width="200" height="200" viewBox="0 0 200 200" className="circle-text">
      <defs>
        <path
          id="outerCirclePath"
          d="M 100, 100 m -90, 0 a 90,90 0 1,1 180,0 a 90,90 0 1,1 -180,0"
        />
      </defs>
      <text fill="white" className="view-circle-title" textLength="565">
        <textPath href="#outerCirclePath" startOffset="0%">
          View Works • View Works • View Works • View Works •
        </textPath>
      </text>
    </svg>
    <PiHandTap />
  </div>
</div>

        </div>
      </div>
    </>
  );
};

export default TopBanner;
