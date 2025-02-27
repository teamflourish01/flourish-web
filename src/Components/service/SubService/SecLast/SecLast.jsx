import React, { useEffect } from "react";
import "../SecLast/SecLast.css";
import seclastimg from "../../../../assets/Branding/secimg.png";

const SecLast = ({SubServiceDetails, url}) => {
 
  return (
    <>
      <div className="sec-last">
        <div className="sec-last-container">
          <p className="lets-dev-title">{SubServiceDetails.second_last_heading}</p>
          <p className="sec-last-desc">
            {SubServiceDetails.second_last_text}
          </p>
          <div className="flex-brand-posi">
            <img src={`${url}/subservice/${SubServiceDetails.second_last_img}`} alt="" className="b-p-img" />

            <div className="benefits-container-sl">
              {SubServiceDetails?.second_last_content?.map((item, index) => 
              (
                <div key={index} className="benefit-sl">
                  <span className="benefit-number-sl">0{index + 1}</span>
                  <p className="benefit-text-sl">{item}</p>
                </div>
              ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecLast;
