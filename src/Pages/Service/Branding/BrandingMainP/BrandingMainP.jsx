import React from "react";
import BannerTop from "../../../../Components/service/BannerTop/BannerTop";
import HowWeDeliver from "../../../../Components/service/Branding/HowWeDeliver/HowWeDeliver";
import TopBrandingB from "../../../../Components/service/Branding/TopBrandingS/TopBrandingB";
import BrandNeeds from "../../../../Components/service/Branding/BrandNeeds/BrandNeeds";
import VisionWhiteBanner from "../../../../Components/service/Branding/VisionWhiteBanner/VisionWhiteBanner";
import WhyItImpo from "../../../../Components/service/Branding/WhyItImpo/WhyItImpo";
const BrandingMainP = () => {
  return (
    <>
      <BannerTop btitle="Branding" />
      <TopBrandingB />
      <WhyItImpo />
      <HowWeDeliver />
      <BrandNeeds />
      <VisionWhiteBanner />
    </>
  );
};

export default BrandingMainP;
