import logo from '../../images/logo.png';
import facebookIcon from '../../images/facebookIcon.png';
import instaIcon from '../../images/instaIcon.png';
import whatsIcon from '../../images/whatsIcon.png';

function NavBar(){
    return(
        <div className="w-full bg-black h-24">
            <div className="max-w-[1280px] w-4/5 h-full flex ml-auto mr-auto justify-around items-center">
                <div className='h-full'>
                    <img src={logo} className='h-full'/>
                </div>
                <nav className='h-fit'>
                    <ul className='text-white flex gap-6 items-center font-[ClashDisplay-Regular]'>
                        <li>Home</li>
                        <li>Serviços</li>
                        <li>Eventos</li>
                        <li>Equipe</li>
                        <li>Quem Somos</li>
                        <li>Contato</li>
                    </ul>
                </nav>
                <div>
                        <ul className='flex gap-3'>
                            <li className='h-6 w-6'><img src={facebookIcon}/></li>
                            <li className='h-6 w-6'><img src={instaIcon}/></li>
                            <li className='h-6 w-6'><img src={whatsIcon}/></li>
                        </ul>
                </div>
            </div>
            <hr style={{background:'linear-gradient(to left, transparent, #06E5F180, transparent)'}} className='h-1 m-0 border-0 w-full absolute'/>
        </div>
    );
}

export default NavBar;