import React, { useEffect } from "react";
import "../YourBrand/YourBrand.css";
import logo from "../../assets/blacklogo.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const YourBrand = ({ homeDetails, client }) => {
  useEffect(() => {
    const rows = document.querySelectorAll(".card-container-nine");
    rows.forEach((row, index) => {
      gsap.fromTo(
        row,
        { opacity: 0, y: 100 }, // Start hidden and lower
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          scrollTrigger: {
            trigger: row,
            start: "top 80%", // Start animation when 80% of the viewport is visible
            toggleActions: "play none none reverse", // Play animation on scroll
          },
        }
      );
    });
  }, []);

  const str = homeDetails?.sixth_title || "";
  const arr = str.split(" ");
  const text = arr;

  return (
    <>
      <div className="your-brand">
        <div className="your-brand-container">
          <p className="your-f-our-c">
            <span className="stroke-txt">{text[0]}</span> {text[1]}
            <span className="stroke-txt"> {text[2]} </span>
            {text[3]}
          </p>
          <p className="your-f-our-c-mobile">
            <span className="stroke-txt">{text[0]}</span> {text[1]}
            <br />
            <span className="stroke-txt"> {text[2]} </span>
            {text[3]}
          </p>
          <p className="desc-y-o">{homeDetails.sixth_text}</p>

          <div className="nine-grid-cards">
            {client?.map((c, index) => (
              <div className="card-container-nine" key={index}>
                <div className="card-nine">
                  <div className="card-front-nine">
                    <img src={logo} alt="Logo" />
                  </div>
                  <div className="card-details-nine">
                    <p className="details-p-card">
                      <span className="details-p-card-span">Client Name: </span>
                      {c.name}
                    </p>
                    <p className="details-p-card">
                      <span className="details-p-card-span">Industry: </span>{" "}
                      {c.industry}
                    </p>
                    <p className="details-p-card">
                      <span className="details-p-card-span">Work: </span>{" "}
                      {c.work}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            
          </div>
        </div>
      </div>
    </>
  );
};

export default YourBrand;
