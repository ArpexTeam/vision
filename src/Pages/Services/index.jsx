import CardService from '../../components/CardService';
import cardImg from '../../images/Video-Production.jpg';
import cardImg2 from '../../images/MotionDesign.jpg';
import cardImg3 from '../../images/CGI-3D.jpg';
import cardImg4 from '../../images/3DModeling.jpg';
import cardImg5 from '../../images/3D-animation.jpg';
import cardImg6 from '../../images/Graphics.jpg';
import cardImg7 from '../../images/Website.jpg';
import ImageService from '../../images/Image-service.svg';
import IconService from '../../images/icone-eventos.png';
import './style.css';
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations  } from "@react-three/drei";
import { useEffect, useState, useRef } from "react";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

import { useTranslation } from "react-i18next";
import "../../lib/i18n";


import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Environment } from '@react-three/drei';  // For HDR environment map
import { useLocation } from "react-router-dom";
import gsap from "gsap"; // Importa GSAP para suavização




function Model({ isVisible }) {
  const gltf = useLoader(GLTFLoader, "/models/Drone site2.glb");
  const mixerRef = useRef(null);
  const actionRef = useRef(null);
  const scrollTimeout = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { scene, gl: renderer } = useThree();

  const backgroundMeshRef = useRef(null);

  // Carregamento do HDRi
  const hdrTexture = useLoader(RGBELoader, "/hdris/minedump_flats_4k.hdr");

  useEffect(() => {
    if (hdrTexture) {
      console.log("texturizando");
      hdrTexture.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = hdrTexture; // Configura a iluminação da cena

      // Criar e adicionar o fundo HDRi
      const backgroundGeometry = new THREE.SphereGeometry(500, 60, 40);
      backgroundGeometry.scale(-1, 1, 1); // Inverter para dentro
      // Atualizar a intensidade e a exposição
      scene.environment.intensity = 14;
      renderer.toneMappingExposure = 0.7;
    }
  }, [hdrTexture, scene]);

  

  // Configuração da animação do modelo
  useEffect(() => {
    if (!gltf) return;

    gltf.scene.rotation.y = 4.4;
    gltf.scene.rotation.x = 0;
    
    if (gltf.animations.length > 0) {
      mixerRef.current = new THREE.AnimationMixer(gltf.scene);
      const action = mixerRef.current.clipAction(gltf.animations[0]);

      action.setLoop(THREE.LoopOnce, Infinity);
      action.clampWhenFinished = true;
      action.enabled = true;
      action.play();
      actionRef.current = action;

      mixerRef.current.addEventListener("finished", () => {
        if (actionRef.current) {
          actionRef.current.fadeOut(1.5);
        }
      });
    }
  }, [gltf]);

  const isPlayingRef = useRef(isPlaying);

  // Efeito de scroll para controlar animação
  useEffect(() => {

    const handleScroll = () => {
      const scrollDistance = Math.abs(window.scrollY);
      console.log('Distância do topo:', scrollDistance);

      if(scrollDistance > 3400 || scrollDistance < 80){
        return;
      }

      document.getElementById("drone").style.top = scrollDistance+"px";
 
      if (!isPlayingRef.current) {
        if (!mixerRef.current || !actionRef.current) {
          return;
        }

        setIsPlaying(true);
        actionRef.current.setEffectiveTimeScale(1);
        isPlayingRef.current = true;
        actionRef.current.play();
        actionRef.current.time = 4;
        actionRef.current.fadeIn(0.2);
      }

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

      scrollTimeout.current = setTimeout(() => {
        if (mixerRef.current && actionRef.current) {
            gsap.to(actionRef.current, {
                duration: 0.14, // 🔥 Tempo total da transição
                onUpdate: function () {
                    let progress = this.progress(); // Progresso da animação (0 a 1)
                    let newSpeed = 1 - progress * 1; // 🔥 Agora desacelera 4x mais rápido
                    actionRef.current.setEffectiveTimeScale(newSpeed);
                },
                onComplete: () => {
                    //actionRef.current.fadeOut(1.5); // 🔥 Faz um fade suave antes de parar
                    
                    setTimeout(() => {
                        if (actionRef.current) {
                  
                            setIsPlaying(false);
                            isPlayingRef.current = false;
                        }
                    }, 200); // Tempo extra para garantir suavidade
                },
            });
        }
    }, 600);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  useFrame((_, delta) => {
    if (mixerRef.current) mixerRef.current.update(delta);
  });

  gltf.scene.scale.set(0.54, 0.54, 0.54);

  return <primitive object={gltf.scene} />;
}





function Services() {

  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const modelRef = useRef();
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (modelRef.current) observer.observe(modelRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const line1 = document.getElementById("line1");
    const circle1 = document.getElementById("ellipse1");
    const circle2 = document.getElementById("ellipse2");
    const circle3 = document.getElementById("ellipse3");
    const circle4 = document.getElementById("ellipse4");
    const circle5 = document.getElementById("ellipse5");
    const circle6 = document.getElementById("ellipse6");
    const circle7 = document.getElementById("ellipse7");
    const circle8 = document.getElementById("ellipse8");
  
    if (line1) {
      const length = line1.getTotalLength();
      const lengthCir1 = circle1.getTotalLength();
      const lengthCir2 = circle2.getTotalLength();
      const lengthCir3 = circle3.getTotalLength();
      const lengthCir4 = circle4.getTotalLength();
      const lengthCir5 = circle5.getTotalLength();
      const lengthCir6 = circle6.getTotalLength();
      const lengthCir7 = circle7.getTotalLength();
      const lengthCir8 = circle8.getTotalLength();
  
      // Inicializar os valores de strokeDasharray e strokeDashoffset
      line1.style.strokeDasharray = length;
      line1.style.strokeDashoffset = length;

      circle1.style.strokeDasharray = lengthCir1;
      circle1.style.strokeDashoffset = lengthCir1;

      circle2.style.strokeDasharray = lengthCir2;
      circle2.style.strokeDashoffset = lengthCir2;

      circle3.style.strokeDasharray = lengthCir3;
      circle3.style.strokeDashoffset = lengthCir3;

      circle4.style.strokeDasharray = lengthCir4;
      circle4.style.strokeDashoffset = lengthCir4;

      circle5.style.strokeDasharray = lengthCir5;
      circle5.style.strokeDashoffset = lengthCir5;

      circle6.style.strokeDasharray = lengthCir6;
      circle6.style.strokeDashoffset = lengthCir6;

      circle7.style.strokeDasharray = lengthCir7;
      circle7.style.strokeDashoffset = lengthCir7;

      circle8.style.strokeDasharray = lengthCir8;
      circle8.style.strokeDashoffset = lengthCir8;
  
      // Aguardar a linha entrar na viewport e então animar
      const observer1 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("A linha entrou na viewport!");
            animateLine1();
            observer1.disconnect();
          }
        });
      }, { threshold: 0.09, once: true });

            // Aguardar a linha entrar na viewport e então animar
      const observer2 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("A linha entrou na viewport!");
            animateCircle1();
            observer2.disconnect();
          }
        });
      }, { threshold: 0.09, once: true });

      const observer3 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("A linha entrou na viewport!");
            animateCircle2();
            observer2.disconnect();
          }
        });
      }, { threshold: 0.09, once: true });

      const observer4 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("A linha entrou na viewport!");
            animateCircle3();
            observer2.disconnect();
          }
        });
      }, { threshold: 0.09, once: true });

      const observer5 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("A linha entrou na viewport!");
            animateCircle4();
            observer2.disconnect();
          }
        });
      }, { threshold: 0.09, once: true });

      const observer6 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("A linha entrou na viewport!");
            animateCircle5();
            observer2.disconnect();
          }
        });
      }, { threshold: 0.09, once: true });

      const observer7 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("A linha entrou na viewport!");
            animateCircle6();
            observer2.disconnect();
          }
        });
      }, { threshold: 0.09, once: true });

      const observer8 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("A linha entrou na viewport!");
            animateCircle7();
            observer2.disconnect();
          }
        });
      }, { threshold: 0.09, once: true });

      const observer9 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("A linha entrou na viewport!");
            animateCircle8();
            observer2.disconnect();
          }
        });
      }, { threshold: 0.09, once: true });
  
      observer1.observe(line1);
      observer2.observe(circle1);
      observer3.observe(circle2);
      observer4.observe(circle3);
      observer5.observe(circle4);
      observer6.observe(circle5);
      observer7.observe(circle6);
      observer8.observe(circle7);
      observer9.observe(circle8);

    }
  }, []);
  
  const animateLine1 = () => {
    const line1 = document.getElementById("line1");
    const length = line1.getTotalLength();
    
    console.log("Executando animação...");
  
    // Aplicando a animação corretamente
    line1.animate(
      [
        { strokeDashoffset: length }, // Linha oculta
        { strokeDashoffset: 0, fill:'rgb(73, 73, 73)' }       // Linha desenhada (visível)
      ],
      {
        duration: 4000,              // Duração da animação
        fill: 'forwards',            // Manter o estado final após a animação
      }
    );
  };

  const animateCircle1 = () => {
    const circle = document.getElementById("ellipse1");
    const length = circle.getTotalLength();
    const shadow1 = document.getElementById("shadow1");

    console.log("Executando animação...");
  
    // Aplicando a animação corretamente
    circle.animate(
      [
        { strokeDashoffset: length }, // Linha oculta
        { strokeDashoffset: 0 }       // Linha desenhada (visível)
      ],
      {
        duration: 1000,              // Duração da animação
        fill: 'forwards',            // Manter o estado final após a animação
      }
    );


  };

  const animateCircle2 = () => {
    const circle = document.getElementById("ellipse2");
    const length = circle.getTotalLength();
    const shadow1 = document.getElementById("shadow1");

    console.log("Executando animação...");
  
    // Aplicando a animação corretamente
    circle.animate(
      [
        { strokeDashoffset: length }, // Linha oculta
        { strokeDashoffset: 0 }       // Linha desenhada (visível)
      ],
      {
        duration: 1000,              // Duração da animação
        fill: 'forwards',            // Manter o estado final após a animação
      }
    );


  };

  const animateCircle3 = () => {
    const circle = document.getElementById("ellipse3");
    const length = circle.getTotalLength();
    const shadow1 = document.getElementById("shadow1");

    console.log("Executando animação...");
  
    // Aplicando a animação corretamente
    circle.animate(
      [
        { strokeDashoffset: length }, // Linha oculta
        { strokeDashoffset: 0 }       // Linha desenhada (visível)
      ],
      {
        duration: 1000,              // Duração da animação
        fill: 'forwards',            // Manter o estado final após a animação
      }
    );


  };

  const animateCircle4 = () => {
    const circle = document.getElementById("ellipse4");
    const length = circle.getTotalLength();
    const shadow1 = document.getElementById("shadow1");

    console.log("Executando animação...");
  
    // Aplicando a animação corretamente
    circle.animate(
      [
        { strokeDashoffset: length }, // Linha oculta
        { strokeDashoffset: 0 }       // Linha desenhada (visível)
      ],
      {
        duration: 1000,              // Duração da animação
        fill: 'forwards',            // Manter o estado final após a animação
      }
    );


  };

  const animateCircle5 = () => {
    const circle = document.getElementById("ellipse5");
    const length = circle.getTotalLength();
    const shadow1 = document.getElementById("shadow1");

    console.log("Executando animação...");
  
    // Aplicando a animação corretamente
    circle.animate(
      [
        { strokeDashoffset: length }, // Linha oculta
        { strokeDashoffset: 0 }       // Linha desenhada (visível)
      ],
      {
        duration: 1000,              // Duração da animação
        fill: 'forwards',            // Manter o estado final após a animação
      }
    );


  };

  const animateCircle6 = () => {
    const circle = document.getElementById("ellipse6");
    const length = circle.getTotalLength();
    const shadow1 = document.getElementById("shadow1");

    console.log("Executando animação...");
  
    // Aplicando a animação corretamente
    circle.animate(
      [
        { strokeDashoffset: length }, // Linha oculta
        { strokeDashoffset: 0 }       // Linha desenhada (visível)
      ],
      {
        duration: 1000,              // Duração da animação
        fill: 'forwards',            // Manter o estado final após a animação
      }
    );


  };

  const animateCircle7 = () => {
    const circle = document.getElementById("ellipse7");
    const length = circle.getTotalLength();
    const shadow1 = document.getElementById("shadow1");

    console.log("Executando animação...");
  
    // Aplicando a animação corretamente
    circle.animate(
      [
        { strokeDashoffset: length }, // Linha oculta
        { strokeDashoffset: 0 }       // Linha desenhada (visível)
      ],
      {
        duration: 1000,              // Duração da animação
        fill: 'forwards',            // Manter o estado final após a animação
      }
    );


  };

  const animateCircle8 = () => {
    const circle = document.getElementById("ellipse8");
    const length = circle.getTotalLength();
    const shadow1 = document.getElementById("shadow1");

    console.log("Executando animação...");
  
    // Aplicando a animação corretamente
    circle.animate(
      [
        { strokeDashoffset: length }, // Linha oculta
        { strokeDashoffset: 0 }       // Linha desenhada (visível)
      ],
      {
        duration: 1000,              // Duração da animação
        fill: 'forwards',            // Manter o estado final após a animação
      }
    );


  };

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  
  
  

  return (
    <div className="bg-black w-full pt-16 h-auto relative">
      <div className="max-w-[1280px] w-4/5 mr-auto ml-auto h-auto relative">

      <div className="relative md:text-left flex flex-col md:flex-row items-center md:items-start justify-between mb-16 sm:mb-16">
        <div className="w-full md:w-1/2 lg:w-2/3">
        <h1 className="font-[ClashDisplay-Bold] text-[40px] mb-2 sm:mb-4">{t("services.our_services")}</h1>
        <h2 className="font-[ClashDisplay-medium] text-[30px] mb-4 sm:mb-8">{t("services.description_service")}</h2>

        <h2 className="text-pretty font-[ClashDisplay-Light] text-[17px]">
          {t("services.text_page_service")}
          </h2>
          </div>

          <div className="hidden sm:block h-56 w-full mt-6 md:mt-0 md:w-1/2 lg:w-1/3">
            <img className='w-60 md:ml-10'  src={IconService} alt="icone-image" />
          </div>
      </div>

      <svg style={{ transform: "translateY(-5px)", transform:"translateX(-200px)" }} className='float-right hidden sm:block right-10' width="87" height="3310" viewBox="0 0 87 4110" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="line1" d="M42 0.566244L27.5662 15L42 29.4338L56.4338 15L42 0.566244ZM39.5 15L39.5 4067H44.5L44.5 15H39.5Z" fill="#494949"/>
<g style={{ transform: "translateY(25px)" }} filter="url(#filter0_d_1009_4703)">
<ellipse id="shadow1" cx="43.5" cy="354.709" rx="12.5" ry="12.1152" fill="black"/>
<path id="ellipse1" d="M55.5 354.709C55.5 361.109 50.1423 366.324 43.5 366.324C36.8577 366.324 31.5 361.109 31.5 354.709C31.5 348.309 36.8577 343.094 43.5 343.094C50.1423 343.094 55.5 348.309 55.5 354.709Z" stroke="#06E5F1"/>
</g>

<g style={{ transform: "translateY(-50px)" }} filter="url(#filter1_d_1009_4703)">
<ellipse cx="44.5" cy="891.654" rx="12.5" ry="12.1152" fill="black"/>
<path id="ellipse2" d="M56.5 891.654C56.5 898.055 51.1423 903.27 44.5 903.27C37.8577 903.27 32.5 898.055 32.5 891.654C32.5 885.254 37.8577 880.039 44.5 880.039C51.1423 880.039 56.5 885.254 56.5 891.654Z" stroke="#06E5F1"/>
</g>

<g style={{ transform: "translateY(60px)" }} filter="url(#filter2_d_1009_4703)">
<ellipse cx="42.5" cy="1370" rx="12.5" ry="12.1152" fill="black"/>
<path id="ellipse3" d="M54.5 1371.42C54.5 1377.82 49.1423 1383.04 42.5 1383.04C35.8577 1383.04 30.5 1377.82 30.5 1371.42C30.5 1365.02 35.8577 1359.8 42.5 1359.8C49.1423 1359.8 54.5 1365.02 54.5 1371.42Z" stroke="#06E5F1"/>
</g>

<g style={{ transform: "translateY(-80px)" }} filter="url(#filter3_d_1009_4703)">
<ellipse cx="42.5" cy="1994.63" rx="12.5" ry="12.1152" fill="black"/>
<path id="ellipse4" d="M54.5 1994.63C54.5 2001.03 49.1423 2006.24 42.5 2006.24C35.8577 2006.24 30.5 2001.03 30.5 1994.63C30.5 1988.23 35.8577 1983.01 42.5 1983.01C49.1423 1983.01 54.5 1988.23 54.5 1994.63Z" stroke="#06E5F1"/>
</g>

<g style={{ transform: "translateY(-130px)" }} filter="url(#filter4_d_1009_4703)">
<ellipse cx="42.5" cy="2639.15" rx="12.5" ry="12.1152" fill="black"/>
<path id="ellipse5" d="M54.5 2639.15C54.5 2645.55 49.1423 2650.77 42.5 2650.77C35.8577 2650.77 30.5 2645.55 30.5 2639.15C30.5 2632.75 35.8577 2627.54 42.5 2627.54C49.1423 2627.54 54.5 2632.75 54.5 2639.15Z" stroke="#06E5F1"/>
</g>

<g style={{ transform: "translateY(-180px)" }} filter="url(#filter5_d_1009_4703)">
<ellipse cx="42.5" cy="3161.57" rx="12.5" ry="12.1152" fill="black"/>
<path id="ellipse6" d="M54.5 3161.57C54.5 3167.97 49.1423 3173.18 42.5 3173.18C35.8577 3173.18 30.5 3167.97 30.5 3161.57C30.5 3155.17 35.8577 3149.95 42.5 3149.95C49.1423 3149.95 54.5 3155.17 54.5 3161.57Z" stroke="#06E5F1"/>
</g>

<g style={{ transform: "translateY(20px)" }} filter="url(#filter6_d_1009_4703)">
<ellipse cx="42.5" cy="3556.04" rx="12.5" ry="12.1152" fill="black"/>
<path id="ellipse7" d="M54.5 3556.04C54.5 3562.44 49.1423 3567.65 42.5 3567.65C35.8577 3567.65 30.5 3562.44 30.5 3556.04C30.5 3549.64 35.8577 3544.42 42.5 3544.42C49.1423 3544.42 54.5 3549.64 54.5 3556.04Z" stroke="#06E5F1"/>
</g>
<g filter="url(#filter7_d_1009_4703)">
<ellipse cx="42.5" cy="4067.12" rx="12.5" ry="12.1152" fill="black"/>
<path id="ellipse8" d="M54.5 4067.12C54.5 4073.52 49.1423 4078.73 42.5 4078.73C35.8577 4078.73 30.5 4073.52 30.5 4067.12C30.5 4060.71 35.8577 4055.5 42.5 4055.5C49.1423 4055.5 54.5 4060.71 54.5 4067.12Z" stroke="#06E5F1"/>
</g>
<defs>
<filter id="filter0_d_1009_4703" x="1" y="312.594" width="85" height="84.2305" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="15"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0235294 0 0 0 0 0.898039 0 0 0 0 0.945098 0 0 0 0.56 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1009_4703"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1009_4703" result="shape"/>
</filter>
<filter id="filter1_d_1009_4703" x="2" y="849.539" width="85" height="84.2305" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="15"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0235294 0 0 0 0 0.898039 0 0 0 0 0.945098 0 0 0 0.56 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1009_4703"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1009_4703" result="shape"/>
</filter>
<filter id="filter2_d_1009_4703" x="0" y="1329.3" width="85" height="84.2305" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="15"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0235294 0 0 0 0 0.898039 0 0 0 0 0.945098 0 0 0 0.56 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1009_4703"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1009_4703" result="shape"/>
</filter>
<filter id="filter3_d_1009_4703" x="0" y="1952.51" width="85" height="84.2305" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="15"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0235294 0 0 0 0 0.898039 0 0 0 0 0.945098 0 0 0 0.56 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1009_4703"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1009_4703" result="shape"/>
</filter>
<filter id="filter4_d_1009_4703" x="0" y="2597.04" width="85" height="84.2305" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="15"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0235294 0 0 0 0 0.898039 0 0 0 0 0.945098 0 0 0 0.56 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1009_4703"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1009_4703" result="shape"/>
</filter>
<filter id="filter5_d_1009_4703" x="0" y="3119.45" width="85" height="84.2305" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="15"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0235294 0 0 0 0 0.898039 0 0 0 0 0.945098 0 0 0 0.56 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1009_4703"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1009_4703" result="shape"/>
</filter>
<filter id="filter6_d_1009_4703" x="0" y="3513.92" width="85" height="84.2305" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="15"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0235294 0 0 0 0 0.898039 0 0 0 0 0.945098 0 0 0 0.56 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1009_4703"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1009_4703" result="shape"/>
</filter>
<filter id="filter7_d_1009_4703" x="0" y="4025" width="85" height="84.2305" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="15"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0235294 0 0 0 0 0.898039 0 0 0 0 0.945098 0 0 0 0.56 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1009_4703"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1009_4703" result="shape"/>
</filter>
</defs>
</svg>

          <div ref={modelRef} id="drone" className="w-full md:w-[400px] absolute right-0 top-[180px] hidden md:block z-[998] first-letter h-[400px]">
          <Canvas camera={{ position: [3, 1, 0], fov: 50 }} width="150px">
        <ambientLight intensity={3} />
        <directionalLight position={[5, 5, 5]} intensity={7} />
        <Model isVisible={isVisible} />
      </Canvas>
          </div>
        <div className="text-center relative sm:-top-8 sm:mb-10">
          <h2 className="font-[ClashDisplay-SemiBold] text-[48px] flex sm:flex-none justify-center items-center sm:justify-center sm:items-start ">{t("navbar.services")}</h2>
        </div>

        <div className='relative w-full md:w-2/3'>
          <div className="pb-2 mt-40 md:mt-20">
            <CardService id="card-1" image={cardImg} title={t("services.video_production")} textBody={t("services.description_production")}
             top="md:mt-0 -mt-[150px]" left="" paddingDirection={"p-10 md:p-0 md:pl-10 md:pr-16"} marginDirection="-ml-0 md:-ml-16" flexDirection="flex-col md:flex-row" gradientDirection="bg-gradient-to-l" />
            
            <CardService id="card_2" image={cardImg2} paddingDirection={"md:pr-10 md:pl-24 p-10"} title={t("services.motion_design")} textBody={t("services.description_motion")}
             top="mt-[60px] md:mt-[150px]" left="" marginDirection="-mr-0 md:-mr-20" flexDirection="flex-col md:flex-row-reverse" gradientDirection="bg-gradient-to-l" />
           </div>

            
            <CardService id="card_3" image={cardImg3} title={t("services.cgi_3d")}
             textBody={t("services.description_cgi_3d")} paddingDirection={"md:pl-10 md:pr-20 p-10"} 
             top="mt-[60px] sm:mt-[150px] md:mt-[150px]" left="" marginDirection="-ml-0 md:-ml-20" flexDirection="flex-col md:flex-row" gradientDirection="bg-gradient-to-l" />
            
            <CardService id="card_4" image={cardImg4} title={t("services.3d_modeling")} 
            textBody={t("services.description_modeling")} paddingDirection={"md:pr-10 md:pl-24 p-10"} 
            top="mt-[60px] sm:mt-[150px] md:mt-[150px]" left="" marginDirection="-mr-0 md:-mr-20" flexDirection="flex-col md:flex-row-reverse" gradientDirection="bg-gradient-to-l" />
            
            <CardService image={cardImg5} title={t("services.3d_animation")}
             textBody={t("services.description_3d_animation")} paddingDirection={"md:pl-10 md:pr-16 p-10"} 
             top="mt-[60px] sm:mt-[150px] md:mt-[150px]" left="" marginDirection="-ml-0 md:-ml-20" flexDirection="flex-col md:flex-row" gradientDirection="bg-gradient-to-l" />
            
            <CardService image={cardImg6} title={t("services.graphic_animation")}
             textBody={t("services.description_graphic_animation")} paddingDirection={"pr-10 md:pl-24 p-10"} 
             top="mt-[60px] sm:mt-[150px] md:mt-[150px]" left="" marginDirection="-mr-0 md:-mr-20" flexDirection="flex-col md:flex-row-reverse" gradientDirection="bg-gradient-to-l" />
          
          <CardService image={cardImg7} title={t("services.website_creation")} className="whitespace-pre-line"
             textBody={t("services.description_website")} paddingDirection={"md:pl-10 md:pr-16 p-10"} 
             top="mt-[60px] sm:mt-[150px] md:mt-[150px]" left="" marginDirection="-ml-0 md:-ml-20" flexDirection="flex-col md:flex-row" gradientDirection="bg-gradient-to-l" />
            
            <div className="relative w-full text-center md:text-left mt-16 sm:mt-40 md:mt-36">
              <h2 className="font-[ClashDisplay-Bold] text-[28px] mb-7">{t("services.our_numbers_in_2024")}</h2>
              <div className='flex gap-6 md:gap-10 justify-between'>
              <div>
                <h2 className='text-[#00FF55] text-[26px] font-[ClashDisplay-Semibold]'>+100</h2>
                <p className='textGradient font-[ClashDisplay-Semibold] text-[13px]'>{t("services.projects_successfully_completed")}</p>
              </div>
              <div>
              <h2 className='text-[#00FF55] text-[26px] font-[ClashDisplay-Semibold]'>35</h2>
              <p className='textGradient font-[ClashDisplay-Semibold] text-[13px]'>{t("services.companies_served")}</p>
              </div>
              <div>
              <h2 className='text-[#00FF55] text-[26px] font-[ClashDisplay-Semibold]'>98%</h2>
              <p className='textGradient font-[ClashDisplay-Semibold] text-[13px]'>{t("services.increase_in_client_satisfaction")}</p>
              </div>
              </div>
            </div>
          
          </div>
        </div>
        <div className="w-full py-10 mt-5 sm:mt-20 bg-[#070707] flex justify-center">
        <div className="max-w-[1280px] w-full flex flex-col items-center text-center px-4">
          <h2 className="font-[ClashDisplay-medium] text-[20px] md:text-[26px] w-2/3 text-center whitespace-pre-line">{t("content.title_contact_us")}</h2>
          <button className="mt-10 bg-[#06E7F2] h-fit w-fit p-3 px-14 rounded-xl font-[ClashDisplay-Semibold] hover:bg-transparent hover:text-[#06E7F2]" style={{border:'1px solid #06E7F2'}}>{t("content.button_contact_us")}</button>
        </div>
      </div>
      </div>

  );
}

export default Services;
