import React, { useEffect, useState } from "react";
import "../Work/work.css";
import Breadcrums from "../../Components/Breadcrums/Breadcrums";
import BannerTop from "../../Components/service/BannerTop/BannerTop";
import axios from "axios";

const Work = () => {
  const [work, setWork] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  
  const [activeWorks, setActiveWorks] = useState([]);
  let url = process.env.REACT_APP_DEV_URL;

  const fetchJourneyData = async () => {
    try {
      const response = await axios.get(`${url}/workcategory`);
      setWork(response.data.data);

      if (response.data.data.length > 0) {
        const firstCategory = response.data.data[0];
        setActiveCategory(firstCategory._id);
        setActiveWorks(firstCategory.works);
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    fetchJourneyData();
  }, []);

  const handleCategoryClick = (item) => {
    setActiveCategory(item._id);
    setActiveWorks(item.works.length > 0 ? item.works : []);
  };

  const handleAllClick = () => {
    setActiveCategory(null); 
    const allWorks = work.flatMap(category => category.works);
    setActiveWorks(allWorks);
  };

  return (
    <>
      <BannerTop btitle="Work" />
      <Breadcrums pagename="Work" />
      <section>
        <div className="work-main-container-100">
          <div className="padding-container-work">
            <div className="gried-work-1320">
              <div className="work-wrapper">
                <div className="work-gried">
                <div 
  className="work-box" 
  onClick={handleAllClick} 
  style={{ cursor: "pointer" }}
>
  <p 
    className="work-p" 
    style={{ 
      fontWeight: activeCategory === null ? "bold" : "normal",
      color: activeCategory === null ? "black" : "gray" 
    }}
  >
    All
  </p>
</div>


                  {work?.map((item, index) => (
                    <div
                      key={index}
                      className="work-boxs"
                      onClick={() => handleCategoryClick(item)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="work-c-flex">
                        <div className="div-img">
                        <img
  src={`${url}/work/${item.image}`}
  alt={item.name}
  className="work-div-img"
  style={{
    opacity: activeCategory === item._id ? 1 : 0.2,
    transition: "opacity 0.3s ease-in-out",
  }}
/>

                        </div>
                        <hr />
                        <p
                          className="real-work-p-m"
                          style={{
                            color: activeCategory === item._id ? "black" : "gray",
                            fontWeight: activeCategory === item._id ? "bold" : "normal",
                          }}
                        >
                          {item.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <hr className="hr-line" />

          {/* Active Works Section */}
          <section className="section-b-work">
            <div className="gajanan-b-gried">
              {activeWorks.length > 0 ? (
                activeWorks.map((workItem, index) => (
                  <div key={index} className="gried-box1">
                    <img src={`${url}/work/${workItem.image}`} alt={workItem.name} />
                    <div className="bg-name">{workItem.name}</div>
                  </div>
                ))
              ) : (
                <p>No works available</p>
              )}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Work;
