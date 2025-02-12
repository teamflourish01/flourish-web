import React from "react";

const Breadcrums = ({ pagename }) => {
  return (
    <>
      {" "}
      <div className="heading-100">
      <div className="heading-inner">
        <div className="home-main-heading-inner">
          Homepage <span className="bread-t">/ {pagename} </span>
        </div>
      </div>
      </div>
      <hr />
    </>
  );
};

export default Breadcrums;
