import React, { useEffect, useState } from 'react';
import CardService from '../../components/CardService';
import cardImg from '../../images/cardImg1.png';
import cardImg2 from '../../images/cardImg2.jpeg';
import cardImg3 from '../../images/cardImg3.jpeg';
import cardImg4 from '../../images/cardImg4.png';
import cardImg5 from '../../images/cardImg5.jpeg';
import cardImg6 from '../../images/cardImg6.jpeg';
import './style.css';

function Services() {

      // Funções de animação para cada linha
  const animateLine1 = () => {
    const line1 = document.getElementById("line1");
    const length = line1.getTotalLength();
    line1.animate(
      [
        { strokeDashoffset: length },
        { strokeDashoffset: 0 },
      ],
      {
        duration: 2000,
        fill: 'forwards',
      }
    );
  };

  const animateLine2 = () => {
    const line2 = document.getElementById("line2");
    const length = line2.getTotalLength();
    line2.animate(
      [
        { strokeDashoffset: length },
        { strokeDashoffset: 0 },
      ],
      {
        duration: 2000,
        fill: 'forwards',
      }
    );
  };

  const animateLine3 = () => {
    const line3 = document.getElementById("line3");
    const length = line3.getTotalLength();
    line3.animate(
      [
        { strokeDashoffset: length },
        { strokeDashoffset: 0 },
      ],
      {
        duration: 2000,
        fill: 'forwards',
      }
    );
  };

  const animateLine4 = () => {
    const line4 = document.getElementById("line4");
    const length = line4.getTotalLength();
    line4.animate(
      [
        { strokeDashoffset: length },
        { strokeDashoffset: 0 },
      ],
      {
        duration: 2000,
        fill: 'forwards',
      }
    );
  };

  const animateLine5 = () => {
    const line5 = document.getElementById("line5");
    const length = line5.getTotalLength();
    line5.animate(
      [
        { strokeDashoffset: length },
        { strokeDashoffset: 0 },
      ],
      {
        duration: 2000,
        fill: 'forwards',
      }
    );
  };

  //-----------------------------------
  const animateCircle1 = () => {
    const circle1 = document.getElementById("circle1");
    const length = circle1.getTotalLength();
    circle1.animate(
      [
        { strokeDashoffset: length },
        { strokeDashoffset: 0 },
      ],
      {
        duration: 500,
        fill: 'forwards',
      }
    );
  };
  const animateCircle2 = () => {
    const circle2 = document.getElementById("circle2");
    const length = circle2.getTotalLength();
    circle2.animate(
      [
        { strokeDashoffset: length },
        { strokeDashoffset: 0 },
      ],
      {
        duration: 500,
        fill: 'forwards',
      }
    );
  };
  const animateCircle3 = () => {
    const circle3 = document.getElementById("circle3");
    const length = circle3.getTotalLength();
    circle3.animate(
      [
        { strokeDashoffset: length },
        { strokeDashoffset: 0 },
      ],
      {
        duration: 500,
        fill: 'forwards',
      }
    );
  };
  const animateCircle4 = () => {
    const circle4 = document.getElementById("circle4");
    const length = circle4.getTotalLength();
    circle4.animate(
      [
        { strokeDashoffset: length },
        { strokeDashoffset: 0 },
      ],
      {
        duration: 500,
        fill: 'forwards',
      }
    );
  };
  const animateCircle5 = () => {
    const circle5 = document.getElementById("circle5");
    const length = circle5.getTotalLength();
    circle5.animate(
      [
        { strokeDashoffset: length },
        { strokeDashoffset: 0 },
      ],
      {
        duration: 500,
        fill: 'forwards',
      }
    );
  };
  const animateCircle6 = () => {
    const circle6 = document.getElementById("circle6");
    const length = circle6.getTotalLength();
    circle6.animate(
      [
        { strokeDashoffset: length },
        { strokeDashoffset: 0 },
      ],
      {
        duration: 500,
        fill: 'forwards',
      }
    );
  };
  const animateCircle7 = () => {
    const circle7 = document.getElementById("circle7");
    const length = circle7.getTotalLength();
    circle7.animate(
      [
        { strokeDashoffset: length },
        { strokeDashoffset: 0 },
      ],
      {
        duration: 500,
        fill: 'forwards',
      }
    );
  };
  const animateCircle8 = () => {
    const circle8 = document.getElementById("circle8");
    const length = circle8.getTotalLength();
    circle8.animate(
      [
        { strokeDashoffset: length },
        { strokeDashoffset: 0 },
      ],
      {
        duration: 500,
        fill: 'forwards',
      }
    );
  };

  const animateCircle9 = () => {
    const circle9 = document.getElementById("circle9");
    const length = circle9.getTotalLength();
    circle9.animate(
      [
        { strokeDashoffset: length },
        { strokeDashoffset: 0 },
      ],
      {
        duration: 500,
        fill: 'forwards',
      }
    );
  };

  const animateCircle10 = () => {
    const circle10 = document.getElementById("circle10");
    const length = circle10.getTotalLength();
    circle10.animate(
      [
        { strokeDashoffset: length },
        { strokeDashoffset: 0 },
      ],
      {
        duration: 500,
        fill: 'forwards',
      }
    );
  };

  const animateCircle11 = () => {
    const circle11 = document.getElementById("circle11");
    const length = circle11.getTotalLength();
    circle11.animate(
      [
        { strokeDashoffset: length },
        { strokeDashoffset: 0 },
      ],
      {
        duration: 500,
        fill: 'forwards',
      }
    );
  };

  const animateCircle12 = () => {
    const circle12 = document.getElementById("circle12");
    const length = circle12.getTotalLength();
    circle12.animate(
      [
        { strokeDashoffset: length },
        { strokeDashoffset: 0 },
      ],
      {
        duration: 500,
        fill: 'forwards',
      }
    );
  };

  useEffect(() => {
    // Criando um observer para cada linha

    // Observer para line1
    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateLine1();
          observer1.disconnect();  // Função para animar a linha 1
        }
      });
    }, { threshold: 0.2, once: true });

    const line1 = document.getElementById("line1");
    observer1.observe(line1);

    // Observer para line2
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateLine2(); 
          observer2.disconnect(); // Função para animar a linha 2
        }
      });
    }, { threshold: 0.2, once: true });

    const line2 = document.getElementById("line2");
    observer2.observe(line2);

    // Observer para line3
    const observer3 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateLine3();
          observer3.disconnect();  // Função para animar a linha 3
        }
      });
    }, { threshold: 0.2, once: true });

    const line3 = document.getElementById("line3");
    observer3.observe(line3);

    // Observer para line4
    const observer4 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateLine4();
          observer4.disconnect();  // Função para animar a linha 4
        }
      });
    }, { threshold: 0.2, once: true });

    const line4 = document.getElementById("line4");
    observer4.observe(line4);

    // Observer para line5
    const observer5 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateLine5();
          observer5.disconnect();  // Função para animar a linha 5
        }
      });
    }, { threshold: 0.2, once: true });

    const line5 = document.getElementById("line5");
    observer5.observe(line5);
    
    //--------------------------------------------------------------

    const observer6 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCircle1(); 
            observer6.disconnect(); // Função para animar a linha 5
          }
        });
      }, { threshold: 0.2, once: true });
  
      const circle1 = document.getElementById("circle1");
      observer6.observe(circle1);

      const observer7 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCircle2();
            observer7.disconnect();  // Função para animar a linha 5
          }
        });
      }, { threshold: 0.2,once: true });
  
      const circle2 = document.getElementById("circle2");
      observer7.observe(circle2);

      const observer8 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCircle3();
            observer8.disconnect();  // Função para animar a linha 5
          }
        });
      }, { threshold: 0.2, once: true });
  
      const circle3 = document.getElementById("circle3");
      observer8.observe(circle3);

      const observer9 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCircle4();
            observer9.disconnect();  // Função para animar a linha 5
          }
        });
      }, { threshold: 0.2, once: true });
  
      const circle4 = document.getElementById("circle4");
      observer9.observe(circle4);

      const observer10 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCircle5(); 
            observer10.disconnect(); // Função para animar a linha 5
          }
        });
      }, { threshold: 0.2, once: true });
  
      const circle5 = document.getElementById("circle5");
      observer10.observe(circle5);

      const observer11 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCircle6(); 
            observer11.disconnect(); // Função para animar a linha 5
          }
        });
      }, { threshold: 0.2, once: true });
  
      const circle6 = document.getElementById("circle6");
      observer11.observe(circle6);

      const observer12 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCircle7();
            observer12.disconnect();  // Função para animar a linha 5
          }
        });
      }, { threshold: 0.2, once: true });
  
      const circle7 = document.getElementById("circle7");
      observer12.observe(circle7);

      const observer13 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCircle8(); 
            observer13.disconnect(); // Função para animar a linha 5
          }
        });
      }, { threshold: 0.2, once: true });
  
      const circle8 = document.getElementById("circle8");
      observer13.observe(circle8);

      const observer14 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCircle9(); 
            observer14.disconnect(); // Função para animar a linha 5
          }
        });
      }, { threshold: 0.2, once: true });
  
      const circle9 = document.getElementById("circle9");
      observer14.observe(circle9);

      const observer15 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCircle10(); 
            observer15.disconnect(); // Função para animar a linha 5
          }
        });
      }, { threshold: 0.2, once: true });
  
      const circle10 = document.getElementById("circle10");
      observer15.observe(circle10);

      const observer16 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCircle11();
            observer16.disconnect();  // Função para animar a linha 5
          }
        });
      }, { threshold: 0.2, once: true });
  
      const circle11 = document.getElementById("circle11");
      observer16.observe(circle11);

      const observer17 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCircle12();
            observer17.disconnect();  // Função para animar a linha 5
          }
        });
      }, { threshold: 0.2, once: true });
  
      const circle12 = document.getElementById("circle12");
      observer17.observe(circle12);

  }, []);
 
    

  useEffect(() => {
    // Aguardar o DOM ser completamente carregado
    setTimeout(() => {
      // Obtenção das referências de cada linha com getElementById
      const line = document.getElementById("line1");
      const line1 = document.getElementById("line2");
      const line2 = document.getElementById("line3");
      const line3 = document.getElementById("line4");
      const line4 = document.getElementById("line5");

      const circle1 = document.getElementById("circle1");
      const circle2 = document.getElementById("circle2");
      const circle3 = document.getElementById("circle3");
      const circle4 = document.getElementById("circle4");
      const circle5 = document.getElementById("circle5");
      const circle6 = document.getElementById("circle6");
      const circle7 = document.getElementById("circle7");
      const circle8 = document.getElementById("circle8");
      const circle9 = document.getElementById("circle9");
      const circle10 = document.getElementById("circle10");
      const circle11 = document.getElementById("circle11");
      const circle12 = document.getElementById("circle12");

      // Verificar se as linhas estão presentes
      if (line && line1 && line2 && line3 && line4) {
        // Obter os comprimentos de cada linha
        const length = line.getTotalLength();
        const lineLength1 = line1.getTotalLength();
        const lineLength2 = line2.getTotalLength();
        const lineLength3 = line3.getTotalLength();
        const lineLength4 = line4.getTotalLength();

         // Obter os comprimentos de cada círculo (perímetro)
         const circleLength1 = circle1.getTotalLength();
         const circleLength2 = circle2.getTotalLength();
         const circleLength3 = circle3.getTotalLength();
         const circleLength4 = circle4.getTotalLength();
         const circleLength5 = circle5.getTotalLength();
         const circleLength6 = circle6.getTotalLength();
         const circleLength7 = circle7.getTotalLength();
         const circleLength8 = circle8.getTotalLength();
         const circleLength9 = circle8.getTotalLength();
         const circleLength10 = circle8.getTotalLength();
         const circleLength11 = circle8.getTotalLength();
         const circleLength12 = circle8.getTotalLength();


        // Inicializar as linhas com o valor de strokeDashoffset igual ao comprimento do caminho
        line.style.strokeDasharray = length;
        line.style.strokeDashoffset = length;

        line1.style.strokeDasharray = lineLength1;
        line1.style.strokeDashoffset = lineLength1;

        line2.style.strokeDasharray = lineLength2;
        line2.style.strokeDashoffset = lineLength2;

        line3.style.strokeDasharray = lineLength3;
        line3.style.strokeDashoffset = lineLength3;

        line4.style.strokeDasharray = lineLength4;
        line4.style.strokeDashoffset = lineLength4;

             // Inicializar os círculos com o valor de strokeDashoffset igual ao comprimento do círculo
             circle1.style.strokeDasharray = circleLength1;
             circle1.style.strokeDashoffset = circleLength1;
             circle2.style.strokeDasharray = circleLength2;
             circle2.style.strokeDashoffset = circleLength2;
             circle3.style.strokeDasharray = circleLength3;
             circle3.style.strokeDashoffset = circleLength3;
             circle4.style.strokeDasharray = circleLength4;
             circle4.style.strokeDashoffset = circleLength4;
             circle5.style.strokeDasharray = circleLength5;
             circle5.style.strokeDashoffset = circleLength5;
             circle6.style.strokeDasharray = circleLength6;
             circle6.style.strokeDashoffset = circleLength6;
             circle7.style.strokeDasharray = circleLength7;
             circle7.style.strokeDashoffset = circleLength7;
             circle8.style.strokeDasharray = circleLength8;
             circle8.style.strokeDashoffset = circleLength8;
             circle9.style.strokeDasharray = circleLength9;
             circle9.style.strokeDashoffset = circleLength9;
             circle10.style.strokeDasharray = circleLength10;
             circle10.style.strokeDashoffset = circleLength10;
             circle11.style.strokeDasharray = circleLength11;
             circle11.style.strokeDashoffset = circleLength11;
             circle12.style.strokeDasharray = circleLength12;
             circle12.style.strokeDashoffset = circleLength12;

      }
    }, 100); // Aguardar 100ms para garantir que o DOM esteja completamente renderizado
  }, []); // Executa somente uma vez após o componente ser montado

  

  return (
    <div className="bg-black w-full pt-20 h-auto relative">
    <svg width="1310" className='absolute' height="4579" viewBox="0 0 1310 4579" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="line1" d="M43 0.669873L38.6699 4.99996L43 9.33013L47.3301 5.00004L43 0.669873ZM42.25 4.99999L42.2345 1572L43.7345 1572L43.75 5.00001L42.25 4.99999Z" fill="#494949"/>
<g filter="url(#filter0_d_628_1357)">
<circle id="circle1" cx="43.5" cy="464.5" r="12.5" fill="black"/>
<circle id="circle2" cx="43.5" cy="464.5" r="12" stroke="#06E5F1"/>
</g>
<g filter="url(#filter1_d_628_1357)">
<circle id="circle3" cx="44.5" cy="1166.5" r="12.5" fill="black"/>
<circle id="circle4" cx="44.5" cy="1166.5" r="12" stroke="#06E5F1"/>
</g>
<path id="line2" d="M1265.75 1570L1267.01 3128" stroke="#494949" stroke-width="1.5"/>
<g filter="url(#filter2_d_628_1357)">
<circle id="circle5" cx="1267.5" cy="1998.5" r="12.5" fill="black"/>
<circle id="circle6" cx="1267.5" cy="1998.5" r="12" stroke="#06E5F1"/>
</g>
<g filter="url(#filter3_d_628_1357)">
<circle id="circle7" cx="1267.5" cy="2634.5" r="12.5" fill="black"/>
<circle id="circle8" cx="1267.5" cy="2634.5" r="12" stroke="#06E5F1"/>
</g>
<line id="line3" x1="42.998" y1="1570.21" x2="1266" y2="1570.21" stroke="#494949" stroke-width="1.5"/>
<line id="line4" x1="43" y1="3127.25" x2="1267" y2="3127.25" stroke="#494949" stroke-width="1.5"/>
<path id="line5" d="M43.4727 4578.33L47.8028 4574L43.4727 4569.67L39.1425 4574L43.4727 4578.33ZM42.7227 3127L42.7227 4574H44.2227L44.2227 3127H42.7227Z" fill="#494949"/>
<g filter="url(#filter4_d_628_1357)">
<circle id="circle9" cx="42.5" cy="3525.5" r="12.5" fill="black"/>
<circle id="circle10" cx="42.5" cy="3525.5" r="12" stroke="#06E5F1"/>
</g>
<g filter="url(#filter5_d_628_1357)">
<circle id="circle11" cx="44.5" cy="4159.5" r="12.5" fill="black"/>
<circle id="circle12" cx="44.5" cy="4159.5" r="12" stroke="#06E5F1"/>
</g>
<defs>
<filter id="filter0_d_628_1357" x="1" y="422" width="85" height="85" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="15"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0235294 0 0 0 0 0.898039 0 0 0 0 0.945098 0 0 0 0.56 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_628_1357"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_628_1357" result="shape"/>
</filter>
<filter id="filter1_d_628_1357" x="2" y="1124" width="85" height="85" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="15"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0235294 0 0 0 0 0.898039 0 0 0 0 0.945098 0 0 0 0.56 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_628_1357"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_628_1357" result="shape"/>
</filter>
<filter id="filter2_d_628_1357" x="1225" y="1956" width="85" height="85" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="15"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0235294 0 0 0 0 0.898039 0 0 0 0 0.945098 0 0 0 0.56 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_628_1357"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_628_1357" result="shape"/>
</filter>
<filter id="filter3_d_628_1357" x="1225" y="2592" width="85" height="85" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="15"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0235294 0 0 0 0 0.898039 0 0 0 0 0.945098 0 0 0 0.56 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_628_1357"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_628_1357" result="shape"/>
</filter>
<filter id="filter4_d_628_1357" x="0" y="3483" width="85" height="85" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="15"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0235294 0 0 0 0 0.898039 0 0 0 0 0.945098 0 0 0 0.56 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_628_1357"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_628_1357" result="shape"/>
</filter>
<filter id="filter5_d_628_1357" x="2" y="4117" width="85" height="85" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="15"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0235294 0 0 0 0 0.898039 0 0 0 0 0.945098 0 0 0 0.56 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_628_1357"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_628_1357" result="shape"/>
</filter>
</defs>
</svg>

      <div className="max-w-[1280px] w-4/5 mr-auto ml-auto h-auto relative">
        <div className="text-left">
          <h1 className="font-[ClashDisplay-Bold] text-[48px]">Serviços</h1>
          <p className="text-[#F5F5F7] font-[ClashDisplay-ExtraLight]">Descubra nossos serviços personalizados para destacar sua marca no mercado.</p>
        </div>

        <div>
          <div className="pb-96 mt-64">
            <CardService image={cardImg} left="left-0 md:-left-20" marginDirection="-ml-48 md:-ml-16" flexDirection="flex-row" gradientDirection="bg-gradient-to-l" />
            <CardService image={cardImg2} top="mt-[400px]" left="left-0 md:left-20" marginDirection="-mr-48 md:-mr-20" flexDirection="flex-row-reverse" gradientDirection="bg-gradient-to-l" />
            <CardService image={cardImg3} top="mt-[550px]" left="left-0 md:-left-20" marginDirection="-ml-48 md:-ml-20" flexDirection="flex-row" gradientDirection="bg-gradient-to-l" />
            <CardService image={cardImg4} top="mt-[400px]" left="left-0 md:left-20" marginDirection="-mr-48 md:-mr-20" flexDirection="flex-row-reverse" gradientDirection="bg-gradient-to-l" />
            <CardService image={cardImg5} top="mt-[600px]" left="left-0 md:-left-20" marginDirection="-ml-48 md:-ml-20" flexDirection="flex-row" gradientDirection="bg-gradient-to-l" />
            <CardService image={cardImg6} top="mt-[300px]" left="left-0 md:left-20" marginDirection="-mr-48 md:-mr-20" flexDirection="flex-row-reverse" gradientDirection="bg-gradient-to-l" />
          </div>
        </div>
      </div>

      <div className="w-full py-20 bg-[#070707]">
        <div className="max-w-[1280px] ml-auto mr-auto flex justify-center text-center md:text-left w-4/5 md:flex-row flex-col items-center">
          <h1 className="font-[ClashDisplay-Regular] text-[26px] w-2/3">Destaque-se no mercado com sites modernos, logos únicos e animações de alta qualidade</h1>
          <button className="md:mr-auto mt-10 bg-[#06E7F2] h-fit w-fit p-4 px-6 rounded-xl font-[ClashDisplay-Semibold] hover:bg-transparent hover:text-[#06E7F2]" style={{border:'1px solid #06E7F2'}}>Reserve agora seu evento</button>
        </div>
      </div>
    </div>
  );
}

export default Services;
