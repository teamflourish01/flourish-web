import React from 'react';
import '../BannerTop/BannerTop.css';

const BannerTop = ({btitle}) => {
  return (
    <>
      <div className="black-b-t-s">
        <p className="title-b-t-s">{btitle}</p>
      </div>
    </>
  );
}

export default BannerTop;
