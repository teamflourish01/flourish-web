import React from "react";
import { Link } from "react-router-dom";

const Breadcrums = ({ pagename }) => {
  return (
    <>
      {" "}
      <div className="heading-100">
      <div className="heading-inner">
        <div className="home-main-heading-inner">
         <Link to ="/" className="bread-home"> Homepage </Link> <span className="bread-t">/ {pagename} </span>
        </div>
      </div>
      </div>
      <hr />
    </>
  );
};

export default Breadcrums;
