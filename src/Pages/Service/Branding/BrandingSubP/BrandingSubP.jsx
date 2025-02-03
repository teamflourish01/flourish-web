import React from 'react';
import BannerTop from '../../../../Components/service/BannerTop/BannerTop';
import TopSubService from '../../../../Components/service/SubService/TopSubService/TopSubService';
import CenterStatic from '../../../../Components/service/SubService/CenterStatic/CenterStatic';
import LastLets from '../../../../Components/service/SubService/LastLets/LastLets';
import SecLast from '../../../../Components/service/SubService/SecLast/SecLast';

const BrandingSubP = () => {
  return (
    <>
      <BannerTop btitle="Brand Positioning"/>
      <TopSubService/>
      <CenterStatic/>
      <SecLast/>
      <LastLets/>
    </>
  );
}

export default BrandingSubP;
