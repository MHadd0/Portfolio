import React from 'react';
import matthew_portrait from '@/assets/matthew_portrait.jpg';
import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import tools_frame from '@/assets/tools_frame.png';

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20 '>
      <h2 className='text-center text-5xl font-Ovo'>About Matthew</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image src={matthew_portrait} alt='user' className='w-full rounded-3xl' />
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
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
                active:bg-[var(--lightHover)] active:-translate-y-1 active:shadow-black
                hover:bg-[var(--lightHover)] hover:-translate-y-1 duration-500 hover:shadow-black'
                key={index}
              >
                <Image src={icon} alt={title} className='w-7 mt-3' />
                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                <p className='text-gray-600 text-sm'>{description}</p>
              </li>
            ))}
          </ul>

          {/* Tools Section Start */}
          <div className='relative w-full max-w-sm mx-left mt-10'>
            <Image
              src={tools_frame}
              alt='Tools Frame'
              className='absolute top-0 left-0 w-full h-full
               z-0 pointer-events-none object-contain hidden sm:block'
            />

            {/* Content for Tools I Use */}
            {/* Adjust padding for the content container */}
            <div className='relative z-10 px-4 pt-4 pb-8 sm:px-6 sm:pt-6 sm:pb-8'>
              {/* Adjust heading position using responsive classes */}
              <h4 className='font-Ovo font-semibold text-lg text-gray-700 absolute
                             top-4 left-6
                             sm:top-5 sm:left-5'> {/* Adjust these values as needed for your frame */}
                Tools I Use
              </h4>
              {/* Adjust ul (tools list) position and justification */}
              <ul className='flex flex-wrap justify-center gap-4
                             pt-14 sm:pt-20 {/* Adjust padding-top for mobile vs desktop */}
                             sm:justify-start sm:gap-5'> {/* Align left on sm and larger */}
                {toolsData.map((tool, index) => (
                  <li
                    key={index}
                    className='flex items-center justify-center w-12 sm:w-14 aspect-square
                    cursor-pointer hover:-translate-y-1 duration-500'
                  >
                    <Image src={tool} alt='Tool' className='w-6 sm:w-8' />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Tools Section End */}
        </div>
      </div>
    </div>
  );
};

export default About;