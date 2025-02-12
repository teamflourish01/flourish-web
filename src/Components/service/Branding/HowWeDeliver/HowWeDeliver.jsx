import React, { useEffect } from "react";
import "./HowWeDeliver.css";
import researchImg from "../../../../assets/Branding/h1.svg";
import designImg from "../../../../assets/Branding/h2.svg";
import messagingImg from "../../../../assets/Branding/h3.svg";
import implementationImg from "../../../../assets/Branding/h4.svg";
import analysisImg from "../../../../assets/Branding/h5.svg";

const HowWeDeliver = ({ ServiceData }) => {
  let url = process.env.REACT_APP_DEV_URL;
  useEffect(()=>{},[ServiceData])
  return (
    <div className="how-we-deliver">
      <div className="how-we-deliver-container">
        <h2 className="title-h-w-d">How We Deliver?</h2>
        <p className="b-des-h-w-d">
          At Flourish, we follow a comprehensive approach to branding:
        </p>

        <div className="steps-container">
          <div className="step-card">
            <div className="m-b-l left">
              <img
                src={`${url}/service/${ServiceData?.deliver_img_1}`}
                alt=""
                className="step-image"
              />
              <div className="step-content">
                <span className="step-number">01</span>
                <h3 className="step-title">{ServiceData?.deliver_heading_1}</h3>
                <p className="step-description">{ServiceData?.deliver_text_1}</p>
              </div>
            </div>
          </div>
          <div className="step-card">
            <div className="m-b-l right">
              <img
                src={`${url}/service/${ServiceData?.deliver_img_2}`}
                alt=""
                className="step-image"
              />
              <div className="step-content">
                <span className="step-number">02</span>
                <h3 className="step-title">{ServiceData?.deliver_heading_2}</h3>
                <p className="step-description">{ServiceData?.deliver_text_2}</p>
              </div>
            </div>
          </div>
          <div className="step-card">
            <div className="m-b-l left">
              <img
                src={`${url}/service/${ServiceData?.deliver_img_3}`}
                alt=""
                className="step-image"
              />
              <div className="step-content">
                <span className="step-number">03</span>
                <h3 className="step-title">{ServiceData?.deliver_heading_3}</h3>
                <p className="step-description">{ServiceData?.deliver_text_3}</p>
              </div>
            </div>
          </div>
          <div className="step-card">
            <div className="m-b-l right">
              <img
                src={`${url}/service/${ServiceData?.deliver_img_4}`}
                alt=""
                className="step-image"
              />
              <div className="step-content">
                <span className="step-number">04</span>
                <h3 className="step-title">{ServiceData?.deliver_heading_4}</h3>
                <p className="step-description">{ServiceData?.deliver_text_4}</p>
              </div>
            </div>
          </div>
          <div className="step-card">
            <div className="m-b-l-bottom left">
              <img
                src={`${url}/service/${ServiceData?.deliver_img_5}`}
                alt=""
                className="step-image"
              />
              <div className="step-content">
                <span className="step-number">05</span>
                <h3 className="step-title">{ServiceData?.deliver_heading_5}</h3>
                <p className="step-description">{ServiceData?.deliver_text_5}</p>
              </div>
            </div>
          </div>
          <div className="step-card">
            <div className="m-b-l-bottom right">
              <img
                src={`${url}/service/${ServiceData?.deliver_img_6}`}
                alt=""
                className="step-image"
              />
              <div className="step-content">
                <span className="step-number">06</span>
                <h3 className="step-title">{ServiceData?.deliver_heading_6}</h3>
                <p className="step-description">{ServiceData?.deliver_text_6}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeDeliver;
