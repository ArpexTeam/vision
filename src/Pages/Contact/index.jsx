import world from '../../images/world.jpeg';

function Contact(){
    return(
        <div style={{backgroundImage:`url(${world})`, backgroundPosition:'center', backgroundSize:'cover'}} className='w-full py-20 h-auto relative'>
            <div className='flex max-w-[1280px] w-4/5 mr-auto ml-auto h-auto relative'>
                 <div className='w-0 md:w-1/2'></div>
                 <div className='w-full md:w-9/12 lg:w-5/12 bg-black rounded-lg p-6 md:p-14 border border-[#414141]'>
                    <h1 className='font-[ClashDisplay-Bold] text-[30px]'>CONTATO</h1>
                    <form className='flex flex-col'>
                        <input className='bg-[#161616] border-b-[#06E5F1] border-b p-4 py-3 mt-6 rounded-sm' type='text' placeholder='Name*'></input>
                        <input className='bg-[#161616] border-b-[#06E5F1] border-b p-4 py-3 mt-6 rounded-sm' type='email' placeholder='E-mail*'></input>
                        <input className='bg-[#161616] border-b-[#06E5F1] border-b p-4 py-3 mt-6 rounded-sm' type='text' placeholder='Phone*'></input>
                        <textarea rows={5} className='bg-[#161616] border-b-[#06E5F1] border-b p-4 py-3 mt-6 rounded-sm' placeholder='Mensagem'></textarea>
                        <button className='ml-auto mr-auto mt-10 bg-[#06E7F2] h-fit w-fit p-4 px-6 rounded-xl font-[ClashDisplay-Semibold]'>Reserve agora seu evento</button>
                        </form>
                 </div>
            </div>
        </div>
    )
}

export default Contact;