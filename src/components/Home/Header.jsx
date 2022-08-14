import React from 'react';
import { useNavigate } from 'react-router-dom';
import dp from '../../assets/images/dp.webp'

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className='grid xl:grid-cols-2 gap-y-24 gap-x-12 items-center'>
      <div className='space-y-8'>
        <h2 className='pb-2 border-b w-fit'>Sabbir Ahmed, front-end developer</h2>
        <h2 className='text-4xl font-bold text-gray-700'>Specialized in creating user friendly modern websites</h2>
        <div className='space-x-4'>
          <a href="#contact">
            <button className='h-9 px-6 bg-blue-600 rounded text-white hover:bg-blue-700 transition-colors'
            >contact</button>
          </a>
          <button className='h-9 px-6 text-blue-500 border-b-2 border-blue-200 hover:border-blue-600 transition-colors font-medium'
            onClick={() => navigate('/resume')}
          >resume</button>
        </div>
      </div>
      <div className='group relative'>
        <div className='group-hover:scale-[2] group w-20 absolute -top-12 -right-8 transition-all duration-500  group-hover:-translate-x-10 group-hover:-translate-y-10 ease-in-out z-10'>
          <div className='absolute w-3 h-3 left-2 top-1 rounded-full animate-ping bg-blue-600 group-hover:hidden'></div>
          <div className='absolute w-3 h-3 left-2 top-1 rounded-full bg-blue-400 group-hover:hidden'></div>
          <img src={dp} alt="" className='rounded-full' />
        </div>
        <p className='bg-blue-600 text-white p-8 rounded hover:translate-y-2 transition-all ease duration-300'>Hi! I am Sabbir Ahmed, a mern stack developer with 1 year of experience in web development field. My area of expertise are react, node, tailwind, firebase and mongodb</p>
      </div>
    </div>
  );
};

export default Header;