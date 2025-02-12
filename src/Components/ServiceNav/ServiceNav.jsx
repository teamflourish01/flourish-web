import React from "react";
import "../ServiceNav/ServiceNav.css";
import { NavLink } from "react-router-dom";

const ServiceNav = ({toggleMenu}) => {
  return (
    <>
      {/* <hr className="hr-animation-servicenav " /> */}

      <div className="service-container">
        <div className="service-category">
          <h3>Visual Experience</h3>
          <ul>
            <li>Logo Design</li>
            <li>Print Design</li>
            <li>Brochure Design</li>
            <li>Packaging Design</li>
            <li>Flyer Design</li>
            <li>Product Design</li>
            <li>Hoarding Design</li>
            <li>Stationary Design</li>
          </ul>
        </div>
        <div className="service-category">
          <h3>Content Creation</h3>
          <ul>
            <li>Blogs</li>
            <li>Articles</li>
            <li>Case Study</li>
            <li>Ad Scripts</li>
            <li>Video/Reel Production</li>
            <li>Copywriting</li>
            <li>Social Media Content</li>
            <li>Content Calendar</li>
          </ul>
        </div>
        <div className="service-category">
          <h3>Branding</h3>
          <ul>
            <li>
              {" "}
              <NavLink
                to="/brand-positioning"
                className={({ isActive }) =>
                  isActive ? " text-deco nav-link-s active-nav-link-s" : "nav-link-s"
                }
                onClick={toggleMenu}
              >
                Brand Positioning
              </NavLink>
            </li>
            <li>Brand Story</li>
            <li>Brand Messaging</li>
            <li>Brand Theme</li>
            <li>Digital Branding</li>
            <li>Brand Identity</li>
          </ul>
        </div>
        <div className="service-category">
          <h3>Development</h3>
          <ul>
            <li>Website Development</li>
            <li>App Development</li>
            <li>UI/UX Development</li>
            <li>Software Development</li>
          </ul>
        </div>
        <div className="service-category">
          <h3>Digital Marketing</h3>
          <ul>
            <li>Social Media Marketing</li>
            <li>Influencer Marketing</li>
            <li>Email Marketing</li>
            <li>SEO</li>
            <li>Meta And Google Ads</li>
            <li>Content Marketing</li>
            <li>WhatsApp Marketing</li>
            <li>Marketing Automation</li>
          </ul>
        </div>
        <div className="service-category">
          <h3>Strategy and Consultation</h3>
          <ul>
            <li>Market Research</li>
            <li>Competitor Analysis</li>
            <li>Audience Segmentation</li>
            <li>Content Strategy Development</li>
            <li>SEO Strategy</li>
            <li>Digital Marketing Strategy</li>
            <li>Social Media Strategy</li>
            <li>Analytics Reporting</li>
            <li>Digital Transformation Roadmap Creation</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ServiceNav;
