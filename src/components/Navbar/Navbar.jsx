import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsFillArrowUpSquareFill } from "react-icons/bs";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = ({ children }) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [menu, setMenu] = useState(false)
  return (
    <>
      {
        !pathname.includes('resume') && <div>
          <div className='bg-blue-600 text-blue-300 sticky top-0 z-20'>
            <div className='w-4/5 md:w-3/5 mx-auto h-20 flex justify-between items-center'>
              <div className='rounded-full h-8 w-8 border border-blue-300 flex justify-center items-center hover:text-white hover:border-white transition-colors cursor-pointer' onClick={() => navigate('/')}>sa</div>
              <div className='space-x-8 hidden md:block'>
                <Link to='/' className={`hover:text-white transition-colors ${pathname === '/' && 'text-white'}`}>Home</Link>
                <Link to='/about' className={`hover:text-white transition-colors ${pathname.includes('/about') && 'text-white'}`}>About</Link>
                <Link to='/blog' className={`hover:text-white transition-colors ${pathname.includes('/blog') && 'text-white'}`}>Blog</Link>
                <Link to='/experience' className={`hover:text-white transition-colors ${pathname.includes('/experience') && 'text-white'}`}>Experience</Link>
              </div>
              <div className='md:hidden block' onClick={() => setMenu(!menu)}>
                {
                  !menu ? <AiOutlineMenu className='text-2xl cursor-pointer' /> : <AiOutlineClose className='text-2xl cursor-pointer' />
                }
              </div>
            </div>
          </div>
          <div className={`absolute w-full flex flex-col gap-4 items-center pb-4 transition-all ${!menu && "-translate-y-40"} bg-blue-600 text-blue-300`}>
            <Link to='/' className={`hover:text-white transition-colors ${pathname === '/' && 'text-white'}`}>Home</Link>
            <Link to='/about' className={`hover:text-white transition-colors ${pathname.includes('/about') && 'text-white'}`}>About</Link>
            <Link to='/blog' className={`hover:text-white transition-colors ${pathname.includes('/blog') && 'text-white'}`}>Blog</Link>
            <Link to='/experience' className={`hover:text-white transition-colors ${pathname.includes('/experience') && 'text-white'}`}>Experience</Link>
          </div>
        </div>
      }

      <div className={`w-4/5 md:w-3/5 mx-auto transition-all pt-20`} onClick={() => setMenu(false)}>
        {children}
        {
          !pathname.includes('resume') && <a href="#top">
            <button className='bg-blue-600 rounded text-white p-2 text-xl fixed bottom-4 right-0'><BsFillArrowUpSquareFill /></button>
          </a>
        }
      </div>
    </>
  );
};

export default Navbar;