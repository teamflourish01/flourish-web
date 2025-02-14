import React, { useState, useEffect, useRef } from "react";
import "../YourChallanges/YourChallanges.css";
import YellowBtn from "../YellowBtn/YellowBtn";
import arrowr from '../../assets/arrowr.svg'
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

const YourChallanges = ({homeDetails}) => {
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

  const str = homeDetails?.third_title ||"";
  const arr = str.split(" ");
  const text = arr;

  return (
    <div className="your-challanges">
      <div className="your-challenge-container">
        <div className="left-side-your-challange">
          <p className="your-our-strategy">
            <span className="stroke-txt-strategy">{text[0]} {" "}</span>{text[1]}
            <br />
            <span className="stroke-txt-strategy"> {text[2]} </span>{text[3]}
          </p>
          <p className="v-s-desc">
            {homeDetails.third_text}
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
                style={{border:`${index === 0 ? '1px solid white' : ' 1px solid rgba(255, 255, 255, 0.5)'}`}}

              >
                <div className="box-num-flex">
                  <div>
                  <p className={`stroke-txt-strategy-01 ${index === 0 ? 'text-white-no' : 'text-gray-400'}`}>{box.no}</p>
                  <p className={`title-branding-box ${index === 0 ? 'text-white' : 'text-gray-400-p'}`}>{box.title}</p>
                  </div>
                  <div className="arrow-box-r">
                    {/* <button>→</button> */}
                    <img src={arrowr} alt="" />

                  </div>
                </div>
                <div className="desc-arr-container-flex">
                  <p className={`desc-box ${index === 0 ? 'text-white' : 'text-gray-400-p'}`}>{box.description}</p>
                  <div className="arrow-box" style={{backgroundColor:`${index === 0 ? 'white' : 'rgba(255, 255, 255, 0.5)'}`}}>
                  <img src={arrowr} alt="" />
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