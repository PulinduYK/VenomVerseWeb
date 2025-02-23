 import React from 'react';

// import aos
import Aos from 'aos';
// import aos css
import 'aos/dist/aos.css';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Brands from './components/Brands';
import Feature1 from './components/Feature1';
import Feature2 from './components/Feature2';
import Feature3 from './components/Feature3';
import Product from './components/Product';
import AnimatedSnake from "./components/AnimatedSnake";
import Testimonials from './components/Testimonials';
import BackToTop from "./components/BackToTop";


import Footer from './components/Footer';
import TeamSection from './components/TeamSection';

const App = () => {

  // initialize aos
Aos.init({
  duration: 1800,
  offset: 100,
})

  return (
    <div className='overflow-hidden'>
  
      <Header />
      <AnimatedSnake /> 
      <Hero />
      <Overview />
      <Brands />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Product />
      <TeamSection/>

      <Testimonials />
  

      <Footer />
      <BackToTop />
      
    </div>
  );
};

export default App;
