// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "../YourSuccess/YourSuccess.css";

// gsap.registerPlugin(ScrollTrigger);

// const YourSuccess = ({ homeDetails }) => {
//   const ballRef = useRef(null);
//   const sectionRef = useRef(null);
//   const statItemsRef = useRef([]);
//   const textItemsRef = useRef([]);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [isActive, setIsActive] = useState(false);
//   const [isScrollEnabled, setIsScrollEnabled] = useState(false);
//   const [revealedTexts, setRevealedTexts] = useState(new Array(6).fill(false));

//   useEffect(() => {
//     const section = sectionRef.current;

//     ScrollTrigger.create({
//       trigger: section,
//       start: "top top",
//       end: "bottom center",
//       onEnter: () => setIsActive(true),
//       onLeaveBack: () => setIsActive(false),
//       markers: false,
//     });

//     return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//   }, []);

//   useEffect(() => {
//     if (!isActive || isScrollEnabled) return;

//     const ball = ballRef.current;
//     const boxes = statItemsRef.current;

//     // const updateBallPosition = (event) => {
//     //   event.preventDefault();

//     //   setScrollPosition((prev) => {
//     //     let newPos = prev + event.deltaY * 0.5;
//     //     newPos = Math.max(0, Math.min(newPos, window.innerWidth * 1.2));

//     //     if (newPos >= window.innerWidth * 1) {
//     //       setIsScrollEnabled(true);
//     //       sectionRef.current?.removeEventListener("wheel", updateBallPosition);
//     //     }

//     //     return newPos;
//     //   });

//     //   gsap.to(ball, {
//     //     x: scrollPosition,
//     //     rotation: scrollPosition * 4,
//     //     ease: "power2.out",
//     //     duration: 0.3,
//     //   });

//     //   const ballRect = ball.getBoundingClientRect();
//     //   boxes.forEach((box, index) => {
//     //     if (!box) return;
        
//     //     const boxRect = box.getBoundingClientRect();
//     //     const isBallOverBox =
//     //       ballRect.left >= boxRect.left && ballRect.right <= boxRect.right;

//     //     if (isBallOverBox && !revealedTexts[index]) {
//     //       setRevealedTexts(prev => {
//     //         const newRevealedTexts = [...prev];
//     //         newRevealedTexts[index] = true;
//     //         return newRevealedTexts;
//     //       });
//     //     }
//     //   });
//     // };

//     const updateBallPosition = (event) => {
//       event.preventDefault();
    
//       setScrollPosition((prev) => {
//         let newPos = prev + event.deltaY * 0.5;
//         newPos = Math.max(0, Math.min(newPos, window.innerWidth * 1.2));
    
//         if (newPos >= window.innerWidth * 1) {
//           setIsScrollEnabled(true);
//           sectionRef.current?.removeEventListener("wheel", updateBallPosition);
//         }
    
//         return newPos;
//       });
    
//       const ball = ballRef.current;
//       const boxes = statItemsRef.current;
    
//       gsap.to(ball, {
//         x: scrollPosition,
//         rotation: scrollPosition * 4,
//         ease: "power2.out",
//         duration: 0.3,
//       });
    
//       const ballRect = ball.getBoundingClientRect();
//       boxes.forEach((box, index) => {
//         if (!box) return;
    
//         const boxRect = box.getBoundingClientRect();
//         const isBallOverBox =
//           ballRect.left >= boxRect.left && ballRect.right <= boxRect.right;
    
//         if (isBallOverBox && !revealedTexts[index]) {
//           setRevealedTexts((prev) => {
//             const newRevealedTexts = [...prev];
//             newRevealedTexts[index] = true;
//             return newRevealedTexts;
//           });
    
//           // Animate the revealing text (fade-up effect)
//           gsap.to(textItemsRef.current[index], {
//             opacity: 1,
//             y: -15, // Move text up by 10px
//             // duration: 0.5,
//             ease: "power2.out",
//           });
    
//           // Animate ONLY the text inside `.box-success`, moving it 10px up
//           const boxText = box.querySelector(".box-success p");
//           if (boxText) {
//             gsap.to(boxText, {
//               y: -30, // Move text up by 10px
//               duration: 0.5,
//               ease: "power2.out",
//             });
//           }
//         }
//       });
//     };
    
//     sectionRef.current?.addEventListener("wheel", updateBallPosition, {
//       passive: false,
//     });

//     return () => {
//       sectionRef.current?.removeEventListener("wheel", updateBallPosition);
//     };
//   }, [scrollPosition, isActive, isScrollEnabled, revealedTexts]);

//   const addToStatRefs = (el) => {
//     if (el && !statItemsRef.current.includes(el)) {
//       statItemsRef.current = [...statItemsRef.current, el];
//     }
//   };

//   const addToTextRefs = (el) => {
//     if (el && !textItemsRef.current.includes(el)) {
//       textItemsRef.current = [...textItemsRef.current, el];
//     }
//   };

//   const stats = [
//     { value: homeDetails?.first_box_title, text: homeDetails?.first_box_text },
//     { value: homeDetails?.second_box_title, text: homeDetails?.second_box_text },
//     { value: homeDetails?.third_box_title, text: homeDetails?.third_box_text },
//     { value: homeDetails?.forth_box_title, text: homeDetails?.forth_box_text },
//     { value: homeDetails?.fifth_box_title, text: homeDetails?.fifth_box_text },
//     { value: homeDetails?.sixth_box_title, text: homeDetails?.sixth_box_text },
//   ];

//   const text = (homeDetails?.forth_title || "").split(" ");

//   return (
//     <>
//     <div className="your-success hidee-sss" ref={sectionRef}>
//       <div className="your-success-container">
//         <p className="your-f-our-c">
//           <span className="stroke-txt">{text[0]}</span> {text[1]}
//           <span className="stroke-txt"> {text[2]} </span>
//           {text[3]}
//         </p>
//         <p className="desc-y-o-success">{homeDetails.forth_text}</p>
//       </div>

//       <div ref={ballRef} className="ball"></div>
//       <div className="shadow-box"></div>

//       <div className="stats-container">
//         {stats.map((stat, index) => (
//           <div key={index} className="stat-group">
//             <div className="stat-item" ref={addToStatRefs}>
//               <div className="line"></div>
//               <div className="box-success">
//               <p>{stat.value}</p></div>
//             </div>
//             <div
//               ref={addToTextRefs}
//               className={`text-5x-300 po-${
//                 stat.value ? stat.value.toLowerCase() : "default"
//               }`}
//               style={{
//                 opacity: revealedTexts[index] ? 1 : 0,
//                 transition: "opacity 0.3s ease"
//               }}
//             >
//               {stat.text}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//         <div className="your-success hide-s">
//         <div className="your-success-container">
//           <p className="your-f-our-c">
//             <span className="stroke-txt">{text[0]}</span> {text[1]}
//             <span className="stroke-txt"> {text[2]}</span> {text[3]}
//           </p>
//           <p className="your-f-our-c-mobile">
//             <span className="stroke-txt">{text[0]}</span> {text[1]}
//             <br />
//             <span className="stroke-txt">{text[2]}</span> {text[3]}
//           </p>
//           <p
//             className="desc-y-o"
//             data-aos="fade-up"
//             data-aos-delay="200"
//             data-aos-anchor-placement="bottom-bottom"
//           >
//             Your success is the benchmark of our expertise. As a leading
//             branding and marketing agency in Ahmedabad, we craft customized
//             strategies that turn your business goals into measurable
//             achievements.
//           </p>
//           <div
//             className="box-grid-ani"
//             data-aos="fade-up"
//             data-aos-delay="400"
//             data-aos-anchor-placement="bottom-bottom"
//           >
//             {stats.map((stat, index) => (
//               <div className="box-s-y-s">
//                 <p className="box-s-y-s-txt">{stat.value}</p>
//                 <p className="text-5x-300-res">{stat.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
// </>
//   );
// };

// export default YourSuccess;





// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "../YourSuccess/YourSuccess.css";

// gsap.registerPlugin(ScrollTrigger);

// const YourSuccess = ({ homeDetails }) => {
//   const ballRef = useRef(null);
//   const sectionRef = useRef(null);
//   const statItemsRef = useRef([]);
//   const textItemsRef = useRef([]);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [isScrollEnabled, setIsScrollEnabled] = useState(false);
//   const [revealedTexts, setRevealedTexts] = useState(new Array(6).fill(false));

//   useEffect(() => {
//     const section = sectionRef.current;

//     ScrollTrigger.create({
//       trigger: section,
//       start: "top 30%",
//       end: "+=0%", // Keep section pinned while animation runs
//       pin: true, // Keep the section fixed
//       onEnter: () => startBallAnimation(),
//       onLeaveBack: () => resetAnimation(),
//       markers: false,
//     });

//     return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//   }, []);

//   const startBallAnimation = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     let ball = ballRef.current;
//     let boxes = statItemsRef.current;
//     let progress = { x: 0 };

//     gsap.to(progress, {
//       x: window.innerWidth * 1.1,
//       duration: 9.9,
//       ease: "power2.inOut",
//       onUpdate: () => {
//         gsap.set(ball, { x: progress.x, rotation: progress.x * 0.1 });
//         revealText(progress.x, boxes);
//       },
//       onComplete: () => {
//         setIsScrollEnabled(true);
//         ScrollTrigger.refresh(); // Allow scrolling after animation
//       },
//     });
//   };

//   const revealText = (position, boxes) => {
//     if (!ballRef.current) return;
//     let ballRect = ballRef.current.getBoundingClientRect();
//     boxes.forEach((box, index) => {
//       if (!box) return;
//       let boxRect = box.getBoundingClientRect();
//       let isBallOverBox = ballRect.left >= boxRect.left && ballRect.right <= boxRect.right;

//       if (isBallOverBox && !revealedTexts[index]) {
//         setRevealedTexts((prev) => {
//           let newRevealedTexts = [...prev];
//           newRevealedTexts[index] = true;
//           return newRevealedTexts;
//         });
//         if (textItemsRef.current[index]) {
//           gsap.to(textItemsRef.current[index], { opacity: 1, y: -15, ease: "power2.out" });
//         }
//         // 
//         let boxText = box.querySelector(".box-success p");
//         if (boxText) {
//           gsap.to(boxText, { y: -30, duration: 0.5, ease: "power2.out" });
//         }
//       }
//     });
//   };

//   const resetAnimation = () => {
//     setIsAnimating(false);
//     setIsScrollEnabled(false);
//     setRevealedTexts(new Array(6).fill(false));
//     gsap.set(ballRef.current, { x: -80, rotation: 0 });
//     textItemsRef.current.forEach((text) => gsap.set(text, { opacity: 0, y: 0 }));
//   };

//   const stats = [
//     { value: homeDetails?.first_box_title, text: homeDetails?.first_box_text },
//     { value: homeDetails?.second_box_title, text: homeDetails?.second_box_text },
//     { value: homeDetails?.third_box_title, text: homeDetails?.third_box_text },
//     { value: homeDetails?.forth_box_title, text: homeDetails?.forth_box_text },
//     { value: homeDetails?.fifth_box_title, text: homeDetails?.fifth_box_text },
//     { value: homeDetails?.sixth_box_title, text: homeDetails?.sixth_box_text },
//   ];

//   const str = homeDetails?.forth_title || "";
//   const arr = str.split(" ");
//   const text = arr;

//   return (
//     <div className="your-success" ref={sectionRef} style={{ overflow: isScrollEnabled ? "visible" : "hidden" }}>
//       <div className="your-success-container">
//         <p className="your-f-our-c">
//           <span className="stroke-txt">{text[0]}</span> {text[1]}
//           <span className="stroke-txt"> {text[2]} </span>
//           {text[3]}
//         </p>
//         <p className="desc-y-o-success">{homeDetails.forth_text}</p>
//       </div>
//       <div ref={ballRef} className="ball"></div>
//       <div className="shadow-box"></div>
//       <div className="stats-container">
//         {stats.map((stat, index) => (
//           <div key={index} className="stat-group">
//             <div className="stat-item" ref={(el) => (statItemsRef.current[index] = el)}>
//               <div className="line"></div>
//               <div className="box-success">
//                 <p>{stat.value}</p>
//               </div>
//             </div>
//             <div ref={(el) => (textItemsRef.current[index] = el)}
//               className="text-5x-300"
//               style={{ opacity: revealedTexts[index] ? 1 : 0 }}>
//               {stat.text}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default YourSuccess;




import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../YourSuccess/YourSuccess.css";

gsap.registerPlugin(ScrollTrigger);

const YourSuccess = ({ homeDetails }) => {
  const ballRef = useRef(null);
  const sectionRef = useRef(null);
  const statItemsRef = useRef([]);
  const textItemsRef = useRef([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isScrollEnabled, setIsScrollEnabled] = useState(false);
  const [revealedTexts, setRevealedTexts] = useState(new Array(6).fill(false));

  useEffect(() => {
    const section = sectionRef.current;

    ScrollTrigger.create({
      trigger: section,
      start: "top 30%",
      end: "+=1%", // Keep section pinned while animation runs
      pin: true, // Keep the section fixed
      onEnter: () => startBallAnimation(),
      onLeaveBack: () => resetAnimation(),
      markers: false,
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  const startBallAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    let ball = ballRef.current;
    let boxes = statItemsRef.current;
    let progress = { x: 0 };

    gsap.to(progress, {
      x: window.innerWidth * 1.1,
      duration: 9.9,
      ease: "power2.inOut",
      onUpdate: () => {
        gsap.set(ball, { x: progress.x, rotation: progress.x * 0.1 });
        revealText(progress.x, boxes);
      },
      onComplete: () => {
        setIsScrollEnabled(true);
        ScrollTrigger.refresh(); // Allow scrolling after animation
      },
    });
  };

  const revealText = (position, boxes) => {
    if (!ballRef.current) return;
    let ballRect = ballRef.current.getBoundingClientRect();
    boxes.forEach((box, index) => {
      if (!box) return;
      let boxRect = box.getBoundingClientRect();
      let isBallOverBox = ballRect.left >= boxRect.left && ballRect.right <= boxRect.right;

      if (isBallOverBox && !revealedTexts[index]) {
        setRevealedTexts((prev) => {
          let newRevealedTexts = [...prev];
          newRevealedTexts[index] = true;
          return newRevealedTexts;
        });

        if (textItemsRef.current[index]) {
          gsap.to(textItemsRef.current[index], { opacity: 1, y: -15, ease: "power2.out" });
        }
       
        let boxText = box.querySelector(".box-success p");
        if (boxText) {
          gsap.to(boxText, { y: -30, duration: 0.5, ease: "power2.out" });
        }
      }
    });
  };

  const resetAnimation = () => {
    setIsAnimating(false);
    setIsScrollEnabled(false);
    setRevealedTexts(new Array(6).fill(false));
    gsap.set(ballRef.current, { x: -80, rotation: 0 });
    textItemsRef.current.forEach((text) => gsap.set(text, { opacity: 0, y: 0 }));
  };

  const stats = [
    { value: homeDetails?.first_box_title, text: homeDetails?.first_box_text },
    { value: homeDetails?.second_box_title, text: homeDetails?.second_box_text },
    { value: homeDetails?.third_box_title, text: homeDetails?.third_box_text },
    { value: homeDetails?.forth_box_title, text: homeDetails?.forth_box_text },
    { value: homeDetails?.fifth_box_title, text: homeDetails?.fifth_box_text },
    { value: homeDetails?.sixth_box_title, text: homeDetails?.sixth_box_text },
  ];

  const str = homeDetails?.forth_title || "";
  const arr = str.split(" ");
  const text = arr;

  return (
    // <div className="your-success" ref={sectionRef} style={{ overflow: isScrollEnabled ? "visible" : "hidden" }}>
    //   <div className="your-success-container">
    //     <p className="your-f-our-c">
    //       <span className="stroke-txt">{text[0]}</span> {text[1]}
    //       <span className="stroke-txt"> {text[2]} </span>
    //       {text[3]}
    //     </p>
    //     <p className="desc-y-o-success">{homeDetails.forth_text}</p>
    //   </div>
    //   <div ref={ballRef} className="ball"></div>
    //   <div className="shadow-box"></div>
    //   <div className="stats-container">
    //     {stats.map((stat, index) => (
    //       <div key={index} className="stat-group">
    //         <div className="stat-item" ref={(el) => (statItemsRef.current[index] = el)}>
    //           <div className="line"></div>
    //           <div className="box-success">
    //             <p>{stat.value}</p>
    //           </div>
    //         </div>
    //         <div ref={(el) => (textItemsRef.current[index] = el)}
    //           className="text-5x-300"
    //           style={{ opacity: revealedTexts[index] ? 1 : 0 }}>
    //           {stat.text}
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <>


<div className="your-success hidee-sss" ref={sectionRef} style={{ overflow: isScrollEnabled ? "visible" : "hidden" }}>
      <div className="your-success-container">
        <p className="your-f-our-c">
          <span className="stroke-txt">{text[0]}</span> {text[1]}
          <span className="stroke-txt"> {text[2]} </span>
          {text[3]}
        </p>
        <p className="desc-y-o-success">{homeDetails.forth_text}</p>
      </div>
      <div ref={ballRef} className="ball"></div>
      <div className="shadow-box"></div>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-group">
            <div className="stat-item" ref={(el) => (statItemsRef.current[index] = el)}>
              <div className="line"></div>
              <div className="box-success">
                <p>{stat.value}</p>
              </div>
            </div>
            <div ref={(el) => (textItemsRef.current[index] = el)}
              className="text-5x-300"
              style={{ opacity: revealedTexts[index] ? 1 : 0 }}>
              {stat.text}
            </div>
          </div>
        ))}
      </div>
    </div>
         <div className="your-success hide-s">
         <div className="your-success-container">
           <p className="your-f-our-c">
             <span className="stroke-txt">{text[0]}</span> {text[1]}
             <span className="stroke-txt"> {text[2]}</span> {text[3]}
           </p>
           <p className="your-f-our-c-mobile">
             <span className="stroke-txt">{text[0]}</span> {text[1]}
             <br />
             <span className="stroke-txt">{text[2]}</span> {text[3]}
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








