import React, { useEffect } from "react";
import "../WhyItImpo/WhyItImpo.css";
import impl from "../../../../assets/impl.svg";
import impone from "../../../../assets/imp1.svg";
import imptwo from "../../../../assets/imp2.svg";
import impthree from "../../../../assets/imp3.svg";
import impfour from "../../../../assets/imp4.svg";

const WhyItImpo = ({ ServiceData }) => {

  let url=process.env.REACT_APP_DEV_URL

  const impicon = [
    {
      img: ServiceData?.img_fact_1,
      desc: ServiceData?.important_fact_1,
    },
    {
      img: ServiceData?.img_fact_2,
      desc: ServiceData?.important_fact_2,
    },
    {
      img: ServiceData?.img_fact_3,
      desc: ServiceData?.important_fact_3,
    },
    {
      img: ServiceData?.img_fact_4,
      desc: ServiceData?.important_fact_4,
    },
  ];
  return (
    <>
      <div className="why-imp">
        <div className="why-imp-container">
          <p className="why-it-title">Why It’s Important?</p>
          <p className="why-p-desc">
            With strategic branding, your business can
          </p>

          <div className="img-div-imp">
            <img src={`${url}/service/${ServiceData?.imp_vector}`} alt="" className="img-r-imp" />
            <div className="vertical-line-why-imp">
              {impicon.map((imp, index) => (
                <React.Fragment key={index}>
                  <div
                    className="horizontal-line-why-imp"
                    style={{ top: `${70 + index * 90}px` }} // Adjust values as needed
                  ></div>
                  <div
                    className="imp-img-bg-w"
                    style={{ top: `${45 + index * 40}px` }}
                  >
                    <img
                      src={`${url}/service/${imp.img}`}
                      alt=""
                      className="img-res-imp"
                    />

                    {/* <img 
                    src={``}
                    // src={imp.img}
                     alt="" /> */}
                  </div>
                </React.Fragment>
              ))}
            </div>
            <div className="flex-why-des-txt">
              {impicon.map((imp, index) => (
                <div div className="flex-res-imp-why">
                  <div className="imp-img-bg-w-res">
                    <img
                      src={`${url}/service/${imp.img}`}
                      alt=""
                      className="img-res-imp"
                    />
                  </div>
                  <p
                    className="why-imp-txt-dsc"
                    style={{ top: `${-75 + index * 57}px` }}
                    key={index}
                  >
                    {imp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyItImpo;
