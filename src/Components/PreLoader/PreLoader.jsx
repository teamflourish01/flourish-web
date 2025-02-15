import React from "react";
import "../PreLoader/PreLoader.css";

const PreLoader = () => {
  return (
    <div className="body-preloader">
      <div className="animation-container">
        <div className="words">
          <div className="word">Focus</div>
          <div className="word">Dedication</div>
          <div className="word">Consistency</div>
        </div>
        <div className="box"></div>
        <div className="team-text">
          Team <span className="org-text-f"> Flourish</span>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
