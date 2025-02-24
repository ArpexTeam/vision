import ModalPic from "../Modal/ModalPic";
import React, { useRef, useState } from 'react';


function CardCommercial(props){

    const openClose = () =>{
        setVisible(!visible)
    }

    const [visible, setVisible] = useState(false);
    return(
        
        <div className={`${props.type == 'large' ? 'h-56 w-[31%]' : 'h-[350px] w-[25%]'} bg-gray-700 mt-6`} style={{backgroundImage:`url(${props.thumb})`, backgroundSize:'cover', backgroundPosition:'center'}}>
            <ModalPic type={props.typeModal} close={openClose} thumb={props.video} visibleProps={visible}/>

            <button onClick={openClose} style={{border:'1px solid #06E7F2'}} className='hover:bg-transparent hover:text-[#06E7F2] font-[ClashDisplay-Medium] ml-auto mr-auto bg-[#06E5F1] relative -bottom-[95%] px-8 py-2 rounded-md'>View more</button>
        </div>
        
    );
}

export default CardCommercial;