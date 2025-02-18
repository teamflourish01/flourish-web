// import React from "react";
// import "../TopBrandingS/TopBrandingB.css";
// import ladyque from "../../../../assets/Branding/ladyque.svg";
// import que from "../../../../assets/Branding/que.svg";
// import arrowg from "../../../../assets/Branding/garrow.svg";
// import { Link } from "react-router-dom";

// const SubService = [
//   {
//     number: "01",
//     title: "Brand Positioning",
//     description:
//       "Defining your brand's unique value in the market to attract the right audience.",
//   },
//   {
//     number: "02",
//     title: "Brand Story",
//     description:
//       "Crafting a compelling narrative that reflects your brand’s mission, vision, and values.",
//   },
//   {
//     number: "03",
//     title: "Brand Messaging",
//     description:
//       "Creating consistent and engaging messages that align with your brand's voice.",
//   },
//   {
//     number: "04",
//     title: "Brand Theme",
//     description:
//       "Establishing visual and tonal consistency across all marketing channels.",
//   },
//   {
//     number: "05",
//     title: "Digital Branding",
//     description:
//       "Building a strong online presence through cohesive and impactful digital assets.",
//   },
// ];

// const TopBrandingB = ({ServiceData}) => {
//   return (
//     <>
//       <div className="brand-top-banner">
//         <div className="brand-top-banner-container">
//           <div className="que-con">
//             <img src={que} alt="" className="que-con-img" />
//           </div>
//           <div className="img-con">
//             <div className="text-des-ladyque">
//               <p className="branding-title-t-b">{ServiceData?.service_title}</p>
//               <p className="craft-desc">
//               {ServiceData?.service_text}
//               </p>
//             </div>
//             <img src={ladyque} alt="" className="ladyqueimg" />

//           </div>

//           <p className="sub-service-t-b-t-b">Sub-Services</p>

//           <div className="sub-s-box-container">
//             {SubService?.map((ss, index) => (
//               <div className="sub-s-box" key={index}>
//                 <div className="p-10-15-d">
//                   <p className="s-s-b-01">{ss.number}</p>
//                   <p className="s-s-b-b-t">{ss.title}</p>
//                 </div>
//                 <div className="p-10-15-d">
//                   <p className="bet-desc">{ss.description}</p>
//                 </div>
//                 <Link to="/branding-positioning" className="link-txt">
//                   <div className="explore-btn">
//                     <p className="explore-service-txt">Explore Service</p>
//                     <img src={arrowg} alt="" />
//                   </div>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TopBrandingB;
import React, { useEffect, useRef, useState } from "react";
import "../TopBrandingS/TopBrandingB.css";
import ladyque from "../../../../assets/Branding/ladyque.svg";
import que from "../../../../assets/Branding/que.svg";
import arrowg from "../../../../assets/Branding/garrow.svg";
import { Link } from "react-router-dom";
import leftArrow from "../../../../assets/arw.svg";
import rightArrow from "../../../../assets/arw.svg";

const SubService = [
  {
    number: "01",
    title: "Brand Positioning",
    description:
      "Defining your brand's unique value in the market to attract the right audience.",
  },
  {
    number: "02",
    title: "Brand Story",
    description:
      "Crafting a compelling narrative that reflects your brand’s mission, vision, and values.",
  },
  {
    number: "03",
    title: "Brand Messaging",
    description:
      "Creating consistent and engaging messages that align with your brand's voice.",
  },
  {
    number: "04",
    title: "Brand Theme",
    description:
      "Establishing visual and tonal consistency across all marketing channels.",
  },
  {
    number: "05",
    title: "Digital Branding",
    description:
      "Building a strong online presence through cohesive and impactful digital assets.",
  },
];

const TopBrandingB = ({ ServiceData }) => {
  const scrollRef = useRef(null);
  let url = process.env.REACT_APP_DEV_URL;
  const [subService, setSubService] = useState([]);
  const getData = async () => {
    try {
      let data = await fetch(`${url}/subservice`);
      data = await data.json();
      setSubService(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };
  useEffect(() => {
    setSubService(ServiceData?.subservices);
  }, [ServiceData]);

  return (
    <div className="brand-top-banner">
      <div className="brand-top-banner-container">
        <div className="que-con">
          <img src={que} alt="" className="que-con-img" />
        </div>
        <div className="img-con">
          <div className="text-des-ladyque">
            <p className="branding-title-t-b">{ServiceData?.service_title}</p>
            <p className="craft-desc">{ServiceData?.service_text}</p>
          </div>
          <img src={ladyque} alt="" className="ladyqueimg" />
        </div>

        <p className="sub-service-t-b-t-b">Sub-Services</p>
        <div className="scroll-controls">
          <button className="scroll-btn left" onClick={scrollLeft}>
            <img src={leftArrow} alt="Scroll Left" />
          </button>
          <div className="sub-s-box-container" ref={scrollRef}>
            {subService?.map((ss, index) => (
              <div className="sub-s-box" key={index}>
                <div className="p-10-15-d">
                  <p className="s-s-b-01">0{index + 1}</p>
                  <p className="s-s-b-b-t">{ss?.name}</p>
                </div>
                <div className="p-10-15-d">
                  <p className="bet-desc">{ss?.short_note}</p>
                </div>
                <Link
                  to={`/subservice/${ss?.slug}`}
                  className="link-txt"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <div className="explore-btn">
                    <p className="explore-service-txt">Explore Service</p>
                    <img src={arrowg} alt="" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <button className="scroll-btn right" onClick={scrollRight}>
            <img src={rightArrow} alt="Scroll Right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBrandingB;
