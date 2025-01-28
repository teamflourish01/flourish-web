import React, { useState, useEffect, useRef } from "react";
import "../YourChallanges/YourChallanges.css";
import YellowBtn from "../YellowBtn/YellowBtn";

const boxes = [
  {
    no: "01",
    title: "Branding",
    description:
      "Build a powerful, memorable brand identity that stands out and drives trust.",
  },
  {
    no: "02",
    title: "Visual Experience",
    description:
      "Create stunning, strategic visuals that enhance engagement and brand presence.",
  },
  {
    no: "03",
    title: "Content Creation",
    description:
      "Craft compelling content that connects, informs, and converts your audience.",
  },
  {
    no: "04",
    title: "Digital Marketing",
    description:
      "Drive traffic, leads, and sales with data-driven marketing strategies.",
  },
  {
    no: "05",
    title: "Web/App Development",
    description:
      "Develop user-friendly, high-performing websites and apps for business growth.",
  },
  {
    no: "06",
    title: "Visual Experience",
    description:
      "Create stunning, strategic visuals that enhance engagement and brand presence.",
  },
];

const YourChallanges = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Automatically scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      scrollBoxes(1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollBoxes = (direction) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + direction + boxes.length) % boxes.length;
        return newIndex;
      });
      
      setIsTransitioning(false);
    }, 300);
  };

  const getVisibleBoxes = () => {
    const first = boxes[currentIndex];
    const second = boxes[(currentIndex + 1) % boxes.length];
    const third = boxes[(currentIndex + 2) % boxes.length];
    return [first, second, third];
  };

  return (
    <div className="your-challanges">
      <div className="your-challenge-container">
        <div className="left-side-your-challange">
          <p className="your-our-strategy">
            <span className="stroke-txt-strategy">Your</span> Challenges,
            <br />
            <span className="stroke-txt-strategy"> Our </span>Solutions
          </p>
          <p className="v-s-desc">
            We are more than just a branding and marketing agency in Ahmedabad;
            we are your partners in shaping a future of growth and innovation.
            Our purpose is to help businesses unlock their true potential by
            building brands that leave a lasting impact.
          </p>
          <YellowBtn btnName="View Services" />
        </div>
        <hr className="hr-animation-chalange " />
        <div className="right-side-your-challange">
          <div className="arrows-chal">
            <button onClick={() => scrollBoxes(-1)}>↑</button>
            <button onClick={() => scrollBoxes(1)}>↓</button>
          </div>
          <div className="box-scroll-container">
            {getVisibleBoxes().map((box, index) => (
              <div 
                key={`${currentIndex}-${index}`}
                className={`box-of-one ${isTransitioning ? 'transitioning' : ''}`}
              >
                <div className="box-num-flex">
                  <p className="stroke-txt-strategy-01">{box.no}</p>
                  <p className="title-branding-box">{box.title}</p>
                </div>
                <div className="desc-arr-container-flex">
                  <p className="desc-box">{box.description}</p>
                  <div className="arrow-box">
                    <button>→</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourChallanges;