import React, { useState, useRef } from 'react';
import rightArrow from '../../../images/rightArrow.svg';


function ModalPic(props){

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

    return(
        <>
        <div className={`fixed left-0 top-0 z-10 w-screen h-screen bg-[#000000]/70 ${props.visibleProps ? "block" : "hidden"}`}></div>
        <div className={`border-4 border-[#06E5F1] rounded-md top-1/2 left-1/2 ${props.type == "video" ? "w-3/4" : "w-2/4"} h-3/4 block fixed z-40 ${props.visibleProps ? "block" : "hidden"}`}
              style={{
                transform: "translate(-50%, -50%)",
                backgroundImage: props.type === "pic" ? `url(${props.thumb})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
        
        <button onClick={props.close} className="absolute z-50 rounded-sm right-5 top-5 text-[20px] px-2 bg-[#06E5F1] font-[ClashDisplay-Semibold]">X</button>
        <div className='w-full h-full relative'>
                                    <div onClick={pauseResume} className={`${isPlaying || props.type == "pic" ? "hidden" : "block"} absolute w-full h-full z-10 bg-[#000000]/50 flex justify-center items-center cursor-pointer`}>
                                    <div className="bg-[#06E5F1] w-fit h-fit px-7 py-2 rounded-lg">
                                        <img src={rightArrow} className="w-4 z-30"/>
                                    </div>
                                    </div>
                                    {
                                        props.type == "video" ?
                                    <video
                                               className="w-full h-full object-cover"

                                            controls
                                            ref={videoRef}
                                            onPause={pauseResume}
                                        >
                                            <source src={props.thumb} type="video/mp4" />
                                            Seu navegador não suporta a tag de vídeo.
                                        </video>
                                        : 
                                        <div></div>
                                }
                                </div>
        </div>    

        </>
    );
}

export default ModalPic;