import React from 'react';
import '../YellowBtn/YellowBtn.css';
import org from '../../assets/org-arrow.svg';
const YellowBtn = ({btnName}) => {
  return (
    <>
      <button className='btn-yellow'>
        <p className='p-txt-btn'>{btnName}</p>
        <div className='circle-bg-arrow'>
          <img src={org} alt="" />
        </div>
        </button>
    </>
  );
}

export default YellowBtn;
