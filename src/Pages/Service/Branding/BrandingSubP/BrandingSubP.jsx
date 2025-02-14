import React, { useEffect, useState } from 'react';
import BannerTop from '../../../../Components/service/BannerTop/BannerTop';
import TopSubService from '../../../../Components/service/SubService/TopSubService/TopSubService';
import CenterStatic from '../../../../Components/service/SubService/CenterStatic/CenterStatic';
import LastLets from '../../../../Components/service/SubService/LastLets/LastLets';
import SecLast from '../../../../Components/service/SubService/SecLast/SecLast';
import { useParams } from 'react-router-dom';

const BrandingSubP = () => {

  const { slug } = useParams();
  const [subServiceData, setSubServiceData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let url=process.env.REACT_APP_DEV_URL
  useEffect(() => {
    const getData = async () => {
      try {
        console.log(url);
        
        setLoading(true);
        const response = await fetch(
          `${url}/subservice/${slug}`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const res = await response.json();
        console.log(res, "subService");

        setSubServiceData(res.data); // Store fetched data in state
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
      <BannerTop btitle={subServiceData?.name}/>
      <TopSubService SubServiceDetails={subServiceData}/>
      <CenterStatic SubServiceDetails={subServiceData}/>
      <SecLast SubServiceDetails={subServiceData}/>
      <LastLets SubServiceDetails={subServiceData}/>
    </>
  );
}

export default BrandingSubP;
