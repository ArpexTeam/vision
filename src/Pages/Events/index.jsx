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
function Events(){

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const pauseResume = () =>{
        setIsPlaying(!isPlaying);  // Altera o estado para "tocar" o vídeo

        console.log(isPlaying);

        if(isPlaying){
        videoRef.current.pause();
        }else{
        videoRef.current.play();
        }
    }

    const videoRef2 = useRef(null);
    const [isPlaying2, setIsPlaying2] = useState(false);

    const pauseResume2 = () =>{
        setIsPlaying2(!isPlaying2);  // Altera o estado para "tocar" o vídeo

        console.log(isPlaying);

        if(isPlaying2){
        videoRef2.current.pause();
        }else{
        videoRef2.current.play();
        }
    }

    const videoRef3 = useRef(null);
    const [isPlaying3, setIsPlaying3] = useState(false);

    const pauseResume3 = () =>{
        setIsPlaying3(!isPlaying3);  // Altera o estado para "tocar" o vídeo

        console.log(isPlaying);

        if(isPlaying3){
        videoRef3.current.pause();
        }else{
        videoRef3.current.play();
        }
    }

    const videoRef4 = useRef(null);
    const [isPlaying4, setIsPlaying4] = useState(false);

    const pauseResume4 = () =>{
        setIsPlaying4(!isPlaying4);  // Altera o estado para "tocar" o vídeo

        console.log(isPlaying);

        if(isPlaying4){
        videoRef4.current.pause();
        }else{
        videoRef4.current.play();
        }
    }

    return(
        <div className='bg-black w-full pt-10 h-auto relative'>
            <div className='max-w-[1280px] w-4/5 mr-auto ml-auto h-auto relative'>  
                <div className='items-center justify-center flex flex-col md:flex-row gap-16 md:gap-32'>
                        <div className='text-center'>
                            <h1 className="font-[ClashDisplay-SemiBold] text-[#dadada] text-[28px] md:text-[40px]/10">ETERNALIZE YOUR EVENT <div /> WITH THE BEST COVERAGE</h1>
                        </div>
                        <div>
                            <img src={claquete} className='w-[260px] ml-auto'/>
                        </div>
                        </div>
                        
                <div className="gap-12 mt-20 md:mt-32 flex md:flex-row flex-col w-full text-white text-left ml-auto mr-auto">
                    <div className="mt-8 md:w-6/12 xl:w-5/12 md:text-left text-center bg-gradient-to-l pl-6 pb-16 px-10 rounded-xl">
                    <h1 className="font-[ClashDisplay-Semibold] text-[28px] md:text-[36px]/10 titleBlueLine mb-8">
                    VARANO INTERNATIONAL CIRCUIT
                    </h1>
                        <p className='mt-10 font-[ClashDisplay-Regular] '>We capture the adrenaline and excitement of the most thrilling circuits, like the Varano International Circuit, with a video production that turns every moment into an unforgettable visual experience. No matter the location or event, we bring this same energy to you.</p>
                    </div>
                    <div className='w-full md:w-7/12 h-[300px] rounded-3xl relative'>
                    <div className='w-full bg-[#000000]/20 h-full relative'>
                                    <div onClick={pauseResume} className={`${isPlaying ? "hidden" : "block"} absolute w-full h-full z-10 bg-[#000000]/50 flex justify-center items-center cursor-pointer`}>
                                    <div className="bg-[#06E5F1] w-fit h-fit px-7 py-2 mb-7 md:mb-0 rounded-lg">
                                        <img src={rightArrow} className="w-4 z-30"/>
                                    </div>
                                    </div>
                              
                                    <video
                                               className="w-full h-full object-cover rounded-lg"

                                            controls
                                            ref={videoRef}
                                            onPause={pauseResume}
                                        >
                                            <source src={null} type="video/mp4" />
                                            Seu navegador não suporta a tag de vídeo.
                                        </video>
                                   
                                
                                </div>
                    </div>
                </div>

                <div className="gap-12 mt-36 flex md:flex-row flex-col w-full text-white text-left ml-auto mr-auto">
                <div className='w-full order-2 md:order-1 md:w-7/12 h-[300px] rounded-3xl relative' style={{backgroundImage:`url(${ev2})`, backgroundSize:'cover', backgroundPosition:'center'}}>
                <div className='w-full bg-[#000000]/20 h-full relative'>
                                    <div onClick={pauseResume} className={`${isPlaying ? "hidden" : "block"} absolute w-full h-full z-10 bg-[#000000]/50 flex justify-center items-center cursor-pointer`}>
                                    <div className="bg-[#06E5F1] w-fit h-fit px-7 py-2 mb-7 md:mb-0 rounded-lg">
                                        <img src={rightArrow} className="w-4 z-30"/>
                                    </div>
                                    </div>
                              
                                    <video
                                               className="w-full h-full object-cover rounded-lg"

                                            controls
                                            ref={videoRef}
                                            onPause={pauseResume}
                                        >
                                            <source src={null} type="video/mp4" />
                                            Seu navegador não suporta a tag de vídeo.
                                        </video>
                                   
                                
                                </div>
                    </div>
                   
                    <div className="mt-8 order-1 md:order-2 w-full md:text-left text-center md:w-5/12 bg-gradient-to-l pl-6 pb-16 px-10 rounded-xl">
                    <h1 className="font-[ClashDisplay-Semibold] text-[28px] md:text-[36px]/10 titleBlueLine">
                    CATTOLICA <br /> STADIUM
                    </h1>
                        <p className='mt-10 font-[ClashDisplay-Regular]'>We capture the intense emotion of football, with the vibrant energy of major stadiums like Cattolica Stadium. Our video production translates every goal, every cheer, and every unforgettable moment into images that make the heart race. Regardless of your event, we bring this passion and cinematic quality to create a unique experience, wherever you are.</p>
                    </div>
                    
                </div>

                <div className="gap-12 mt-48 flex md:flex-row flex-col w-full text-white text-left ml-auto mr-auto">
                    <div className="mt-8 text-center md:text-left w-full md:w-5/12 bg-gradient-to-l pl-6 pb-16 px-10 rounded-xl">
                    <h1 className="font-[ClashDisplay-Semibold] text-[28px] md:text-[40px]/10 titleBlueLine mb-8">
                    CUSTOM EVENT - MISANO CIRCUIT
                    </h1>
                        <p className='mt-10 font-[ClashDisplay-Regular]'>With the experience of covering custom events at the Misano Circuit, where we had the honor of working with the Tecnosports team and the Italian Legend Car 850cc champion, Filippo Majrani, we create video productions that capture every detail and the emotion of the moment. Our flexible and dedicated approach ensures that, no matter your event or location, we can convey all the intensity and personalization it deserves.</p>
                    </div>
                    <div className='w-full md:w-7/12 h-[300px] rounded-xl relative mt-5 overflow-hidden' style={{backgroundImage:`url(${ev3})`, backgroundSize:'cover', backgroundPosition:'center'}}>
                    <div className='w-full h-full relative bg-[#000]/20'>
                                    <div onClick={pauseResume3} className={`${isPlaying3 ? "hidden" : "block"} absolute w-full h-full z-10 bg-[#000000]/50 flex justify-center items-center cursor-pointer`}>
                                    <div className="bg-[#06E5F1] w-fit h-fit px-7 py-2 mb-10 md:mb-0 rounded-md">
                                        <img src={rightArrow} className="w-4 z-30"/>
                                    </div>
                                    </div>
                              
                                    <video
                                               className="w-full h-full object-cover rounded-lg"

                                            controls
                                            ref={videoRef3}
                                            onPause={pauseResume3}
                                        >
                                            <source src={null} type="video/mp4" />
                                            Seu navegador não suporta a tag de vídeo.
                                        </video>
                                   
                                
                                </div>
                    </div>
                </div>

                <div className="gap-12 mt-36 flex md:flex-row flex-col w-full text-white text-left ml-auto mr-auto">
                <div className='w-full order-2 md:order-1 md:w-7/12 h-[300px] rounded-3xl relative' style={{backgroundImage:`url(${ev4})`, backgroundSize:'cover', backgroundPosition:'center'}}>
                <div className='w-full h-full relative bg-[#000000]/20'>
                                    <div onClick={pauseResume4} className={`${isPlaying4 ? "hidden" : "block"} absolute w-full h-full z-10 bg-[#000000]/50 flex justify-center items-center cursor-pointer`}>
                                    <div className="bg-[#06E5F1] w-fit h-fit px-7 py-2 mb-10 md:mb-0 rounded-lg">
                                        <img src={rightArrow} className="w-4 z-30"/>
                                    </div>
                                    </div>
                              
                                    <video
                                               className="w-full h-full object-cover rounded-lg"

                                            controls
                                            ref={videoRef4}
                                            onPause={pauseResume4}
                                        >
                                            <source src={null} type="video/mp4" />
                                            Seu navegador não suporta a tag de vídeo.
                                        </video>
                                   
                                
                                </div>
                    </div>
                   
                    <div className="mt-8 text-center order-1 md:order-2 md:text-left w-full md:w-5/12 bg-gradient-to-l pl-6 pb-16 px-10 rounded-xl">
                    <h1 className="font-[ClashDisplay-Semibold] text-[28px] md:text-[40px]/10 titleBlueLine">
                    INDOOR EVENTS
                    </h1>
                        <p className='mt-10 font-[ClashDisplay-Regular]'>We transform any indoor space into a cinematic setting, capturing the essence and energy of your event with the same dedication we apply to large outdoor productions. From conventions to presentations, our team brings production quality and flexibility to create an unforgettable visual experience, wherever your event takes place.</p>
                    </div>
                    
                </div>

                <div className="mt-28">
                    <div className="w-full md:w-1/2 ml-auto mr-auto">
                <h1 className="ml-auto mr-auto font-[ClashDisplay-Semibold] text-[32px] mb-6 md:mb-0 md:text-[40px] w-fit titleBlueLineLeft">
                    IN 2024
                    </h1>
                    <p className="text-white font-[ClashDisplay-Regular]">We covered 5 Italian circuits, including 3 international motorsport events, as well as a football stadium event and the achievements of 2 car racing champions: Andre Carpezano and Filippo Majrani.</p>
                    </div>

                    <div className="flex gap-10 md:gap-5 flex-wrap ml-auto me-auto items-center justify-center w-full md:w-2/3 mt-16">
                        <div className="w-full sm:w-[45%] md:w-5/12 h-[250px] rounded-lg" style={{backgroundImage:`url(${c1})`, backgroundSize:'cover', backgroundPosition:'center'}}></div>
                        <div className="w-full sm:w-[45%] md:w-5/12 h-[250px] rounded-lg" style={{backgroundImage:`url(${c2})`, backgroundSize:'cover', backgroundPosition:'center'}}></div>
                        <div className="w-full sm:w-[45%] md:w-5/12 h-[250px] rounded-lg" style={{backgroundImage:`url(${c3})`, backgroundSize:'cover', backgroundPosition:'center'}}></div>
                        <div className="w-full sm:w-[45%] md:w-5/12 h-[250px] rounded-lg" style={{backgroundImage:`url(${c4})`, backgroundSize:'cover', backgroundPosition:'center'}}></div>
                    </div>
                </div>
        </div>

        <div className="w-full py-20 bg-[#070707] mt-36">
                <div className="max-w-[1280px] ml-auto mr-auto flex justify-center text-center w-4/5 flex-col items-center">
                <h1 className="font-[ClashDisplay-Medium] text-[20px] md:text-[26px] w-2/3">Speak with one of our specialists and receive a personalized quote right now</h1>
                <button className="mt-10 bg-[#06E7F2] h-fit w-fit p-3 px-14 rounded-xl font-[ClashDisplay-Semibold] hover:bg-transparent hover:text-[#06E7F2]" style={{border:'1px solid #06E7F2'}}>Contact us</button>
                </div>
            </div>
        </div>
    );
}

export default Events;