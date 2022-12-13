import React from "react";
import overlayVector from "../../assets/images/soccer.svg";

export default function Overlay() {
  return (
    <div className='row'>
      <div className='col-md d-flex justify-content-center align-items-center'>
        <section id='job-advert-search'>
          <h1 className='display-1 fw-bold text-primary'>
            <span className='text-secondary'>为比赛</span> 下注
            <span className='text-secondary'>。</span>
          </h1>
          <h4>The World Cup is waiting for you.</h4>
        </section>
      </div>
      <div className='col-md'>
        <img src={overlayVector} alt='sbbc project' />
      </div>
    </div>
  );
}
