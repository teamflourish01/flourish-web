// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "../YourSuccess/YourSuccess.css";

// gsap.registerPlugin(ScrollTrigger);

// const YourSuccess = () => {
//   const ballRef = useRef(null);
//   const sectionRef = useRef(null);
//   const statItemsRef = useRef([]);
//   const textItemsRef = useRef([]);

//   useEffect(() => {
//     const ball = ballRef.current;
//     const section = sectionRef.current;
    
//     // Reset all text opacities initially
//     textItemsRef.current.forEach(text => {
//       gsap.set(text, { opacity: 0 });
//     });

//     // Ball animation
//     const ballTimeline = gsap.to(ball, {
//       x: "100vw",
//       scrollTrigger: {
//         trigger: section,
//         start: "top 2%",
//         end: "bottom center",
//         scrub: 4,
//         markers: false,
//         pin: true,
//       },
//     });

//     // Calculate section segments for each box
//     const numBoxes = statItemsRef.current.length;
//     const segmentSize = 100 / (numBoxes - 1); // Percentage for each segment

//     ScrollTrigger.create({
//       trigger: section,
//       start: "top 2%",
//       end: "bottom center",
//       scrub: true,
//       onUpdate: (self) => {
//         const progress = self.progress * 100; // Convert to percentage
        
//         // Find which box the ball is currently at
//         const currentBoxIndex = Math.floor(progress / segmentSize);
        
//         // Hide all texts first
//         textItemsRef.current.forEach((text, idx) => {
//           if (idx !== currentBoxIndex) {
//             gsap.to(text, {
//               opacity: 0,
//               duration: 0.3,
//             });
//           }
//         });

//         // Show text for current box
//         if (currentBoxIndex >= 0 && currentBoxIndex < numBoxes) {
//           gsap.to(textItemsRef.current[currentBoxIndex], {
//             opacity: 1,
//             duration: 0.5,
//             // delay: 0.3, // Small delay before showing new text
//           });
//         }
//       }
//     });
//   }, []);

//   // Helper function to store refs
//   const addToStatRefs = (el) => {
//     if (el && !statItemsRef.current.includes(el)) {
//       statItemsRef.current.push(el);
//     }
//   };

//   const addToTextRefs = (el) => {
//     if (el && !textItemsRef.current.includes(el)) {
//       textItemsRef.current.push(el);
//     }
//   };

//   const stats = [
//     { value: "5x", text: "ROI achieved" },
//     { value: "300K+", text: "leads generated" },
//     { value: "5m+", text: "Ad impressions delivered" },
//     { value: "80%", text: "client retention rate" },
//     { value: "10+", text: "industry served" },
//     { value: "5K+", text: "creative assets crafted" }
//   ];

//   return (
//     <div className="your-success" ref={sectionRef}>
//       <div className="your-success-container">
//         <p className="your-f-our-c">
//           <span className="stroke-txt">Your</span> Success,
//           <span className="stroke-txt"> Our </span>Expertise
//         </p>
//         <p
//           className="desc-y-o"
//           data-aos="fade-up"
//           data-aos-delay="200"
//           data-aos-anchor-placement="bottom-bottom"
//         >
//           Your success is the benchmark of our expertise. As a leading branding
//           and marketing agency in Ahmedabad, we craft customized strategies that
//           turn your business goals into measurable achievements.
//         </p>
//       </div>

//       <div ref={ballRef} className="ball"></div>
//       <div className="shadow-box"></div>

//       <div className="stats-container">
//         {stats.map((stat, index) => (
//           <div key={index} className="stat-group">
//             <div className="stat-item" ref={addToStatRefs}>
//               <div className="line"></div>
//               <div className="box-success">{stat.value}</div>
//             </div>
//             <div
//               ref={addToTextRefs}
//               className={`text-5x-300 po-${stat.value.toLowerCase()}`}
//               style={{ opacity: 0 }}
//             >
//               {stat.text}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default YourSuccess;



import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../YourSuccess/YourSuccess.css";

gsap.registerPlugin(ScrollTrigger);

const YourSuccess = () => {
  const ballRef = useRef(null);
  const sectionRef = useRef(null);
  const statItemsRef = useRef([]);
  const textItemsRef = useRef([]);

  useEffect(() => {
    const ball = ballRef.current;
    const section = sectionRef.current;
    
    // Reset all text opacities initially
    textItemsRef.current.forEach(text => {
      gsap.set(text, { opacity: 0 });
    });

    // Ball animation
    const ballTimeline = gsap.to(ball, {
      x: "100vw",
      scrollTrigger: {
        trigger: section,
        start: "top 2%",
        end: "bottom center",
        scrub: 4,
        markers: false,
        pin: true,
      },
    });

    // Calculate total section width
    const sectionWidth = section.offsetWidth;
    const numBoxes = statItemsRef.current.length;

    // Create individual animations for each text element
    statItemsRef.current.forEach((statItem, index) => {
      // Calculate the position where ball should trigger this text
      const triggerPosition = (index / (numBoxes - 1)) * 100;
      
      ScrollTrigger.create({
        trigger: section,
        start: "top 2%",
        end: "bottom center",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress * 100; // Convert to percentage
          const shouldShow = progress >= triggerPosition;
          
          // Only show text if ball has reached this position
          gsap.to(textItemsRef.current[index], {
            opacity: shouldShow ? 1 : 0,
            duration: 0.1,
            // delay: shouldShow ? 0.1 : 0, // Only apply delay when showing
          });
        }
      });
    });
  }, []);

  // Helper function to store refs
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
    { value: "5K", text: "creative assets crafted" }
  ];

  return (
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
          Your success is the benchmark of our expertise. As a leading branding
          and marketing agency in Ahmedabad, we craft customized strategies that
          turn your business goals into measurable achievements.
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
  );
};

export default YourSuccess;





