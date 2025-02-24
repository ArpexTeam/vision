import back from '../../images/Background.jpg';
import './style.css';

function Robot(){
    return(
        <div style={{backgroundImage:`url(${back})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'0 30%'}} className='bg-black w-full py-20 h-[700px] relative'>
            <div className='max-w-[1280px] w-4/5 mr-auto ml-auto h-full relative'>      
                <div className='flex justify-center content-center w-full h-full flex-wrap text-white'>
                    <h1 className="mb-20 font-[ClashDisplay-Bold] text-[45px]">Our Services</h1>
                    <div className='w-full h-fit'>
                        <div className="w-fit h-fit p-1 mr-auto ml-auto gradientDiv">
                        <button className='font-[ClashDisplay-Medium] text-[20px] mr-auto ml-auto border w-52 h-20 bg-gradient-to-b from-[#06E5F1]/10 to-[#000000]/15 rounded-xl'>
                            CGI 3D
                        </button>
                        </div>
                    </div>
                    <div className='w-3/12 flex flex-col gap-5'>
                    <button className='font-[ClashDisplay-Medium] text-[20px] ml-auto border w-52 h-20 bg-gradient-to-r from-[#06E5F108]/10 to-[#00000026]/15 rounded-md'>
                        3D Modeling
                        </button>
                        <button className='font-[ClashDisplay-Medium] text-[20px] mr-auto ml-auto border w-56 h-20 bg-gradient-to-r from-[#06E5F108]/10 to-[#00000026]/15 rounded-md'>
                        Website creation and editing
                        </button>
                        <button className='font-[ClashDisplay-Medium] text-[20px] ml-auto border w-52 h-20 bg-gradient-to-r from-[#06E5F108]/10 to-[#00000026]/15 rounded-md'>
                        Graphic Animation
                        </button>
                    </div>
                    <div className='w-1/3'></div>
                    <div className='w-3/12 flex flex-col gap-5'>
                    <button className='font-[ClashDisplay-Medium] text-[20px] mr-auto border w-52 h-20 bg-gradient-to-l from-[#06E5F108]/10 to-[#00000026]/15 rounded-md'>
                         3D Animation
                        </button>
                        <button className='font-[ClashDisplay-Medium] text-[20px] mr-auto ml-auto border w-52 h-16 bg-gradient-to-l from-[#06E5F108]/10 to-[#00000026]/15 rounded-md'>
                        Video Productions
                        </button>
                        <button className='font-[ClashDisplay-Medium] text-[20px] mr-auto border w-52 h-20 bg-gradient-to-l from-[#06E5F108]/10 to-[#00000026]/15 rounded-md'>
                        Motion Design
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Robot;