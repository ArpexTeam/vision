import React, { useState, useRef } from 'react';
import rightArrow from '../../../images/rightArrow.svg';


function ModalPic(props){

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);


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
                                
                                    {
                                        props.type == "video" ?
                                        props.thumb
                                        : 
                                        <div></div>
                                }
                                </div>
        </div>    

        </>
    );
}

export default ModalPic;