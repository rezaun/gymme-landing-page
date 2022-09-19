import React from 'react';
import {banner} from '../data';

const Banner = () => {
  const {titlePart1, titlePart2, subtitle, textBtn} = banner;
  return <section className='bg-neutral-500 h-[790px]'>
    <div className='container mx-auto h-full'>
      <div className='flex items-center h-full relative'>
        <div className='text-white'>
          <h1 className='h1 text-white mb-8'>{titlePart1} <br /> <span>{titlePart2}</span></h1>
          <p className='max-w-[415px] text-body-md-lg:text-body-lg mb-8'>{subtitle}</p>
          <button className='btn btn-sm lg:btn-lg btn-secondary'>{textBtn}</button>
        </div>
        {/* image */}
        <div className='bg-blue-300 w-full h-full bg-banner bg-cover bg-right lg:bg-center bg-no-repeat flex-1'>image</div>
      </div>
    </div>
  </section>;
};

export default Banner;
