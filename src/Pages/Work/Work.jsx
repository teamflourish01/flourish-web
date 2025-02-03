import React from "react";
import "../Work/work.css";
import Breadcrums from "../../Components/Breadcrums/Breadcrums";
import ppeople from "../../assets/ppeople.svg";
import notch from "../../assets/notch.svg";
import food from "../../assets/food.svg";
import premium from "../../assets/premium.svg";
import workimg from "../../assets/workimg.svg";
import manufacture from "../../assets/manufacture.svg";
import health from "../../assets/health.svg";
import techno from "../../assets/techno.svg";
import renuable from "../../assets/renua.svg";
import education from "../../assets/education.svg";
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
                      <img src={education} alt="" />
                    </div>
                    <hr />
                    <p className="real-work-p">Education</p>
                  </div>
                </div>

                <div className="work-boxs">
                  <div className="work-c-flex">
                    <div className="div-img">
                      <img src={education} alt="" />
                    </div>
                    <hr />
                    <p className="real-work-p">Education</p>
                  </div>
                </div>

                <div className="work-boxs">
                  <div className="work-c-flex">
                    <div className="div-img">
                      <img src={education} alt="" />
                    </div>
                    <hr />
                    <p className="real-work-p">Education</p>
                  </div>
                </div>

                <div className="work-box">
                  <p className="work-p">All</p>
                </div>
                <div className="work-box">
                  <p className="work-p">All</p>
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
