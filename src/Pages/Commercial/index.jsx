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
// import video1 from '../../images/Galeus_1.mp4';
// import video2 from '../../images/Weester high 2.MP4';
// import video3 from '../../images/UNIPV 3D.mp4';
// import video4 from '../../images/Marinoni.mp4';
// import video5 from '../../images/TECNO SPORT.MP4';
// import video6 from '../../images/loopToscano.mp4';

import pic1 from '../../images/pic1.jpeg';


function Commercial(){
    return(
        <div className='bg-black w-full pt-20 h-auto relative'>
            <div className='max-w-[1280px] w-4/5 mx-auto h-auto relative'>  
                <div className='flex flex-col md:flex-row items-center justify-between'>
                
                {/* Texto à esquerda */}
                <div className='text-center md:text-left w-full md:w-1/2'>
                    <h1 className="font-[ClashDisplay-SemiBold] text-[28px] md:text-[36px] titleBlueLine flex-col justify-center mb-5">
                    CREATIVE STRATEGIES TO BOOST YOUR SALES
                    </h1>
                    <p className='text-[#CCCCCC] font-[ClashDisplay-Regular]'>
                    Optimizes your sales, better engagement, <br /> and top business results.
                    </p>
                </div>

                {/* Imagem à direita */}
                <div className='w-full md:w-1/2 flex justify-center md:'>
                    <img src={commercial} className='w-9/12 md:w-8/12 md:mt-0 mt-10 ' />
                </div>
            </div>
            <div>
                <h1 className='font-[ClashDisplay-SemiBold] text-[28px] md:text-[40px] mt-28'>Commercial Portfolio</h1>
                <p className='text-[#CCCCCC] font-[ClashDisplay-regular]'>Working with the best clients and collaborators.</p>
            </div>
            <div className='flex gap-16 lg:gap-6 justify-center md:justify-between flex-wrap mt-10'>
            <CardCommercial type="large" thumb={cm1} video={null} typeModal="video"/>
            <CardCommercial type="large" thumb={cm2} video={null} typeModal="video"/>
            <CardCommercial type="large" thumb={cm3} video={null} typeModal="video"/>
            <CardCommercial type="large" thumb={cm4} video={null} typeModal="video"/>
            <CardCommercial type="large" thumb={cm5} video={null} typeModal="video"/>
            <CardCommercial type="large" thumb={cm6} video={null} typeModal="video"/>
            </div>

            <div>
                <h1 className='font-[ClashDisplay-SemiBold] text-[28px] md:text-[40px] mt-36 md:mt-36'>Social Media Manegement</h1>
                <p className='text-[#CCCCCC] font-[ClashDisplay-Regular]'>Let a professional production studio take care of your business!</p>
            </div>
            <div className='flex gap-16 md:gap-5  justify-center md:justify-between flex-wrap mt-10 md:mt-24'>
            <CardCommercial type="high" thumb={sm1} video={sm1} typeModal="pic"/>
            <CardCommercial type="high" thumb={sm2} video={sm2} typeModal="pic"/>
            <CardCommercial type="high" thumb={sm3} video={sm3} typeModal="pic"/>
            <CardCommercial type="high" thumb={sm4} video={sm4} typeModal="pic"/>
            <CardCommercial type="high" thumb={sm5} video={sm5} typeModal="pic"/>
            <CardCommercial type="high" thumb={sm6} video={sm6} typeModal="pic"/>
            </div>
            </div>
            <div className="w-full py-10 bg-[#0e0e0e] mt-36">
                <div className="max-w-[1280px] ml-auto mr-auto flex justify-center text-center w-4/5 flex-col items-center">
                <h1 className="font-[ClashDisplay-Medium] text-[20px] md:text-[26px] w-2/3">Speak with one of our specialists and receive a personalized quote right now</h1>
                <button className="mt-10 bg-[#06E7F2] h-fit w-fit p-3 px-14 rounded-xl font-[ClashDisplay-Semibold] hover:bg-transparent hover:text-[#06E7F2]" style={{border:'1px solid #06E7F2'}}>Contact us</button>
                </div>
            </div>
        </div>
    );
}

export default Commercial;