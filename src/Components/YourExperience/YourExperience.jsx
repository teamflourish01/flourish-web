import React, { useState, useEffect } from "react";
import quote from "../../assets/quote.svg";
import "../YourExperience/YourExperience.css";

const YourExperience = ({ homeDetails, testimonials, url }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState("right");

  useEffect(() => {
    let intervalId;
    if (isAutoPlay && testimonials?.length > 1) {
      intervalId = setInterval(() => {
        changeTestimonial(1);
      }, 4000);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAutoPlay, currentIndex, testimonials?.length]);

  const changeTestimonial = (step) => {
    setSlideDirection(step > 0 ? "right" : "left"); 

    setCurrentIndex((prevIndex) => {
      const newIndex =
        (prevIndex + step + testimonials.length) % testimonials.length;
      return newIndex;
    });

    setIsAutoPlay(false); 
    setTimeout(() => setIsAutoPlay(true), 4000);
  };


  const showTestimonial = (index) => {
    if (index === currentIndex) return;
    setSlideDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 2000);
  };

  const reorderedTestimonials = testimonials
    ? [
        ...testimonials.slice(currentIndex),
        ...testimonials.slice(0, currentIndex),
      ]
    : [];

  const titleWords = homeDetails?.fifth_title?.split(" ") || [];

  return (
    <div className="your-exp">
      <div className="your-exp-container">
        <div className="left-side-your-exp">
          <p className="your-our-strategy">
            <span className="stroke-txt-strategy">{titleWords[0]}</span>{" "}
            {titleWords[1]}
            <br />
            <span className="stroke-txt-strategy">{titleWords[2]}</span>{" "}
            {titleWords[3]}
          </p>
          <p className="your-exp-desc">{homeDetails?.fifth_text}</p>
        </div>

        <hr className="hr-animation-exp" />

        <div className="testinomial-your-exp">
          <div className="images">
            {reorderedTestimonials.map((testimonial, index) => (
              <img
                key={`img-${testimonial.id || index}`}
                src={`${url}/testimonial/${testimonial.image}`}
                alt={testimonial.name}
                className={`profile ${index === 0 ? "active" : ""}`}
                onClick={() =>
                  showTestimonial((currentIndex + index) % testimonials.length)
                }
              />
            ))}
          </div>

          <div className={`slider ${isSliding ? "sliding" : ""}`}>
            {testimonials?.map((testimonial, index) => (
              <div
                key={`content-${testimonial.id || index}`}
                className={`slide ${
                  index === currentIndex
                    ? "active-slide"
                    : slideDirection === "right" &&
                      index === (currentIndex + 1) % testimonials.length
                    ? "next-slide"
                    : slideDirection === "left" &&
                      index ===
                        (currentIndex - 1 + testimonials.length) %
                          testimonials.length
                    ? "prev-slide"
                    : "hidden-slide"
                }`}
              >
                <div className="testimonial-content">
                  <div className="quote">
                    <img src={quote} alt="quote" />
                  </div>
                  <h3 className="testi-title">{testimonial.name}</h3>
                  <p className="testi-desc-txt">{testimonial.text}</p>
                </div>
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
  );
};

export default YourExperience;
