import './style.css';
import temp6 from '../../images/temp6.png';
import thumb1 from '../../images/thumb1.jpeg';
import thumb2 from '../../images/thumb2.jpeg';
import video1 from '../../images/Toscano Marketing .MP4';
import video2 from '../../images/loopToscano.mp4';
import rightArrow from '../../images/rightArrow.svg';
import React, { useState, useRef } from 'react';


function Services(){
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
        <div className='bg-black w-full py-20 h-auto relative'>
            <div className='max-w-[1280px] w-4/5 mr-auto ml-auto h-auto relative'>
                <h1 className='text-[36px] font-[ClashDisplay-Bold]'>Hard to sell? we are the<br/> solution!</h1>

                <div className='w-full mt-14'>
                    <div className='flex w-10/12 h-[350px] justify-between gap-5 transition-all servicesCard relative ml-auto mr-auto'>
                    <div className='text-left w-4/12'>
                        <h1 className='text-[38px] font-[ClashDisplay-Semibold] titleBlueLine mt-8'>COMMERCIAL</h1>
                        <p className='text-[#CCCCCC]'>Boost your sales with commercials
                            that captivate and deliver results.
                            Let’s create together!
                        </p>
                        <button className='bg-[#06E5F1] px-7 py-3 mt-10 rounded-md font-[ClashDisplay-Medium]'>
                            View more
                        </button>
                    </div>
                    <div className='w-7/12 h-full rounded-2xl'>
                        <div className='w-full h-full relative'>
                            <div onClick={pauseResume} className={`${isPlaying ? "hidden" : "block"} absolute w-full h-full z-10 bg-[#000000]/50 flex justify-center items-center cursor-pointer`}>
                            <div className="bg-[#06E5F1] w-fit h-fit px-7 py-2 rounded-lg -mt-20">
                                <img src={rightArrow} className="w-4"/>
                            </div>
                            </div>
                            <video
                                    width="100%"
                                    height="100%"
                                    controls
                                    ref={videoRef}
                                    onPause={pauseResume}
                                >
                                    <source src={video1} type="video/mp4" />
                                    Seu navegador não suporta a tag de vídeo.
                                </video>
                        </div>
                    </div>
               
                    </div>
                    </div>

                    <h1 className='text-[36px] font-[ClashDisplay-Bold] mt-20'>Elevate your event to the<br/> highest level!</h1>


                    <div className='w-full mt-14'>
                    <div className='flex w-10/12 h-[350px] justify-between gap-5 transition-all servicesCard relative ml-auto mr-auto'>
                    <div className='w-7/12 h-full rounded-2xl'>
                    <div className='w-full h-full relative'>
                            <div onClick={pauseResume2} className={`${isPlaying2 ? "hidden" : "block"} absolute w-full h-full z-10 bg-[#000000]/50 flex justify-center items-center cursor-pointer`}>
                            <div className="bg-[#06E5F1] w-fit h-fit px-7 py-2 rounded-lg -mt-20">
                                <img src={rightArrow} className="w-4"/>
                            </div>
                            </div>
                            <video
                                    width="100%"
                                    height="100%"
                                    controls
                                    ref={videoRef2}
                                    onPause={pauseResume2}
                                >
                                    <source src={video2} type="video/mp4" />
                                    Seu navegador não suporta a tag de vídeo.
                                </video>
                        </div>
                    </div>
                    <div className='text-left w-4/12'>
                        <h1 className='text-[38px] font-[ClashDisplay-Semibold] titleBlueLine mt-8'>EVENTS</h1>
                        <p className='text-[#CCCCCC]'>
                            Transform your event with dynamic
                            visuals and storytelling
                            that captivate your audience.
                        </p>
                        <button className='bg-[#06E5F1] px-7 py-3 mt-10 rounded-md font-[ClashDisplay-Medium]'>
                            View more
                        </button>
                    </div>
                    </div>
                    </div>

            </div>
        </div>
    );
}

export default Services;