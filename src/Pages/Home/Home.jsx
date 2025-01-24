import React from 'react';
import '../Home/Home.css'
import TopBanner from '../../Components/TopBanner/TopBanner';
import YourFuture from '../../Components/YourFuture/YourFuture';
import Strategy from '../../Components/Strategy/Strategy';
import YourGrowth from '../../Components/YourGrowth/YourGrowth';
import YourBrand from '../../Components/YourBrand/YourBrand';
import YourExperience from '../../Components/YourExperience/YourExperience';
function Home() {
  return (
    <div className='home'>
      <TopBanner/>
      <YourFuture/>
      <YourExperience/>
      <YourBrand/>
      <Strategy/>
      <YourGrowth/>
    </div>
  );
}

export default Home;
