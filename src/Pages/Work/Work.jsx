import React,{useState} from "react";
import "../Work/work.css";
import Breadcrums from "../../Components/Breadcrums/Breadcrums";
import ppeople from "../../assets/ppeople.svg";
import notch from "../../assets/notch.svg";
import food from "../../assets/foodw.svg";
import fasw from "../../assets/fasw.svg";
import fgcg from "../../assets/fgcg.svg";
import renw from "../../assets/renw.svg";
import premium from "../../assets/premium.svg";
import workimg from "../../assets/real.svg";
import premp from "../../assets/premp.png";
import manufacture from "../../assets/mss.svg";
import health from "../../assets/healthw.svg";
import technow from "../../assets/technow.svg"
import techno from "../../assets/techno.svg";
import renuable from "../../assets/Renuable.svg";
import education from "../../assets/educationw.svg";
import fashion from "../../assets/fashion.svg";
const Work = () => {
  const [activeImage, setActiveImage] = useState(null);
  const images = [
    { src: workimg, label: "Real Estate" },
    { src: manufacture, label: "Manufacturing" },
    { src: food, label: "Food" },
    { src: health, label: "Health care" },
    { src: fasw, label: "Fashion" },
    { src: renw, label: "Renewable" },
    { src: education, label: "Education" },
    { src: technow, label: "Technology" },
    { src: fgcg, label: "FMCG" },
  ];
  return (
    <>
      <Breadcrums pagename="Work" />
      <section>
        <div className="work-main-container-100">
        <div className="padding-container-work">
      <div className="gried-work-1320">
      <div className="work-wrapper">
  <div className="work-gried">
    <div className="work-box">
      <p className="work-p">All</p>
    </div>

    {images.map((item, index) => (
      <div
        key={index}
        className="work-boxs"
        onClick={() => setActiveImage(item.src)}
        style={{ cursor: "pointer" }}
      >
        <div className="work-c-flex">
          <div className="div-img">
            <img
              src={item.src}
              alt={item.label}
              style={{
                opacity: activeImage === null || activeImage === item.src ? 1 : 0.2,
                transition: "opacity 0.3s ease-in-out",
              }}
              className="work-div-img"
            />
          </div>
          <hr />
          <p
            className="real-work-p-m"
            style={{
              color: activeImage === item.src ? "black" : "gray",
              fontWeight: activeImage === item.src ? "bold" : "normal",
              transition: "color 0.3s ease-in-out",
            }}
          >
            {item.label}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </div>

          <hr className="hr-line" />
          <section className="section-b-work">
            <div className="gajanan-b-gried">
              <div className="gried-box1">
                <img src={premium} alt="" srcset="" />
                <div className="bg-name">Gajanan Bunglows</div>
              </div>

              <div className="gried-box1">
                <img src={premium} alt="" srcset="" />
                <div className="bg-name">Gajanan Bunglows</div>
              </div>

              <div className="gried-box1">
                <img src={premium} alt="" srcset="" />
                <div className="bg-name">Gajanan Bunglows</div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Work;
