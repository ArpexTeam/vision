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
            <div className="flex-col items-center lg:flex-row flex w-full gap-8">      
            <div className="text-white w-full lg:w-1/2 lg:order-1 order-2 text-left">
                <h1 className="font-[ClashDisplay-Bold] text-[26px] mb-8">AFINAL, O QUE É A VISION?</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <br/><br/>
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
                content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                 their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
            </div>
            <div>
                <img src={quadro}/>
            </div>    
            </div>

            <div className='mt-32'>
                <h1 className='font-[ClashDisplay-Semibold] text-[24px]'>Conheça um pouco de quem está à frente da Vision Productions</h1>
                <div className='flex flex-col lg:flex-row mt-20 relative textCardTeam'>
                <div className='order-2 lg:order-1 w-fit flex flex-col items-center lg:mb-0 mb-20'>
                <div className='w-3/4 md:w-2/4 lg:w-3/4 h-4/12 mt-auto cardFront relative'><img src={eq2} className='h-full w-full'/></div>
                   <h1 className='font-[ClashDisplay-Bold] text-[30px]'>RAFAELA</h1>
                <div className='w-3/4 lg:w-auto mt-8 h-1/4'>
                <p className='text-white py-8 px-5 font-[ClashDisplay-Regular]'>CEO e dona junto com o pedro, dando suporte e coordenando todo a área financeira da empresa.</p>
                </div>
                </div>

                <div className='order-1 lg:order-2 w-fit flex flex-col items-center lg:mb-0 mb-20'>
                <div className='w-3/4 md:w-2/4 lg:w-3/4 h-7/12 cardFront'><img src={eq1} className='h-full w-full'/></div>
                <h1 className='font-[ClashDisplay-Bold] text-[30px] w-fit'>PEDRO</h1>
                    <div className='mt-8 w-3/4'>
                    <p className='text-white py-8 px-5 font-[ClashDisplay-Regular]'>CEO e dono da Vision Productions, liderando e coordenando todos os projetos dentro da empresa. Ele garante a execução de cada projeto com excelência, desde o planejamento até a entrega final.</p>
                    </div>
                </div>

                <div className='order-3 lg:order-3 w-fit flex flex-col items-center lg:mb-0 mb-20'>
                <div className='w-3/4 md:w-2/4 lg:w-3/4 h-4/12 mt-auto cardFront relative'><img src={eq3} className='h-full w-full'/></div>
                <h1 className='font-[ClashDisplay-Bold] text-[30px]'>DANIEL</h1>
                <div className='w-3/4 lg:w-auto mt-8 h-1/4'>
                <p className='text-white py-8 px-5 font-[ClashDisplay-Regular]'>Gerente, editor e design atuando diretamente na criação e administração na parte de Design e Animações.</p>
                </div>
                </div>

                </div>
       
            </div>
          
            </div>
            <h1 className='font-[ClashDisplay-Bold] text-[30px] mt-48 mb-16'>Empresas que confiam no nosso trabalho</h1>
            <Partners/>
        </div>
    );
}

export default About;