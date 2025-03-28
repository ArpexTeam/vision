import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import { Autoplay, Pagination } from 'swiper/modules';
import { useTranslation } from "react-i18next";
import "../../lib/i18n";

import partner1 from '../../images/partner1.png';
import partner2 from '../../images/partner2.png';
import partner3 from '../../images/partner3.png';
import partner4 from '../../images/partner4.png';
import partner5 from '../../images/partner5.png';
import partner6 from '../../images/partner6.png';
import partner7 from '../../images/partner7.png';

function Partners() {
  
  const { t } = useTranslation();

  return (
    <div className="bg-black w-full pt-5 sm:pt-10 pb-0 h-auto relative">
            <div className="max-w-[1280px] w-4/5 mr-auto ml-auto h-auto relative">
    <h2 className='text-[32px] md:text-[40px] font-[ClashDisplay-Semibold] mt-10 mb-4'>{t("content.title_clients")}</h2>
    <p className='text-[#A5A5A5] font-[ClashDisplay-medium]'>{t("content.description_clients")}</p>
    <div className='flex justify-between items-center pt-16 flex-wrap gap-2 md:gap-3'>
        <img src={partner1} className='w-[40px] lg:w-24 xl:w-32 h-full bg-transparent ' />
        <img src={partner2} className='w-[40px] lg:w-24 xl:w-32 h-full bg-transparent ' />
        <img src={partner3} className='w-[40px] lg:w-24 xl:w-32 h-full bg-transparent ' />
        <img src={partner4} className='w-[40px] lg:w-24 xl:w-32 h-full bg-transparent ' />
        <img src={partner5} className='w-[40px] lg:w-24 xl:w-32 h-full bg-transparent ' />
        <img src={partner6} className='w-[40px] lg:w-24 xl:w-32 h-full bg-transparent ' />
        <img src={partner7} className='w-[40px] lg:w-24 xl:w-32 h-full bg-transparent ' />

        </div>
    </div>

    <div className='w-full h-[100px] md:mt-14 mt-10 flex justify-center items-center'> 
      <h2 className='text-[28px] md:text-[38px] md:mb-0 text-center text-[#ffffff] font-[ClashDisplay-medium]'>{t("content.title_clients_say")}</h2>
    </div>
    </div>
  );
}

export default Partners;
