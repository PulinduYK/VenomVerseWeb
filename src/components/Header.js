import React, { useState, useEffect } from 'react';

// import data
import { header } from '../data';

// import icons
import { HiMenuAlt1, HiOutlineX } from 'react-icons/hi';

// import components
import MobileNav from '../components/MobileNav';
import Nav from '../components/Nav';

const Header = () => {
  // mobile nav state
  const [mobileNav, setMobileNav] = useState(false);

  // header state
  const [isActive, setIsActive] = useState(false);

  // destructure header data
  const { logo, btnText } = header;

  // scroll event
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    };

    window.addEventListener('scroll', handleScroll);

  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${isActive ? 'lg:top-0 bg-[white] shadow-2xl' : 'lg:top-[60px]'} py-6 lg:py-4 fixed w-full transition-all z-50`}>
      <div className="container mx-auto flex items-center justify-between ">

        {/* logo */}
        <a href='/' data-aos='fade-down' data-aos-delay='1000'>
          <img src={logo} alt='Logo' className="w-[150px] h-auto block" />
        </a>


        <div className='hidden lg:flex' data-aos='fade-down' data-aos-delay='1200'>
          <Nav />
        </div>


        <button className='btn btn-sm btn-outline hidden lg:flex' data-aos='fade-down' data-aos-delay='1400'>
          {btnText}
        </button>


        <button onClick={() => setMobileNav(!mobileNav)} className='lg:hidden z-50'>
          {mobileNav ? (
            <HiOutlineX className='text-3xl text-accent' />
          ) : (
            <HiMenuAlt1 className='text-3xl text-accent' />
          )}
        </button>

        {/* mobile nav */}
        {mobileNav && (
          <MobileNav setMobileNav={setMobileNav} />
        )}
      </div>
    </header>
  );
};

export default Header;
