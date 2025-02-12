import React from "react";
import "../BrandNeeds/BrandNeeds.css";
import chess from "../../../../assets/Branding/chess.png";

const BrandNeeds = ({ ServiceData }) => {
  let url = process.env.REACT_APP_DEV_URL;

  return (
    <div className="brand-needs">
      <div className="brand-needs-container">
        <h2 className="brand-title">{ServiceData?.brand_need_question}</h2>
        <p className="brand-subtitle">
          Here’s why your brand needs professional branding
        </p>
        <div className="brand-content">
          <div className="brand-image">
            <img src={chess} alt="Chess Branding" />
          </div>
          {/* <div className="vertical-line"></div> */}
          <div className="vertical-line">
            <div className="horizontal-line"></div>
            <div className="horizontal-line"></div>
            <div className="horizontal-line"></div>
            <div className="horizontal-line"></div>
          </div>

          <div className="brand-text">
            <div className="brand-benefits">
              <div className="benefit">
                <p className="b-n-title">{ServiceData?.brand_need_heading1}</p>
                <p className="b-n-p-des">{ServiceData?.brand_need_text1}</p>
              </div>
              <div className="benefit">
                <p className="b-n-title">{ServiceData?.brand_need_heading2}</p>
                <p className="b-n-p-des">{ServiceData?.brand_need_text2}</p>
              </div>
              <div className="benefit">
                <p className="b-n-title">{ServiceData?.brand_need_heading3}</p>
                <p className="b-n-p-des">{ServiceData?.brand_need_text3}</p>
              </div>
              <div className="benefit">
                <p className="b-n-title">{ServiceData?.brand_need_heading4}</p>
                <p className="b-n-p-des">{ServiceData?.brand_need_text4}</p>
              </div>
              <div className="benefit">
                <p className="b-n-title">{ServiceData?.brand_need_heading5}</p>
                <p className="b-n-p-des">{ServiceData?.brand_need_text5}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandNeeds;
