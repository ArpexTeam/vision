import './style.css';
import temp6 from '../../images/temp6.png';
import thumb1 from '../../images/thumb1.jpeg';
import thumb2 from '../../images/thumb2.jpeg';
// import video1 from '../../images/Toscano Marketing .MP4';
// import video2 from '../../images/loopToscano.mp4';
import rightArrow from '../../images/rightArrow.svg';
import React, { useState, useRef } from 'react';
import { useTranslation } from "react-i18next";
import "../../lib/i18n";


function Services(){
    const { t } = useTranslation();
    const videoRef = useRef(null);
    const videoRef2 = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPlaying2, setIsPlaying2] = useState(false);


    const pauseResume = () =>{
        setIsPlaying(!isPlaying);  // Altera o estado para "tocar" o vídeo

        console.log(isPlaying);

        if(isPlaying){
        videoRef.current.pause();
        }else{
        videoRef.current.play();
        }
    }

    const pauseResume2 = () =>{
        setIsPlaying2(!isPlaying2);  // Altera o estado para "tocar" o vídeo

        if(isPlaying2){
        videoRef2.current.pause();
        }else{
        videoRef2.current.play();
        }
    }

    return(
        <div className='bg-black w-full md:py-20 h-auto relative'>
            <div className='max-w-[1280px] w-4/5 mr-auto ml-auto h-auto relative'>
                <h2 className='text-[28px] md:text-[40px] font-[ClashDisplay-Semibold] md:mb-20 whitespace-pre-line'>{t("content.title_hard")}</h2>

                <div className='w-full mt-14 mb-20 lg:mb-0'>
                    <div className='flex flex-col lg:flex-row w-10/12 h-[550px] lg:h-[350px] items-center lg:items-start lg:justify-between gap-2 xl:gap-5 transition-all servicesCard relative ml-auto mr-auto'>
                    <div className='text-center lg:text-left w-10/12 xl:w-4/12 mb-10 lg:mb-0'>
                        <h2 className='text-[24px] md:text-[38px] font-[ClashDisplay-Semibold] titleBlueLine mt-8 mb-4'>{t("content.title_commercial")}</h2>
                        <p className='text-[#A5A5A5] font-[ClashDisplay-medium]'>
                            {t("content.description_commercial")}
                        </p>
                        <button className='bg-[#06E5F1] hover:bg-transparent hover:text-[#06E5F1] hover:border-2 hover:border-[#06E5F1] px-7 py-3 mt-10 rounded-md font-[ClashDisplay-Medium] transition-all duration-150 ease-in-out' style={{border:'1px solid #06E7F2'}}>
                         {t("content.button_commercial")}
                        </button>
                    </div>
                    <div className='w-12/12 xl:w-7/12 h-full rounded-2xl'>
                        <div className='w-full h-full relative'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/uwORyxcoWWU?si=tg0Iw7VOCHUJcvzh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                        </div>
                    </div>
               
                    </div>
                    </div>

                    <h2 className='text-[28px] md:text-[40px] font-[ClashDisplay-Semibold] mb-16 md:mt-20 md:mb-20 whitespace-pre-line'>{t("content.title_elevate")}</h2>


                    <div className='w-full mt-14'>

                    <div className='flex flex-col lg:flex-row w-10/12 h-[550px] lg:h-[350px] items-center lg:items-start lg:justify-between gap-2 xl:gap-5 transition-all servicesCard relative ml-auto mr-auto'>
                    <div className='w-12/12 xl:w-7/12 h-full rounded-2xl'>
                    <div className='w-full h-full relative'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/bvX_fl83Oh0?si=a7-97ynGhOnNw18G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className='text-center lg:text-left w-10/12 box-border block xl:w-4/12 mb-10 lg:mb-0 '>
                        <h2 className='text-[24px] md:text-[38px] font-[ClashDisplay-Semibold] titleBlueLine mt-8 mb-4'>{t("content.title_events")}</h2>
                        <p className='text-[#A5A5A5] font-[ClashDisplay-medium]'> 
                            {t("content.description_events")}
                        </p>
                        <button className='bg-[#06E5F1] hover:bg-transparent hover:text-[#06E5F1] hover:border-2 hover:border-[#06E5F1] px-7 py-3 mt-10 mb-10 rounded-md font-[ClashDisplay-Medium] transition-all duration-150 ease-in-out' style={{border:'1px solid #06E7F2'}}>
                        {t("content.button_events")}
                        </button>
                    </div>
                    </div>
                    </div>

            </div>
        </div>
    );
}

export default Services;