import logoFooter from '../../images/logo.png';
import pinIcon from '../../images/pinIcon.svg';
import whatsIcon from '../../images/whatsIcon.png';
import faceIcon from '../../images/facebookIcon.png';
import instaIcon from '../../images/instaIcon.png';
import emailIcon from '../../images/emailIcon.svg';
import { NavLink } from "react-router"


function Footer(){
    return(
        <div className="bg-[#0C0C0C]">
            <hr style={{background:'linear-gradient(to left, #000000, #06E7F2, #BF4AFC, #EB700A, #000000)'}} className='h-1 m-0 border-0 w-full absolute'/>

            <div className="gap-10 lg:gap-0 flex justify-around max-w-[1280px] ml-auto mr-auto w-4/5 py-20 text-white font-[ClashDisplay-Regular] flex-wrap">
            <div className='w-full sm:w-5/12 lg:w-48 h-auto text-left'>
                <NavLink to='/'>
                <img src={logoFooter} className='hover:scale-105 cursor-pointer transition-all'/>
                </NavLink>
                <p className='text-[16px] flex mt-1 justify-center sm:justify-start'><img src={pinIcon} className='h-fit mr-2'/><a href='https://maps.app.goo.gl/AdLoFoHzJTe1EYJ49' target='_blank' className={'hover:text-[#06E5F180]'}>Via Teodoro Lovati 20 Pavia, PV 27100</a></p>
            </div>
            <div className='text-center sm:text-left w-full sm:w-5/12 lg:w-auto'>
                <h3 className="font-[ClashDisplay-Bold]">Serviços</h3>

                <ul className='flex flex-col gap-2 mt-6'>
                    <li>Produção de vídeo</li>
                    <li>Fotografia</li>
                    <li>Motion Design</li>
                    <li>Animação Gráfica</li>
                    <li>Cobertura de Eventos</li>
                </ul>
            </div>
            <div className='text-center sm:text-left w-full sm:w-auto'>
                <h3 className="font-[ClashDisplay-Bold]">Institucional</h3>

                <ul className='flex flex-col gap-2 mt-6'>
                    <li><NavLink to='/' className={'hover:text-[#06E5F180]'}>Home</NavLink></li>
                    <li><NavLink to='/servicos' className={'hover:text-[#06E5F180]'}>Serviços</NavLink></li>
                    <li><NavLink to='/equipe' className={'hover:text-[#06E5F180]'}>Equipe</NavLink></li>
                    <li className={'hover:text-[#06E5F180]'}>Quem somos</li>
                    <li><NavLink to='/contato' className={'hover:text-[#06E5F180]'}>Contato</NavLink></li>
                </ul>
            </div>
            <div className='w-full sm:w-auto'>
                <h3 className="font-[ClashDisplay-Bold]">Siga a Vision Productions</h3>

                <div className='flex gap-2 mt-6 justify-center sm:justify-start'>
                <img src={emailIcon} className='w-6 h-auto hover:rotate-12 transition-all cursor-pointer'/>
                <img src={faceIcon} className='w-6 h-auto hover:rotate-12 transition-all cursor-pointer'/>
                <a href="https://www.instagram.com/visionproductionsco?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'>
                <img src={instaIcon} className='w-6 h-auto hover:rotate-12 transition-all cursor-pointer'/>
                </a>
                <a href='https://wa.me/+393663013278' target='_blank'>
                <img src={whatsIcon} className='w-6 h-auto hover:rotate-12 transition-all cursor-pointer'/>
                </a>
                </div>
            </div>
            </div>
            <div className='pb-5 w-full text-center text-white font-extralight text-[12px] font-[ClashDisplay-ExtraLight]'>
            Copyright © 2024 Vision Productions. All rights reserved 
            </div>
        </div>
    );
}

export default Footer;