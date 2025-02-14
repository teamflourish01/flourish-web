import React, { useEffect } from "react";
import "../YourFuture/YourFuture.css";
import AOS from "aos";
import "aos/dist/aos.css"; 

import brilliant from "../../assets/brilliance.svg";
import centric from '../../assets/centrik.svg';
import spirit from '../../assets/spirit.svg';

const YourFuture = ({homeDetails, url}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);


  const str = homeDetails?.second_title ||"";
  const arr = str.split(" ");
  const text = arr;
  return (
    <>
      <div className="your-future">
        <div className="your-future-container">
          <p className="your-f-our-c">
            <span className="stroke-txt">{text[0]}</span> {text[1]}
            <span className="stroke-txt"> {text[2]} </span>{text[3]}
          </p>
          <p className="your-f-our-c-mobile">
            <span className="stroke-txt">{text[0]}</span> {text[1]}<br/>
            <span className="stroke-txt">{text[2]} </span>{text[3]}
          </p>
          <p 
            className="desc-y-o" 
            data-aos="fade-up"  
            data-aos-delay="200" 
            data-aos-anchor-placement="bottom-bottom"
          >
            {homeDetails.second_text}
          </p>
        </div>
        <div 
          className="box-grid-lay" 
          data-aos="fade-up"  
          data-aos-delay="400"  
        >
          <hr className="hr-100" />
          <div className="your-future-container">
            <div className="flex-boxes-y-o">
              <div className="box-s-y-o">
                <div className="t-i-flex-boxs">
                  <img src={`${url}/home/${homeDetails.second_content_first_img}`} alt="" />
                  <p className="title-txt-flex-boxs">{homeDetails.second_content_first_heading}</p>
                </div>
                <p className="flex-box-desc-b">
                {homeDetails.second_content_first_text}
                </p>
              </div>
              <hr className="hr-straight" />
              <div className="box-s-y-o">
                <div className="t-i-flex-boxs">
                  <img src={`${url}/home/${homeDetails.second_content_second_img}`} alt="" />
                  <p className="title-txt-flex-boxs">{homeDetails.second_content_second_heading}</p>
                </div>
                <p className="flex-box-desc-b">
                {homeDetails.second_content_second_text}

                </p>
              </div>
              <hr className="hr-straight" />
              <div className="box-s-y-o">
                <div className="t-i-flex-boxs">
                  <img src={`${url}/home/${homeDetails.second_content_third_img}`} alt="" />
                  <p className="title-txt-flex-boxs">{homeDetails.second_content_third_heading}</p>
                </div>
                <p className="flex-box-desc-b">
                {homeDetails.second_content_third_text}

                </p>
              </div>
            </div>
          </div>
          <hr className="hr-100" />
        </div>
      </div>
    </>
  );
};

export default YourFuture;
