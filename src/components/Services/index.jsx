import './style.css';
import temp1 from '../../images/temp1.png';
import temp2 from '../../images/temp2.png';
import temp3 from '../../images/temp3.jpeg';
import temp4 from '../../images/temp4.png';
import temp5 from '../../images/temp5.jpeg';
import temp6 from '../../images/temp6.png';

function Services(){
    return(
        <div className='bg-black w-full py-20 h-auto relative'>
            <div className='max-w-[1280px] w-4/5 mr-auto ml-auto h-auto relative'>
                <h1 className='text-[36px] font-[ClashDisplay-Bold]'>NOSSOS SERVIÇOS</h1>

                <div className='flex w-full flex-wrap gap-4 justify-center mt-14'>
                    <div className='w-10/12 sm:w-5/12 md:w-3/12 h-[350px] rounded-lg overflow-hidden cursor-pointer transition-all servicesCard relative' style={{backgroundImage:`url(${temp1})`, backgroundSize:'cover', backgroundPosition:'center'}}></div>
                    <div className='w-10/12 sm:w-5/12 md:w-3/12 h-[350px] rounded-lg overflow-hidden cursor-pointer transition-all servicesCard relative' style={{backgroundImage:`url(${temp2})`, backgroundSize:'cover', backgroundPosition:'center'}}></div>
                    <div className='w-10/12 sm:w-5/12 md:w-3/12 h-[350px] rounded-lg overflow-hidden cursor-pointer transition-all servicesCard relative' style={{backgroundImage:`url(${temp3})`, backgroundSize:'cover', backgroundPosition:'center'}}></div>
                    <div className='w-10/12 sm:w-5/12 md:w-3/12 h-[350px] rounded-lg overflow-hidden cursor-pointer transition-all servicesCard relative' style={{backgroundImage:`url(${temp4})`, backgroundSize:'cover', backgroundPosition:'center'}}></div>
                    <div className='w-10/12 sm:w-5/12 md:w-3/12 h-[350px] rounded-lg overflow-hidden cursor-pointer transition-all servicesCard relative' style={{backgroundImage:`url(${temp5})`, backgroundSize:'cover', backgroundPosition:'center'}}></div>
                    <div className='w-10/12 sm:w-5/12 md:w-3/12 h-[350px] rounded-lg overflow-hidden cursor-pointer transition-all servicesCard relative' style={{backgroundImage:`url(${temp6})`, backgroundSize:'cover', backgroundPosition:'center'}}></div>
                </div>
            </div>
        </div>
    );
}

export default Services;