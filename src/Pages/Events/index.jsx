import trofeu from '../../images/trofeuIcon.svg';
import cars from '../../images/cars.png';
import back from '../../images/Retangulo_Vision.jpg';

function Events(){
    return(
        <div className='bg-black w-full py-20 h-auto relative'>
            <div className="w-full h-[400px]">
                VIDEO
            </div>
            <div className='max-w-[1280px] w-4/5 mr-auto ml-auto h-auto relative'>  
                <div className="flex items-center md:flex-row flex-col w-full lg:w-10/12 text-white text-left ml-auto mr-auto">
                    <div className="w-full sm:w-2/3 md:w-1/2 bg-gradient-to-l from-[#131313]/20 to-[#FFFFFF]/20 pl-6 pb-16 md:pr-32 py-5 rounded-xl">
                        <img src={trofeu} className='w-14'/>
                        <p className='font-[ClashDisplay-Regular]'>There are many variations of passages of Lorem Ipsum available,
                             but the majority have suffered alteration in some form, 
                             by injected humour,.</p>
                    </div>
                    <div className='w-11/12 sm:w-2/3 md:w-1/2 h-64 -ml-24 -top-12 md:top-24 rounded-xl relative' style={{backgroundImage:`url(${cars})`, backgroundSize:'cover', backgroundPosition:'center'}}></div>
                </div>
            </div>
            <div className='w-full mt-56 py-8' style={{backgroundImage:`url(${back})`, backgroundSize:'cover', backgroundPosition:'center'}}>
                <div className='flex flex-col md:flex-row w-full md:w-2/3 ml-auto mr-auto text-center = md:text-left items-center'>
                    <h2 className='text-white w-10/12 sm:w-1/2 mb-8 md:mb-0'>Do conceito à execução, oferecemos serviços completos para transformar
                         seu evento em um filme. Qualidade superior em gravação, 
                         edição e efeitos especiais.
                    </h2>
                    <button className='ml-auto mr-auto bg-[#06E7F2] h-fit w-fit p-4 px-6 rounded-xl font-[ClashDisplay-Semibold]'>Reserve agora seu evento</button>

                </div>
            </div>
            <div className='max-w-[1280px] w-4/5 mr-auto ml-auto h-auto relative mt-56'>  
                <div className="flex items-center md:flex-row flex-col w-full lg:w-10/12 text-white text-left ml-auto mr-auto">
                    <div className="w-full sm:w-2/3 md:w-1/2 bg-gradient-to-l from-[#131313]/20 to-[#FFFFFF]/20 pl-6 pb-16 md:pr-32 py-5 rounded-xl">
                        <img src={trofeu} className='w-14'/>
                        <p className='font-[ClashDisplay-Regular]'>There are many variations of passages of Lorem Ipsum available,
                             but the majority have suffered alteration in some form, 
                             by injected humour,.</p>
                    </div>
                    <div className='w-11/12 sm:w-2/3 md:w-1/2 h-64 -ml-24 -top-12 md:-top-24 rounded-xl relative' style={{backgroundImage:`url(${cars})`, backgroundSize:'cover', backgroundPosition:'center'}}></div>
                </div>
            </div>
        </div>
    );
}

export default Events;