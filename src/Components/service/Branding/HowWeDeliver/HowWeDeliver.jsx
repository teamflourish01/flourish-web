import React from "react";
import "./HowWeDeliver.css";
import researchImg from "../../../../assets/Branding/h1.svg";
import designImg from "../../../../assets/Branding/h2.svg";
import messagingImg from "../../../../assets/Branding/h3.svg";
import implementationImg from "../../../../assets/Branding/h4.svg";
import analysisImg from "../../../../assets/Branding/h5.svg";

const HowWeDeliver = () => {
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
              <img src={researchImg} alt="" className="step-image" />
              <div className="step-content">
                <span className="step-number">01</span>
                <h3 className="step-title">Research & Strategy</h3>
                <p className="step-description">
                  We dive deep into understanding your industry, audience, and
                  goals to develop a unique branding strategy.
                </p>
              </div>
            </div>
          </div>
          <div className="step-card">
            <div className="m-b-l right">
              <img src={designImg} alt="" className="step-image" />
              <div className="step-content">
                <span className="step-number">02</span>
                <h3 className="step-title">Visual Identity Design</h3>
                <p className="step-description">
                  From logos to color palettes and typography, we craft visuals
                  that reflect your brand’s essence.
                </p>
              </div>
            </div>
          </div>
          <div className="step-card">
            <div className="m-b-l left">
              <img src={messagingImg} alt="" className="step-image" />
              <div className="step-content">
                <span className="step-number">03</span>
                <h3 className="step-title">Messaging & Storytelling</h3>
                <p className="step-description">
                  We create impactful taglines, brand stories, and communication
                  strategies that connect with your audience.
                </p>
              </div>
            </div>
          </div>
          <div className="step-card">
            <div className="m-b-l right">
              <img src={implementationImg} alt="" className="step-image" />
              <div className="step-content">
                <span className="step-number">04</span>
                <h3 className="step-title">Implementation</h3>
                <p className="step-description">
                  We ensure your brand’s identity is consistent across digital
                  and offline platforms.
                </p>
              </div>
            </div>
          </div>
          <div className="step-card">
            <div className="m-b-l-bottom left">
              <img src={analysisImg} alt="" className="step-image" />
              <div className="step-content">
                <span className="step-number">05</span>
                <h3 className="step-title">Performance Analysis</h3>
                <p className="step-description">
                  We evaluate the brand’s impact and provide insights to refine
                  strategies for maximum effectiveness.
                </p>
              </div>
            </div>
          </div>
          <div className="step-card">
            <div className="m-b-l-bottom right">
              <img src={implementationImg} alt="" className="step-image" />
              <div className="step-content">
                <span className="step-number">06</span>
                <h3 className="step-title">Implementation</h3>
                <p className="step-description">
                  We ensure your brand’s identity is consistent across digital
                  and offline platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeDeliver;
