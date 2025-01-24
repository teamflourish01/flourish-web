import React from "react";
import "../Strategy/Strategy.css";
import YellowBtn from "../YellowBtn/YellowBtn";
const Strategy = () => {
  return (
    <>
      <div className="strategy">
        <div className="our-strategy-container">
          <div className="left-side-v-s-c">
            <p className="your-our-strategy">
              <span className="stroke-txt-strategy">Your</span> Vision,
              <br />
              <span className="stroke-txt-strategy"> Our </span>Strategy
            </p>
            <p className="v-s-desc">
              Ready to Flourish? Let's Make Your Brand Unstoppable!
            </p>
            <YellowBtn btnName="Contact Us" />
          </div>
          <hr className="hr-animation " />
          <p className="right-desc">
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

export default Strategy;
