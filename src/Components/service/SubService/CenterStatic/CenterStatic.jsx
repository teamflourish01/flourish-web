import React from "react";
import "../CenterStatic/CenterStatic.css";
const CenterStatic = () => {
  return (
    <>
      <div className="center-static">
        <div className="center-static-container">
          <p className="title-flourish-apart">What Sets Flourish Apart?</p>
          <div className="apart-flex">
            <div className="apart-box">
              <p className="n-apart">01</p>
              <p className="title-apart">Tailored Solutions</p>
              <p className="desc-apart">
                No copy-paste strategies—your brand is unique, and so is our
                approach.
              </p>
            </div>
            <div className="apart-box p-l-18">
              <p className="n-apart">02</p>
              <p className="title-apart">Creative Excellence</p>
              <p className="desc-apart">
                We merge strategy with creativity to create unforgettable
                branding.
              </p>
            </div>
            <div className="apart-box p-l-18">
              <p className="n-apart">03</p>
              <p className="title-apart">Results-Oriented Focus</p>
              <p className="desc-apart">
                Every decision we make is tied to measurable outcomes.
              </p>
            </div>
            <div className="apart-box-l p-l-18">
              <p className="n-apart">04</p>
              <p className="title-apart">Experienced Team</p>
              <p className="desc-apart">
                Our branding specialists bring years of expertise to the table.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CenterStatic;
