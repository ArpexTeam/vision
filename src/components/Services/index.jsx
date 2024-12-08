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

                <div className='flex w-full flex-wrap h-[700px] gap-4 justify-center mt-14'>
                    <div className='w-3/12 h-[50%] rounded-lg overflow-hidden'><img className='w-full h-full' src={temp1}/></div>
                    <div className='w-3/12 h-[50%] rounded-lg overflow-hidden'><img className='w-full h-full' src={temp2}/></div>
                    <div className='w-3/12 h-[50%] rounded-lg overflow-hidden'><img className='w-full h-full' src={temp3}/></div>
                    <div className='w-3/12 h-[50%] rounded-lg overflow-hidden'><img className='w-full h-full' src={temp4}/></div>
                    <div className='w-3/12 h-[50%] rounded-lg overflow-hidden'><img className='w-full h-full' src={temp5}/></div>
                    <div className='w-3/12 h-[50%] rounded-lg overflow-hidden'><img className='w-full h-full' src={temp6}/></div>
                </div>
            </div>
        </div>
    );
}

export default Services;