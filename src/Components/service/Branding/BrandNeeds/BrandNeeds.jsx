import React from "react";
import "../BrandNeeds/BrandNeeds.css";
import chess from "../../../../assets/Branding/chess.png";

const BrandNeeds = () => {
  return (
    <div className="brand-needs">
      <div className="brand-needs-container">
        <h2 className="brand-title">Why Your Brand Needs It?</h2>
        <p className="brand-subtitle">
          Here’s why your brand needs professional branding
        </p>
        <div className="brand-content">
          <div className="brand-image">
            <img src={chess} alt="Chess Branding" />
          </div>
          {/* <div className="vertical-line"></div> */}
          <div className="vertical-line">
  <div className="horizontal-line"></div>
  <div className="horizontal-line"></div>
  <div className="horizontal-line"></div>
  <div className="horizontal-line"></div>
</div>

          <div className="brand-text">
            <div className="brand-benefits">
              <div className="benefit">
                <p className="b-n-title">Stand Out From the Crowd</p>
                <p className="b-n-p-des">
                  Differentiation is the key to visibility. A unique brand
                  identity ensures you don’t get lost in a saturated market.
                </p>
              </div>
              <div className="benefit">
                <p className="b-n-title">Build Trust & Loyalty</p>
                <p className="b-n-p-des">
                  Customers are more likely to choose a brand they trust.
                  Effective branding instills confidence and encourages repeat
                  business.
                </p>
              </div>
              <div className="benefit">
                <p className="b-n-title">Boost Marketing Effectiveness</p>
                <p className="b-n-p-des">
                  A clear brand message amplifies your marketing efforts,
                  ensuring higher ROI and better audience engagement.
                </p>
              </div>
              <div className="benefit">
                <p className="b-n-title">Drive Growth & Scalability</p>
                <p className="b-n-p-des">
                  A strong brand lays the foundation for long-term success,
                  making it easier to expand your offerings and enter new
                  markets.
                </p>
              </div>
              <div className="benefit">
                <p className="b-n-title">Attract Top Talent</p>
                <p className="b-n-p-des">
                  A reputable brand attracts not only customers but also skilled
                  professionals who want to be a part of your journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandNeeds;
