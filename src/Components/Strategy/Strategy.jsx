import React from "react";
import "../Strategy/Strategy.css";
import YellowBtn from "../YellowBtn/YellowBtn";
import { Link } from "react-router-dom";

const Strategy = ({ homeDetails }) => {
  const str = homeDetails?.seven_title || "";
  const arr = str.split(" ");
  const text = arr;
  return (
    <>
      <div className="strategy">
        <div className="our-strategy-container">
          <div className="left-side-v-s-c">
            <p className="your-our-strategy">
              <span className="stroke-txt-strategy">{text[0]}</span> {text[1]}
              <br />
              <span className="stroke-txt-strategy"> {text[2]} </span>
              {text[3]}
            </p>
            <p className="v-s-desc">{homeDetails.seven_text}</p>
            <Link
              to="/contact"
              className="text-deco"
              onClick={() => window.scrollTo(0, 0)}
            >
              <YellowBtn btnName="Contact Us" />
            </Link>
          </div>
          <hr className="hr-animation " />
          <p className="right-desc">{homeDetails.seven_text_right}</p>
        </div>
      </div>
    </>
  );
};

export default Strategy;
