import trofeu from '../../images/trofeuIcon.svg';
import ev1 from '../../images/Varano-Internacional-Circuit.jpg';
import ev2 from '../../images/ev2.jpeg';
import ev3 from '../../images/campione-italiano.png';
import ev4 from '../../images/indoor-events.png';

import c1 from '../../images/c1.jpeg';
import c2 from '../../images/c2.png';
import c3 from '../../images/c3.png';
import c4 from '../../images/c4.png';

import React, { useState, useRef } from 'react';
import rightArrow from '../../images/rightArrow.svg';

// import video1 from '../../images/loopToscano.mp4';
// import video2 from '../../images/loopCatolica.mp4';
// import video3 from '../../images/loopShark.mp4';
// import video4 from '../../images/loopVoila.mp4';



import back from '../../images/Retangulo_Vision.jpg';
import claquete from '../../images/claquete.png';
import './style.css';

import { useTranslation } from "react-i18next";
import "../../lib/i18n";
function Events(){
    const { t } = useTranslation();
    
    return(
        <div className='bg-black w-full pt-10 h-auto relative'>
            <div className='max-w-[1280px] w-4/5 mr-auto ml-auto h-auto relative'>  
                <div className='items-center justify-center flex flex-col md:flex-row gap-16 md:gap-32'>
                        <div className='text-center'>
                            <h1 className="font-[ClashDisplay-SemiBold] text-[#dadada] text-[28px] md:text-[40px]/10 whitespace-pre-line">{t("events.title_events")}</h1>
                        </div>
                        <div>
                            <img src={claquete} className='w-[260px] ml-auto'/>
                        </div>
                        </div>
                        
                <div className="gap-12 mt-20 md:mt-20 flex md:flex-row flex-col w-full text-white text-left ml-auto mr-auto">
                    <div className="mt-8 w-full md:w-6/12 xl:w-5/12 md:text-left text-center bg-gradient-to-l md:pl-6 pb-16 md:px-10 rounded-xl">
                    <h2 className="font-[ClashDisplay-Semibold] text-[28px] md:text-[36px]/10 titleBlueLine mb-8 whitespace-pre-line">
                    {t("events.title_varano")}
                    </h2>
                        <p className='mt-10 md:mr-2 font-[ClashDisplay-Regular] '>{t("events.description_varano")}</p>
                    </div>
                    <div className='w-full md:w-7/12 h-[300px] rounded-3xl relative'>
                    <div className='w-full bg-[#000000]/20 h-full relative'>
                               

                    <iframe className="w-full h-full object-cover rounded-lg" src="https://www.youtube.com/embed/bvX_fl83Oh0?si=EgfbmTB_Uef4plYl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                                   
                                
                                </div>
                    </div>
                </div>

                <div className="gap-12 mt-20 flex md:flex-row flex-col w-full text-white text-left ml-auto mr-auto">
                <div className='w-full order-2 md:order-1 md:w-7/12 h-[300px] rounded-3xl relative' style={{backgroundImage:`url(${ev2})`, backgroundSize:'cover', backgroundPosition:'center'}}>
                <div className='w-full bg-[#000000]/20 h-full relative'>
                             
                <iframe className="w-full h-full object-cover rounded-lg"
                                    src="https://www.youtube.com/embed/6SE5KhWJjXc?si=2KZ4DI-JPlDgPhv_" title="YouTube vieo player"
                                     frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                                     picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

                                     </iframe>
                              
                                   
                                
                                </div>
                    </div>
                   
                    <div className="mt-8 order-1 md:order-2 w-full md:text-left text-center md:w-5/12 bg-gradient-to-l md:pl-6 pb-16 md:px-10 rounded-xl">
                    <h2 className="font-[ClashDisplay-Semibold] text-[28px] md:text-[36px]/10 titleBlueLine">
                    {t("events.title_cattolica")}
                    </h2>
                        <p className='mt-10 font-[ClashDisplay-Regular]'>{t("events.description_cattolica")}</p>
                    </div>
                    
                </div>

                <div className="gap-12 mt-20 flex md:flex-row flex-col w-full text-white text-left ml-auto mr-auto md:ml-[150px]">
                    <div className="mt-8 text-center md:text-left w-full md:w-5/12 bg-gradient-to-l md:pl-6 pb-16 md:px-10 rounded-xl">
                    <h2 className="font-[ClashDisplay-Semibold] text-[28px] md:text-[40px]/10 titleBlueLine mb-8">
                    {t("events.title_misano")}
                    </h2>
                        <p className='mt-10 font-[ClashDisplay-Regular]'>{t("events.description_misano")}</p>
                    </div>
                    <div className='w-full md:w-3/12 h-[550px] rounded-xl relative mt-5 overflow-hidden' style={{backgroundImage:`url(${ev3})`, backgroundSize:'cover', backgroundPosition:'center'}}>
                    <div className='w-full h-full relative bg-[#000]/20'>
                                
                              
                         
                    <iframe className="w-full h-full object-cover rounded-lg" src="https://www.youtube.com/embed/MLo5UF11sSg?si=BkH-PdQ1G6bnlFqs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                
                                </div>
                    </div>
                </div>

                <div className="gap-12 mt-20 flex md:flex-row flex-col w-full text-white text-left ml-auto mr-auto md:ml-[170px]">
                <div className='w-full order-2 md:order-1 md:w-3/12 h-[550px] rounded-3xl relative' style={{backgroundImage:`url(${ev4})`, backgroundSize:'cover', backgroundPosition:'center'}}>
                <div className='w-full h-full relative bg-[#000000]/20'>
                               

                                    <iframe className="w-full h-full object-cover rounded-lg" src="https://www.youtube.com/embed/Jyj4v3JtmfY?si=VpgXiL4yuZcOuTyV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                   
                                
                                </div>
                    </div>
                   
                    <div className="mt-8 text-center order-1 md:order-2 md:text-left w-full md:w-5/12 bg-gradient-to-l md:pl-6 pb-16 md:px-10 rounded-xl">
                    <h2 className="font-[ClashDisplay-Semibold] text-[28px] md:text-[40px]/10 titleBlueLine">
                    {t("events.title_indoor_events")}
                    </h2>
                        <p className='mt-10 font-[ClashDisplay-Regular]'>{t("events.description_indoor")}</p>
                    </div>
                    
                </div>

                <div className="mt-28">
                    <div className="w-full md:w-1/2 ml-auto mr-auto">
                <h2 className="ml-auto mr-auto font-[ClashDisplay-Semibold] text-[32px] mb-6 md:mb-4 md:text-[40px] w-fit titleBlueLineLeft">
                    {t("events.in_2024")}
                    </h2>
                    <p className="text-white font-[ClashDisplay-Regular]">{t("events.description_2024")}</p>
                    </div>

                    <div className="flex gap-10 md:gap-5 flex-wrap ml-auto me-auto items-center justify-center w-full md:w-2/3 mt-16">
                        <div className="w-full sm:w-[45%] md:w-5/12 h-[400px] rounded-lg" style={{backgroundImage:`url(${c1})`, backgroundSize:'cover', backgroundPosition:'center'}}></div>
                        <div className="w-full sm:w-[45%] md:w-5/12 h-[400px] rounded-lg" style={{backgroundImage:`url(${c2})`, backgroundSize:'cover', backgroundPosition:'center'}}></div>
                        <div className="w-full sm:w-[45%] md:w-5/12 h-[250px] rounded-lg" style={{backgroundImage:`url(${c3})`, backgroundSize:'cover', backgroundPosition:'center'}}></div>
                        <div className="w-full sm:w-[45%] md:w-5/12 h-[250px] rounded-lg" style={{backgroundImage:`url(${c4})`, backgroundSize:'cover', backgroundPosition:'center'}}></div>
                    </div>
                </div>
        </div>

        <div className="w-full py-10 bg-[#070707] mt-20">
                <div className="max-w-[1280px] ml-auto mr-auto flex justify-center text-center w-4/5 flex-col items-center">
                <h2 className="font-[ClashDisplay-Medium] text-[20px] md:text-[26px] w-2/3">{t("content.title_contact_us")}</h2>
                <button className="mt-10 bg-[#06E7F2] h-fit w-fit p-3 px-14 rounded-xl font-[ClashDisplay-Semibold] hover:bg-transparent hover:text-[#06E7F2]" style={{border:'1px solid #06E7F2'}}>{t("content.button_contact_us")}</button>
                </div>
            </div>
        </div>
    );
}

export default Events;