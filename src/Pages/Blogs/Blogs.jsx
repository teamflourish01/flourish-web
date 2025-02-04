import React, { useState } from "react";
import "../Blogs/Blogs.css";
import cameraimg from "../../../src/assets/cameraimg.svg";

const categories = [
  "All",
  "Advertising",
  "App Development",
  "Branding",
  "Digital Marketing",
  "Film Production",
  "Graphic Design",
  "Marketing Insights",
  "Real Estate",
  "Product and Package Design",
  "Search Engine Optimisation",
  "Small Business",
  "Social Media",
  "UI/UX Development",
  "Web Development",
];

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <>
      <div className="blogsbanner">
        <p>Blogs</p>
      </div>
      <div className="blogmain">
        <div style={{ border: "1px solid #00000080" }}>
          <div className="blogmain-width1320">
            <div className="blog-top-breadcrums">
              <p>Homepage / Blogs</p>
            </div>
          </div>
        </div>

        <div className="blogmain-width1320">
          <div className="blg-explore">
            <p className="blg-main-heading">
              Explore the horizon of Blogs & News
            </p>
            <p className="blg-main-pera">
              Explore our various collections of articles and informative blogs.
              From Small business tips to Branding our blog covers a wide range
              of topics to keep you informed and entertained our latest posts
              and discover something new today!
            </p>
          </div>
          <div>
            <div className="category-container">
              {categories.map((category) => (
                <div
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`category-button ${
                    selectedCategory === category ? "active" : ""
                  }`}
                >
                  <p>{category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="blogmain-width1320">
          <div className="blg-main-card-cont">
          <div className="blg-card" >
            <div className="image-container">
              <img src={cameraimg} alt="Camera Icon" className="image" />
            </div>
            <div className="blg-hr-clr">
              <hr />
            </div>
            <div className="content">
              <div className="author-container">
                <p className="author">By Flourish Creation</p>
              </div>
              <h3 className="blg-title">
                Optimizing Budgets and Resources in Film Production Projects
              </h3>
              <div className="hr-under-image blg-hr-clr">
                <hr />
              </div>
              <div className="blg-card-foot">
                <span className="blg-date">August 20, 2022</span>
                <a href="/Singleblogpage" className="blg-read-more">
                  Read More <span className="blg-arrow">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="blg-card">
            <div className="image-container">
              <img src={cameraimg} alt="Camera Icon" className="image" />
            </div>
            <div className="blg-hr-clr">
              <hr />
            </div>
            <div className="content">
              <div className="author-container">
                <p className="author">By Flourish Creation</p>
              </div>
              <h3 className="blg-title">
                Optimizing Budgets and Resources in Film Production Projects
              </h3>
              <div className="hr-under-image blg-hr-clr">
                <hr />
              </div>
              <div className="blg-card-foot">
                <span className="blg-date">August 20, 2022</span>
                <a href="/Singleblogpage" className="blg-read-more">
                  Read More <span className="blg-arrow">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="blg-card">
            <div className="image-container">
              <img src={cameraimg} alt="Camera Icon" className="image" />
            </div>
            <div className="blg-hr-clr">
              <hr />
            </div>
            <div className="content">
              <div className="author-container">
                <p className="author">By Flourish Creation</p>
              </div>
              <h3 className="blg-title">
                Optimizing Budgets and Resources in Film Production Projects
              </h3>
              <div className="hr-under-image blg-hr-clr">
                <hr />
              </div>
              <div className="blg-card-foot">
                <span className="blg-date">August 20, 2022</span>
                <a href="/Singleblogpage" className="blg-read-more">
                  Read More <span className="blg-arrow">→</span>
                </a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
