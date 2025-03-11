import world from '../../images/world.jpeg';
import React, { useState, useRef } from 'react';


function Contact(){

    const [visible, setVisible] = useState(false);
    const [vote, setVote] = useState(0);

    const openClose = () =>{
        setVisible(!visible);
    };

    const sendVote = () =>{
        openClose();
    };

    return(
        <div style={{backgroundImage:`url(${world})`, backgroundPosition:'center', backgroundSize:'cover'}} className='w-full pt-20 h-auto relative'>
            <div className='max-w-[1280px] w-4/5 mr-auto ml-auto h-auto relative'>
            <div className='flex'>
                 <div className='w-0 md:w-1/2'></div>
                 <div className='w-full md:w-9/12 lg:w-5/12 bg-black rounded-lg p-6 md:p-14 border border-[#414141]'>
                    <h1 className='font-[ClashDisplay-Bold] text-[30px]'>CONTATO</h1>
                    <form className='flex flex-col'>
                        <input className='bg-[#161616] border-b-[#06E5F1] border-b p-4 py-3 mt-6 rounded-sm' type='text' placeholder='Name*'></input>
                        <input className='bg-[#161616] border-b-[#06E5F1] border-b p-4 py-3 mt-6 rounded-sm' type='email' placeholder='E-mail*'></input>
                        <input className='bg-[#161616] border-b-[#06E5F1] border-b p-4 py-3 mt-6 rounded-sm' type='text' placeholder='Phone*'></input>
                        <textarea rows={5} className='bg-[#161616] border-b-[#06E5F1] border-b p-4 py-3 mt-6 rounded-sm' placeholder='Mensagem'></textarea>
                        <button className='ml-auto mr-auto mt-10 bg-[#06E7F2] h-fit w-fit p-3 px-16 rounded-xl font-[ClashDisplay-Semibold]'>Send Now</button>
                        </form>
                 </div>
            </div>

        
         
            </div>
            <div className="w-full text-left bg-black mt-48 py-20">
                <div className='max-w-[1280px] w-4/5 mr-auto ml-auto h-auto relative'>
                <div className="w-full sm:w-10/12 md:w-6/12">
                     <h1 className='text-[28px] md:text-[36px] font-[ClashDisplay-Bold] mb-5'>Your feedback matters!</h1>
                     <p className="text-white font-[ClashDisplay-Regular]">Did you like one of our services? Leave your<br/> feedback
                     so we can keep improving and<br/> delivering the best for you.</p>
                </div>
                <div className="mt-10 flex flex-wrap gap-4">
                <button className="focus:bg-[#06E5F1] py-1 px-7 bg-[#06E5F1]/20 font-[ClashDisplay-Medium] rounded-md text-white">1</button>
                <button className="focus:bg-[#06E5F1] py-1 px-7 bg-[#06E5F1]/20 font-[ClashDisplay-Medium] rounded-md text-white">2</button>
                <button className="focus:bg-[#06E5F1] py-1 px-7 bg-[#06E5F1]/20 font-[ClashDisplay-Medium] rounded-md text-white">3</button>
                <button className="focus:bg-[#06E5F1] py-1 px-7 bg-[#06E5F1]/35 font-[ClashDisplay-Medium] rounded-md text-white">4</button>
                <button className="focus:bg-[#06E5F1] py-1 px-7 bg-[#06E5F1]/50 font-[ClashDisplay-Medium] rounded-md text-white">5</button>
                <button className="focus:bg-[#06E5F1] py-1 px-7 bg-[#06E5F1]/60 font-[ClashDisplay-Medium] rounded-md text-white">6</button>
                <button className="focus:bg-[#06E5F1] py-1 px-7 bg-[#06E5F1]/70 font-[ClashDisplay-Medium] rounded-md text-white">7</button>
                <button className="focus:bg-[#06E5F1] py-1 px-7 bg-[#06E5F1]/80 font-[ClashDisplay-Medium] rounded-md text-white">8</button>
                <button className="focus:bg-[#06E5F1] py-1 px-7 bg-[#06E5F1]/90 font-[ClashDisplay-Medium] rounded-md text-white">9</button>
                <button className="focus:bg-[#06E5F1] py-1 px-7 bg-[#06E5F1] font-[ClashDisplay-Medium] rounded-md text-white">10</button>

                </div>
                <button onClick={sendVote} className="py-1 px-8 font-[ClashDisplay-Medium] mt-10 relative left-1/2 rounded-md text-white" style={{background: 'linear-gradient(to right, #000000, #06E5F1)'}}>Vote</button>

                <div className={`fixed backdrop-blur-sm w-screen h-screen z-30 top-0 left-0 bg-[#000000]/40 ${visible ? "block" : "hidden"}`}>
                    <div className="w-4/12 h-5/12 border border-white fixed rounded-2xl bg-green-400 top-1/2 left-1/2 p-10 text-left"
                     style={{
                        transform: "translate(-50%, -50%)",
                        background:'linear-gradient(to left, #070707, #323232)'
                    }}>
                        <h2 className="text-white mb-3 font-[ClashDisplay-Medium] text-[28px]">Thank you for your vote!</h2>
                        <p className="font-[ClashDisplay-Light] text-[20px] text-white">Thank you for your vote!
                        It helps us continue improving</p>
                        <button onClick={openClose} className="py-3 px-8 text-[15px] font-[ClashDisplay-Medium] bg-[#06E5F1] mt-6 relative rounded-sm text-black">Close Window</button>

                    </div>
                </div>
                 </div>
            </div>
        </div>
    )
}

export default Contact;