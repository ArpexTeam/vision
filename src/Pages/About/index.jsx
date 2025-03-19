import React from "react";
import quadro from '../../images/quadro.jpg';
import eq1 from '../../images/equipe1.png';
import eq2 from '../../images/equipe2.jpeg';
import eq3 from '../../images/equipe3.jpeg';
import './style.css';
import Partners from '../../components/Partners';
import { useTranslation } from "react-i18next";
import "../../lib/i18n";

function About() {
  const { t } = useTranslation();
  return (
    <div className='bg-black w-full py-20 md:py-0 h-auto relative'>
      <div className='max-w-[1280px] w-4/5 mx-auto h-auto relative'>

        {/* Seção: Quem somos */}
        <div className="w-full gap-8 md:pt-20">
          <div className="text-white w-9/12 mx-auto text-center">
            <h1 className="font-[ClashDisplay-Bold] text-[36px] md:text-[42px] mb-8">{t("who_are.title_who")}</h1>
            <p className="text-[20px] font-[ClashDisplay-Regular]">
            {t("who_are.title_who_description")}
            </p>
          </div>
        </div>

        {/* Seção: Strategic Leader Team */}
        <div className='mt-20'>
          <h2 className='font-[ClashDisplay-Semibold] text-[32px] md:text-[42px]'>{t("who_are.title_strategic")}</h2>
          <div className='flex flex-col lg:flex-row gap-10 mt-20 relative textCardTeam'>

            {/* Card: ILARIA */}
            <div className='order-2 lg:order-1 flex flex-col items-center lg:mb-0 mb-20'>
              <div className='flex w-3/4 justify-center md:w-2/4 lg:w-full lg:h-[500px] cardFront relative'>
                <div className="lg:h-[400px] mt-auto relative">
                  <img src={eq2} className='h-full object-cover aspect-[3/4]' alt="Ilaria" />
                </div>
              </div>
              <h2 className='font-[ClashDisplay-Bold] text-[30px] mt-8'>ILARIA</h2>
              <p className='font-[ClashDisplay-SemiBold] text-[16px] text-white'>{t("who_are.ilaria_position")}</p>
              <div className='w-3/4 lg:w-auto'>
                <p className='text-white py-8 px-5 font-[ClashDisplay-Regular]'>
                {t("who_are.ilaria_description")}
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
              <p className='font-[ClashDisplay-SemiBold] text-[16px] text-white'>{t("who_are.pedro_position")}</p>
              <div className='w-3/4'>
                <p className='text-white py-8 px-5 font-[ClashDisplay-Regular]'>
                {t("who_are.pedro_description")}
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
              <p className='font-[ClashDisplay-SemiBold] text-[16px] text-white'>{t("who_are.daniel_position")}</p>
              <div className='w-3/4 lg:w-auto'>
                <p className='text-white py-8 px-5 font-[ClashDisplay-Regular]'>
                {t("who_are.daniel_description")}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Seção de citação */}
      <div className="w-8/12 mx-auto">
        <h2 className='font-[ClashDisplay-Light] text-white text-[20px] md:text-[22px] mt-20 mb-20'>
        {t("who_are.description_text")}
        </h2>
      </div>

      {/* Seção de contato */}
      <div className="w-full py-10 bg-[#070707] mt-20">
        <div className="max-w-[1280px] mx-auto flex justify-center text-center w-4/5 flex-col items-center">
          <h2 className="font-[ClashDisplay-Medium] text-[20px] md:text-[26px] w-2/3">
          {t("who_are.contact_specialists")}
          </h2>
          <button
            className="mt-10 bg-[#06E7F2] h-fit w-fit p-3 px-14 rounded-xl font-[ClashDisplay-Semibold] hover:bg-transparent hover:text-[#06E7F2]"
            style={{ border: '1px solid #06E7F2' }}
          >
            {t("content.button_contact_us")}
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default About;