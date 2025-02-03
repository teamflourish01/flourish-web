import React from "react";
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
import manufacture from "../../assets/mss.svg";
import health from "../../assets/healthw.svg";
import technow from "../../assets/technow.svg"
import techno from "../../assets/techno.svg";
import renuable from "../../assets/Renuable.svg";
import education from "../../assets/educationw.svg";
import fashion from "../../assets/fashion.svg";
const Work = () => {
  return (
    <>
      <Breadcrums pagename="Work" />
      <section>
        <div className="work-main-container-100">
          <div className="padding-container-work">
            <div className="gried-work-1320">
              <div className="work-gried">
                <div className="work-box">
                  <p className="work-p">All</p>
                </div>

                <div className="work-boxs">
                  <div className="work-c-flex">
                    <div className="div-img">
                      <img src={workimg} alt="" />
                    </div>
                    <hr />
                    <p className="real-work-p">Real Estate</p>
                  </div>
                </div>

                <div className="work-boxs">
                  <div className="work-c-flex">
                    <div className="div-img">
                      <img src={manufacture} alt="" />
                    </div>
                    <hr />
                    <p className="real-work-p-m">Manufacturing</p>
                  </div>
                </div>

                <div className="work-boxs">
                  <div className="work-c-flex">
                    <div className="div-img">
                      <img src={food} alt="" />
                    </div>
                    <hr />
                    <p className="real-work-p-m">food</p>
                  </div>
                </div>

                <div className="work-boxs">
                  <div className="work-c-flex">
                    <div className="div-img">
                      <img src={health} alt="" />
                    </div>
                    <hr />
                    <p className="real-work-p-m">Health care</p>
                  </div>
                </div>

                <div className="work-boxs">
                  <div className="work-c-flex">
                    <div className="div-img">
                      <img src={fasw} alt="" />
                    </div>
                    <hr />
                    <p className="real-work-p-m">Fashion</p>
                  </div>
                </div>

                <div className="work-boxs">
                  <div className="work-c-flex">
                    <div className="div-img">
                      <img src={renw} alt="" />
                    </div>
                    <hr />
                    <p className="real-work-p-m">Renuable</p>
                  </div>
                </div>

                <div className="work-boxs">
                  <div className="work-c-flex">
                    <div className="div-img">
                      <img src={education} alt="" />
                    </div>
                    <hr />
                    <p className="real-work-p-m">Education</p>
                  </div>
                </div>

                <div className="work-boxs">
                  <div className="work-c-flex">
                    <div className="div-img">
                      <img src={technow} alt="" />
                    </div>
                    <hr />
                    <p className="real-work-p-m">Technology</p>
                  </div>
                </div>
                <div className="work-boxs">
                  <div className="work-c-flex">
                    <div className="div-img">
                      <img src={fgcg} alt="" />
                    </div>
                    <hr />
                    <p className="real-work-p-m">FMCG</p>
                  </div>
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
