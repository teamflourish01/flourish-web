import React, { useEffect } from "react";
import "../YourGrowth/YourGrowth.css";
import thriving from "../../assets/thriving.svg";
import strategic from "../../assets/strategic.svg";
import growth from "../../assets/growth.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const YourGrowth = ({homeDetails, url}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with desired settings
  }, []);

  const str = homeDetails?.eight_title || "";
  const arr = str.split(" ");
  const text = arr;

  return (
    <>
      <div className="your-growth">
        <div className="your-growth-container">
          <p className="your-f-our-c">
            <span className="stroke-txt">{text[0]}</span> {text[1]}
            <span className="stroke-txt">{text[2]}</span> {text[3]}
          </p>
          <p className="your-f-our-c-mobile">
            <span className="stroke-txt">{text[0]}</span> {text[1]}<br/>
            <span className="stroke-txt"> {text[2]}</span> {text[3]}
          </p>
          <p className="desc-y-o" data-aos="fade-up" data-aos-delay="200">
            {homeDetails?.eight_text}
          </p>
          <p className="flourish-means">Flourish means</p>
          <div className="growth-boxs">
            <div className="growth-box" data-aos="fade-up" data-aos-delay="500">
              <img src={`${url}/home/${homeDetails.means_first_img}`} alt="" />
              <p className="title-txt-growth">{homeDetails?.means_first_title} </p>
              <p className="desc-txt-growth">
              {homeDetails?.means_first_text}
              </p>
              <hr className="hr-width" />
            </div>
            <div className="growth-box" data-aos="fade-up" data-aos-delay="700">
              <img src={`${url}/home/${homeDetails.means_second_img}`} alt="" />
              <p className="title-txt-growth">{homeDetails?.means_second_title} </p>
              <p className="desc-txt-growth">
                {homeDetails?.means_second_text}
              </p>
              <hr className="hr-width" />
            </div>
            <div className="growth-box" data-aos="fade-up" data-aos-delay="900">
              <img src={`${url}/home/${homeDetails.means_third_img}`} alt="" />
              <p className="title-txt-growth">{homeDetails?.means_third_title} </p>
              <p className="desc-txt-growth">
               {homeDetails?.means_third_text}
              </p>
              <hr className="hr-width" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourGrowth;
