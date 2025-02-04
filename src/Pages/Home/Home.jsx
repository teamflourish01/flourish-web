import React from 'react';
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
function Home() {
  return (
    <div className='home'>
      {/* <ServiceNav/> */}
      <TopBanner/>
      <YourFuture/>
      <YourChallanges/>
      <YourSuccess/>
      {/* <YourExperience/> */}
      <YourBrand/>
      <Strategy/>
      <YourGrowth/>
    </div>
  );
}

export default Home;
