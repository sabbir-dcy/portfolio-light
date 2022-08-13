import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { DiMongodb, DiHeroku } from "react-icons/di";
import { SiTailwindcss, SiFirebase, SiFramer,SiJavascript } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

const Technology = () => {
  return (
    <div>
      <h2 className='mt-20 pb-2 border-b w-fit'>Technologies I have learned</h2>
      <div className='text-xl grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-4 gap-6 '>
        <div className='flex items-center gap-x-2'>
          <FaReact className='text-blue-500' />
          <h2>react</h2>
        </div>
        <div className='flex items-center gap-x-2'>
          <DiMongodb className='text-green-500' />
          <h2>mongoose</h2>
        </div>
        <div className='flex items-center gap-x-2'>
          <SiTailwindcss className='text-cyan-500' />
          <h2>tailwind css</h2>
        </div>
        <div className='flex items-center gap-x-2'>
          <SiFirebase className='text-yellow-400' />
          <h2>firebase</h2>
        </div>
        <div className='flex items-center gap-x-2'>
          <FaNodeJs className='text-green-500' />
          <h2>nodejs</h2>
        </div>
        <div className='flex items-center gap-x-2'>
          <AiFillGithub />
          <h2>git</h2>
        </div>
        <div className='flex items-center gap-x-2'>
          <SiFramer className='text-purple-500' />
          <h2>framer motion</h2>
        </div>
        <div className='flex items-center gap-x-2'>
          <DiHeroku className='text-purple-400' />
          <h2>heroku</h2>
        </div>
        <div className='flex items-center gap-x-2'>
          <SiJavascript className='text-yellow-400' />
          <h2>javascript</h2>
        </div>
      </div>
    </div>
  );
};

export default Technology;