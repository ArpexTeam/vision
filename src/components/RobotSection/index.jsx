import back from "../../images/Background.jpg";
import "./style.css";
import { useTranslation } from "react-i18next";
import "../../lib/i18n";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap"; // Importa GSAP para suavização
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Model({ isVisible, playAnimation1, playAnimation2, playAnimation3, playAnimation4, playAnimation5, playAnimation6, playAnimation7, modelRef }) {
  const gltf = useLoader(GLTFLoader, "/models/Vision-BOt.glb");
  const headRef = useRef();
  const mixerRef = useRef(null);
  const scrollProgress = useRef(0); // Progresso real da animação
  const targetProgress = useRef(0); // Progresso alvo baseado no scroll
  const scrollSpeed = 0.0005; // Velocidade de resposta ao scroll
  const actionRef = useRef(null);
  const [unlockRobot, setUnlockRobot] = useState(true);
  

  useEffect(() => {
    if (!gltf) return;

    gltf.scene.rotation.y = 89.7;

  


    let parts = [];
    gltf.scene.traverse((child) => {
      if (child.name.toLowerCase().includes("head")) {
        parts.push(child);
      }
      if(child.name.toLowerCase() == "polygon_70" || 
      child.name.toLowerCase() == "polygon_59"||
      child.name.toLowerCase() == "logo"||
      child.name.toLowerCase() == "polygon_5"||
      child.name.toLowerCase() == "polygon_11"||
      child.name.toLowerCase() == "polygon_35"){
        console.log(child);
        child.material.emissive = new THREE.Color("#06E7F2"); // Cor verde, você pode alterar a cor
        child.material.emissiveIntensity = 1; // Intensidade do emissive
        child.material.needsUpdate = true; // Atualiza o material    
          }

          if(child.name.toLowerCase() == "logo_01" || 
          child.name.toLowerCase() == "remesh"||
          child.name.toLowerCase() == "olho_e"||
          child.name.toLowerCase() == "olho_e_1"){
            console.log(child);
            child.material.emissive = new THREE.Color(0xffffff); // Cor verde, você pode alterar a cor
            child.material.emissiveIntensity = 1; // Intensidade do emissive
            child.material.needsUpdate = true; // Atualiza o material    
          }
    });

    headRef.current = parts[0];

    // Inicializar o mixer se o modelo tiver animações
    if (gltf.animations.length > 0 && !mixerRef.current) {
      mixerRef.current = new THREE.AnimationMixer(gltf.scene);
      const action = mixerRef.current.clipAction(gltf.animations[0]);
      actionRef.current = mixerRef.current.clipAction(gltf.animations[0]);
      action.setLoop(THREE.LoopOnce, 1);
      action.clampWhenFinished = true;
      actionRef.current.play();
      actionRef.current.endTime = 0.4;
      actionRef.current.paused = true; // Inicia pausada
          }
  }, [gltf]);

  const handleAnimation = (action, shouldPlay, isReversed = false) => {
    if (shouldPlay) {
        if (action.isRunning()) return; // Evita reiniciar a animação se já estiver rodando

        action.setLoop(THREE.LoopRepeat); // Garante que a animação pode repetir
        action.reset(); // Reinicia a animação de forma suave
        action.fadeIn(0.2); // Faz um fade-in suave de 1s
        action.play();

        // Suaviza a velocidade no início
        gsap.to(action, {
            duration: 0.2,
            onUpdate: function () {
                let progress = this.progress(); // Progresso da animação (0 a 1)
                let newSpeed = 0.5 + progress * 0.9; // Acelera suavemente até a velocidade normal
                action.setEffectiveTimeScale(newSpeed);
            }
        });

    } else {
        if (!action.isRunning()) return; // Evita parar se já estiver parado
        
        // Suaviza a desaceleração antes de parar
        gsap.to(action, {
            duration: 0.2,
            onUpdate: function () {
                let progress = this.progress(); // Progresso da transição
                let newSpeed = 1 - progress * 1.3; // Reduz suavemente até quase zero
                action.setEffectiveTimeScale(newSpeed);
            },
            onComplete: () => {
                action.fadeOut(0.2); // Fade-out suave
                setTimeout(() => {
                    action.stop(); // Para completamente a animação
                    action.reset(); // Reseta para não dar tranco
                }, 1000);
            }
        });
    }
};


  useEffect(() => {
    if (!gltf || !mixerRef.current) return;

    if (gltf.animations.length > 1) {
      const action2 = mixerRef.current.clipAction(gltf.animations[1]);
      const action3 = mixerRef.current.clipAction(gltf.animations[2]);
      const action4 = mixerRef.current.clipAction(gltf.animations[3]);
      const action5 = mixerRef.current.clipAction(gltf.animations[4]);
      const action6 = mixerRef.current.clipAction(gltf.animations[5]);
      const action7 = mixerRef.current.clipAction(gltf.animations[6]);
      const action8 = mixerRef.current.clipAction(gltf.animations[7]);
  
      // Chama a função para tratar cada animação
      handleAnimation(action2, playAnimation1, !playAnimation1);
      handleAnimation(action3, playAnimation2, !playAnimation2);
      handleAnimation(action4, playAnimation3, !playAnimation3);
      handleAnimation(action5, playAnimation4, !playAnimation4);
      handleAnimation(action6, playAnimation5, !playAnimation5);
      handleAnimation(action7, playAnimation6, !playAnimation6);
      handleAnimation(action8, playAnimation7, !playAnimation7);
    }
  }, [playAnimation1, playAnimation2, playAnimation3, playAnimation4, playAnimation5, playAnimation6, playAnimation7]);

// Função para lidar com o scroll
useEffect(() => {
  let isAnimating = false; // Evita repetição da animação enquanto já está rodando
  const handleScroll = (event) => {
    if (!mixerRef.current || !actionRef.current) return;

    const rect = modelRef.current.getBoundingClientRect();
    const elementCenter = rect.top + rect.height / 2; // Ponto central do container
    const viewportCenter = window.innerHeight / 2; // Ponto central da tela

    const scrollDistance = Math.abs(window.scrollY);

    console.log(scrollDistance);
    let isVisible = scrollDistance < 800 && scrollDistance > 500;

    if (isVisible && !isAnimating) { // Se não estiver visível, não atualiza a animação
      document.body.style.overflow = "hidden"; // 🔥 Bloqueia o scroll da página

      const animationDuration = actionRef.current.getClip().duration;
      const startTime = animationDuration * 0; // 🔥 Começa em 10%
      const endTime = animationDuration * 0.6;   // 🔥 Termina em 40%

      // Ajusta o progresso do scroll (limita entre 0 e 1)
      targetProgress.current = Math.max(0, Math.min(1, targetProgress.current + event.deltaY * scrollSpeed));

      // Suaviza a transição do tempo da animação
      gsap.to(scrollProgress, {
        current: targetProgress.current,
        duration: 0.2, // Tempo de transição suave
        onUpdate: () => {
          let newTime = startTime + scrollProgress.current * (endTime - startTime);
          actionRef.current.time = Math.min(newTime, endTime); // 🔥 Garante que não ultrapasse o tempo limite
          mixerRef.current.update(0);
        },
        onComplete: () => {
          setTimeout(() => {
            isAnimating = true; 
            setTimeout(() => {
              isAnimating = false; 
            }, 1500);
          }, 2000); 
        }
      });

     // event.preventDefault(); // 🔥 Impede que a página role
    } else {
      document.body.style.overflow = ""; // 🔥 Libera o scroll quando sair da seção
    }
  };

  window.addEventListener("wheel", handleScroll);
  return () => {
    window.removeEventListener("wheel", handleScroll);
    document.body.style.overflow = ""; // Libera o scroll ao desmontar o componente
  };
}, [modelRef]);

  

  useFrame((_, delta) => {
    if (mixerRef.current) mixerRef.current.update(delta);
  });

  gltf.scene.scale.set(0.6, 0.6, 0.6);
  gltf.scene.position.set(0, -0.9, 0);

  return <primitive object={gltf.scene} />;
}

function Robot() {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const [playAnimation1, setPlayAnimation1] = useState(null);
    const [playAnimation2, setPlayAnimation2] = useState(null);
    const [playAnimation3, setPlayAnimation3] = useState(null);
    const [playAnimation4, setPlayAnimation4] = useState(null);
    const [playAnimation5, setPlayAnimation5] = useState(null);
    const [playAnimation6, setPlayAnimation6] = useState(null);
    const [playAnimation7, setPlayAnimation7] = useState(null);

    const modelRef = useRef();
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setIsVisible(entry.isIntersecting),
        { threshold: 0.5 }
      );
  
      if (modelRef.current) observer.observe(modelRef.current);
      return () => observer.disconnect();
    }, []);

    

  return (
    <div
      style={{
        backgroundImage: `url(${back})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 30%",
      }}
      className="bg-black w-full py-20 h-[1100px] md:h-[730px] relative"
    >
      <div className="max-w-[1280px] w-4/5 mr-auto ml-auto h-full relative">
        <div className="flex justify-center content-center w-full h-full flex-wrap text-white -mt-20">
          <h2 className="mb-20 font-[ClashDisplay-Bold] text-[38px] md:text-[45px] ">
          {t("services.our_services")}
          </h2>
          <div className="w-full h-fit flex justify-center">

      
            <div className="relative ml-auto md:ml-0 w-52 h-20">
              <button
                onMouseEnter={() => setPlayAnimation4(true)}
                onMouseLeave={() => setPlayAnimation4(false)}
              className="absolute top-0 left-2 md:-left-9 w-52 md:w-72 h-20 font-[ClashDisplay-semibold] text-[20px] text-gray-300
              bg-gradient-to-r from-stone-950 to-gray-950 rounded-lg z-10 flex items-center justify-center">
                {t('services.cgi_3d')}
              </button>
              <div className="absolute -top-1 -right-2.5 md:-left-10 md:right-10 w-[218px] md:w-[297px] h-[87px] md:h-[90px] rounded-md z-0 flex items-center justify-center text-gray-300
              before:absolute before:inset-0 before:-z-10 before:rounded-lg 
              before:bg-gradient-to-r md:before:bg-gradient-to-b before:from-cyan-600/90 before:to-gray-950/10 
              before:p-[2px] before:content-['']">
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/12 flex flex-col gap-5 mt-6 md:mt-0">
            <div className="relative w-52 h-20 ml-auto">
              <button
              onMouseEnter={() => setPlayAnimation3(true)}
              onMouseLeave={() => setPlayAnimation3(false)}
              className="absolute top-0 -right-2 md:right-11 w-52 h-20 font-[ClashDisplay-semibold] text-[20px] text-gray-300
              bg-gradient-to-r from-stone-950 to-gray-950 rounded-lg z-10 flex items-center justify-center">
                {t("services.3d_modeling")}
              </button>
              <div className="absolute -top-1 md:right-10 w-[218px] h-[87px] rounded-md z-0 flex items-center justify-center text-gray-300
              before:absolute before:inset-0 before:-z-10 before:rounded-lg 
              before:bg-gradient-to-r before:from-cyan-600/90 before:to-gray-950/10 
              before:p-[2px] before:content-['']">
              </div>
            </div>
            <div className="relative w-52 h-20 ml-auto">
              <button 
              onMouseEnter={() => setPlayAnimation2(true)}
              onMouseLeave={() => setPlayAnimation2(false)}
              className="absolute top-0 -right-2 md:right-[85px] w-52 h-20 font-[ClashDisplay-semibold] text-[20px] text-gray-300
              bg-gradient-to-r from-stone-950 to-gray-950 rounded-lg z-10 flex items-center justify-center p-2">
              {t("services.website_creation")}
              </button>
              <div className="absolute -top-1 md:right-20 w-[218px] h-[87px] rounded-md z-0 flex items-center justify-center text-gray-300
              before:absolute before:inset-0 before:-z-10 before:rounded-lg 
              before:bg-gradient-to-r before:from-cyan-600/90 before:to-gray-950/10 
              before:p-[2px] before:content-['']">
              </div>
            </div>
            <div className="relative w-52 h-20 ml-auto">
              <button
              onMouseEnter={() => setPlayAnimation1(true)}
              onMouseLeave={() => setPlayAnimation1(false)}
              className="absolute top-0 -right-2 md:right-11 w-52 h-20 font-[ClashDisplay-semibold] text-[20px] text-gray-300
              bg-gradient-to-r from-stone-950 to-gray-950 rounded-lg z-10 flex items-center justify-center p-4">
                {t("services.graphic_animation")}
              </button>
              <div className="absolute -top-1 md:right-10 w-[218px] h-[87px] rounded-md z-0 flex items-center justify-center text-gray-300
              before:absolute before:inset-0 before:-z-10 before:rounded-lg 
              before:bg-gradient-to-r before:from-cyan-600/90 before:to-gray-950/10 
              before:p-[2px] before:content-['']">
              </div>
            </div>
          </div>
          <div className="w-1/3">
          <div id="modelContainer" ref={modelRef} className="w-1/2 md:w-full absolute -left-12 md:left-0 mt-14 first-letter h-[800px] md:h-[400px]">
          <Canvas camera={{ position: [3.3, 1, 0], fov: 50 }}>
        <ambientLight intensity={0.1} />
        <directionalLight position={[5, 5, 5]} intensity={0.1} />
        <Model isVisible={isVisible} playAnimation1={playAnimation1} 
        playAnimation2={playAnimation2} playAnimation3={playAnimation3}
        playAnimation4={playAnimation4} playAnimation5={playAnimation5} 
        playAnimation6={playAnimation6} playAnimation7={playAnimation7}
        modelRef={modelRef}/>
      </Canvas>
          </div>
          </div>
          <div className="w-full md:w-3/12 flex flex-col gap-5 flex-wrap mt-6 md:mt-0">
            <div className="relative w-52 h-20 ml-auto">
              <button
                onMouseEnter={() => setPlayAnimation5(true)}
                onMouseLeave={() => setPlayAnimation5(false)}
                className="absolute top-0 left-2 md:left-11 w-52 h-[70px] font-[ClashDisplay-semibold] text-[20px] text-gray-300
                bg-gradient-to-r from-stone-950 to-gray-950 rounded-lg z-10 flex items-center justify-center">
                  {t("services.3d_animation")}
              </button>
              <div className="absolute -top-1 md:left-10 w-[218px] h-[78px] rounded-md z-0 flex items-center justify-center text-gray-300
              before:absolute before:inset-0 before:-z-10 before:rounded-lg 
              md:before:bg-gradient-to-r before:bg-gradient-to-l before:to-cyan-600/90 before:from-gray-950/10 
              before:p-[2px] before:content-['']">
              </div>
            </div>
            <div className="relative w-52 h-20 ml-auto">
              <button
               onMouseEnter={() => setPlayAnimation6(true)}
               onMouseLeave={() => setPlayAnimation6(false)}
              className="absolute left-2 top-0 md-1 md:left-[85px] w-52 h-20 font-[ClashDisplay-semibold] text-[20px] text-gray-300
              bg-gradient-to-r from-stone-950 to-gray-950 rounded-lg z-10 flex items-center justify-center">
                {t("services.video_production")}
              </button>
              <div className="absolute -top-1 md:left-20 w-[218px] h-[87px] rounded-md z-0 flex items-center justify-center text-gray-300
              before:absolute before:inset-0 before:-z-10 before:rounded-lg 
              md:before:bg-gradient-to-r before:bg-gradient-to-l before:to-cyan-600/90 before:from-gray-950/10 
              before:p-[2px] before:content-['']">
              </div>
            </div>
            <div className="relative w-52 h-20 ml-auto">
              <button
               onMouseEnter={() => setPlayAnimation7(true)}
               onMouseLeave={() => setPlayAnimation7(false)}
              className="absolute top-0 left-2 md:left-11 w-52 h-20 font-[ClashDisplay-semibold] text-[20px] text-gray-300
              bg-gradient-to-r from-stone-950 to-gray-950 rounded-lg z-10 flex items-center justify-center">
                {t("services.motion_design")}
              </button>
              <div className="absolute -top-1 md:left-10 w-[218px] h-[87px] rounded-md z-0 flex items-center justify-center text-gray-300
              before:absolute before:inset-0 before:-z-10 before:rounded-lg 
              md:before:bg-gradient-to-r before:bg-gradient-to-l before:to-cyan-600/90 before:from-gray-950/10 
              before:p-[2px] before:content-['']">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Robot;