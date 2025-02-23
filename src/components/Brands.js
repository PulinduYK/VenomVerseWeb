import React from 'react';


import { overview } from '../data';

const Brands = () => {
  const { brands } = overview;

  return (

    <section id='brand' className='py-10 overflow-hidden'>


      <div className='logos'>

        <div className='logos-slide'>


          {[...brands, ...brands, ...brands, ...brands, ...brands, ...brands].map((brand, index) => (
            <div key={index} className='logo'>

              <img src={brand.image} alt={`Brand ${index}`} className='w-[150px] h-auto' />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
