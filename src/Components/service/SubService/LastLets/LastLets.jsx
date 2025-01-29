import React from 'react';
import '../LastLets/LastLets.css';
import YellowWhiteBtn from '../../../YellowWhiteBtn/YellowWhiteBtn'

const LastLets = () => {
  return (
    <>
      <div className="lets-title">
        <div className="lets-title-container">
            <p className="lets-dev-title">
            Let’s Develop Your Brand’s Legacy
            </p>
            <p className="let-desc">At Flourish, we don’t just position brands; we create movements. Let us help your brand thrive in the digital and offline realms with innovative strategies and creative brilliance.</p>
            <p className="let-des">Ready to redefine your brand’s future? Contact us for a free consultation and see how we can help your brand flourish.</p>
            <YellowWhiteBtn btnName="Contact Us"/>
        </div>
      </div>
    </>
  );
}

export default LastLets;
