import trofeu from '../../images/trofeuIcon.svg';
import ev1 from '../../images/Varano-Internacional-Circuit.jpg';
import ev2 from '../../images/ev2.jpeg';
import ev3 from '../../images/campione-italiano.png';
import ev4 from '../../images/indoor-events.png';

import c1 from '../../images/c1.jpeg';
import c2 from '../../images/c2.png';
import c3 from '../../images/c3.png';
import c4 from '../../images/c4.png';

import back from '../../images/Retangulo_Vision.jpg';
import claquete from '../../images/claquete.png';
import './style.css';
function Events(){
    return(
        <div className='bg-black w-full pt-10 h-auto relative'>
            <div className='max-w-[1280px] w-4/5 mr-auto ml-auto h-auto relative'>  
                <div className='items-center justify-center flex gap-32'>
                        <div className='text-center'>
                            <h1 className="font-[ClashDisplay-SemiBold] text-[#dadada] text-[40px]/10">ETERNALIZE YOUR EVENT <div /> WITH THE BEST COVERAGE</h1>
                        </div>
                        <div>
                            <img src={claquete} className='w-[260px] ml-auto'/>
                        </div>
                        </div>
                        
                <div className="gap-12 mt-32 flex md:flex-row flex-col w-full text-white text-left ml-auto mr-auto">
                    <div className="mt-8 w-5/12 bg-gradient-to-l pl-6 pb-16 px-10 rounded-xl">
                    <h1 className="font-[ClashDisplay-Semibold] text-[36px]/10 titleBlueLine mb-8">
                    VARANO INTERNATIONAL CIRCUIT
                    </h1>
                        <p className='mt-10 font-[ClashDisplay-Regular] '>We capture the adrenaline and excitement of the most thrilling circuits, like the Varano International Circuit, with a video production that turns every moment into an unforgettable visual experience. No matter the location or event, we bring this same energy to you.</p>
                    </div>
                    <div className='w-7/12 h-[400px] rounded-3xl relative' style={{backgroundImage:`url(${ev1})`, backgroundSize:'cover', backgroundPosition:'center'}}>
                    <div className='bg-[#000000]/20 w-full h-full'>

                    </div>
                    </div>
                </div>

                <div className="gap-12 mt-36 flex md:flex-row flex-col w-full text-white text-left ml-auto mr-auto">
                <div className='w-7/12 h-[400px] rounded-3xl relative' style={{backgroundImage:`url(${ev2})`, backgroundSize:'cover', backgroundPosition:'center'}}>
                    <div className='bg-[#000000]/20 w-full h-full'>

                    </div>
                    </div>
                   
                    <div className="mt-8 w-5/12 bg-gradient-to-l pl-6 pb-16 px-10 rounded-xl">
                    <h1 className="font-[ClashDisplay-Semibold] text-[36px]/10 titleBlueLine">
                    CATTOLICA <br /> STADIUM
                    </h1>
                        <p className='mt-10 font-[ClashDisplay-Regular]'>We capture the intense emotion of football, with the vibrant energy of major stadiums like Cattolica Stadium. Our video production translates every goal, every cheer, and every unforgettable moment into images that make the heart race. Regardless of your event, we bring this passion and cinematic quality to create a unique experience, wherever you are.</p>
                    </div>
                    
                </div>

                <div className="gap-12 mt-36 flex md:flex-row flex-col w-full text-white text-left ml-auto mr-auto">
                    <div className="mt-8 w-5/12 bg-gradient-to-l pl-2 pb-16 px-10 ml-28 rounded-xl">
                    <h1 className="font-[ClashDisplay-Semibold] text-[40px]/10 titleBlueLine mb-8">
                    CUSTOM EVENT - MISANO CIRCUIT
                    </h1>
                        <p className='mt-10 font-[ClashDisplay-Regular]'>With the experience of covering custom events at the Misano Circuit, where we had the honor of working with the Tecnosports team and the Italian Legend Car 850cc champion, Filippo Majrani, we create video productions that capture every detail and the emotion of the moment. Our flexible and dedicated approach ensures that, no matter your event or location, we can convey all the intensity and personalization it deserves.</p>
                    </div>
                    <div className='w-7/12 h-[500px] rounded-3xl relative mt-5 overflow-hidden' style={{backgroundImage:`url(${ev3})`, backgroundSize:'contain', backgroundPosition:'center', backgroundRepeat: 'no-repeat', borderRadius: '24px'}}>
                    <div className='bg-[#000]/20 w-full h-full'>

                    </div>
                    </div>
                </div>

                <div className="gap-12 mt-36 flex md:flex-row flex-col w-full text-white text-left ml-auto mr-auto">
                <div className='w-7/12 h-[500px] rounded-3xl relative overflow-hidden ml-5' style={{backgroundImage:`url(${ev4})`, backgroundSize:'contain', backgroundPosition:'center', backgroundRepeat: 'no-repeat' }}>
                    <div className='bg-[#000000]/20 w-full h-full'>

                    </div>
                    </div>
                   
                    <div className="mt-8 w-5/12 bg-gradient-to-l pl-6 mr-20 pb-16 px-10 rounded-xl">
                    <h1 className="font-[ClashDisplay-Semibold] text-[40px]/10 titleBlueLine mb-8">
                    INDOOR EVENTS
                    </h1>
                        <p className='mt-10 font-[ClashDisplay-Regular]'>We transform any indoor space into a cinematic setting, capturing the essence and energy of your event with the same dedication we apply to large outdoor productions. From conventions to presentations, our team brings production quality and flexibility to create an unforgettable visual experience, wherever your event takes place.</p>
                    </div>
                    
                </div>

                <div className="mt-28">
                    <div className="w-1/2 ml-auto mr-auto">
                <h1 className="ml-auto mr-auto font-[ClashDisplay-Semibold] text-[40px] w-fit titleBlueLineLeft">
                    IN 2024
                    </h1>
                    <p className="text-white font-[ClashDisplay-Regular]">We covered 5 Italian circuits, including 3 international motorsport events, as well as a football stadium event and the achievements of 2 car racing champions: Andre Carpezano and Filippo Majrani.</p>
                    </div>

                    <div className="flex gap-5 flex-wrap ml-auto me-auto items-center justify-center w-2/3 mt-16">
                        <div className="w-5/12 h-[250px] rounded-lg" style={{backgroundImage:`url(${c1})`, backgroundSize:'cover', backgroundPosition:'center'}}></div>
                        <div className="w-5/12 h-[250px] rounded-lg" style={{backgroundImage:`url(${c2})`, backgroundSize:'cover', backgroundPosition:'center'}}></div>
                        <div className="w-5/12 h-[250px] rounded-lg" style={{backgroundImage:`url(${c3})`, backgroundSize:'cover', backgroundPosition:'center'}}></div>
                        <div className="w-5/12 h-[250px] rounded-lg" style={{backgroundImage:`url(${c4})`, backgroundSize:'cover', backgroundPosition:'center'}}></div>
                    </div>
                </div>
        </div>

        <div className="w-full py-20 bg-[#070707] mt-36">
                <div className="max-w-[1280px] ml-auto mr-auto flex justify-center text-center w-4/5 flex-col items-center">
                <h1 className="font-[ClashDisplay-Semibold] text-[26px] w-2/3">Speak with one of our specialists and receive a personalized quote right now</h1>
                <button className="mt-10 bg-[#06E7F2] h-fit w-fit p-3 px-14 rounded-xl font-[ClashDisplay-Semibold] hover:bg-transparent hover:text-[#06E7F2]" style={{border:'1px solid #06E7F2'}}>Contact us</button>
                </div>
            </div>
        </div>
    );
}

export default Events;