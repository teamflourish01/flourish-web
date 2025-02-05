// import React from "react";
// import "../MobNav/MobNav.css";
// import orgarw from "../../assets/orgleft.svg";
// import closebtn from "../../assets/close-icon-nav.svg";

// const MobNav = () => {
//   return (
//     <>
//       <div className="service-tabnav-mobnav">

//         <div className="go-back-flex-mobnav">
//           <div className="go-back-txt-flex-mobnav">
//             <img src={orgarw} alt="" />
//             <div className="org-go-back-mobnav">Go Back</div>
//           </div>
//           <img src={closebtn} alt="" />
//         </div>
//         <div className="service-container-tab-mobnav">
//           <div className="service-category-tab-mobnav">
//             <h3>Visual Experience</h3>
//             <ul>
//               <li>Logo Design</li>
//               <li>Print Design</li>
//               <li>Brochure Design</li>
//               <li>Packaging Design</li>
//               <li>Flyer Design</li>
//               <li>Product Design</li>
//               <li>Hoarding Design</li>
//               <li>Stationary Design</li>
//             </ul>
//           </div>
//           <div className="service-category-tab-mobnav">
//             <h3>Content Creation</h3>
//             <ul>
//               <li>Blogs</li>
//               <li>Articles</li>
//               <li>Case Study</li>
//               <li>Ad Scripts</li>
//               <li>Video/Reel Production</li>
//               <li>Copywriting</li>
//               <li>Social Media Content</li>
//               <li>Content Calendar</li>
//             </ul>
//           </div>
//           <div className="service-category-tab-mobnav">
//             <h3>Branding</h3>
//             <ul>
//               <li>Brand Positioning</li>
//               <li>Brand Story</li>
//               <li>Brand Messaging</li>
//               <li>Brand Theme</li>
//               <li>Digital Branding</li>
//               <li>Brand Identity</li>
//             </ul>
//           </div>
//           <div className="service-category-tab-mobnav">
//             <h3>Development</h3>
//             <ul>
//               <li>Website Development</li>
//               <li>App Development</li>
//               <li>UI/UX Development</li>
//               <li>Software Development</li>
//             </ul>
//           </div>
//           <div className="hr-animation-servicenav-tab-mobnav"></div>
//           <div className="service-category-tab-mobnav">
//             <h3>Digital Marketing</h3>
//             <ul>
//               <li>Social Media Marketing</li>
//               <li>Influencer Marketing</li>
//               <li>Email Marketing</li>
//               <li>SEO</li>
//               <li>Meta And Google Ads</li>
//               <li>Content Marketing</li>
//               <li>WhatsApp Marketing</li>
//               <li>Marketing Automation</li>
//             </ul>
//           </div>
//           <div className="service-category-tab-mobnav">
//             <h3>Strategy and Consultation</h3>
//             <ul>
//               <li>Market Research</li>
//               <li>Competitor Analysis</li>
//               <li>Audience Segmentation</li>
//               <li>Content Strategy Development</li>
//               <li>SEO Strategy</li>
//               <li>Digital Marketing Strategy</li>
//               <li>Social Media Strategy</li>
//               <li>Analytics Reporting</li>
//               <li>Digital Transformation Roadmap Creation</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MobNav;
import React, { useState } from "react";
import "../MobNav/MobNav.css";
import { IoIosArrowDown } from "react-icons/io";
import orgarw from "../../assets/orgleft.svg";
import closebtn from "../../assets/close-icon-nav.svg";
const MobileNav = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const services = [
    {
      title: "Visual Experience",
      items: [
        "Logo Design",
        "Print Design",
        "Brochure Design",
        "Packaging Design",
        "Flyer Design",
        "Product Design",
        "Hoarding Design",
        "Stationary Design",
      ],
    },
    {
      title: "Content Creation",
      items: [
        "Blogs",
        "Articles",
        "Case Study",
        "Ad Scripts",
        "Video/Reel Production",
        "Copywriting",
        "Social Media Content",
        "Content Calendar",
      ],
    },
    {
      title: "Branding",
      items: [
        "Brand Positioning",
        "Brand Story",
        "Brand Messaging",
        "Brand Theme",
        "Digital Branding",
        "Brand Identity",
      ],
    },
    {
      title: "Development",
      items: [
        "Website Development",
        "App Development",
        "UI/UX Development",
        "Software Development",
      ],
    },
    {
      title: "Digital Marketing",
      items: [
        "Social Media Marketing",
        "Influencer Marketing",
        "Email Marketing",
        "SEO",
        "Meta And Google Ads",
        "Content Marketing",
        "WhatsApp Marketing",
        "Marketing Automation",
      ],
    },
    {
      title: "Strategy and Consultation",
      items: [
        "Market Research",
        "Competitor Analysis",
        "Audience Segmentation",
        "Content Strategy Development",
        "SEO Strategy",
        "Digital Marketing Strategy",
        "Social Media Strategy",
        "Analytics Reporting",
        "Digital Transformation Roadmap Creation",
      ],
    },
  ];

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <div className="mobile-nav">
      <div className="go-back-flex-mobnav">
        <div className="go-back-txt-flex-mobnav">
          <img src={orgarw} alt="" />
          <div className="org-go-back-mobnav">Go Back</div>
        </div>
        <img src={closebtn} alt="" />
      </div>

      <div className="categories-container">
        {services.map((category, index) => (
          <div key={index} className="category">
            <button
              onClick={() => toggleCategory(index)}
              className="category-button-mobnav"
            >
              <span>{category.title}</span>
              <IoIosArrowDown
                className={`chevron-icon ${
                  openCategory === index ? "rotate" : ""
                }`}
              />
            </button>

            <div
              className={`category-items ${
                openCategory === index ? "open" : ""
              }`}
            >
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="category-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
