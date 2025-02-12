import React from 'react';
import '../YellowWhiteBtn/YellowWhiteBtn.css';
import org from '../../assets/org-arrow.svg';

const YellowWhiteBtn = ({btnName, type}) => {
  return (
    <>
     <button className='btn-yellow-w' type={type}>
        <p className='p-txt-btn-w'>{btnName}</p>
        <div className='circle-bg-arrow-w'>
          <img src={org} alt="" />
        </div>
        </button>
    </>
  );
}

export default YellowWhiteBtn;
