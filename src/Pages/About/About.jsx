import React, { useEffect, useRef, useState } from "react";
import "../About/About.css";
import { gsap } from "gsap";
import AOS from "aos";
import group from "../../assets/group.svg";
import first from "../../assets/first.svg";
import img2021 from "../../assets/img2021.svg";
import img2022 from "../../assets/img2022.svg";
import img2023 from "../../assets/im2023.svg";
import img2025 from "../../assets/im2025.svg";
import img2024 from "../../assets/im2024.svg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import banner from "../../assets/aboutbanner.svg";
import mission from "../../assets/missionimg.svg";
import process from "../../assets/process.svg";
import Breadcrums from "../../Components/Breadcrums/Breadcrums";
import VisionWhiteBanner from "../../Components/service/Branding/VisionWhiteBanner/VisionWhiteBanner";
import BannerTop from "../../Components/service/BannerTop/BannerTop";
import axios from "axios";
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const [data, setData] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const[processdata,setprocessdata] =useState([])
  const [error, setError] = useState(null);
  let url = process.env.REACT_APP_DEV_URL;

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url}/about`);
      setData(response.data.data[0]);
      console.log("Data fetched successfully:", response.data.data[0]);
    } catch (err) {
      setError("Data fetch failed!");
      console.error("Error:", err);
    }
  };


  const fetchJourneyData = async () => {
    try {
      const response = await axios.get(`${url}/Journey`);
      setTimeline(response.data.data); // Assuming data is an array
      console.log("Journey Data:", response.data.data);
    } catch (err) {
      setError("Journey Data fetch failed!");
      console.error("Error:", err);
    }
  };


  const fetchprocessdata = async () => {
    try {
      const response = await axios.get(`${url}/Process`);
      setprocessdata(response.data.data); // Assuming data is an array
      console.log("process  Data:", response.data.data);
    } catch (err) {
      setError("Journey Data fetch failed!");
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    fetchData();
    fetchJourneyData();
    fetchprocessdata();
  }, []);
 

  const lineRef = useRef(null);
  const yearRefs = useRef([]);
  const imageRef = useRef(null);
  const [showImage, setShowImage] = useState(false);
  const [activeYear, setActiveYear] = useState(null);

  gsap.registerPlugin(ScrollTrigger);
  const milestones = [
    {
      year: "2020",
      description:
        "Flourish Creations was founded with the mission to redefine branding with creative visuals and innovative graphics for every business.",
      // image: images["first"],
    },
    {
      year: "2021",
      description:
        "Expanded our services to include digital marketing, web development, and consultation, helping clients achieve a stronger online presence.",
      // image: images["img2021"],
    },
    {
      year: "2022",
      description:
        "Successfully delivered impactful campaigns for clients in real estate, fashion, wellness, and other industries, building a reputation for creative excellence.",
      // image: images["img2022"],
    },
    {
      year: "2023",
      description:
        "Launched our first major brand transformation project and grew our client base significantly, establishing Flourish as a go-to agency for innovative branding solutions.",
      // image: images["im2023"],
    },
    {
      year: "2024",
      description:
        "Introduced advanced AI-driven marketing solutions and expanded our team to include specialists in content creation, analytics, and customer engagement.",
      // image: images["im2024"],
    },
    {
      year: "2025",
      description:
        "Continuing to innovate and grow, Flourish is now focused on helping brands leverage cutting-edge technology to stay ahead in the digital landscape.",
      // image: images["im2025"],
    },
    {
      year: "2025",
      description:
        "Continuing to innovate and grow, Flourish is now focused on helping brands leverage cutting-edge technology to stay ahead in the digital landscape.",
      // image: images["im2025"],
    },
    {
      year: "2025",
      description:
        "Continuing to innovate and grow, Flourish is now focused on helping brands leverage cutting-edge technology to stay ahead in the digital landscape.",
      // image: images["im2025"],
    },

  ];
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Ensure lineRef is not null before setting styles
    if (lineRef.current) {
      lineRef.current.style.background = `linear-gradient(to bottom, orange 0%, gray 100%)`;
    }

    ScrollTrigger.create({
      trigger: ".timeline",
      start: "top 60%",
      end: "bottom 50%",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress * 100;

        // Line animation (Fix for null error)
        if (lineRef.current) {
          gsap.to(lineRef.current, {
            background: `linear-gradient(to bottom, orange ${progress}%, gray ${progress}%)`,
            duration: 0.1,
          });
        }

        yearRefs.current.forEach((yearRef, index) => {
          if (yearRef) {
            const itemPosition = (index / (milestones.length - 1)) * 100;

            if (progress >= itemPosition) {
              gsap.to(yearRef, { color: "orange", duration: 0.3 });
              setActiveYear(milestones[index].year);

              // Show the image for the corresponding year
              const img =
                yearRef.nextElementSibling?.querySelector(".timeline-image");
              if (img) {
                gsap.to(img, {
                  opacity: 1,
                  visibility: "visible",
                  duration: 0.5,
                });
              }
            } else {
              gsap.to(yearRef, { color: "gray", duration: 0.3 });

              // Hide the image when not in view
              const img =
                yearRef.nextElementSibling?.querySelector(".timeline-image");
              if (img) {
                gsap.to(img, {
                  opacity: 0,
                  visibility: "hidden",
                  duration: 0.5,
                });
              }
            }
          }
        });
      },
    });
  }, [milestones]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    // Check screen width before initializing AOS
    if (window.innerWidth >= 1024) {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }
  }, []);

  return (
    <>
      {" "}
      <BannerTop btitle="About Us" />
      <Breadcrums pagename="About Us" />
      {/* about-section */}
      <section>
        <div className="about-container-main">
          <div className="about-container">
            <div className="about-to-bottopm-p">
              <div className="about-r-l-flex">
                <div className="about-right">
                  <div className="at-flourish">{data?.bannerheading}</div>
                  <div className="inner-line"></div>
                  <div className="to-creation">{data?.banner_text}</div>
                </div>
                {/* <div className="main-img-about-left"> */}
                <div className="about-left">
                  <img
                    src={`${url}/about/${data?.banner_img}`}
                    alt=""
                    srcset=""
                    className="about-right-img"
                  />
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* our growing journey */}
      <section>
        <div className="timeline-container">
          <div className="timeline-header">
            <div className="our-glowing">{data?.second_heading}</div>
            <div className="our-journy">
              <p>{data?.second_text}</p>
            </div>
          </div>
          <div className="timeline">
            {/* Timeline Line */}
            <div ref={lineRef} className="timeline-line"></div>
            {timeline.map((milestone, index) => (
              <div
                key={index}
                className={`timeline-item ${
                  index % 2 === 0 ? "right" : "left"
                }`}
              >
                {/* Content */}
                <div className="timeline-content">
                  <p className="milstone-describe">{milestone.text}</p>
                </div>

                {/* Year and Dot */}
                <div
                  className="timeline-year"
                  ref={(el) => (yearRefs.current[index] = el)}
                >
                  <span>{milestone.year}</span>
                </div>

                {/* First image appears when you reach 2020 */}
                <div>
  {milestone.image && (
    <div className="timeline-image">
      <img
        className={parseInt(milestone.year) % 2 === 0 ? "first-image" : "second-image"}
        src={`${url}/journey/${milestone.image}`}
        alt={`${milestone.year} milestone`}
      />
    </div>
  )}
</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* vision mission */}
      <section>
        <div className="discovery-container">
          <div className="mission-vision-flex">
            <div className="mission" data-aos="fade-up" data-aos-delay="200">
              <div className="img-p">
                <img src={mission} alt="" srcset="" />
                <p className="our-m-p">Our Misssion</p>
              </div>
              <div className="disc-hr" />
              <div className="mission-desc">{data?.mission}</div>
            </div>

            <div className="vision" data-aos="fade-up" data-aos-delay="400">
              <div className="img-p">
                <img src={mission} alt="" srcset="" />
                <p className="our-m-p">Our Vision</p>
              </div>
              <div className="disc-hr" />
              <div className="mission-desc">{data?.vision}</div>
            </div>
          </div>
        </div>
      </section>
      {/* our process */}
      <section>
      <div className="our-process-container">
        <div className="our-process-heading">Our Process</div>

        {error && <p className="error-message">{error}</p>} {/* Error Handling */}

        <div className="discovery-flex">
          {processdata.map((item, index) => (
            <div className="discovery" key={item._id}>
              <div className={`img-discovery-flex${index % 2 === 0 ? "" : "-ss"}`}>
                {index % 2 === 0 ? (
                  <>
                    <div className="process-img">
                      <img
                        src={`${url}/process/${item.image}`} // Correct image path
                        alt={item.title}
                        className="img-process"
                      />
                    </div>
                    <div className="we-take-flex">
                      <div className="number-discovery">
                        <div className="number">{String(index + 1).padStart(2, "0")}</div>
                        <div className="zeroone-h">{item.title}</div>
                      </div>
                      <div className="we-take">{item.text}</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="we-take-flex">
                      <div className="number-discovery">
                        <div className="number">{String(index + 1).padStart(2, "0")}</div>
                        <div className="zeroone-h">{item.title}</div>
                      </div>
                      <div className="we-take">{item.text}</div>
                      
                    </div>
                    <div className="process-img">
                      <img
                        src={`${url}/Process/${item.image}`} // Correct image path
                        alt={item.title}
                        className="img-process"
                      />
                    </div>
                  </>
                 

                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      <VisionWhiteBanner />
    </>
  );
};

export default About;
