import React from "react";
import "../TopSubService/TopSubService.css";

const fprocess = [
  {
    no: "01",
    title: "Discovery & Research",
    desc: "We deep-dive into your brand's core values, mission, and vision. By conducting extensive market research, audience analysis, and competitor benchmarking, we uncover unique opportunities to position your brand effectively.",
  },
  {
    no: "02",
    title: "Defining Your Unique Value Proposition (UVP)",
    desc: "Your UVP is your superpower. We identify what makes your brand irreplaceable and create a compelling proposition that highlights your strengths.",
  },
  {
    no: "03",
    title: "Crafting Your Brand Voice & Messaging",
    desc: "Consistency is key. We help you create a brand voice that aligns with your audience's expectations and communicates your value seamlessly across all platforms.",
  },
  {
    no: "04",
    title: "Visual Identity Alignment",
    desc: "Your visual elements—from logo to color palette—are integral to your positioning. We ensure your visuals resonate with the emotions and values your audience associates with your brand.",
  },
  {
    no: "05",
    title: "Execution & Rollout Strategy",
    desc: "We don't just plan; we execute. By integrating your brand's position across all marketing channels, we ensure seamless communication with your audience.",
  },
];

const TopSubService = ({SubServiceDetails}) => {
  return (
    <>
      <div className="top-sub-service">
        <div className="top-sub-service-container">
          <p className="define-t-s-s">{SubServiceDetails.sub_title}</p>
          <p className="top-s-s-c-desc">
         {SubServiceDetails?.sub_text}
          </p>
          <p className="flourish-process-title">Flourish’s Process</p>
          {SubServiceDetails?.process?.map((fp, index) => (
            <div className="f-p-boxes" key={index}>
              <p className="f-p-b-n">{index + 1}</p>
              <p className="f-p-b-title">{fp.heading}</p>
              <p className="f-p-b-desc">{fp.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopSubService;
