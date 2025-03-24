import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
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
import { Navigation } from 'swiper/modules';

function Feedback() {
    const { t } = useTranslation();
    const swiperRef = useRef(null);

    const handleSlideClick = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideToLoop(index);
        }
    };

    return (
        <div className="bg-black w-full pt-6 sm:pt-10 h-auto relative">
            <div className="max-w-[1280px] w-4/5 mr-auto ml-auto h-auto relative feedbackDiv">
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    spaceBetween={40}
                    centeredSlides={true}
                    navigation={{
                        prevEl: ".custom-prev",
                        nextEl: ".custom-next",
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
                    ref={swiperRef}
                >
                    <SwiperSlide className='p-5 rounded-md bg-gradient-to-t from-[#610000] to-[#000000]' onClick={() => handleSlideClick(0)}>
                        <div className="card-header flex items-center gap-3 text-white">
                            <img className='w-12 h-12 rounded-full' src={Toscano} alt="Toscano" />
                            <h2 className='font-[ClashDisplay-Semibold] text-lg'>Toscano</h2>
                        </div>
                        <div className="card-content">
                            <p className='text-[12px] text-left text-white font-[ClashDisplay-Regular]'>
                                {t("clients_card.description_toscano")}
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='p-5 rounded-md bg-gradient-to-b from-[#000000] to-[#B02E52]' onClick={() => handleSlideClick(1)}>
                        <div className="card-header flex items-center gap-3 text-white">
                            <img className='w-12 h-12 rounded-full' src={University} alt="University of Pavia" />
                            <h2 className='font-[ClashDisplay-Semibold] text-lg'>University of Pavia</h2>
                        </div>
                        <div className="card-content">
                            <p className='text-[12px] text-left text-white font-[ClashDisplay-Regular]'>
                                {t("clients_card.description_university_pavia")}
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='p-5 rounded-md bg-gradient-to-t from-[#6C38C5] to-[#000000]' onClick={() => handleSlideClick(2)}>
                        <div className="card-header flex items-center gap-3 text-white">
                            <img className='w-12 h-12 rounded-full' src={Weester} alt="Weester" />
                            <h2 className='font-[ClashDisplay-Semibold] text-lg'>Weester</h2>
                        </div>
                        <div className="card-content">
                            <p className='text-[12px] text-left text-white font-[ClashDisplay-Regular]'>
                                {t("clients_card.description_weester")}
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='p-5 rounded-md bg-gradient-to-b from-[#000000] to-[#8FCE3F]' onClick={() => handleSlideClick(3)}>
                        <div className="card-header flex items-center gap-3 text-white">
                            <img className='w-12 h-12 rounded-full' src={Marinoni} alt="Marinoni Serramenti" />
                            <h2 className='font-[ClashDisplay-Semibold] text-lg'>Marinoni Serramenti</h2>
                        </div>
                        <div className="card-content">
                            <p className='text-[12px] text-left text-white font-[ClashDisplay-Regular]'>
                                {t("clients_card.description_marinoni")}
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='p-5 rounded-md bg-gradient-to-b from-[#000000] to-[#003F42]' onClick={() => handleSlideClick(4)}>
                        <div className="card-header flex items-center gap-3 text-white">
                            <img className='w-12 h-12 rounded-full' src={Spendiamo} alt="Spendiamo a Pavia" />
                            <h2 className='font-[ClashDisplay-Semibold] text-lg'>Spendiamo a Pavia</h2>
                        </div>
                        <div className="card-content">
                            <p className='text-[12px] text-left text-white font-[ClashDisplay-Regular]'>
                                {t("clients_card.description_spendiamo_pavia")}
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='p-5 rounded-md bg-gradient-to-b from-[#000000] to-[#1352FF]' onClick={() => handleSlideClick(5)}>
                        <div className="card-header flex items-center gap-3 text-white">
                            <img className='w-12 h-3 rounded-full' src={TecnoSportRacing} alt="Tecno Sport Racing" />
                            <h2 className='font-[ClashDisplay-Semibold] text-lg'>Tecno Sport Racing</h2>
                        </div>
                        <div className="card-content">
                            <p className='text-[12px] text-left text-white font-[ClashDisplay-Regular]'>
                                {t("clients_card.description_tecno_sport")}
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='p-5 rounded-md bg-gradient-to-b from-[#000000] to-[#DFB918]' onClick={() => handleSlideClick(6)}>
                        <div className="card-header flex items-center gap-3 text-white">
                            <img className='w-12 h-12 rounded-full' src={SocialFootball} alt="Social Football Academy" />
                            <h2 className='font-[ClashDisplay-Semibold] text-lg'>Social Football Academy</h2>
                        </div>
                        <div className="card-content">
                            <p className='text-[12px] text-left text-white font-[ClashDisplay-Regular]'>
                                {t("clients_card.description_football")}
                            </p>
                        </div>
                    </SwiperSlide>

                    <div className="custom-prev absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#06E7F2" strokeWidth="2">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </div>
                    <div className="custom-next absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#06E7F2" strokeWidth="2">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </div>
                </Swiper>
            </div>
            <div className="w-full mt-8 sm:mt-16 py-10 bg-[#070707]">
                <div className="max-w-[1280px] ml-auto mr-auto flex justify-center text-center md:text-left w-4/5 flex-col items-center">
                    <h2 className="font-[ClashDisplay-Regular] text-[20px] md:text-[26px] w-2/3 text-center">{t("content.title_contact_us")}</h2>
                    <button className="mt-10 bg-[#06E7F2] h-fit w-fit p-3 px-14 rounded-xl font-[ClashDisplay-Semibold] hover:bg-transparent hover:text-[#06E7F2]" style={{ border: '1px solid #06E7F2' }}>{t("content.button_contact_us")}</button>
                </div>
            </div>
        </div>
    );
}

export default Feedback;