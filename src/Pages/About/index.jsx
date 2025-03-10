import quadro from '../../images/quadro.jpg';
import eq1 from '../../images/equipe1.png';
import eq2 from '../../images/equipe2.jpeg';
import eq3 from '../../images/equipe3.jpeg';
import './style.css';
import Partners from '../../components/Partners';

function About(){
    return(
        <div className='bg-black w-full py-20 h-auto relative'>
            <div className='max-w-[1280px] w-4/5 mr-auto ml-auto h-auto relative'>  
            <div className="w-full gap-8">      
            <div className="text-white w-9/12 ml-auto mr-auto text-center">
                <h1 className="font-[ClashDisplay-Bold] text-[42px] mb-8">Who we are</h1>
                <p className="text-[16px] font-[ClashDisplay-regular] textBodyGradient">We are a creative production company born from the passion for storytelling andtransforming ideas into impactful visual experiences. With a core team made up of CGI specialists,video production experts, and motion designers, as well as a vast network of highly skilled editors, filmmakers, and artists, we are always ready to meet the diverse demands of the market.</p>
            </div>
   
            </div>

            <div className='mt-32'>
                <h1 className='font-[ClashDisplay-Semibold] text-[42px]'>Strategic Leader Team</h1>
                <div className='flex flex-col lg:flex-row gap-0 mt-20 relative textCardTeam'>
                    
                <div className='order-2 lg:order-1 flex flex-col items-center lg:mb-0 mb-20'>
                <div className='flex w-3/4 justify-center md:w-2/4 lg:w-full lg:h-[500px] cardFront relative'>
                <div className="lg:h-[400px] mt-auto relative">
                <img src={eq2} className='w-full h-full'/>
                </div>
                </div>
                <h1 className='font-[ClashDisplay-Bold] text-[30px] mt-8'>ILARIA</h1>
                <p className='font-[ClashDisplay-SemiBold] text-[16px] text-white'>Communication Specialist</p>
                <div className='w-3/4 lg:w-auto'>
                <p className='text-white py-8 px-5 font-[ClashDisplay-Regular]'>Adapts content for different languages and manages social media, maximizing engagement and communication effectiveness.</p>
                </div>
                </div>

                <div className='order-1 lg:order-2 w-fit flex flex-col items-center lg:mb-0 mb-20'>
                <div className='w-3/4 md:w-2/4 lg:w-full lg:h-[500px] cardFront'>
                <div className="h-full mt-auto relative">

                <img src={eq1} className='h-full w-full'/></div>
                </div>
                <h1 className='font-[ClashDisplay-Bold] text-[30px] mt-8 w-fit'>PEDRO</h1>
                <p className='font-[ClashDisplay-SemiBold] text-[16px] text-white'>CEO- Team Leader</p>
                    <div className='w-3/4'>
                    <p className='text-white py-8 px-5 font-[ClashDisplay-Regular]'>Oversees and guides every phase of execution, ensuring excellence in every detail, from filming to final delivery.</p>
                    </div>
                </div>

                <div className='order-3 lg:order-3 w-fit flex flex-col items-center lg:mb-0 mb-20'>
                <div className='flex justify-center w-3/4 md:w-2/4 lg:w-full lg:h-[500px] cardFront relative'>
                <div className="lg:h-[400px] mt-auto relative">

                <img src={eq3} className='h-full w-full'/>
                </div>
                </div>
                <h1 className='font-[ClashDisplay-Bold] text-[30px] mt-8 '>DANIEL</h1>
                <p className='font-[ClashDisplay-SemiBold] text-[16px] text-white'>CEO- Team Leader</p>
                <div className='w-3/4 lg:w-auto'>
                <p className='text-white py-8 px-5 font-[ClashDisplay-Regular]'>The mastermind behind the edits that transform every project, delivering the best result in the editing of each project.</p>
                </div>
                </div>

                </div>
                
       
            </div>
          
            </div>
            <div className="w-8/12 ml-auto mr-auto">
            <h2 className='font-[ClashDisplay-Light] text-white text-[22px] mt-40 mb-24'>With a core team composed of highly specialized leaders, our global network of collaborators and partners enables us to execute large-scale projects with unmatched quality, continuous innovation, and real impact.</h2>
            <h1 className="font-[ClashDisplay-Bold] text-[28px]">Contact one of our specialists </h1>
            <button style={{border:'1px solid #06E7F2'}} className='hover:bg-transparent hover:text-[#06E7F2] font-[ClashDisplay-Semibold] mt-6 ml-auto mr-auto bg-[#06E5F1] relative -bottom-[95%] px-12 py-2 rounded-md'>Contact now</button>

            </div>
        </div>
    );
}

export default About;