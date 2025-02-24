import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import back from '../../images/background_png.png';
import back2 from '../../images/Background2.png';

import './style.css';

// import required modules
import { Pagination } from 'swiper/modules';

import eq1 from '../../images/equipe1.png';
import eq2 from '../../images/equipe2.jpeg';
import eq3 from '../../images/equipe3.jpeg';

function Equipe(){
    return(
        <div style={{backgroundImage:`url(${back})`, backgroundSize:'cover', backgroundPosition:'center'}} className='bg-black w-full pt-20 h-auto relative'>
        <div className='max-w-[1280px] w-4/5 mr-auto ml-auto h-auto relative'>  
        <div className='flex md:flex-row flex-col items-center'>
        <div className="text-center text-white w-full sm:w-2/3 mt-14 md:mt-0 md:w-1/2 md:order-1 order-2">
            <h1 className="text-[40px] font-[ClashDisplay-Bold] text-white mb-6">Pedro</h1>
            <p className="leading-7 font-[ClashDisplay-Extralight]">Lorem ipsum dolor sit amet consectetur. Volutpat sollicitudin purus 
                nunc molestie. Tempor consectetur consectetur accumsan enim turpis.
                Id orci nibh ipsum et turpis nisl non libero ut. Enim lectus vitae 
                odio urna. Cum justo ac arcu platea eget. Consequat suspendisse
                blandit amet turpis pellentesque imperdiet. </p>
        </div>
        <div className="w-full md:w-1/2 h-72 md:order-2 order-1 teamSlider">
        <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='slideTeam'><div className='w-full h-full'><img src={eq1}/></div></SwiperSlide>
        <SwiperSlide className='slideTeam'><div className='w-full h-full'><img src={eq2}/></div></SwiperSlide>
        <SwiperSlide className='slideTeam'><div className='w-full h-full'><img src={eq3}/></div></SwiperSlide>

    
      </Swiper>
        </div>
        </div>
        
       </div>
       <div style={{backgroundImage:`url(${back2})`, backgroundSize:'contain', backgroundPosition:'center', backgroundRepeat:'no-repeat'}} className='py-10 md:py-20 bg-[#070707] text-left mt-32 w-full'>
        <div className='max-w-[1280px] flex justify-center items-center md:flex-row flex-col'>
           <h1 className='font-[ClashDisplay-Bold] text-center md:mb-0 mb-4 md:text-left text-[16px] md:text-[26px] w-2/3 sm:w-1/2'>Criação de conteúdo visual que inspira, emociona e transforma seu negócio.</h1>
           <button className='bg-[#06E7F2] h-fit w-fit p-4 px-6 rounded-xl font-[ClashDisplay-Semibold] hover:bg-transparent hover:text-[#06E7F2]' style={{border:'1px solid #06E7F2'}}>Reserve agora seu evento</button>
        </div>
        </div>
       </div>
    )
}

export default Equipe;