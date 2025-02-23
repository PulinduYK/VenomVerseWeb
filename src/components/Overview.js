import React from 'react';
//import data
import { overview } from '../data';


const Overview = () => {
  // destructuring overview data
  const { productImg } = overview;


  return (<section id='overview' className="lg:min-h-[712px] h-[500px] 
  w-full bg-overview bg-cover 
  bg-center bg-no-repeat pt-[30px] 
  lg:pt-[87px]">
    <div className="container mx-auto flex justify-center lg:justify-end overflow-hidden">
      <img src={productImg} alt="" className='w-[80%] max-w-[500px] lg:w-auto lg:max-w-full'
      data-aos="fade-up" 
      data-aos-offset="300"
       />
    </div>
  </section>
  
  );
};

export default Overview;
