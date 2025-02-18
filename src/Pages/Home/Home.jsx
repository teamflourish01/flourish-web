import React, { useEffect, useState } from 'react';
import '../Home/Home.css'
import TopBanner from '../../Components/TopBanner/TopBanner';
import YourFuture from '../../Components/YourFuture/YourFuture';
import Strategy from '../../Components/Strategy/Strategy';
import YourGrowth from '../../Components/YourGrowth/YourGrowth';
import YourBrand from '../../Components/YourBrand/YourBrand';
import YourExperience from '../../Components/YourExperience/YourExperience';
import YourChallanges from '../../Components/YourChallanges/YourChallanges';
import YourSuccess from '../../Components/YourSuccess/YourSuccess';
import ServiceNav from '../../Components/ServiceNav/ServiceNav';
import YourCMob from '../../Components/YourChallanges/YourCMob';
import { Helmet } from 'react-helmet';

function Home() {

  const [homeDetails, setHomeDetails] = useState({});
  const [client, setClient] = useState([]);
  const [testimonial, setTestimonial] = useState([]);


  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let url=process.env.REACT_APP_DEV_URL

  const getClientData = async () => {
    try {
      // console.log(url);
      
      setLoading(true);
      const response = await fetch(
        `${url}/client`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const res = await response.json();
      // console.log(res, "home");

      setClient(res.data); // Store fetched data in state
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  }

  const GetTestimonial = async () => {
    try {
      console.log(url);
      
      setLoading(true);
      const response = await fetch(
        `${url}/testimonial`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const res = await response.json();
      // console.log(res, "testimonial");

      setTestimonial(res.data); // Store fetched data in state
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    const getData = async () => {
      try {
        console.log(url);
        
        setLoading(true);
        const response = await fetch(
          `${url}/home`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const res = await response.json();
        // console.log(res, "home");

        setHomeDetails(res.data[0]); // Store fetched data in state
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };

    getData();
    getClientData();
    GetTestimonial();
  }, []); // Runs when `slug` changes

  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className='home'>
       <Helmet>
        <title>{homeDetails?.meta_title}</title>
        <meta name="description" content={homeDetails?.meta_description} />
      </Helmet>
      {/* <ServiceNav/> */}
      <TopBanner homeDetails={homeDetails}/>
      <YourFuture homeDetails={homeDetails} url={url}/>
      <div className="dis-in-d">

      <YourChallanges homeDetails={homeDetails}/>
      </div>
      <div className="dis-in-m">
      <YourCMob homeDetails={homeDetails}/>
      </div>
      
      <YourSuccess homeDetails={homeDetails}/>
      <YourExperience homeDetails={homeDetails} testimonials={testimonial} url={url}/>
      <YourBrand homeDetails={homeDetails} client={client}/>
      <Strategy homeDetails={homeDetails}/>
      <YourGrowth homeDetails={homeDetails} url={url}/>
    </div>
  );
}

export default Home;
