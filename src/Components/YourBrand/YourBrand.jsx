import React, { useEffect } from "react";
import "../YourBrand/YourBrand.css";
import logo from "../../assets/blacklogo.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const YourBrand = () => {

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

  return (
    <>
      <div className="your-brand">
        <div className="your-brand-container">
          <p className="your-f-our-c">
            <span className="stroke-txt">Your</span> Brand,
            <span className="stroke-txt"> Our </span>Responsibility
          </p>
          <p className="your-f-our-c-mobile">
            <span className="stroke-txt">Your</span> Brand,<br/>
            <span className="stroke-txt"> Our </span>Responsibility
          </p>
          <p className="desc-y-o">
            Your brand’s reputation is our passion. Our branding and marketing
            agency in Ahmedabad is committed to helping businesses build brands
            that resonate with their audience and stand the test of time.
          </p>

          <div className="nine-grid-cards">
            <div class="card-container-nine" >
              <div class="card-nine">
                <div class="card-front-nine">
                  <img src={logo} alt="Logo" />
                </div>
                <div class="card-details-nine">
                  <p className="details-p-card">
                    <span className="details-p-card-span">Client Name: </span>
                    Gajanan bungalows
                  </p>
                  <p className="details-p-card">
                    <span className="details-p-card-span">Industry: </span> Real
                    Estate
                  </p>
                  <p className="details-p-card">
                    <span className="details-p-card-span">Work: </span> Social
                    media, brochure designing
                  </p>
                </div>
              </div>
            </div>
            <div class="card-container-nine">
              <div class="card-nine">
                <div class="card-front-nine">
                  <img src={logo} alt="Logo" />
                </div>
                <div class="card-details-nine">
                  <p className="details-p-card">
                    <span className="details-p-card-span">Client Name: </span>
                    Tywist
                  </p>
                  <p className="details-p-card">
                    <span className="details-p-card-span">Industry: </span>
                    Fashion
                  </p>
                  <p className="details-p-card">
                    <span className="details-p-card-span">Work: </span>
                    Branding, Social Media
                  </p>
                </div>
              </div>
            </div>
            <div class="card-container-nine">
              <div class="card-nine">
                <div class="card-front-nine">
                  <img src={logo} alt="Logo" />
                </div>
                <div class="card-details-nine">
                  <p className="details-p-card">
                    <span className="details-p-card-span">Client Name: </span>
                    Sakar Group
                  </p>
                  <p className="details-p-card">
                    <span className="details-p-card-span">Industry: </span>
                    Real Estate
                  </p>
                  <p className="details-p-card">
                    <span className="details-p-card-span">Work: </span>
                    Social Media, Lead Generation
                  </p>
                </div>
              </div>
            </div>
            <div class="card-container-nine">
              <div class="card-nine">
                <div class="card-front-nine">
                  <img src={logo} alt="Logo" />
                </div>
                <div class="card-details-nine">
                  <p className="details-p-card">
                    <span className="details-p-card-span">Client Name: </span>
                    Shyam Group
                  </p>
                  <p className="details-p-card">
                    <span className="details-p-card-span">Industry: </span>
                    Real Estate
                  </p>
                  <p className="details-p-card">
                    <span className="details-p-card-span">Work: </span>
                    Lead Generation, Social Media
                  </p>
                </div>
              </div>
            </div>
            <div class="card-container-nine">
              <div class="card-nine">
                <div class="card-front-nine">
                  <img src={logo} alt="Logo" />
                </div>
                <div class="card-details-nine">
                  <p className="details-p-card">
                    <span className="details-p-card-span">Client Name: </span>
                    Mahamahal
                  </p>
                  <p className="details-p-card">
                    <span className="details-p-card-span">Industry: </span>
                    Food
                  </p>
                  <p className="details-p-card">
                    <span className="details-p-card-span">Work: </span>
                    branding
                  </p>
                </div>
              </div>
            </div>
            <div class="card-container-nine">
              <div class="card-nine">
                <div class="card-front-nine">
                  <img src={logo} alt="Logo" />
                </div>
                <div class="card-details-nine">
                  <p className="details-p-card">
                    <span className="details-p-card-span">Client Name: </span>
                    Flonix
                  </p>
                  <p className="details-p-card">
                    <span className="details-p-card-span">Industry: </span>
                    Manufacturing
                  </p>
                  <p className="details-p-card">
                    <span className="details-p-card-span">Work: </span>
                    Branding , Social Media
                  </p>
                </div>
              </div>
            </div>
            <div class="card-container-nine">
              <div class="card-nine">
                <div class="card-front-nine">
                  <img src={logo} alt="Logo" />
                </div>
                <div class="card-details-nine">
                  <p className="details-p-card">
                    <span className="details-p-card-span">Client Name: </span>
                    Frutzoo
                  </p>
                  <p className="details-p-card">
                    <span className="details-p-card-span">Industry: </span>
                    Food
                  </p>
                  <p className="details-p-card">
                    <span className="details-p-card-span">Work: </span>
                    Website, Social Media
                  </p>
                </div>
              </div>
            </div>
            <div class="card-container-nine">
              <div class="card-nine">
                <div class="card-front-nine">
                  <img src={logo} alt="Logo" />
                </div>
                <div class="card-details-nine">
                  <p className="details-p-card">
                    <span className="details-p-card-span">Client Name: </span>
                    Optodolce
                  </p>
                  <p className="details-p-card">
                    <span className="details-p-card-span">Industry: </span>
                    Technology
                  </p>
                  <p className="details-p-card">
                    <span className="details-p-card-span">Work: </span>
                    Branding, Social Media
                  </p>
                </div>
              </div>
            </div>
            <div class="card-container-nine">
              <div class="card-nine">
                <div class="card-front-nine">
                  <img src={logo} alt="Logo" />
                </div>
                <div class="card-details-nine">
                  <p className="details-p-card">
                    <span className="details-p-card-span">Client Name: </span>
                    Role
                  </p>
                  <p className="details-p-card">
                    <span className="details-p-card-span">Industry: </span>
                    Manufacturing
                  </p>
                  <p className="details-p-card">
                    <span className="details-p-card-span">Work: </span>
                    Packaging Design, Branding
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourBrand;
