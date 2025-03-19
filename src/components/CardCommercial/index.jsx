import ModalPic from "../Modal/ModalPic";
import React, { useRef, useState } from 'react';

import { useTranslation } from "react-i18next";
import "../../lib/i18n";


function CardCommercial(props){
    const { t } = useTranslation();
    const openClose = () =>{
        setVisible(!visible)
    }

    const [visible, setVisible] = useState(false);
    return(
        
        <div className={`${props.type == 'large' ? 'h-56 w-10/12 sm:w-[45%] md:w-[31%]' : 'h-[280px] w-10/12 sm:w-[45%] md:w-[30%] lg:w-[25%]'} bg-gray-700 mt-6`} style={{backgroundImage:`url(${props.thumb})`, backgroundSize:'cover', backgroundPosition:'center'}}>
            <ModalPic type={props.typeModal} close={openClose} thumb={props.video} visibleProps={visible}/>

            <button onClick={openClose} style={{border:'1px solid #06E7F2'}} className='hover:bg-transparent hover:text-[#06E7F2] font-[ClashDisplay-Medium] ml-auto mr-auto bg-[#06E5F1] relative -bottom-[95%] px-4 py-1 rounded-md'>{t("content.button_commercial")}</button>
        </div>
        
    );
}

export default CardCommercial;