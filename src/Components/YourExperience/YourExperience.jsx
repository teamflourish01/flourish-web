// import React, { useState } from "react";
// import "../YourExperience/YourExperience.css";
// import t1 from "../../assets/t1.svg";
// import t2 from "../../assets/t2.svg";
// import t3 from "../../assets/t3.svg";
// import t4 from "../../assets/t4.svg";
// import t5 from "../../assets/t5.svg";
// import quote from "../../assets/quote.svg";

// const testimonials = [
//   {
//     name: "Anvesh Talaviya (Tywist)",
//     text: "Flourish completely transformed our online presence! As a local business in Ahmedabad, we struggled to get noticed online. Their creative branding strategies and digital marketing campaigns helped us achieve higher engagement and grow our customer base significantly. If you're looking for a reliable marketing agency in Ahmedabad, Flourish is the one.",
//     image: t1,
//   },
//   {
//     name: "Vishva Satashiya (Gajanan Group)",
//     text: "We approached Flourish with a vision to take our brand to the next level. Their team delivered stunning brand visuals and crafted a comprehensive digital strategy that increased our online presence by 40% in just three months. Flourish is hands down the best marketing agency in Ahmedabad for innovative branding solutions.",
//     image: t2,
//   },
//   {
//     name: "Jignesh Patel (Frutzoo)",
//     text: "Flourish helped us define our brand identity and position ourselves as a market leader in just three months. Their personalized approach and local market insights gave us the edge we needed to connect with customers in Ahmedabad. Highly recommended for businesses looking for a branding and marketing partner who truly understands their needs.",
//     image: t3,
//   },
//   {
//     name: "Shikha Patel (Optodolce)",
//     text: "Working with Flourish has been a game-changer for our AI platform. Their team's expertise in social media marketing and SEO strategies helped us rank higher on Google and reach a wider audience. They’re the go-to branding and marketing agency for businesses in Ahmedabad looking to boost their online presence.",
//     image: t4,
//   },
//   {
//     name: "Rushil Thakkar (Sakar Group)",
//     text: "The results we’ve seen with Flourish have been nothing short of impressive. From advertising to content creation, they provided end-to-end solutions that made our brand stand out. I highly recommend Flourish if you need a trusted digital marketing agency in Ahmedabad.",
//     image: t5,
//   },
// ];

// const YourExperience = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const changeTestimonial = (direction) => {
//     setCurrentIndex(
//       (prevIndex) =>
//         (prevIndex + direction + testimonials.length) % testimonials.length
//     );
//   };

//   const showTestimonial = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <>
//       <div className="your-exp">
//         <div className="your-exp-container">
//           <div className="left-side-your-exp">
//             <p className="your-our-strategy">
//               <span className="stroke-txt-strategy">Your</span> Experience,
//               <br />
//               <span className="stroke-txt-strategy"> Our </span>Priority
//             </p>
//             <p className="your-exp-desc">
//               Our client’s success stories reflect our dedication and expertise.
//               From boosting brand awareness to driving higher conversions, we’ve
//               delivered results that make a real impact. See what our clients
//               say about their experience working with us and how we helped them
//               achieve remarkable business growth.{" "}
//             </p>
//           </div>
//           <hr className="hr-animation-exp " />
//           <div className="testinomial-your-exp">
//             <div className="images">
//               {testimonials.map((testimonial, index) => (
//                 <img
//                   key={index}
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className={`profile ${
//                     index === currentIndex ? "active" : ""
//                   }`}
//                   onClick={() => showTestimonial(index)}
//                 />
//               ))}
//             </div>

//             <div className="testimonial-content">
//               <p className="quote">
//                 <img src={quote} alt="" />
//               </p>
//               <p className="testi-title">{testimonials[currentIndex].name}</p>
//               <p className="testi-desc-txt">
//                 {testimonials[currentIndex].text}
//               </p>
//             </div>

//             <div className="arrows">
//               <button onClick={() => changeTestimonial(-1)}>←</button>
//               <div className="dots">
//                 {testimonials.map((_, index) => (
//                   <span
//                     key={index}
//                     className={`dot ${
//                       index === currentIndex ? "active-dot" : ""
//                     }`}
//                     onClick={() => showTestimonial(index)}
//                   ></span>
//                 ))}
//               </div>
//               <button onClick={() => changeTestimonial(1)}>→</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default YourExperience;

import React, { useState, useEffect } from "react";
import "../YourExperience/YourExperience.css";
import t1 from "../../assets/t1.svg";
import t2 from "../../assets/t2.svg";
import t3 from "../../assets/t3.svg";
import t4 from "../../assets/t4.svg";
import t5 from "../../assets/t5.svg";
import quote from "../../assets/quote.svg";

const testimonials = [
  {
    name: "Anvesh Talaviya (Tywist)",
    text: "Flourish completely transformed our online presence! As a local business in Ahmedabad, we struggled to get noticed online. Their creative branding strategies and digital marketing campaigns helped us achieve higher engagement and grow our customer base significantly. If you're looking for a reliable marketing agency in Ahmedabad, Flourish is the one.",
    image: t1,
  },
  {
    name: "Vishva Satashiya (Gajanan Group)",
    text: "We approached Flourish with a vision to take our brand to the next level. Their team delivered stunning brand visuals and crafted a comprehensive digital strategy that increased our online presence by 40% in just three months. Flourish is hands down the best marketing agency in Ahmedabad for innovative branding solutions.",
    image: t2,
  },
  {
    name: "Jignesh Patel (Frutzoo)",
    text: "Flourish helped us define our brand identity and position ourselves as a market leader in just three months. Their personalized approach and local market insights gave us the edge we needed to connect with customers in Ahmedabad. Highly recommended for businesses looking for a branding and marketing partner who truly understands their needs.",
    image: t3,
  },
  {
    name: "Shikha Patel (Optodolce)",
    text: "Working with Flourish has been a game-changer for our AI platform. Their team's expertise in social media marketing and SEO strategies helped us rank higher on Google and reach a wider audience. They’re the go-to branding and marketing agency for businesses in Ahmedabad looking to boost their online presence.",
    image: t4,
  },
  {
    name: "Rushil Thakkar (Sakar Group)",
    text: "The results we’ve seen with Flourish have been nothing short of impressive. From advertising to content creation, they provided end-to-end solutions that made our brand stand out. I highly recommend Flourish if you need a trusted digital marketing agency in Ahmedabad.",
    image: t5,
  },
];

const YourExperience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [direction, setDirection] = useState("right"); // Track direction
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      changeTestimonial(1);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const changeTestimonial = (step) => {
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex + step + testimonials.length) % testimonials.length
      );
      setIsSliding(false);
    }, 500); // Match the CSS transition duration
  };

  useEffect(() => {
    let intervalId;

    if (isAutoPlay) {
      intervalId = setInterval(() => {
        changeTestimonial(1);
      }, 2000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAutoPlay]);

  const showTestimonial = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 500);
  };

  return (
    <>
      <div className="your-exp">
        <div className="your-exp-container">
          <div className="left-side-your-exp">
            <p className="your-our-strategy">
              <span className="stroke-txt-strategy">Your</span> Experience,
              <br />
              <span className="stroke-txt-strategy"> Our </span>Priority
            </p>
            <p className="your-exp-desc">
              Our client's success stories reflect our dedication and expertise.
            </p>
          </div>
          <hr className="hr-animation-exp " />
          <div className="testinomial-your-exp">
            <div className="images">
              {testimonials.map((testimonial, index) => (
                <img
                  key={index}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={`profile ${
                    index === currentIndex ? "active" : ""
                  }`}
                  onClick={() => showTestimonial(index)}
                />
              ))}
            </div>
            <div className={`slider ${isSliding ? "sliding" : ""}`}>
              {testimonials.map((testimonial, index) => (
                <div
                  className={`testimonial-content  slide ${
                    index === currentIndex
                      ? "active-slide"
                      : index === (currentIndex + 1) % testimonials.length
                      ? "next-slide"
                      : "hidden-slide"
                  } `}
                >
                  <p className="quote">
                    <img src={quote} alt="" />
                  </p>
                  <p className="testi-title">{testimonial.name}</p>
                  <p className="testi-desc-txt">{testimonial.text}</p>
                </div>
              ))}
            </div>
            <div className="arrows">
              <button onClick={() => changeTestimonial(-1)}>←</button>
              <div className="dots">
                {testimonials.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${
                      index === currentIndex ? "active-dot" : ""
                    }`}
                    onClick={() => showTestimonial(index)}
                  ></span>
                ))}
              </div>
              <button onClick={() => changeTestimonial(1)}>→</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourExperience;
