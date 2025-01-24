import React, { useEffect } from "react";
import "../YourFuture/YourFuture.css";
import AOS from "aos";
import "aos/dist/aos.css"; 

import brilliant from "../../assets/brilliance.svg";
import centric from '../../assets/centrik.svg';
import spirit from '../../assets/spirit.svg';

const YourFuture = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <>
      <div className="your-future">
        <div className="your-future-container">
          <p className="your-f-our-c">
            <span className="stroke-txt">Your</span> Future,
            <span className="stroke-txt"> Our </span>Commitment
          </p>
          <p 
            className="desc-y-o" 
            data-aos="fade-up"  
            data-aos-delay="200" 
            data-aos-anchor-placement="bottom-bottom"
          >
            We are more than just a branding and marketing agency in Ahmedabad;
            we are your partners in shaping a future of growth and innovation.
            Our purpose is to help businesses unlock their true potential by
            building brands that leave a lasting impact.
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
                  <img src={brilliant} alt="" />
                  <p className="title-txt-flex-boxs">Strategic Brilliance</p>
                </div>
                <p className="flex-box-desc-b">
                  We don’t just market, we strategize. Our team creates
                  customized, impactful strategies that not only engage but also
                  convert.
                </p>
              </div>
              <hr className="hr-straight" />
              <div className="box-s-y-o">
                <div className="t-i-flex-boxs">
                  <img src={centric} alt="" />
                  <p className="title-txt-flex-boxs">Client-centric Approach</p>
                </div>
                <p className="flex-box-desc-b">
                  Your success is our priority. We don’t just have clients; we
                  have partners. We listen, understand, and deliver results that
                  exceed expectations.
                </p>
              </div>
              <hr className="hr-straight" />
              <div className="box-s-y-o">
                <div className="t-i-flex-boxs">
                  <img src={spirit} alt="" />
                  <p className="title-txt-flex-boxs">Creative Spirit</p>
                </div>
                <p className="flex-box-desc-b">
                  Innovation is our plus point. From thinking out of the box to
                  delivering outcomes according to that thinking, we infuse
                  creativity into everything we do.
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
