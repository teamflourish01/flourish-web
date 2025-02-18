import React, { useEffect, useState } from "react";
import "../Singleblogpage/Singleblogpage.css";
import cameraimg from "../../../assets/cameraimg.svg";
import right from '../../../assets/right.svg';
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";


const Singleblogpage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let url = process.env.REACT_APP_DEV_URL;

  const getBlog = async () => {
    try {
      // console.log(url);

      setLoading(true);
      const response = await fetch(`${url}/blog/${slug}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const res = await response.json();
      // console.log(res, "home");

      setBlog(res.data); // Store fetched data in state
      console.log(res.data, "blogg");
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

    useEffect(() => {
      getBlog();
    }, []);

  return (
    <>
        <Helmet>
        <title>{blog?.meta_title}</title>
        <meta name="description" content={blog?.meta_description} />
      </Helmet>
      <div className="blogmain">
        <div style={{ border: "1px solid #00000080" }}>
          <div className="blogmain-width1320">
            <div className="blog-top-breadcrums">
              <p>{`Homepage / ${blog?.name}`}</p>
            </div>
          </div>
        </div>

        <div className="blogmain-width1320" >
          <div className="dtle-blg-top-sec">
            <div className="dtle-blg-heding-page">
              <div className="dtle-blg-text">
                <p>
                 {blog?.name}
                </p>
              </div>
              <div className="dtle-blg-date-author">
                <div className="dtle-blg-bg-fl">
                  <p>By flourish Creations</p>
                </div>
                <p className="dtl-blg-date">{blog?.date}</p>
              </div>
            </div>
            <div className="dtle-blg-img-cont">
              <img src={`${url}/blog/${blog?.banner}`} alt="" className="img-width-blog"/>
            </div>
          </div>
        </div>

        <div className="blogmain-width1320 font-family" dangerouslySetInnerHTML={{__html:blog?.text}}>
          {/* <p style={{ padding: "50px 0 30px 0" }}> */}
          {/* {blog?.text} */}
          {/* </p> */}
        </div>

       
      </div>
    </>
  );
};

export default Singleblogpage;
