import React from 'react';
import Contact from '../../components/Home/Contact';
import Header from '../../components/Home/Header';
import Projects from '../../components/Home/Projects';
import Technology from '../../components/Home/Technology';
import Testimonial from '../../components/Home/Testimonial';

const Home = () => {
  return (
    <div className='space-y-8'>
      <Header id='top'/>
      <Technology />
      <Testimonial />
      <Projects />
      <Contact/>
    </div>
  );
};

export default Home;