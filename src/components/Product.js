import React from 'react';
//import data
import { product } from '../data';
//import cards
import Cards from './Cards';

const Product = () => {

  //destructure product data
  const {title, subtitle} = product;


  return <section id='product' className='section'>
    <div className='container mx-auto'>
      {/* title  and subtitles */}

      <div className='flex flex-col items-center lg:flex-row 
      mb-10 lg:mb-20'>
        <h2 className='section-title ' data-aos='fade-up' 
        data-aos-offset='400' aos-delay='300'>
          {title}
        </h2>
        <p className='section-subtitle' data-aos='fade-up' 
        data-aos-offset='400' aos-delay='200' >
          {subtitle}
        </p>
      </div>
      {/* cards */}
      <Cards/>

    </div>
    
    </section>;
};

export default Product;
