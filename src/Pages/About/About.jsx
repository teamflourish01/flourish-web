import React, { useEffect, useRef, useState } from "react";
import "../About/About.css";
import { gsap } from "gsap";
import AOS from "aos";
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

gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const images = {
    2020: first,
    2021: img2021,
    2022: img2022,
    2023: img2023,
    2024: img2024,
    2025: img2025,
  };

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
      image: images["first"],
    },
    {
      year: "2021",
      description:
        "Expanded our services to include digital marketing, web development, and consultation, helping clients achieve a stronger online presence.",
      image: images["img2021"],
    },
    {
      year: "2022",
      description:
        "Successfully delivered impactful campaigns for clients in real estate, fashion, wellness, and other industries, building a reputation for creative excellence.",
      image: images["img2022"],
    },
    {
      year: "2023",
      description:
        "Launched our first major brand transformation project and grew our client base significantly, establishing Flourish as a go-to agency for innovative branding solutions.",
      image: images["im2023"],
    },
    {
      year: "2024",
      description:
        "Introduced advanced AI-driven marketing solutions and expanded our team to include specialists in content creation, analytics, and customer engagement.",
      image: images["im2024"],
    },
    {
      year: "2025",
      description:
        "Continuing to innovate and grow, Flourish is now focused on helping brands leverage cutting-edge technology to stay ahead in the digital landscape.",
      image: images["im2025"],
    },
  ];
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ".timeline",
      start: "top 60%",
      end: "bottom 50%",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress * 100;

        // Line animation (same as before)
        lineRef.current.style.background = `linear-gradient(to bottom, orange ${progress}%, gray ${progress}%)`;

        yearRefs.current.forEach((yearRef, index) => {
          if (yearRef) {
            const itemPosition = (index / (milestones.length - 1)) * 100;

            if (progress >= itemPosition) {
              gsap.to(yearRef, { color: "orange", duration: 0.3 });
              setActiveYear(milestones[index].year);

              // Show the image for the corresponding year
              gsap.to(
                yearRef.nextElementSibling.querySelector(".timeline-image"),
                {
                  opacity: 1,
                  visibility: "visible",
                  duration: 0.5,
                }
              );
            } else {
              gsap.to(yearRef, { color: "gray", duration: 0.3 });

              // Hide the image when not in view
              gsap.to(
                yearRef.nextElementSibling.querySelector(".timeline-image"),
                {
                  opacity: 0,
                  visibility: "hidden",
                  duration: 0.5,
                }
              );
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
      <Breadcrums pagename="About Us" />
      {/* about-section */}
      <section>
        <div className="about-container-main">
          <div className="about-container">
            <div className="about-to-bottopm-p">
              <div className="about-r-l-flex">
                <div className="about-right">
                  <div className="at-flourish">
                    At a Glance : Flourish Creations Private Limited
                  </div>
                  <div className="inner-line"></div>
                  <div className="to-creation">
                    Welcome to Flourish Creations Private Limited, where
                    creativity meets strategy to drive extraordinary business
                    growth. Based in Ahmedabad, we are a results-driven digital
                    marketing and branding agency passionate about helping
                    businesses achieve their marketing goals through innovative
                    solutions and personalized strategies.
                  </div>
                </div>
                <div className="main-img-about-left">
                <div className="about-left">
                  <img
                    src={banner}
                    alt=""
                    srcset=""
                    className="about-right-img"
                  />
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* our growing journey */}
      <section>
        <div className="timeline-container">
          <div className="timeline-header">
            <div className="our-glowing">Our Growing Journey</div>
            <div className="our-journy">
              <p>
                Our journey began with a simple vision: to empower businesses
                through creative branding and strategic marketing. Over time, we
                have evolved into a trusted partner for clients across diverse
                industries. Here's a glimpse of our growth milestones:
              </p>
            </div>
          </div>
          <div className="timeline">
            {/* Timeline Line */}
            <div ref={lineRef} className="timeline-line"></div>
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`timeline-item ${
                  index % 2 === 0 ? "right" : "left"
                }`}
              >
                {/* Content */}
                <div className="timeline-content">
                  <p className="milstone-describe">{milestone.description}</p>
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
                  {milestone.year === "2020" && (
                    <div className="timeline-image">
                      <img
                        className="first-image"
                        src={first}
                        alt="First milestone"
                      />
                    </div>
                  )}
                  {milestone.year === "2021" && (
                    <div className="timeline-image">
                      <img
                        className="second-image"
                        src={img2021}
                        alt="2021 milestone"
                      />
                    </div>
                  )}

                  {milestone.year === "2022" && (
                    <div className="timeline-image">
                      <img
                        className="first-image"
                        src={img2022}
                        alt="2021 milestone"
                      />
                    </div>
                  )}

                  {milestone.year === "2023" && (
                    <div className="timeline-image">
                      <img
                        className="second-image"
                        src={img2023}
                        alt="2021 milestone"
                      />
                    </div>
                  )}

                  {milestone.year === "2024" && (
                    <div className="timeline-image">
                      <img
                        className="first-image"
                        src={img2024}
                        alt="2021 milestone"
                      />
                    </div>
                  )}

                  {milestone.year === "2025" && (
                    <div className="timeline-image">
                      <img
                        className="second-image"
                        src={img2025}
                        alt="2021 milestone"
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
              <div className="mission-desc">
                We are believers of trusting the process. We are dedicated to
                delivering innovative, data-driven, and results-oriented digital
                marketing solutions tailored to meet the unique needs of our
                clients. Our mission is to foster growth, enhance online
                visibility, and drive meaningful engagement for the businesses
                we partner with. We always focus on creativity, technology, and
                strategic thinking. We aim to create impactful and memorable
                digital experiences that resonate with audiences, boost brand
                loyalty, and ultimately, generate tangible, sustainable results.
                We are not just a digital marketing agency, we are your trusted
                partners on the journey to digital excellence, dedicated to
                shaping a future where businesses thrive in the digital
                landscape.
              </div>
            </div>

            <div className="vision" data-aos="fade-up" data-aos-delay="400">
              <div className="img-p">
                <img src={mission} alt="" srcset="" />
                <p className="our-m-p">Our Vision</p>
              </div>
              <div className="disc-hr" />
              <div className="mission-desc">
                At Flourish, our vision is to revolutionize the digital
                landscape, one innovation at a time. We imagine a future where
                every business, regardless of size or industry, can harness the
                power of the digital scope to not just survive but grow. We see
                a world where creativity knows no bounds, where innovative
                strategies seamlessly merge with cutting-edge technology,
                propelling businesses toward unparalleled success. Our vision is
                to be the driving force behind this transformation, empowering
                businesses to connect with their audiences in meaningful ways.
                We aspire to redefine the standards of digital marketing,
                setting new benchmarks for creativity, authenticity, and
                result-driven processes.
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* our process */}
      <section>
        <div className="our-process-container">
          <div className="our-process-heading">Our Process</div>

          <div className="discovery-flex">
            <div className="discovery">
              <div className="img-discovery-flex">
                <div className="process-img">
                  <img src={process} alt="" className="img-process" />
                </div>
                <div className="we-take-flex">
                  <div className="number-discovery">
                    <div className="number">01</div>
                    <div className="zeroone-h">Discovery</div>
                  </div>

                  <div className="we-take">
                    We take the time to understand your business, goals, and
                    target audience
                  </div>
                </div>
              </div>
            </div>
            <div className="discovery">
              <div className="img-discovery-flex-ss">
                <div className="we-take-flex">
                  <div className="number-discovery">
                    <div className="number">01</div>
                    <div className="zeroone-h">Discovery</div>
                  </div>

                  <div className="we-take">
                    We take the time to understand your business, goals, and
                    target audience
                  </div>
                </div>
                <div className="process-img">
                  <img
                    src={process}
                    alt=""
                    className="img-process"
                    style={{}}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="discovery-top-p">
            <div className="discovery-flex">
              <div className="discovery">
                <div className="img-discovery-flex">
                  <div className="process-img">
                    <img src={process} alt="" className="img-process" />
                  </div>
                  <div className="we-take-flex">
                    <div className="number-discovery">
                      <div className="number">01</div>
                      <div className="zeroone-h">Discovery</div>
                    </div>

                    <div className="we-take">
                      We take the time to understand your business, goals, and
                      target audience
                    </div>
                  </div>
                </div>
              </div>
              <div className="discovery">
                <div className="img-discovery-flex-secound">
                  <div className="we-take-flex">
                    <div className="number-discovery">
                      <div className="number">01</div>
                      <div className="zeroone-h">Discovery</div>
                    </div>

                    <div className="we-take">
                      We take the time to understand your business, goals, and
                      target audience
                    </div>
                  </div>
                  <div className="process-img">
                    <img src={process} alt="" className="img-process" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
