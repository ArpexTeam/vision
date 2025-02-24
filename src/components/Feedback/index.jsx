import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import perfil1 from '../../images/perfil1.jpeg';
import perfil2 from '../../images/perfil2.jpeg';
import perfil3 from '../../images/perfil3.jpeg';


import './style.css';

// import required modules
import { Navigation } from 'swiper/modules';

function Feedback(){
    return(
        <div className="bg-black w-full pt-24 h-auto relative">
            <div className="max-w-[1280px] w-4/5 mr-auto ml-auto h-auto relative feedbackDiv">
        <Swiper
        slidesPerView={3}
        loop={true}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='p-5 bg-[rgba(0,92,97,1)]'>
        <div className='w-full flex items-center gap-3 text-white'>
            <img className='w-12 h-12 rounded-full' src={perfil2}/>
            <h2 className='font-[ClashDisplay-Semibold]'>Vieri Lombard</h2>
        </div>
        <div className='w-full'>
            <p className='text-[12px] text-left text-white font-[ClashDisplay-Regular]'>
            Since day one, Vision Production has been my trusted partner
             for all my racing circuit needs, consistently exceeding 
             expectations with their outstanding content.
            </p>
        </div>
        </SwiperSlide>
        <SwiperSlide className='p-5 bg-[rgba(34,33,33,1)]'>
        <div className='w-full flex items-center gap-3 text-white'>
            <img className='w-12 h-12 rounded-full' src={perfil1}/>
            <h2 className='font-[ClashDisplay-Semibold]'>Luccas Marinoni</h2>
        </div>
        <div className='w-full'>
            <p className='text-[12px] text-left text-white font-[ClashDisplay-Regular]'>
            Since day one, Vision Production has been my trusted partner
             for all my racing circuit needs, consistently exceeding 
             expectations with their outstanding content.
            </p>
        </div>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>

        <SwiperSlide className='p-5 bg-[rgba(34,33,33,1)]'>
        <div className='w-full flex items-center gap-3 text-white'>
            <img className='w-12 h-12 rounded-full' src={perfil2}/>
            <h2 className='font-[ClashDisplay-Semibold]'>Luccas Marinoni</h2>
        </div>
        <div className='w-full'>
            <p className='text-[12px] text-left text-white font-[ClashDisplay-Regular]'>
            Since day one, Vision Production has been my trusted partner
             for all my racing circuit needs, consistently exceeding 
             expectations with their outstanding content.
            </p>
        </div>
        </SwiperSlide>
      </Swiper>

   
      </div>
      <div className="w-full mt-40 py-20 bg-[#070707]">
        <div className="max-w-[1280px] ml-auto mr-auto flex justify-center text-center md:text-left w-4/5 flex-col items-center">
          <h1 className="font-[ClashDisplay-Regular] text-[26px] w-2/3 text-center">Destaque-se no mercado com sites modernos, logos únicos e animações de alta qualidade</h1>
          <button className="mt-10 bg-[#06E7F2] h-fit w-fit p-4 px-6 rounded-xl font-[ClashDisplay-Semibold] hover:bg-transparent hover:text-[#06E7F2]" style={{border:'1px solid #06E7F2'}}>Reserve agora seu evento</button>
        </div>
      </div>
      </div>
    );
}

export default Feedback;