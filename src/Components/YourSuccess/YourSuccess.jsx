import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../YourSuccess/YourSuccess.css";
import { div } from "three/tsl";

gsap.registerPlugin(ScrollTrigger);

const YourSuccess = () => {
  const ballRef = useRef(null);
  const sectionRef = useRef(null);
  const statItemsRef = useRef([]);
  const textItemsRef = useRef([]);

  useEffect(() => {
    const ball = ballRef.current;
    const section = sectionRef.current;
    const boxes = statItemsRef.current;
    const texts = textItemsRef.current;
  
    gsap.set(texts, { opacity: 0 });
  
    const ballTimeline = gsap.to(ball, {
      x: "100vw",
      rotation: 1440, // Add rotation
      ease: "none", // Makes the rotation smooth and linear
      scrollTrigger: {
        trigger: section,
        start: "top 2%",
        end: "bottom center",
        scrub: 0.1,
        markers: false,
        pin: true,
        onUpdate: (self) => {
          const ballRect = ball.getBoundingClientRect();
          boxes.forEach((box, index) => {
            const boxRect = box.getBoundingClientRect();
            const isBallOverBox =
              ballRect.left >= boxRect.left && ballRect.right <= boxRect.right;
  
            if (isBallOverBox && texts[index].style.opacity === "0") {
              gsap.to(texts[index], {
                opacity: 1,
                duration: 0.1,
              });

              
            }
          });
        },
      },
    });
  
    return () => ballTimeline.kill();
  }, []);

  // useEffect(() => {
  //   const ball = ballRef.current;
  //   const section = sectionRef.current;
  //   const boxes = statItemsRef.current;
  //   const texts = textItemsRef.current;
  
  //   gsap.set(texts, { opacity: 0 });
  
  //   const ballTimeline = gsap.to(ball, {
  //     x: "100vw",
  //     scrollTrigger: {
  //       trigger: section,
  //       start: "top 2%",
  //       end: "bottom center",
  //       scrub: 0.01, // Changed from 0.0005 to 2 for slower movement
  //       markers: false,
  //       pin: true,
  //       onUpdate: (self) => {
  //         const ballRect = ball.getBoundingClientRect();
  //         boxes.forEach((box, index) => {
  //           const boxRect = box.getBoundingClientRect();
  //           const isBallOverBox =
  //             ballRect.left >= boxRect.left && ballRect.right <= boxRect.right;
  
  //           if (isBallOverBox && texts[index].style.opacity === "0") {
  //             gsap.to(texts[index], {
  //               opacity: 1,
  //               duration: 0.01,
  //             });
  //           }
  //         });
  //       },
  //     },
  //   });
  
  //   return () => ballTimeline.kill();
  // }, []);

  const addToStatRefs = (el) => {
    if (el && !statItemsRef.current.includes(el)) {
      statItemsRef.current.push(el);
    }
  };

  const addToTextRefs = (el) => {
    if (el && !textItemsRef.current.includes(el)) {
      textItemsRef.current.push(el);
    }
  };

  const stats = [
    { value: "5m", text: "ROI achieved" },
    { value: "300", text: "leads generated" },
    { value: "5k", text: "Ad impressions delivered" },
    { value: "80", text: "client retention rate" },
    { value: "10", text: "industry served" },
    { value: "5K", text: "creative assets crafted" },
  ];

  return (
    <>
      <div className="display-in-desk">
        <div className="your-success" ref={sectionRef}>
          <div className="your-success-container">
            <p className="your-f-our-c">
              <span className="stroke-txt">Your</span> Success,
              <span className="stroke-txt"> Our </span>Expertise
            </p>
            <p
              className="desc-y-o"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor-placement="bottom-bottom"
            >
              Your success is the benchmark of our expertise. As a leading
              branding and marketing agency in Ahmedabad, we craft customized
              strategies that turn your business goals into measurable
              achievements.
            </p>
          </div>
          <div ref={ballRef} className="ball"></div>
          <div className="shadow-box"></div>

          <div className="stats-container">
            {stats.map((stat, index) => (
              <div key={index} className="stat-group">
                <div className="stat-item" ref={addToStatRefs}>
                  <div className="line"></div>
                  <div className="box-success">{stat.value}</div>
                </div>
                <div
                  ref={addToTextRefs}
                  className={`text-5x-300 po-${stat.value.toLowerCase()}`}
                  style={{ opacity: 0 }}
                >
                  {stat.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="your-success hide-s">
        <div className="your-success-container">
          <p className="your-f-our-c">
            <span className="stroke-txt">Your</span> Success,
            <span className="stroke-txt"> Our </span>Expertise
          </p>
          <p className="your-f-our-c-mobile">
            <span className="stroke-txt">Your</span> Success,
            <br />
            <span className="stroke-txt"> Our </span>Expertise
          </p>
          <p
            className="desc-y-o"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-anchor-placement="bottom-bottom"
          >
            Your success is the benchmark of our expertise. As a leading
            branding and marketing agency in Ahmedabad, we craft customized
            strategies that turn your business goals into measurable
            achievements.
          </p>
          <div
            className="box-grid-ani"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-anchor-placement="bottom-bottom"
          >
            {stats.map((stat, index) => (
              <div className="box-s-y-s">
                <p className="box-s-y-s-txt">{stat.value}</p>
                <p className="text-5x-300-res">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default YourSuccess;
