import React from 'react';
import indeed2_removebg from '@/assets/indeed2-removebg.png';
import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import tools_frame from '@/assets/tools_frame.png';

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20 '>
      <h2 className='text-center text-5xl font-Ovo'>About Matthew</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image src={indeed2_removebg} alt='user' className='w-full rounded-3xl' />
        </div>
        <div className='flex-1'>
          <p className='mb-10 max-w-3xl font-Ovo'>
            Matthew is a self-driven and results-oriented individual with a passion for data science and applying data science techniques to solve complex problems in chemistry. 
            His academic background includes a B.Sc. in Chemistry focused on computational chemistry research,
            and he is currently pursuing a Master's degree in Data Science and Analytics. <br /> <br />
            Beyond academics, his dedication to music is evident in his 10+ years of experience playing the cello. 
            This experience has instilled in him a deep appreciation for precision and perseverance. An individual with a strong inquisitiveness, 
            he thrives on challenges and enjoys delving into research projects. He cultivates a collaborative spirit by actively building strong connections with colleagues and collaborators, 
            fostering a positive and productive work environment.
          </p>

          <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-3xl'>
            {infoList.map(({icon, iconDark, title, description}, index) => (
              <li 
                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                hover:bg-[var(--lightHover)] hover:-translate-y-1 duration-500 hover:shadow-black' 
                key={index}
              >
                <Image src={icon} alt={title} className='w-7 mt-3' />
                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                <p className='text-gray-600 text-sm'>{description}</p>
              </li>
            ))}
          </ul>

 
          <div className='relative w-full max-w-sm mx-left mt-10'> 
            <Image 
              src={tools_frame} 
              alt='Tools Frame' 
              className='absolute top-0 left-0 w-full h-full z-0 pointer-events-none object-contain' 
            />

            <div className='relative z-10 px-4 py-8 sm:px-6 sm:py-8 text-right'> 
              <h4 className='mb-4 text-gray-700 font-Ovo font-semibold text-left text-lg'>Tools I Use</h4> 
              <ul className='flex flex-wrap justify-left gap-5 sm:gap-5 mt-15'>
                {toolsData.map((tool, index) => (
                  <li 
                    key={index}
                    className='mt-2 flex items-center justify-center w-12 sm:w-14 aspect-square 
                    cursor-pointer hover:-translate-y-1 duration-500'
                  >
                    <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;