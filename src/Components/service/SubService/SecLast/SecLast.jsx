import React from "react";
import "../SecLast/SecLast.css";
import seclastimg from "../../../../assets/Branding/secimg.png";
const data = [
  { id: "01", text: "Differentiates your business from competitors." },
  { id: "02", text: "Creates emotional connections with your audience." },
  { id: "03", text: "Builds trust and long-term loyalty." },
  { id: "04", text: "Amplifies your market presence and revenue potential." },
  {
    id: "05",
    text: "Our team ensures your brand doesn’t just compete—it leads.",
  },
  {
    id: "06",
    text: "Our team ensures your brand doesn’t just compete—it leads.",
  },
];

const SecLast = () => {
  return (
    <>
      <div className="sec-last">
        <div className="sec-last-container">
          <p className="lets-dev-title">Why Brand Positioning Matters</p>
          <p className="sec-last-desc">
            With strategic branding, your business can
          </p>
          <div className="flex-brand-posi">
            <img src={seclastimg} alt="" />

            <div className="benefits-container-sl">
              {data.map((item, index) => (
                <>
                  <div key={item.id} className="benefit-sl">
                    <span className="benefit-number-sl">{item.id}</span>
                    <p className="benefit-text-sl">{item.text}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecLast;
