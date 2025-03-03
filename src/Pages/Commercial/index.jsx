import CardCommercial from '../../components/CardCommercial';
import commercial from '../../images/greenArrow.png';
import './style.css';
import cm1 from '../../images/cm1.jpeg';
import cm2 from '../../images/cm2.jpeg';
import cm3 from '../../images/cm3.jpeg';
import cm4 from '../../images/cm4.jpeg';
import cm5 from '../../images/cm5.jpeg';
import cm6 from '../../images/cm6.jpeg';

import sm1 from '../../images/sm1.jpeg';
import sm2 from '../../images/sm2.jpeg';
import sm3 from '../../images/sm3.png';
import sm4 from '../../images/sm4.png';
import sm5 from '../../images/sm5.png';
import sm6 from '../../images/sm6.jpeg';

import video1 from '../../images/fundoVideo1.png';
import pic1 from '../../images/pic1.jpeg';


function Commercial(){
    return(
        <div className='bg-black w-full pt-20 h-auto relative'>
            <div className='max-w-[1280px] w-4/5 mr-auto ml-auto h-auto relative'>  
            <div className='items-center justify-center flex'>
            <div className='text-left w-[1200px]'>
                <h1 className="font-[ClashDisplay-SemiBold] text-[36px] titleBlueLine">CREATIVE STRATEGIES TO BOOST YOUR SALES</h1>
                <p className='text-[#CCCCCC] font-[ClashDisplay-Regular]'>Optimizes your sales, better engagement, <br /> and top business results.</p>
            </div>
            <div>
                <img src={commercial} className='w-8/12 ml-auto'/>
            </div>
            </div>

            <div>
                <h1 className='font-[ClashDisplay-SemiBold] text-[40px] mt-36'>Commercial Portfolio</h1>
                <p className='text-[#CCCCCC] font-[ClashDisplay-regular]'>Working with the best clients and collaborators.</p>
            </div>
            <div className='flex gap-6 justify-between flex-wrap mt-10'>
            <CardCommercial type="large" thumb={cm1} video={video1} typeModal="video"/>
            <CardCommercial type="large" thumb={cm2}/>
            <CardCommercial type="large" thumb={cm3}/>
            <CardCommercial type="large" thumb={cm4}/>
            <CardCommercial type="large" thumb={cm5}/>
            <CardCommercial type="large" thumb={cm6}/>
            </div>

            <div>
                <h1 className='font-[ClashDisplay-SemiBold] text-[40px] mt-36'>Social Media Manegement</h1>
                <p className='text-[#CCCCCC] font-[ClashDisplay-Regular]'>Let a professional production studio take care of your business!</p>
            </div>
            <div className='flex gap-10 justify-between flex-wrap mt-10'>
            <CardCommercial type="high" thumb={sm1} video={pic1} typeModal="pic"/>
            <CardCommercial type="high" thumb={sm2}/>
            <CardCommercial type="high" thumb={sm3}/>
            <CardCommercial type="high" thumb={sm4}/>
            <CardCommercial type="high" thumb={sm5}/>
            <CardCommercial type="high" thumb={sm6}/>
            </div>
            </div>
            <div className="w-full py-10 bg-[#0e0e0e] mt-36">
                <div className="max-w-[1280px] ml-auto mr-auto flex justify-center text-center w-4/5 flex-col items-center">
                <h1 className="font-[ClashDisplay-Medium] text-[26px] w-2/3">Speak with one of our specialists and receive a personalized quote right now</h1>
                <button className="mt-10 bg-[#06E7F2] h-fit w-fit p-3 px-14 rounded-xl font-[ClashDisplay-Semibold] hover:bg-transparent hover:text-[#06E7F2]" style={{border:'1px solid #06E7F2'}}>Contact us</button>
                </div>
            </div>
        </div>
    );
}

export default Commercial;