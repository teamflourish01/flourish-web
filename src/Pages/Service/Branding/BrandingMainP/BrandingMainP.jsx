import React, { useEffect, useState } from "react";
import BannerTop from "../../../../Components/service/BannerTop/BannerTop";
import HowWeDeliver from "../../../../Components/service/Branding/HowWeDeliver/HowWeDeliver";
import TopBrandingB from "../../../../Components/service/Branding/TopBrandingS/TopBrandingB";
import BrandNeeds from "../../../../Components/service/Branding/BrandNeeds/BrandNeeds";
import VisionWhiteBanner from "../../../../Components/service/Branding/VisionWhiteBanner/VisionWhiteBanner";
import WhyItImpo from "../../../../Components/service/Branding/WhyItImpo/WhyItImpo";
import { useParams } from "react-router-dom";
import { log } from "three/src/nodes/TSL.js";

const BrandingMainP = () => {
  const { slug } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let url=process.env.REACT_APP_DEV_URL
  useEffect(() => {
    const getData = async () => {
      try {
        console.log(url);
        
        setLoading(true);
        const response = await fetch(
          `${url}/service/${slug}`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const res = await response.json();
        console.log(res, "dattta");

        setData(res.data); // Store fetched data in state
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };

    getData();
  }, []); // Runs when `slug` changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <BannerTop btitle={data?.name} />
      <TopBrandingB  ServiceData={data}/>
      <WhyItImpo ServiceData={data}/>
      <HowWeDeliver ServiceData={data}/>
      <BrandNeeds ServiceData={data}/>
      <VisionWhiteBanner ServiceData={data}/>
    </>
  );
};

export default BrandingMainP;
