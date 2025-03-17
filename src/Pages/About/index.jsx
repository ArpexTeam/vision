import React from "react";
import quadro from '../../images/quadro.jpg';
import eq1 from '../../images/equipe1.png';
import eq2 from '../../images/equipe2.jpeg';
import eq3 from '../../images/equipe3.jpeg';
import './style.css';
import Partners from '../../components/Partners';

function About() {
  return (
    <div className='bg-black w-full py-20 md:py-0 h-auto relative'>
      <div className='max-w-[1280px] w-4/5 mx-auto h-auto relative'>

        {/* Seção: Quem somos */}
        <div className="w-full gap-8 md:pt-20">
          <div className="text-white w-9/12 mx-auto text-center">
            <h1 className="font-[ClashDisplay-Bold] text-[36px] md:text-[42px] mb-8">Who we are</h1>
            <p className="text-[20px] font-[ClashDisplay-Regular]">
              We are a creative production company born from the passion for storytelling and transforming ideas into impactful visual experiences. With a core team made up of CGI specialists, video production experts, and motion designers, as well as a vast network of highly skilled editors, filmmakers, and artists, we are always ready to meet the diverse demands of the market.
            </p>
          </div>
        </div>

        {/* Seção: Strategic Leader Team */}
        <div className='mt-20'>
          <h2 className='font-[ClashDisplay-Semibold] text-[32px] md:text-[42px]'>Strategic Leader Team</h2>
          <div className='flex flex-col lg:flex-row gap-10 mt-20 relative textCardTeam'>

            {/* Card: ILARIA */}
            <div className='order-2 lg:order-1 flex flex-col items-center lg:mb-0 mb-20'>
              <div className='flex w-3/4 justify-center md:w-2/4 lg:w-full lg:h-[500px] cardFront relative'>
                <div className="lg:h-[400px] mt-auto relative">
                  <img src={eq2} className='h-full object-cover aspect-[3/4]' alt="Ilaria" />
                </div>
              </div>
              <h2 className='font-[ClashDisplay-Bold] text-[30px] mt-8'>ILARIA</h2>
              <p className='font-[ClashDisplay-SemiBold] text-[16px] text-white'>Communication Specialist</p>
              <div className='w-3/4 lg:w-auto'>
                <p className='text-white py-8 px-5 font-[ClashDisplay-Regular]'>
                  Adapts content for different languages and manages social media, maximizing engagement and communication effectiveness.
                </p>
              </div>
            </div>

            {/* Card: PEDRO */}
            <div className='order-1 lg:order-2 w-fit flex flex-col items-center lg:mb-0 mb-20'>
              <div className='w-3/4 md:w-2/4 lg:w-full lg:h-[500px] cardFront'>
                <div className="h-full mt-auto relative">
                  <img src={eq1} className='h-full object-cover aspect-[3/4]' alt="Pedro" />
                </div>
              </div>
              <h2 className='font-[ClashDisplay-Bold] text-[30px] mt-8 w-fit'>PEDRO</h2>
              <p className='font-[ClashDisplay-SemiBold] text-[16px] text-white'>CEO - Team Leader</p>
              <div className='w-3/4'>
                <p className='text-white py-8 px-5 font-[ClashDisplay-Regular]'>
                  Oversees and guides every phase of execution, ensuring excellence in every detail, from filming to final delivery.
                </p>
              </div>
            </div>

            {/* Card: DANIEL */}
            <div className='order-3 lg:order-3 w-fit flex flex-col items-center lg:mb-0 mb-20'>
              <div className='flex justify-center w-3/4 md:w-2/4 lg:w-full lg:h-[500px] cardFront relative'>
                <div className="lg:h-[400px] mt-auto relative">
                  <img src={eq3} className='h-full object-cover aspect-[3/4]' alt="Daniel" />
                </div>
              </div>
              <h2 className='font-[ClashDisplay-Bold] text-[30px] mt-8 '>DANIEL</h2>
              <p className='font-[ClashDisplay-SemiBold] text-[16px] text-white'>Project Manager</p>
              <div className='w-3/4 lg:w-auto'>
                <p className='text-white py-8 px-5 font-[ClashDisplay-Regular]'>
                  The mastermind behind the edits that transform every project, delivering the best result in the editing of each project.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Seção de citação */}
      <div className="w-8/12 mx-auto">
        <h2 className='font-[ClashDisplay-Light] text-white text-[20px] md:text-[22px] mt-20 mb-20'>
          With a core team composed of highly specialized leaders, our global network of collaborators and partners enables us to execute large-scale projects with unmatched quality, continuous innovation, and real impact.
        </h2>
      </div>

      {/* Seção de contato */}
      <div className="w-full py-10 bg-[#070707] mt-20">
        <div className="max-w-[1280px] mx-auto flex justify-center text-center w-4/5 flex-col items-center">
          <h2 className="font-[ClashDisplay-Medium] text-[20px] md:text-[26px] w-2/3">
            Contact one of our specialists
          </h2>
          <button
            className="mt-10 bg-[#06E7F2] h-fit w-fit p-3 px-14 rounded-xl font-[ClashDisplay-Semibold] hover:bg-transparent hover:text-[#06E7F2]"
            style={{ border: '1px solid #06E7F2' }}
          >
            Contact us
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default About;