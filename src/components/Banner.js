import React from 'react';

import Image from '../assets/img/house-banner.png';
import Search from '../components/Search';

const Banner = () => {
  return <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
    <div className='flex flex-col lg:flex-row'>
      <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'> 
        <h1 className='text-4xl lg:text-[58px] 
        font-semibold leading-none mb-6'>
          <span className='text-blue-700'> Rent </span>
          Your Dream House
        </h1>
        <p className='max-w-[480px] mb-8'>
        Find your perfect home with our curated selection of luxury rentals. From spacious villas to cozy family homes, we offer properties that combine comfort, style, and convenience in prime locations. Whether you're looking for breathtaking views, modern amenities, or proximity to top schools and entertainment, your dream house is just a few clicks away. Start your journey to a new home today!
        </p>
      </div>
      <div className='hidden flex-1 lg:flex justify-end items-end'>
        <img src={Image} alt=''/>
      </div>
    </div>
    <Search/>
  </section>;
};

export default Banner;
