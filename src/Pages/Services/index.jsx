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
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations  } from "@react-three/drei";
import { useEffect, useState, useRef } from "react";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import * as THREE from "three";


import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Model({ isVisible }) {
    const gltf = useLoader(GLTFLoader, "/models/Drone.glb"); // Caminho do seu modelo
    const headRef = useRef();
    const mixerRef = useRef(null);
    const [scrollTriggered, setScrollTriggered] = useState(false); // Usado para evitar chamadas repetidas de animação


    useEffect(() => {
        if (!gltf) return;
        gltf.scene.rotation.y = 89.7; // Gira 180 graus no eixo Y


        let parts = [];

        // Procurando a cabeça dentro do modelo
        gltf.scene.traverse((child) => {
            if (child.name.toLowerCase().includes("head")) {
                parts.push(child);
            }
        });

        headRef.current = parts[0];

        // Configuração da animação (caso existam animações no modelo)
        if (gltf.animations.length > 0) {
            console.log(gltf.animations);
            mixerRef.current = new THREE.AnimationMixer(gltf.scene);
            const action = mixerRef.current.clipAction(gltf.animations[0]); // Pegamos a primeira animação
            action.setLoop(THREE.LoopOnce, 1); // Executa uma vez
            action.clampWhenFinished = true; // Mantém o último frame quando terminar
            action.play();
        }
    }, [gltf]);

      // Detecta o evento de scroll
    //   useEffect(() => {
    //     const handleScroll = () => {
    //         if (!scrollTriggered) {
    //             setScrollTriggered(true); // Marca que o scroll ocorreu
    //             console.log(mixerRef.current);
    //             if (mixerRef.current) {
    //                 const action = mixerRef.current.clipAction(gltf.animations[0]);
    //                 action.reset(); // Reinicia a animação
    //                 action.play(); // Executa a animação
    //                 console.log("aaaa");

    //             }
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     // Remove o listener quando o componente for desmontado
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, [gltf]);

    // useFrame(({ mouse }) => {
    //     if (headRef.current) {
    //         // Definição dos limites para evitar exageros
    //         const maxRotationX = Math.PI / 3;  // Máximo de 30 graus para cima/baixo
    //         const maxRotationY = Math.PI / 3;  // Máximo de 30 graus para olhar para os lados
    
    //         // Ajuste para manter a posição inicial correta
    //         const initialRotationX = 1.8;  // Inclinação inicial
    //         const initialRotationY = 0;    // Sem rotação inicial para o "não"
    
    //         // Movimento do mouse ajustado corretamente
    //         const moveX = -mouse.y * maxRotationX; // Movimento vertical (olhar para cima/baixo)
    //         const moveY = -mouse.x * maxRotationY; // Movimento horizontal (girar a cabeça para os lados)
    
    //         // Aplicar os movimentos ajustados
    //         headRef.current.rotation.x = initialRotationX + moveX; // Inclinação para cima/baixo
    //         headRef.current.rotation.z = initialRotationY + moveY; // Agora ele gira para os lados como um "não"
    //     }
    // });

    useFrame((_, delta) => {
        if (mixerRef.current) mixerRef.current.update(delta); // Atualiza a animação a cada frame
    });

    // Ajuste de posição e escala
    gltf.scene.scale.set(1, 1, 1); // Diminui o modelo caso esteja muito grande
    gltf.scene.position.set(0, 0.3, 0);

    return <primitive object={gltf.scene} />;
}

function Services() {
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
  
  
  

  return (
    <div className="bg-black w-full pt-28 h-auto relative">
      <div className="max-w-[1280px] w-4/5 mr-auto ml-auto h-auto relative">

      <div className="relative md:text-left flex flex-col md:flex-row items-center md:items-start justify-between mb-40">
        <div className="w-full md:w-1/2 lg:w-2/3">
        <h1 className="font-[ClashDisplay-Bold] text-[40px] mb-4">Our Services</h1>
        <h1 className="font-[ClashDisplay-medium] text-[30px] mb-8">Difficulty to sell? We are the solution</h1>

        <h1 className="font-[ClashDisplay-Light] text-[17px]">
          We offer complete solutions in video and animation, from creation to final delivery.
          Our portfolio includes advertising, corporate videos, 2D/3D animations, and more.
          </h1>
          </div>

          <div className="h-56 w-full mt-6 md:mt-0 md:w-1/2 lg:w-1/3">
            <img className='w-60 ml-10'  src={IconService} alt="icone-image" />
          </div>
      </div>

      <svg style={{ transform: "translateY(-110px)" }} className='float-left hidden sm:block' width="87" height="4110" viewBox="0 0 87 4110" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="line1" d="M42 0.566244L27.5662 15L42 29.4338L56.4338 15L42 0.566244ZM39.5 15L39.5 4067H44.5L44.5 15H39.5Z" fill="#494949"/>
<g style={{ transform: "translateY(50px)" }} filter="url(#filter0_d_1009_4703)">
<ellipse id="shadow1" cx="43.5" cy="354.709" rx="12.5" ry="12.1152" fill="black"/>
<path id="ellipse1" d="M55.5 354.709C55.5 361.109 50.1423 366.324 43.5 366.324C36.8577 366.324 31.5 361.109 31.5 354.709C31.5 348.309 36.8577 343.094 43.5 343.094C50.1423 343.094 55.5 348.309 55.5 354.709Z" stroke="#06E5F1"/>
</g>

<g style={{ transform: "translateY(20px)" }} filter="url(#filter1_d_1009_4703)">
<ellipse cx="44.5" cy="891.654" rx="12.5" ry="12.1152" fill="black"/>
<path id="ellipse2" d="M56.5 891.654C56.5 898.055 51.1423 903.27 44.5 903.27C37.8577 903.27 32.5 898.055 32.5 891.654C32.5 885.254 37.8577 880.039 44.5 880.039C51.1423 880.039 56.5 885.254 56.5 891.654Z" stroke="#06E5F1"/>
</g>

<g style={{ transform: "translateY(-20px)" }} filter="url(#filter2_d_1009_4703)">
<ellipse cx="42.5" cy="1370" rx="12.5" ry="12.1152" fill="black"/>
<path id="ellipse3" d="M54.5 1371.42C54.5 1377.82 49.1423 1383.04 42.5 1383.04C35.8577 1383.04 30.5 1377.82 30.5 1371.42C30.5 1365.02 35.8577 1359.8 42.5 1359.8C49.1423 1359.8 54.5 1365.02 54.5 1371.42Z" stroke="#06E5F1"/>
</g>

<g style={{ transform: "translateY(-130px)" }} filter="url(#filter3_d_1009_4703)">
<ellipse cx="42.5" cy="1994.63" rx="12.5" ry="12.1152" fill="black"/>
<path id="ellipse4" d="M54.5 1994.63C54.5 2001.03 49.1423 2006.24 42.5 2006.24C35.8577 2006.24 30.5 2001.03 30.5 1994.63C30.5 1988.23 35.8577 1983.01 42.5 1983.01C49.1423 1983.01 54.5 1988.23 54.5 1994.63Z" stroke="#06E5F1"/>
</g>

<g style={{ transform: "translateY(-330px)" }} filter="url(#filter4_d_1009_4703)">
<ellipse cx="42.5" cy="2639.15" rx="12.5" ry="12.1152" fill="black"/>
<path id="ellipse5" d="M54.5 2639.15C54.5 2645.55 49.1423 2650.77 42.5 2650.77C35.8577 2650.77 30.5 2645.55 30.5 2639.15C30.5 2632.75 35.8577 2627.54 42.5 2627.54C49.1423 2627.54 54.5 2632.75 54.5 2639.15Z" stroke="#06E5F1"/>
</g>

<g style={{ transform: "translateY(-340px)" }} filter="url(#filter5_d_1009_4703)">
<ellipse cx="42.5" cy="3161.57" rx="12.5" ry="12.1152" fill="black"/>
<path id="ellipse6" d="M54.5 3161.57C54.5 3167.97 49.1423 3173.18 42.5 3173.18C35.8577 3173.18 30.5 3167.97 30.5 3161.57C30.5 3155.17 35.8577 3149.95 42.5 3149.95C49.1423 3149.95 54.5 3155.17 54.5 3161.57Z" stroke="#06E5F1"/>
</g>

<g style={{ transform: "translateY(-300px)" }} filter="url(#filter6_d_1009_4703)">
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

          <div ref={modelRef} className="w-fit fixed left-10 top-10 z-[998] first-letter h-[400px]">
          <Canvas camera={{ position: [3, 3, 0], fov: 50 }} width="100px">
        <ambientLight intensity={3} />
        <directionalLight position={[5, 5, 5]} intensity={7} />
        <Model isVisible={isVisible} />
      </Canvas>
          </div>
        <div className="text-left relative -top-8 mb-24">
          <h1 className="font-[ClashDisplay-SemiBold] text-[48px] ">Services</h1>
        </div>

        <div className='relative'>
          <div className="pb-2 mt-40 md:mt-20">
            <CardService image={cardImg} title={"Video Productions"} textBody={"We create personalized plans that combine market analysis, clear goals, and effective actions to elevate your brand and achieve your business objectives."}
             top="md:mt-10 -mt-[150px]" left="" paddingDirection={"p-10 md:p-0 md:pl-10 md:pr-16"} marginDirection="-ml-0 md:-ml-16" flexDirection="flex-col md:flex-row" gradientDirection="bg-gradient-to-l" />
            
            <CardService image={cardImg2} paddingDirection={"md:pr-10 md:pl-24 p-10"} title={"Motion Design"} textBody={"With the power of motion design, we can present your promotion or product in the best way possible."}
             top="mt-[100px] md:mt-[200px]" left="" marginDirection="-mr-0 md:-mr-20" flexDirection="flex-col md:flex-row-reverse" gradientDirection="bg-gradient-to-l" />
            
            <CardService image={cardImg3} title={"CGI 3D"}
             textBody={"With the power of CGI, we insert 3D elements into real scenes, creating a perfect fusion between the virtual and the real."} paddingDirection={"md:pl-10 md:pr-20 p-10"} 
             top="mt-[100px] md:mt-[200px]" left="" marginDirection="-ml-0 md:-ml-20" flexDirection="flex-col md:flex-row" gradientDirection="bg-gradient-to-l" />
            
            <CardService image={cardImg4} title={"3D Modeling"} 
            textBody={"We model your product or scene and animate it with textures and lighting that make it realistic."} paddingDirection={"md:pr-10 md:pl-24 p-10"} 
            top="mt-[100px] md:mt-[200px]" left="" marginDirection="-mr-0 md:-mr-20" flexDirection="flex-col md:flex-row-reverse" gradientDirection="bg-gradient-to-l" />
            
            <CardService image={cardImg5} title={"3D Animation"}
             textBody={"We animate any 3D object or scene, bringing movement and life to every detail."} paddingDirection={"md:pl-10 md:pr-16 p-10"} 
             top="mt-[200px] md:mt-[200px]" left="" marginDirection="-ml-0 md:-ml-20" flexDirection="flex-col md:flex-row" gradientDirection="bg-gradient-to-l" />
            
            <CardService image={cardImg6} title={"Graphic Animation"}
             textBody={"We bring movement to your graphics to showcase your company in the best possible way, and we also offer general graphic design services."} paddingDirection={"pr-10 md:pl-24 p-10"} 
             top="mt-[100px] md:mt-[200px]" left="" marginDirection="-mr-0 md:-mr-20" flexDirection="flex-col md:flex-row-reverse" gradientDirection="bg-gradient-to-l" />
          
          <CardService image={cardImg7} title={"Website creation and editing"}
             textBody={"We design and edit websites that combine functionality and creativity to enhance your online presence and engage your audience."} paddingDirection={"md:pl-10 md:pr-16 p-10"} 
             top="mt-[200px] md:mt-[200px]" left="" marginDirection="-ml-0 md:-ml-20" flexDirection="flex-col md:flex-row" gradientDirection="bg-gradient-to-l" />
            
            <div className="relative w-full text-left mt-96">
              <h1 className="font-[ClashDisplay-Bold] text-[28px] mb-7">Our Numbers in 2024</h1>
              <div className='flex gap-10 justify-between'>
              <div>
                <h1 className='text-[#00FF55] text-[26px] font-[ClashDisplay-Semibold]'>+100</h1>
                <p className='textGradient font-[ClashDisplay-Semibold]'>Projects  successfully completed</p>
              </div>
              <div>
              <h1 className='text-[#00FF55] text-[26px] font-[ClashDisplay-Semibold]'>35</h1>
              <p className='textGradient font-[ClashDisplay-Semibold]'>Companies served</p>
              </div>
              <div>
              <h1 className='text-[#00FF55] text-[26px] font-[ClashDisplay-Semibold]'>98%</h1>
              <p className='textGradient font-[ClashDisplay-Semibold]'>Increase in client satisfaction</p>
              </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>

      <div className="w-full py-10 bg-[#070707] flex justify-center">
        <div className="max-w-[1280px] w-full flex flex-col items-center text-center px-4">
          <h1 className="font-[ClashDisplay-medium] text-[26px] w-2/3 text-center">Speak with one of our specialists and receive <br></br> a personalized quote right now</h1>
          <button className="mt-10 bg-[#06E7F2] h-fit w-fit p-3 px-14 rounded-xl font-[ClashDisplay-Semibold] hover:bg-transparent hover:text-[#06E7F2]" style={{border:'1px solid #06E7F2'}}>Contact us</button>
        </div>
      </div>
    </div>
  );
}

export default Services;
