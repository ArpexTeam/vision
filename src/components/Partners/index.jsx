import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import { Autoplay, Pagination } from 'swiper/modules';

import partner1 from '../../images/partnerLogo1.svg';
import partner2 from '../../images/partnerLogo2.svg';
import partner3 from '../../images/partnerLogo3.svg';
import partner4 from '../../images/partnerLogo4.svg';
import partner5 from '../../images/partnerLogo5.svg';
import partner6 from '../../images/partnerLogo6.svg';
import partner7 from '../../images/partnerLogo7.svg';

function Partners() {
  // Criando a referência do swiper
  const swiperRef = useRef(null);

  // Adicionando os eventos de mouseenter e mouseleave dentro do useEffect
  useEffect(() => {
    const swiperContainer = swiperRef.current;

    // Garantir que a instância do Swiper tenha sido montada
    if (swiperContainer) {
      const swiperInstance = swiperContainer.swiper;

      // Adicionando o evento de mouseenter para parar o autoplay
      const handleMouseEnter = () => {
        swiperInstance.autoplay.stop(); // Para o autoplay
        swiperInstance.setTranslate(swiperInstance.getTranslate()); // Força a parada da transição
        console.log('stop autoplay');
      };

      // Adicionando o evento de mouseleave para reiniciar o autoplay
      const handleMouseLeave = () => {
      // Salva a posição do slide atual antes de reiniciar o autoplay
      const currentSlide = swiperInstance.realIndex;
        
      swiperInstance.autoplay.start(); // Retoma o autoplay
      
      // Após reiniciar o autoplay, reconfigura a transição para um valor baixo
      swiperInstance.slideTo(currentSlide, 0); // Retorna imediatamente para o slide atual
      console.log('start autoplay');
      };

      // Adicionando os event listeners
      swiperContainer.addEventListener('mouseenter', handleMouseEnter);
      swiperContainer.addEventListener('mouseleave', handleMouseLeave);

      // Remover os event listeners quando o componente for desmontado
      return () => {
        swiperContainer.removeEventListener('mouseenter', handleMouseEnter);
        swiperContainer.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []); // O array vazio garante que o efeito seja executado apenas uma vez, após a montagem

  return (
    <div className='h-44 bg-black py-24 box-content'>
      <Swiper
        spaceBetween={40}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 0,
        }}
        breakpoints={{
          200: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        speed={5000}
        freeModeMomentum={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper bg-transparent"
        id="swiper1"
        ref={swiperRef} // Atribuindo a referência ao Swiper
      >
        <SwiperSlide><img src={partner1} className='w-full h-full bg-transparent hover:blur-[2px]' /></SwiperSlide>
        <SwiperSlide><img src={partner2} className='w-full h-full bg-transparent hover:blur-[2px]' /></SwiperSlide>
        <SwiperSlide><img src={partner3} className='w-full h-full bg-transparent hover:blur-[2px]' /></SwiperSlide>
        <SwiperSlide><img src={partner4} className='w-full h-full bg-transparent hover:blur-[2px]' /></SwiperSlide>
        <SwiperSlide><img src={partner5} className='w-full h-full bg-transparent hover:blur-[2px]' /></SwiperSlide>
        <SwiperSlide><img src={partner6} className='w-full h-full bg-transparent hover:blur-[2px]' /></SwiperSlide>
        <SwiperSlide><img src={partner7} className='w-full h-full bg-transparent hover:blur-[2px]' /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Partners;
