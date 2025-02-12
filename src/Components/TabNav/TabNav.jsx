// import React from "react";
// import "../TabNav/TabNav.css";
// import orgarw from "../../assets/orgleft.svg";
// import closebtn from "../../assets/close-icon-nav.svg";
// import { NavLink } from "react-router-dom";
// const TabNav = ({handleGoBack, toggleMenu}) => {
//   return (
//     <>
//       <div className="service-tabnav">
//         {" "}
//         <div className="go-back-flex">
//           <div className="go-back-txt-flex" onClick={handleGoBack}>
//             <img src={orgarw} alt="" />
//             <div className="org-go-back" >Go Back</div>
//           </div>
//           <img src={closebtn} alt=""  onClick={toggleMenu}/>
//         </div>
//         <div className="service-container-tab">
//           <div className="service-category-tab">
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
//           <div className="service-category-tab">
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
//           <div className="service-category-tab">
//             <h3>Branding</h3>
//             <ul>
//               <li>
//               <NavLink
//                     to="/brand-positioning"
//                     className={({ isActive }) =>
//                       isActive ? "nav-link-s active-nav-link-s" : "nav-link-s"
//                     }
//                     onClick={toggleMenu}
//                   >
//                     Brand Positioning
//                   </NavLink>
//               </li>
//               <li>Brand Story</li>
//               <li>Brand Messaging</li>
//               <li>Brand Theme</li>
//               <li>Digital Branding</li>
//               <li>Brand Identity</li>
//             </ul>
//           </div>
//           <div className="service-category-tab">
//             <h3>Development</h3>
//             <ul>
//               <li>Website Development</li>
//               <li>App Development</li>
//               <li>UI/UX Development</li>
//               <li>Software Development</li>
//             </ul>
//           </div>
//           <div className="hr-animation-servicenav-tab"></div>
//           <div className="service-category-tab">
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
//           <div className="service-category-tab">
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

// export default TabNav;
import React, { useEffect, useState } from "react";
import "../TabNav/TabNav.css";
import orgarw from "../../assets/orgleft.svg";
import closebtn from "../../assets/close-icon-nav.svg";
import { NavLink } from "react-router-dom";
import { log } from "three/tsl";

const TabNav = ({ handleGoBack, toggleMenus, toggleMenu }) => {
  let url=process.env.REACT_APP_DEV_URL
  const [service,setService]=useState([])

  const getData=async()=>{
    try {
      let data=await fetch(`${url}/service`)
      data=await data.json()
      console.log(data.data,"service nav");
      
      setService(data.data)
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(()=>{
    getData();
  },[])
  return (
    <>
      <div className="service-tabnav">
        <div className="go-back-flex">
          <div className="go-back-txt-flex" onClick={handleGoBack}>
            <img src={orgarw} alt="" />
            <div className="org-go-back">Go Back</div>
          </div>
          {/* Close button with toggleMenu function */}
          <img
            src={closebtn}
            alt="Close"
            onClick={toggleMenus}
            className="close-button"
            style={{ cursor: "pointer" }} // Ensures it's clickable
          />
        </div>
        <div className="service-container-tab">
        {service?.map((e)=>{
              return <>
                      <div className="service-category-tab">

                 <h3>
            <NavLink
                  to={`/service/${e?.slug}`}
                  className={({ isActive }) =>
                    isActive ? "nav-link-s active-nav-link-s" : "nav-link-s"
                  }
                  onClick={toggleMenu}
                >
                  {e?.name}
                </NavLink>
            </h3>
            </div>
              </>
            })}
            </div>
          {/* <div className="service-category-tab">
           
            <h3>
            <NavLink
                  to="/service/Visual-Experience"
                  className={({ isActive }) =>
                    isActive ? "nav-link-s active-nav-link-s" : "nav-link-s"
                  }
                  onClick={toggleMenu}
                >
                  Visual Experience
                </NavLink>
            </h3>
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
          </div> */}

          {/* <div className="service-category-tab">
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
          </div> */}

          <div className="service-category-tab">
            <h3>Branding</h3>
            <ul>
              <li>
                <NavLink
                  to="/brand-positioning"
                  className={({ isActive }) =>
                    isActive ? "nav-link-s active-nav-link-s" : "nav-link-s"
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

          <div className="service-category-tab">
            <h3>Development</h3>
            <ul>
              <li>Website Development</li>
              <li>App Development</li>
              <li>UI/UX Development</li>
              <li>Software Development</li>
            </ul>
          </div>

          <div className="hr-animation-servicenav-tab"></div>

          <div className="service-category-tab">
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

          <div className="service-category-tab">
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
      {/* </div> */}
    </>
  );
};

export default TabNav;
