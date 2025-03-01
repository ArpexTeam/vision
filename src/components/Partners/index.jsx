import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import { Autoplay, Pagination } from 'swiper/modules';

import partner1 from '../../images/partner1.png';
import partner2 from '../../images/partner2.png';
import partner3 from '../../images/partner3.png';
import partner4 from '../../images/partner4.png';
import partner5 from '../../images/partner5.png';
import partner6 from '../../images/partner6.png';
import partner7 from '../../images/partner7.png';

function Partners() {
  
  return (
    <div className="bg-black w-full pt-10 pb-36 h-auto relative">
            <div className="max-w-[1280px] w-4/5 mr-auto ml-auto h-auto relative">
    <h1 className='text-[38px] font-[ClashDisplay-Semibold]'>Ours Clients</h1>
    <p className='text-[#CCCCCC]'>Over the years, we've worked with companies from various industries</p>
    <div className='flex justify-between gap-4 md:gap-0 flex-wrap md:flex-nowrap items-center pt-16'>
        <img src={partner1} className='w-16 lg:w-24 xl:w-32 h-full bg-transparent ' />
        <img src={partner2} className='w-16 lg:w-24 xl:w-32 h-full bg-transparent ' />
        <img src={partner3} className='w-16 lg:w-24 xl:w-32 h-full bg-transparent ' />
        <img src={partner4} className='w-16 lg:w-24 xl:w-32 h-full bg-transparent ' />
        <img src={partner5} className='w-16 lg:w-24 xl:w-32 h-full bg-transparent ' />
        <img src={partner6} className='w-16 lg:w-24 xl:w-32 h-full bg-transparent ' />
        <img src={partner7} className='w-16 lg:w-24 xl:w-32 h-full bg-transparent ' />
        </div>
    </div>
    </div>
  );
}

export default Partners;
