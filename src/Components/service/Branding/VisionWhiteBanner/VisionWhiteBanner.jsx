import React from "react";
import "../VisionWhiteBanner/VisionWhiteBanner.css";
import YellowBtn from "../../../YellowBtn/YellowBtn";
import YellowWhiteBtn from "../../../YellowWhiteBtn/YellowWhiteBtn";

const VisionWhiteBanner = () => {
  return (
    <>
      <div className="vision-white-banner">
        <div className="vision-white-banner-container">
          <div className="left-side-v-s-c">
            <p className="your-our-strategy-black">
              <span className="stroke-txt-strategy-vision">Your</span> Vision,
              <br />
              <span className="stroke-txt-strategy-vision"> Our </span>Strategy
            </p>
            <p className="v-s-desc-v">
              Ready to Flourish? Let's Make Your Brand Unstoppable!
            </p>
            <YellowWhiteBtn btnName="Contact Us" />
          </div>
          <hr className="hr-animation-white-bg " />
          <p className="right-desc-v">
            Looking to elevate your brand with top-notch marketing strategies?
            Reach out to us today for a free consultation. Whether you're a
            startup or an established business, Flourish is here to help you
            achieve sustainable brand growth. Let’s create something remarkable
            together.
          </p>
        </div>
      </div>
    </>
  );
};

export default VisionWhiteBanner;
