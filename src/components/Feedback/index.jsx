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


import './style.css';

// import required modules
import { Navigation } from 'swiper/modules';

function Feedback(){
    return(
        
        <div className="bg-black w-full pt-28 h-auto relative">
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
        <SwiperSlide className='p-5 rounded-md bg-gradient-to-t from-[#610000] to-[#000000] w-full h-screen'>
        <div className='w-full flex items-center gap-3 text-white relative overflow-hidden'>
            <img className='w-12 h-12 rounded-full' src={Toscano}/>
            <h2 className='font-[ClashDisplay-Semibold]'>Toscano</h2>
        </div>
        <div className='w-full'>
            <p className='text-[12px] text-left text-white font-[ClashDisplay-Regular]'>
            Since day one, Vision Production has been my trusted partner
             for all my racing circuit needs, consistently exceeding 
             expectations with their outstanding content.
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
            Vision Production masterfully captured the essence of our brand, showcasing the quality 
            and innovation that define our products. Their visuals perfectly align with the 
            message we want to convey to our customers.
            </p>
        </div>
        </SwiperSlide>

        <SwiperSlide className='p-5 rounded-md bg-gradient-to-b from-[#000000] to-[#8FCE3F]'>
        <div className='w-full flex items-center gap-3 text-white'>

            <img className='w-12 h-12 rounded-full' src={Marinoni}/>
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
        <SwiperSlide className='p-5 bg-[rgba(34,33,33,1)]'>
        <div className='w-full flex items-center gap-3 text-white'>
            <img className='w-12 h-12 rounded-full' src={TecnoSportRacing}/>
            <h2 className='font-[ClashDisplay-Semibold]'>Luccas Marinoni</h2>
        </div>
        <div className='w-full'>
            <p className='text-[12px] text-left text-white font-[ClashDisplay-Regular]'>
            We operate in the doors and windows sector across Pavia and Milan, 
            and partnering with Vision Production has significantly 
            boosted the sales of my products.
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
            We were searching for a team capable of bringing our logos to life in both 2D and 3D formats, 
            and Vision Production not only met but surpassed our expectations with their 
            exceptional creativity and technical expertise.
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
            Collaborating with Vision Production brought new life to our project supporting local 
            businesses in Pavia. Their visuals truly connect with our community and amplify our purpose.
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
            Partnering with Vision Production has been a game-changer for highlighting our Porsche and 
            BMW racing team. Their creativity, attention to detail, and expertise have taken 
            our content to a whole new level.
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
            Vision Production has masterfully captured the essence of our football academy, 
            highlighting our mission to develop the next generation of professional 
            players with creativity and passion.
            </p>
        </div>
        </SwiperSlide>
      </Swiper>

   
      </div>
      <div className="w-full mt-40 py-10 bg-[#070707]">
        <div className="max-w-[1280px] ml-auto mr-auto flex justify-center text-center md:text-left w-4/5 flex-col items-center">
          <h1 className="font-[ClashDisplay-Regular] text-[26px] w-2/3 text-center">Speak with one of our specialists and receive a personalized quote right now</h1>
          <button className="text-lg mt-10 bg-[#06E7F2] h-fit w-[250px] p-4 px-6 rounded-xl font-[ClashDisplay-Semibold] hover:bg-transparent hover:text-[#06E7F2] transition-all duration-150 ease-in-out" style={{border:'1px solid #06E7F2'}}>Contact Us</button>
        </div>
      </div>
      </div>
    );
}

export default Feedback;



{/* <img className='absolute w-[100%] h-[100%] object-contain z-[-1] left-0 top-0 transform scale-[1] translate-x-0 translate-y-0' src={perfil2bg} /> */}