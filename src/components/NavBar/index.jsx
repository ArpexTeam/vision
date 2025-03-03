import { useState } from 'react';
import logo from '../../images/logo.png';
import facebookIcon from '../../images/facebookIcon.png';
import instaIcon from '../../images/instaIcon.png';
import whatsIcon from '../../images/whatsIcon.png';
import burguer from '../../images/MenuBurguer.svg';
import { NavLink } from "react-router";
import downArrow from "../../images/down.png";
import ItalyFlag from "../../images/italy_flags_flag_8964.png";
import UnitedStatesFlag from "../../images/UnitedStates-Flag.png";

function NavBar() {
    const [isExpanded, setExpanded] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("EN");

    const toggleLanguageMenu = () => {
        setIsLanguageOpen(!isLanguageOpen);
    };

    const selectLanguage = (language) => {
        setSelectedLanguage(language);
        setIsLanguageOpen(false);
    };

    return (
        <div className="w-full bg-black h-16 xl-h16 relative">
            <div className="max-w-[1280px] w-4/5 h-full flex ml-auto mr-auto justify-between items-center">
                 <div className='lg:hidden block' onClick={() =>{setExpanded(!isExpanded)}}>
                    <img src={burguer}/>

                </div>
                <div className='h-full'>
                    <NavLink to='/'>
                        <img src={logo} className='h-full hover:scale-105 cursor-pointer transition-all' />
                    </NavLink>
                </div>
                <nav className='h-fit hidden lg:block'>
                    <ul className='text-white flex gap-3 lg:gap-6 items-center font-[ClashDisplay-Regular]'>
                        <li><NavLink to='/' className={'hover:text-[#06E5F180]'}>Home</NavLink></li>
                        <li><NavLink to='/servicos' className={'hover:text-[#06E5F180]'}>Services</NavLink></li>
                        <li><NavLink to='/commercial' className={'hover:text-[#06E5F180]'}>Commercial</NavLink></li>
                        <li><NavLink to='/eventos' className={'hover:text-[#06E5F180]'}>Events</NavLink></li>
                        <li><NavLink to='/sobre' className={'hover:text-[#06E5F180]'}>Who we are</NavLink></li>
                        <li><NavLink to='/contato' className={'hover:text-[#06E5F180]'}>Contact</NavLink></li>
                    </ul>
                </nav>
                <div className='hidden md:flex items-center gap-4 relative'>
                    <ul className='flex gap-3'>
                        <li className='h-6 w-6 hover:rotate-12 transition-all cursor-pointer'><img src={facebookIcon} /></li>
                        <li className='h-6 w-6 hover:rotate-12 transition-all cursor-pointer'>
                            <a href="https://www.instagram.com/visionproductionsco" target='_blank'>
                                <img src={instaIcon} />
                            </a>
                        </li>
                        <a href='https://wa.me/+393663013278' target='_blank'>
                            <li className='h-6 w-6 hover:rotate-12 transition-all cursor-pointer'><img src={whatsIcon} /></li>
                        </a>
                    </ul>
                    <div className="relative">
                        <button 
                            onClick={toggleLanguageMenu} 
                            className="text-white bg-[#000] px-3 py-1 rounded-md flex items-center gap-2 cursor-pointer hover:bg-gray-800"
                        >
                            {selectedLanguage} <span><img src={downArrow} alt="ArrowDown" className='w-5 h-5'/></span>
                        </button>
                        {isLanguageOpen && (
                            <div className="absolute right-0 mt-2 w-28 bg-[#080808] text-white rounded-md shadow-lg z-50">
                                <ul className="py-2 text-center">
                                    <li 
                                        className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center gap-2"
                                        onClick={() => selectLanguage("EN")}
                                    >
                                        <img src={UnitedStatesFlag} alt="United States Flag" className='w-5 h-3' />English
                                    </li>
                                    <li 
                                        className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center gap-2"
                                        onClick={() => selectLanguage("IT")}
                                    >
                                        <img src={ItalyFlag} alt="Italy flag" className='w-5 h-5'/>Italian
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
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
            <hr style={{background:'linear-gradient(to left, #000000, #06E7F2, #000000)'}} className='h-0.5 m-0 border-0 w-full absolute bottom-0'/>

        </div>
    );
}

export default NavBar;