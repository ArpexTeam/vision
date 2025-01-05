import back from '../../images/Background.jpg';
import './style.css';

function Robot(){
    return(
        <div style={{backgroundImage:`url(${back})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'0 30%'}} className='bg-black w-full py-20 h-[700px] relative'>
            <div className='max-w-[1280px] w-4/5 mr-auto ml-auto h-full relative'>      
                <div className='flex justify-center content-center w-full h-full flex-wrap text-white'>
                    <div className='w-full h-fit'>
                        <button className='font-[ClashDisplay-Semibold] text-[18px] mr-auto ml-auto border w-52 h-20 bg-gradient-to-b from-[#06E5F108]/10 to-[#00000026]/15 rounded-md'>
                            Criação de logo
                        </button>
                    </div>
                    <div className='w-3/12 flex flex-col gap-5'>
                    <button className='font-[ClashDisplay-Semibold] text-[18px] ml-auto border w-52 h-20 bg-gradient-to-r from-[#06E5F108]/10 to-[#00000026]/15 rounded-md'>
                            Criação de logo
                        </button>
                        <button className='font-[ClashDisplay-Semibold] text-[18px] mr-auto ml-auto border w-52 h-16 bg-gradient-to-r from-[#06E5F108]/10 to-[#00000026]/15 rounded-md'>
                            Produção de vídeo
                        </button>
                        <button className='font-[ClashDisplay-Semibold] text-[18px] ml-auto border w-52 h-20 bg-gradient-to-r from-[#06E5F108]/10 to-[#00000026]/15 rounded-md'>
                            Criação de logo
                        </button>
                    </div>
                    <div className='w-1/3'></div>
                    <div className='w-3/12 flex flex-col gap-5'>
                    <button className='font-[ClashDisplay-Semibold] text-[18px] mr-auto border w-52 h-20 bg-gradient-to-l from-[#06E5F108]/10 to-[#00000026]/15 rounded-md'>
                            Eventos
                        </button>
                        <button className='font-[ClashDisplay-Semibold] text-[18px] mr-auto ml-auto border w-52 h-16 bg-gradient-to-l from-[#06E5F108]/10 to-[#00000026]/15 rounded-md'>
                            Criação de logo
                        </button>
                        <button className='font-[ClashDisplay-Semibold] text-[18px] mr-auto border w-52 h-20 bg-gradient-to-l from-[#06E5F108]/10 to-[#00000026]/15 rounded-md'>
                            Criação de logo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Robot;