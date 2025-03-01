import logo from '../../images/logo.png';
import facebookIcon from '../../images/facebookIcon.png';
import instaIcon from '../../images/instaIcon.png';
import whatsIcon from '../../images/whatsIcon.png';
import burguer from '../../images/MenuBurguer.svg';
import { NavLink } from "react-router"
import React, { useRef, useState } from 'react';


function NavBar(){

    const [isExpanded, setExpanded] = useState(false);

    return(
        <div className="w-full bg-black h-24">
            <div className="max-w-[1280px] w-4/5 h-full flex ml-auto mr-auto justify-between items-center">
                <div className='lg:hidden block' onClick={() =>{setExpanded(!isExpanded)}}>
                    <img src={burguer}/>
                </div>
                <div className='h-full'>
                <NavLink to='/'>
                    <img src={logo} className='h-full hover:scale-105 cursor-pointer transition-all'/>
                </NavLink>
                </div>
                <nav className='h-fit hidden lg:block'>
                    <ul className='text-white flex gap-3 lg:gap-6 items-center font-[ClashDisplay-Regular]'>
                        <li><NavLink to='/' className={'hover:text-[#06E5F180]'}>Home</NavLink></li>
                        <li><NavLink to='/servicos' className={'hover:text-[#06E5F180]'}>Services</NavLink></li>
                        <li><NavLink to='/commercial' className={'hover:text-[#06E5F180]'}>Commercial</NavLink></li>
                        <li><NavLink to='/eventos' className={'hover:text-[#06E5F180]'}>Events</NavLink></li>
                        {/* <li><NavLink to='/equipe' className={'hover:text-[#06E5F180]'}>Equipe</NavLink></li> */}
                        <li><NavLink to='/sobre' className={'hover:text-[#06E5F180]'}>Who we are</NavLink></li>
                        <li><NavLink to='/contato' className={'hover:text-[#06E5F180]'}>Contact</NavLink></li>
                    </ul>
                </nav>
                <div className='hidden lg:block'>
                        <ul className='flex gap-3'>
                            <li className='h-6 w-6 hover:rotate-12 transition-all cursor-pointer'><img src={facebookIcon}/></li>
                            <li className='h-6 w-6 hover:rotate-12 transition-all cursor-pointer'>
                            <a href="https://www.instagram.com/visionproductionsco?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'>
                              <img src={instaIcon}/>
                            </a>
                            </li>
                            <a href="https://wa.me/393663013278" target='_blank'>
                            <li className='h-6 w-6 hover:rotate-12 transition-all cursor-pointer'><img src={whatsIcon}/></li>
                            </a>
                        </ul>
                </div>
            </div>
            <div className={`${isExpanded == true ? 'block lg:hidden' : 'hidden'} relative bg-black py-10 z-20 -mt-1`}>
            <nav>
                    <ul className='text-white flex flex-col gap-3 lg:gap-6 items-center font-[ClashDisplay-Regular]'>
                        <li onClick={() =>{setExpanded(!isExpanded)}}><NavLink to='/' className={'hover:text-[#06E5F180]'}>Home</NavLink></li>
                        <li onClick={() =>{setExpanded(!isExpanded)}}><NavLink to='/servicos' className={'hover:text-[#06E5F180]'}>Services</NavLink></li>
                        <li onClick={() =>{setExpanded(!isExpanded)}}><NavLink to='/commercial' className={'hover:text-[#06E5F180]'}>Commercial</NavLink></li>
                        <li onClick={() =>{setExpanded(!isExpanded)}}><NavLink to='/eventos' className={'hover:text-[#06E5F180]'}>Events</NavLink></li>
                        {/* <li><NavLink to='/equipe' className={'hover:text-[#06E5F180]'}>Equipe</NavLink></li> */}
                        <li onClick={() =>{setExpanded(!isExpanded)}}><NavLink to='/sobre' className={'hover:text-[#06E5F180]'}>Who we are</NavLink></li>
                        <li onClick={() =>{setExpanded(!isExpanded)}}><NavLink to='/contato' className={'hover:text-[#06E5F180]'}>Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
            <hr style={{background:'linear-gradient(to left, transparent, #06E5F180, transparent)'}} className='h-1 m-0 border-0 w-full absolute'/>
        </div>
    );
}

export default NavBar;