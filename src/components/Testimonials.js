import React from 'react';
//import data
import  {testimonials} from '../data';

//import components
import ClientSlider from '../components/ClientSlider';

const Testimonials = () => {
  //destruture testiminitols
  const {title, clients } = testimonials;

  return <section id='test' className='section'>
    <div className=' container mx-auto'>
      {/*title*/}
      <h2 className='title mb-10 lg:mb-20 text-center mx-auto'> 
        {title}
      </h2>
      {/*slider*/}
      <div>
        <ClientSlider clients={clients}/>
      </div>
    </div>

    </section>;
};

export default Testimonials;
