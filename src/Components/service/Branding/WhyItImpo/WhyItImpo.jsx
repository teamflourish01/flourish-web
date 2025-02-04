import React from "react";
import "../WhyItImpo/WhyItImpo.css";
import impl from "../../../../assets/impl.svg";
import impone from "../../../../assets/imp1.svg";
import imptwo from "../../../../assets/imp2.svg";
import impthree from "../../../../assets/imp3.svg";
import impfour from "../../../../assets/imp4.svg";

const impicon = [
  {
    img: impone,
    desc: "Attract the right customers.",
  },
  {
    img: imptwo,
    desc: "Enhance credibility in the market.",
  },
  {
    img: impthree,
    desc: "Drive long-term loyalty and growth.",
  },
  {
    img: impfour,
    desc: "Investing in branding ensures your business is memorable, recognizable, and positioned for success.",
  },
];
const WhyItImpo = () => {
  return (
    <>
      <div className="why-imp">
        <div className="why-imp-container">
          <p className="why-it-title">Why It’s Important?</p>
          <p className="why-p-desc">
            With strategic branding, your business can
          </p>

          <div className="img-div-imp">
            <img src={impl} alt="" className="img-r-imp" />
            <div className="vertical-line-why-imp">
              {impicon.map((imp, index) => (
                <React.Fragment key={index}>
                  <div
                    className="horizontal-line-why-imp"
                    style={{ top: `${110 + index * 120}px` }} // Adjust values as needed
                  ></div>
                  <div
                    className="imp-img-bg-w"
                    style={{ top: `${85 + index * 70}px` }}
                  >
                    <img src={imp.img} alt="" />
                  </div>
                </React.Fragment>
              ))}
            </div>
            <div className="flex-why-des-txt">
              {impicon.map((imp, index) => (
                <div div className="flex-res-imp-why">
                  <div
                    className="imp-img-bg-w-res"
                  >
                    <img src={imp.img} alt="" className="img-res-imp" />
                  </div>
                  <p
                    className="why-imp-txt-dsc"
                    style={{ top: `${-123 + index * 90}px` }}
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
