import React from 'react';
// import data
import { hero } from '../data';
// import icons
import { HiOutlineChevronDown } from 'react-icons/hi';

const Hero = () => {
  // destructure hero data
  const { title, subtitle, btnText, compText, image } = hero;
  return (

    <section className='bg-[#ffffff] bg-opacity- min-h-[900px] py-12 '>

      <div className='container mx-auto min-h-[900px] flex 

       justify-center items-center'>
        <div className='flex flex-col md:flex-row gap-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center 
          text-center lg:text-left'>

          {/* text */}
          <div className='flex-1'>
            <h1 className='title mb-2 lg:mb-5' data-aos='fade-down' data-aos-delay='500'>{title}</h1>
            <p className='lead mb-5 lg:mb-10' data-aos='fade-down' data-aos-delay='600'>{subtitle}</p>

            <div className='flex item center max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6'
            data-aos='fade-down'
            data-aos-delay='700'>

             {/* button & comp text*/}
             <button className='btn btn-md lg:btn-lg 
               btn-accent flex justify-center item-center lg:gap-x-4  '>
               {btnText}
               <HiOutlineChevronDown />
              </button>
             <p className='flex items-center textlight lg:lead lg:mb-0  '>{compText}</p>
            </div>

          </div>

          {/* image */}
          <div className="w-full flex justify-center items-center p-4" data-aos="fade-up" data-aos-delay="800">
            <img 
             src={image} 
             alt="Hero" 
             className="w-[90%] sm:w-[70%] md:w-full max-w-[600px] h-auto block"
            />
            </div>






        </div>
      </div>
    </section>
  );
};

export default Hero;
