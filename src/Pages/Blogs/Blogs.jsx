import React, { useEffect, useState } from "react";
import "../Blogs/Blogs.css";
import cameraimg from "../../../src/assets/cameraimg.svg";
import arw from "../../assets/arw.svg";

const Blogs = () => {
  const [blogCategory, setBlogCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let url = process.env.REACT_APP_DEV_URL;

  const getBlogData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}/blogcategory`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const res = await response.json();
      setBlogCategory(res.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    getBlogData();
  }, []);

  const filteredBlogs =
    selectedCategory === "All"
      ? blogCategory.flatMap((category) => category.blogs || [])
      : blogCategory.find((category) => category.name === selectedCategory)
          ?.blogs || [];

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
              of topics to keep you informed and entertained. Check out our
              latest posts and discover something new today!
            </p>
          </div>

          <div className="category-container">
            <div
              className={`category-button ${
                selectedCategory === "All" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("All")}
            >
              <p>All</p>
            </div>
            {blogCategory?.map((category, i) => (
              <div
                key={i}
                onClick={() => setSelectedCategory(category?.name)}
                className={`category-button ${
                  selectedCategory === category?.name ? "active" : ""
                }`}
              >
                <p>{category?.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="blogmain-width1320">
          <div className="blg-main-card-cont">
            {filteredBlogs?.map((blogItem, index) => (
              <div className="blg-card" key={index}>
                <div className="image-container">
                  <img
                    src={`${url}/blog/${blogItem?.banner}`}
                    alt="Camera Icon"
                    className="image"
                  />
                </div>
                <div className="blg-hr-clr">
                  <hr />
                </div>
                <div className="content">
                  <div className="author-container">
                    <p className="author">By Flourish Creation</p>
                  </div>
                  <h3 className="blg-title">{blogItem?.name}</h3>
                  <div className="hr-under-image blg-hr-clr">
                    <hr />
                  </div>
                  <div className="blg-card-foot">
                    <span className="blg-date">{blogItem?.date}</span>
                    <a
                      href={`/Singleblogpage/${blogItem?.slug}`}
                      className="blg-read-more"
                    >
                      Read More
                      <img src={arw} className="blg-arrow" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
