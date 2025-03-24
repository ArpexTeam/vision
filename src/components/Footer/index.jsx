import logoFooter from '../../images/logo.png';
import pinIcon from '../../images/pinIcon.svg';
import whatsIcon from '../../images/whatsIcon.png';
import faceIcon from '../../images/facebookIcon.png';
import instaIcon from '../../images/instaIcon.png';
import emailIcon from '../../images/emailIcon.svg';
import { NavLink } from "react-router"

import { useTranslation } from "react-i18next";
import "../../lib/i18n";
import Services from '../Services';


function Footer(){

    const { t } = useTranslation();

    return(
        <div className="bg-[#0C0C0C]">
            <hr style={{background:'linear-gradient(to left, #000000, #06E7F2, #BF4AFC, #EB700A, #000000)'}} className='h-1 m-0 border-0 w-full absolute'/>

            <div className="gap-5 sm:gap-10 lg:gap-0 flex justify-around max-w-[1280px] ml-auto mr-auto w-4/5 py-10 text-white font-[ClashDisplay-Regular] flex-wrap">
            <div className='w-full sm:w-5/12 lg:w-48 h-auto text-left'>
                <NavLink className="flex items-center justify-center" to='/'>
                <img src={logoFooter} className='hover:scale-105 cursor-pointer transition-all w-48'/>
                </NavLink>
                <p className='text-[16px] flex mt-1 justify-center sm:justify-start'><img src={pinIcon} className='h-fit mr-2'/><a 
                href='https://maps.app.goo.gl/oRTw2aDyya7CxYzw7' target='_blank' className={'hover:text-[#06E5F180]'}>Milão - Itália</a></p>
            </div>
            <div className='text-center sm:text-left w-full sm:w-5/12 lg:w-auto'>
                <h3 className="font-[ClashDisplay-Bold]">{t("services.ft_services")}</h3>


                <ul className='flex flex-col gap-1 sm:gap-2 mt-1 sm:mt-6 '>
                    <li><NavLink to='/servicos#videoProduction' className={'hover:text-[#06E5F180] cursor-pointer'}>{t("services.video_production")}</NavLink></li>
                    <li><NavLink to='/servicos#photography' className={'hover:text-[#06E5F180] cursor-pointer'}>{t("services.motion_design")}</NavLink></li>
                    <li><NavLink to='/servicos#motion' className={'hover:text-[#06E5F180] cursor-pointer'}>{t('services.cgi_3d')}</NavLink></li>
                    <li><NavLink to='/servicos#graphic' className={'hover:text-[#06E5F180] cursor-pointer'}>{t("services.3d_modeling")}</NavLink></li>
                    <li><NavLink to='/servicos#event' className={'hover:text-[#06E5F180] cursor-pointer'}>{t("services.3d_animation")}</NavLink></li>
                    <li><NavLink to='/servicos' className={'hover:text-[#06E5F180] cursor-pointer'}>{t("services.graphic_animation")}</NavLink></li>
                    <li><NavLink to='/servicos' className={'hover:text-[#06E5F180] cursor-pointer'}>{t("services.website_creation")}</NavLink></li>
                    
                    
                </ul>
            </div>
            <div className='text-center sm:text-left w-full sm:w-auto'>
                <h3 className="font-[ClashDisplay-Bold]">{t("services.institutional")}</h3>

                <ul className='flex flex-col gap-1 sm:gap-2 mt-1 sm:mt-6'>
                    <li><NavLink to='/' className={'hover:text-[#06E5F180]'}>{t('navbar.home')}</NavLink></li>
                    <li><NavLink to='/servicos' className={'hover:text-[#06E5F180]'}>{t('navbar.services')}</NavLink></li>
                    <li><NavLink to='/commercial' className={'hover:text-[#06E5F180]'}>{t('navbar.commercial')}</NavLink></li>
                    <li><NavLink to='/eventos' className={'hover:text-[#06E5F180]'}>{t('navbar.events')}</NavLink></li>
                    <li><NavLink to='/sobre' className={'hover:text-[#06E5F180]'}>{t('navbar.who we are')}</NavLink></li>
                    <li><NavLink to='/contato' className={'hover:text-[#06E5F180]'}>{t('navbar.contact')}</NavLink></li>
                </ul>
            </div>
            <div className='w-full sm:w-auto'>
                <h3 className="font-[ClashDisplay-Bold]">{t("services.follow_vision_productions")}</h3>

                <div className='flex gap-2 mt-6 justify-center sm:justify-start'>
                <img src={emailIcon} className='w-6 h-auto hover:rotate-12 transition-all cursor-pointer'/>
                <img src={faceIcon} className='w-6 h-auto hover:rotate-12 transition-all cursor-pointer'/>
                <a href="https://www.instagram.com/visionproductionsco?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'>
                <img src={instaIcon} className='w-6 h-auto hover:rotate-12 transition-all cursor-pointer'/>
                </a>
                <a href="https://wa.me/393663013278" target='_blank'>
                <img src={whatsIcon} className='w-6 h-auto hover:rotate-12 transition-all cursor-pointer'/>
                </a>
                </div>
            </div>
            </div>
            <div className='pb-5 w-full text-center text-white font-extralight text-[12px] font-[ClashDisplay-ExtraLight] mt-4 md:mt-4'>
            Copyright © 2024 Vision Productions. All rights reserved 
            <br/>
            Developed by <a href="https://www.instagram.com/arpextechnology/profilecard/?igsh=MW1pd25wcm52MWZwMw==" target='_blank' className='text-[#00CF77] font-[ClashDisplay-Regular]'>ArpexTech</a>
            </div>
        </div>
    );
}

export default Footer;