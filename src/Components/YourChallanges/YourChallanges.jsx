import React, { useState, useEffect, useRef } from "react";
import "../YourChallanges/YourChallanges.css";
import YellowBtn from "../YellowBtn/YellowBtn";
import arrowr from "../../assets/arrowr.svg";
import { Link } from "react-router-dom";

const YourChallanges = ({ homeDetails }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [boxes, setBoxes] = useState([]);
  let url = process.env.REACT_APP_DEV_URL;

  const getData = async () => {
    try {
      console.log(url);

      setLoading(true);
      const response = await fetch(`${url}/service`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const res = await response.json();
      console.log(res, "dattta");

      //   setData(res.data[0]);
      // Store fetched data in state
      // setBoxes(res.data);
      let arr = res.data?.map((e, i) => ({ ...e, count: i }));
      console.log(arr, "arr");
      setBoxes(arr);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  // Automatically scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      scrollBoxes(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [boxes]);

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

  useEffect(() => {
    getData();
  }, []);

  const str = homeDetails?.third_title || "";
  const arr = str.split(" ");
  const text = arr;

  return (
    <div className="your-challanges">
      <div className="your-challenge-container">
        <div className="left-side-your-challange">
          <p className="your-our-strategy">
            <span className="stroke-txt-strategy">{text[0]} </span>
            {text[1]}
            <br />
            <span className="stroke-txt-strategy"> {text[2]} </span>
            {text[3]}
          </p>
          <p className="v-s-desc">{homeDetails.third_text}</p>
          {/* <YellowBtn btnName="View Services" /> */}
        </div>
        <hr className="hr-animation-chalange " />
        <div className="right-side-your-challange">
          <div className="arrows-chal">
            <button onClick={() => scrollBoxes(-1)}>↑</button>
            <button onClick={() => scrollBoxes(1)}>↓</button>
          </div>
          <div className="box-scroll-container">
            {getVisibleBoxes()?.map((box, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className={`box-of-one ${
                  isTransitioning ? "transitioning" : ""
                }`}
                style={{
                  border: `${
                    index === 0
                      ? "1px solid white"
                      : " 1px solid rgba(255, 255, 255, 0.5)"
                  }`,
                }}
              >
                <div className="box-num-flex">
                  <div>
                    <p
                      className={`stroke-txt-strategy-01 ${
                        index === 0 ? "text-white-no" : "text-gray-400"
                      }`}
                    >{`0${+box?.count + 1}`}</p>
                    <p
                      className={`title-branding-box ${
                        index === 0 ? "text-white" : "text-gray-400-p"
                      }`}
                    >
                      {box?.name}
                    </p>
                  </div>
                  <div className="arrow-box-r">
                    {/* <button>→</button> */}
                    <img src={arrowr} alt="" />
                  </div>
                </div>
                <div className="desc-arr-container-flex">
                  <p
                    className={`desc-box ${
                      index === 0 ? "text-white" : "text-gray-400-p"
                    }`}
                  >
                    {box?.short_note}
                  </p>
                  <Link to={`/service/${box?.slug}`}>
                    <div
                      className="arrow-box"
                      style={{
                        backgroundColor: `${
                          index === 0 ? "white" : "rgba(255, 255, 255, 0.5)"
                        }`,
                      }}
                    >
                      <img src={arrowr} alt="" />
                    </div>
                  </Link>
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

// import React, { useState, useEffect, useRef } from "react";
// import "../YourChallanges/YourChallanges.css";
// import YellowBtn from "../YellowBtn/YellowBtn";
// import arrowr from "../../assets/arrowr.svg";
// import { Link, useParams } from "react-router-dom";

// const YourChallanges = ({ homeDetails }) => {
//   const { slug } = useParams();
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const sectionRef = useRef(null);
//   const scrollBlocked = useRef(false);
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [boxes, setBoxes] = useState([]);
//   const [dup, setDup] = useState([]);
//   const [isVisible, setIsVisible] = useState(false); // New state for animation trigger
//   let url = process.env.REACT_APP_DEV_URL;

//   const getData = async () => {
//     try {
//       console.log(url);
//       setLoading(true);
//       const response = await fetch(`${url}/service`);
//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }
//       const res = await response.json();
//       console.log(res, "dattta");

//       setData(res.data[0]);
//       setDup(res.data);
//       let arr = res.data?.map((e, i) => ({ ...e, count: i }));
//       console.log(arr, "arr");
//       setBoxes(arr);
//       setLoading(false);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   // Scroll Detection for Section Visibility
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.4 } // 30% of the section is visible
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     getData();
//   }, [slug]);

//   useEffect(() => {
//     const handleScroll = (event) => {
//       if (!sectionRef.current) return;
//       if (!sectionRef.current.contains(event.target)) return;
//       event.preventDefault();

//       if (scrollBlocked.current) return;
//       scrollBlocked.current = true;
//       setTimeout(() => (scrollBlocked.current = false), 400);

//       if (event.deltaY > 0 && currentIndex < 5) {
//         setCurrentIndex((prev) => prev + 1);
//       } else if (event.deltaY < 0 && currentIndex > 0) {
//         setCurrentIndex((prev) => prev - 1);
//       }

//       if (currentIndex === 4 && event.deltaY > 0) {
//         setTimeout(() => {
//           if (sectionRef.current) {
//             sectionRef.current.style.overflow = "visible";
//             sectionRef.current.removeEventListener("wheel", handleScroll);
//           }
//         }, 500);
//       }
//     };

//     if (currentIndex < 5 && sectionRef.current) {
//       sectionRef.current.style.overflow = "hidden";
//       sectionRef.current.addEventListener("wheel", handleScroll, {
//         passive: false,
//       });
//     }

//     return () => {
//       if (sectionRef.current) {
//         sectionRef.current.removeEventListener("wheel", handleScroll);
//       }
//     };
//   }, [currentIndex]);

//   const displayedBoxes = [
//     boxes[currentIndex % boxes.length],
//     boxes[(currentIndex + 1) % boxes.length],
//     boxes[(currentIndex + 2) % boxes.length],
//   ];

//   const str = homeDetails?.third_title || "";
//   const arr = str.split(" ");
//   const text = arr;

//   return (
//     <div
//       className={`your-challanges ${isVisible ? "animate-section" : ""}`} // Add animation class
//       ref={sectionRef}
//     >
//       <div className="your-challenge-container">
//         <div className="left-side-your-challange">
//           <p className="your-our-strategy">
//             <span className="stroke-txt-strategy">{text[0]} </span>
//             {text[1]}
//             <br />
//             <span className="stroke-txt-strategy"> {text[2]} </span>
//             {text[3]}
//           </p>
//           <p className="v-s-desc">{homeDetails.third_text}</p>
//         </div>
//         <hr className="hr-animation-chalange" />
//         <div className="right-side-your-challange">
//           <div className="box-scroll-container">
//             {displayedBoxes.map((box, index) => (
//               <div
//                 key={index}
//                 className={`box-of-one ${index === 0 ? "active" : "hidden"}`}
//                 style={{
//                   border:
//                     index === 0
//                       ? "1px solid #ff9800"
//                       : "1px solid rgba(255, 255, 255, 0.5)",
//                 }}
//               >
//                 <div className="box-num-flex">
//                   <p
//                     className={`stroke-txt-strategy-01 ${
//                       index === 0 ? "text-white-no" : "text-gray-400"
//                     }`}
//                   >
//                     {`0${+box?.count + 1}`}
//                   </p>
//                   <p
//                     className={`title-branding-box ${
//                       index === 0 ? "text-white" : "text-gray-400-p"
//                     }`}
//                   >
//                     {box?.name}
//                   </p>
//                 </div>
//                 <div className="desc-arr-container-flex">
//                   <p
//                     className={`desc-box ${
//                       index === 0 ? "text-white" : "text-gray-400-p"
//                     }`}
//                   >
//                     {box?.short_note}
//                   </p>
//                   <Link
//                     to={`/service/${box?.slug}`}
//                     onClick={() => window.scrollTo(0, 0)}
//                   >
//                     <div
//                       className="arrow-box"
//                       style={{
//                         backgroundColor:
//                           index === 0 ? "white" : "rgba(255, 255, 255, 0.5)",
//                       }}
//                     >
//                       <img src={arrowr} alt="Arrow" />
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default YourChallanges;
