import React from "react";
import "../CenterStatic/CenterStatic.css";

const CenterStatic = ({ SubServiceDetails }) => {
  return (
    <div className="center-static">
      <div className="center-static-container">
        <p className="title-flourish-apart">{SubServiceDetails.center_title}</p>
        <div className="apart-grid">
          <div className="apart-box br-1">
            <p className="n-apart">01</p>
            <p className="title-apart">{SubServiceDetails.center_heading1}</p>
            <p className="desc-apart">{SubServiceDetails.center_text1} </p>
          </div>
          <div className="apart-box">
            <p className="n-apart">02</p>
            <p className="title-apart">{SubServiceDetails.center_heading2}</p>
            <p className="desc-apart">{SubServiceDetails.center_text2}</p>
          </div>
          <div className="apart-box br-1">
            <p className="n-apart">03</p>
            <p className="title-apart">{SubServiceDetails.center_heading3}</p>
            <p className="desc-apart">{SubServiceDetails.center_text3} </p>
          </div>
          <div className="apart-box-l p-l-18">
            <p className="n-apart">04</p>
            <p className="title-apart">{SubServiceDetails.center_heading4}</p>
            <p className="desc-apart">{SubServiceDetails.center_text4} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterStatic;
