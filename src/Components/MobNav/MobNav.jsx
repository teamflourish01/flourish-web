// import React, { useState } from "react";
// import "../MobNav/MobNav.css";
// import { IoIosArrowDown } from "react-icons/io";
// import orgarw from "../../assets/orgleft.svg";
// import closebtn from "../../assets/close-icon-nav.svg";
// const MobileNav = ({handleGoBack}) => {
//   const [openCategory, setOpenCategory] = useState(true);
//   const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

//   const services = [
//     {
//       title: "Visual Experience",
//       items: [
//         "Logo Design",
//         "Print Design",
//         "Brochure Design",
//         "Packaging Design",
//         "Flyer Design",
//         "Product Design",
//         "Hoarding Design",
//         "Stationary Design",
//       ],
//     },
//     {
//       title: "Content Creation",
//       items: [
//         "Blogs",
//         "Articles",
//         "Case Study",
//         "Ad Scripts",
//         "Video/Reel Production",
//         "Copywriting",
//         "Social Media Content",
//         "Content Calendar",
//       ],
//     },
//     {
//       title: "Branding",
//       items: [
//         "Brand Positioning",
//         "Brand Story",
//         "Brand Messaging",
//         "Brand Theme",
//         "Digital Branding",
//         "Brand Identity",
//       ],
//     },
//     {
//       title: "Development",
//       items: [
//         "Website Development",
//         "App Development",
//         "UI/UX Development",
//         "Software Development",
//       ],
//     },
//     {
//       title: "Digital Marketing",
//       items: [
//         "Social Media Marketing",
//         "Influencer Marketing",
//         "Email Marketing",
//         "SEO",
//         "Meta And Google Ads",
//         "Content Marketing",
//         "WhatsApp Marketing",
//         "Marketing Automation",
//       ],
//     },
//     {
//       title: "Strategy and Consultation",
//       items: [
//         "Market Research",
//         "Competitor Analysis",
//         "Audience Segmentation",
//         "Content Strategy Development",
//         "SEO Strategy",
//         "Digital Marketing Strategy",
//         "Social Media Strategy",
//         "Analytics Reporting",
//         "Digital Transformation Roadmap Creation",
//       ],
//     },
//   ];

//   const toggleCategory = (index) => {
//     setOpenCategory(openCategory === index ? null : index);
//   };

//   return (
    
//     <div className="mobile-nav">
//       <div className="go-back-flex-mobnav">
//         <div className="go-back-txt-flex-mobnav" onClick={handleGoBack}>
//           <img src={orgarw} alt="" />
//           <div className="org-go-back-mobnav" >Go Back</div>
//         </div>
//         <img src={closebtn} alt="" />
//       </div>

//       <div className="categories-container">
//         {services.map((category, index) => (
//           <div key={index} className="category">
//             <button
//               onClick={() => toggleCategory(index)}
//               className="category-button-mobnav"
//             >
//               <span>{category.title}</span>
//               <IoIosArrowDown
//                 className={`chevron-icon ${
//                   openCategory === index ? "rotate" : ""
//                 }`}
//               />
//             </button>

//             <div
//               className={`category-items ${
//                 openCategory === index ? "open" : ""
//               }`}
//             >
//               {category.items.map((item, itemIndex) => (
//                 <div key={itemIndex} className="category-item">
//                   {item}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MobileNav;
import React, { useState } from "react";
import "../MobNav/MobNav.css";
import { IoIosArrowDown } from "react-icons/io";
import orgarw from "../../assets/orgleft.svg";
import closebtn from "../../assets/close-icon-nav.svg";

const MobileNav = ({ handleGoBack, closeMenu }) => {
  const [openCategory, setOpenCategory] = useState(true);

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
          <div className="go-back-txt-flex-mobnav" onClick={handleGoBack}>
            <img src={orgarw} alt="" />
            <div className="org-go-back-mobnav">Go Back</div>
          </div>
          <img src={closebtn} alt="Close" onClick={closeMenu} className="close-button" />
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
    // )
  );
};

export default MobileNav;
