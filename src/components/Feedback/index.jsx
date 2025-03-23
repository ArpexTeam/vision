import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Toscano from '../../images/Perfil-toscano.svg';
import Marinoni from '../../images/Marinoni-svg.svg';
import SocialFootball from '../../images/Social-Football-Academy.svg';
import TecnoSportRacing from '../../images/Tecno-Sport-Racing.svg';
import Spendiamo from '../../images/Spendiamo-a-pavia.svg';
import University from '../../images/University-of-pavia.svg';
import Weester from '../../images/Weester.svg';

import { useTranslation } from "react-i18next";
import "../../lib/i18n";

import './style.css';

// import required modules
import { Navigation } from 'swiper/modules';

function Feedback(){

    const { t } = useTranslation();

    return(
        
        <div className="bg-black w-full pt-6 sm:pt-20 h-auto relative">
            <div className="max-w-[1280px] w-4/5 mr-auto ml-auto h-auto relative feedbackDiv">
        <Swiper
        slidesPerView={1}
        loop={true}
        spaceBetween={40}
        navigation={{
            prevE1: ".custom-prev",
            nextE1: ".custom-next",
        }}
           breakpoints={{
            520: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            900: {
              slidesPerView: 3,
              spaceBetween: 20,
            }
          }}

        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='md:order-1 order-2 p-5 rounded-md bg-gradient-to-t from-[#610000] to-[#000000] w-full h-screen'>
        <div className='w-full flex items-center gap-3 text-white relative overflow-hidden'>
            <img className='w-12 h-12 rounded-full' src={Toscano}/>
            <h2 className='font-[ClashDisplay-Semibold]'>Toscano</h2>
        </div>
        <div className='w-full'>
            <p className='text-[12px] text-left text-white font-[ClashDisplay-Regular]'>
            {t("clients_card.description_toscano")}
            </p>
        </div>
        </SwiperSlide>

        <SwiperSlide className='p-5 rounded-md bg-gradient-to-b from-[#000000] to-[#B02E52]'>
        <div className='w-full flex items-center gap-3 text-white'>
            <img className='w-12 h-12 rounded-full' src={University}/>
            <h2 className='font-[ClashDisplay-Semibold]'>University of Pavia</h2>
        </div>
        <div className='w-full'>
            <p className='text-[12px] text-left text-white font-[ClashDisplay-Regular]'>
            {t("clients_card.description_university_pavia")}
            </p>
        </div>
        </SwiperSlide>

        <SwiperSlide className='p-5 rounded-md bg-gradient-to-t from-[#6C38C5] to-[#000000] w-full h-screen'>
        <div className='w-full flex items-center gap-3 text-white relative overflow-hidden'>
            <img className='w-12 h-12 rounded-full' src={Weester}/>
            <h2 className='font-[ClashDisplay-Semibold]'>Weester</h2>
        </div>
        <div className='w-full'>
            <p className='text-[12px] text-left text-white font-[ClashDisplay-Regular]'>
            {t("clients_card.description_weester")}
            </p>
        </div>
        </SwiperSlide>

        <SwiperSlide className='p-5 rounded-md bg-gradient-to-b from-[#000000] to-[#8FCE3F]'>
        <div className='w-full flex items-center gap-3 text-white'>

            <img className='w-12 h-12 rounded-full' src={Marinoni}/>
            <h2 className='font-[ClashDisplay-Semibold]'>Marinoni Serramenti</h2>
        </div>
        <div className='w-full'>
            <p className='text-[12px] text-left text-white font-[ClashDisplay-Regular]'>
            {t("clients_card.description_marinoni")}
            </p>
        </div>
        </SwiperSlide>

        <SwiperSlide className='p-5 rounded-md bg-gradient-to-b from-[#000000] to-[#003F42]'>
        <div className='w-full flex items-center gap-3 text-white'>
            <img className='w-12 h-12 rounded-full' src={Spendiamo}/>
            <h2 className='font-[ClashDisplay-Semibold]'>Spendiamo a Pavia</h2>
        </div>
        <div className='w-full'>
            <p className='text-[12px] text-left text-white font-[ClashDisplay-Regular]'>
            {t("clients_card.description_spendiamo_pavia")}
            </p>
        </div>
        </SwiperSlide>

        <SwiperSlide className='p-5 rounded-md bg-gradient-to-b from-[#000000] to-[#1352FF]'>
        <div className='w-full flex items-center gap-3 text-white'>
            <img className='w-12 h-12 rounded-full' src={TecnoSportRacing}/>
            <h2 className='font-[ClashDisplay-Semibold]'>Tecno Sport Racing</h2>
        </div>
        <div className='w-full'>
            <p className='text-[12px] text-left text-white font-[ClashDisplay-Regular]'>
            {t("clients_card.description_tecno_sport")}
            </p>
        </div>
        </SwiperSlide>

        <SwiperSlide className='p-5 rounded-md bg-gradient-to-b from-[#000000] to-[#DFB918]'>
        <div className='w-full flex items-center gap-3 text-white'>
            <img className='w-12 h-12 rounded-full' src={SocialFootball}/>
            <h2 className='font-[ClashDisplay-Semibold]'>Social Football Academy</h2>
        </div>
        <div className='w-full'>
            <p className='text-[12px] text-left text-white font-[ClashDisplay-Regular]'>
            {t("clients_card.description_football")}
            </p>
        </div>
        </SwiperSlide>
      </Swiper>

   
      </div>
      <div className="w-full mt-8 sm:mt-28 py-10 bg-[#070707]">
        <div className="max-w-[1280px] ml-auto mr-auto flex justify-center text-center md:text-left w-4/5 flex-col items-center">
          <h2 className="font-[ClashDisplay-Regular] text-[20px] md:text-[26px] w-2/3 text-center">{t("content.title_contact_us")}</h2>
          <button className="mt-10 bg-[#06E7F2] h-fit w-fit p-3 px-14 rounded-xl font-[ClashDisplay-Semibold] hover:bg-transparent hover:text-[#06E7F2]" style={{border:'1px solid #06E7F2'}}>{t("content.button_contact_us")}</button>
        </div>
      </div>
      </div>
    );
}

export default Feedback;



{/* <img className='absolute w-[100%] h-[100%] object-contain z-[-1] left-0 top-0 transform scale-[1] translate-x-0 translate-y-0' src={perfil2bg} /> */}