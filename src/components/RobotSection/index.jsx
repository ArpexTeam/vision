import back from "../../images/Background.jpg";
import "./style.css";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useState, useRef } from "react";
import * as THREE from "three";


import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Model({ isVisible }) {
    const gltf = useLoader(GLTFLoader, "/models/Modelo-textura.gltf"); // Caminho do seu modelo
    const headRef = useRef();
    const mixerRef = useRef(null);

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

    useFrame(({ mouse }) => {
        if (headRef.current) {
            // Definição dos limites para evitar exageros
            const maxRotationX = Math.PI / 3;  // Máximo de 30 graus para cima/baixo
            const maxRotationY = Math.PI / 3;  // Máximo de 30 graus para olhar para os lados
    
            // Ajuste para manter a posição inicial correta
            const initialRotationX = 1.8;  // Inclinação inicial
            const initialRotationY = 0;    // Sem rotação inicial para o "não"
    
            // Movimento do mouse ajustado corretamente
            const moveX = -mouse.y * maxRotationX; // Movimento vertical (olhar para cima/baixo)
            const moveY = -mouse.x * maxRotationY; // Movimento horizontal (girar a cabeça para os lados)
    
            // Aplicar os movimentos ajustados
            headRef.current.rotation.x = initialRotationX + moveX; // Inclinação para cima/baixo
            headRef.current.rotation.z = initialRotationY + moveY; // Agora ele gira para os lados como um "não"
        }
    });

    useFrame((_, delta) => {
        if (mixerRef.current) mixerRef.current.update(delta); // Atualiza a animação a cada frame
    });

    // Ajuste de posição e escala
    gltf.scene.scale.set(4, 4, 4); // Diminui o modelo caso esteja muito grande
    gltf.scene.position.set(0, 0.3, 0);

    return <primitive object={gltf.scene} />;
}


function Robot() {
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

  return (
    <div
      style={{
        backgroundImage: `url(${back})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 30%",
      }}
      className="bg-black w-full py-20 h-[1100px] md:h-[800px] relative"
    >
      <div className="max-w-[1280px] w-4/5 mr-auto ml-auto h-full relative">
        <div className="flex justify-center content-center w-full h-full flex-wrap text-white -mt-20">
          <h1 className="mb-20 font-[ClashDisplay-Bold] text-[38px] md:text-[45px] ">
            Our Services
          </h1>
          <div className="w-full h-fit flex justify-center">

      
            <div className="relative ml-auto md:ml-0 w-52 h-20">
              <button className="absolute top-0 left-2 md:-left-9 md:right-11 w-52 md:w-72 h-20 font-[ClashDisplay-semibold] text-[20px] text-gray-300
              bg-gradient-to-r from-stone-950 to-gray-950 rounded-lg z-10 flex items-center justify-center">
                CGI 3D
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
              <button className="absolute top-0 -right-2 md:right-11 w-52 h-20 font-[ClashDisplay-semibold] text-[20px] text-gray-300
              bg-gradient-to-r from-stone-950 to-gray-950 rounded-lg z-10 flex items-center justify-center">
                3D Modeling
              </button>
              <div className="absolute -top-1 md:right-10 w-[218px] h-[87px] rounded-md z-0 flex items-center justify-center text-gray-300
              before:absolute before:inset-0 before:-z-10 before:rounded-lg 
              before:bg-gradient-to-r before:from-cyan-600/90 before:to-gray-950/10 
              before:p-[2px] before:content-['']">
              </div>
            </div>
            <div className="relative w-52 h-20 ml-auto">
              <button className="absolute top-0 -right-2 md:right-[85px] w-52 h-20 font-[ClashDisplay-semibold] text-[20px] text-gray-300
              bg-gradient-to-r from-stone-950 to-gray-950 rounded-lg z-10 flex items-center justify-center">
              <p>
                Website creation <br />
                and editing
              </p>
              </button>
              <div className="absolute -top-1 md:right-20 w-[218px] h-[87px] rounded-md z-0 flex items-center justify-center text-gray-300
              before:absolute before:inset-0 before:-z-10 before:rounded-lg 
              before:bg-gradient-to-r before:from-cyan-600/90 before:to-gray-950/10 
              before:p-[2px] before:content-['']">
              </div>
            </div>
            <div className="relative w-52 h-20 ml-auto">
              <button className="absolute top-0 -right-2 md:right-11 w-52 h-20 font-[ClashDisplay-semibold] text-[20px] text-gray-300
              bg-gradient-to-r from-stone-950 to-gray-950 rounded-lg z-10 flex items-center justify-center">
                <p>Graphic <br /> Animation</p>
              </button>
              <div className="absolute -top-1 md:right-10 w-[218px] h-[87px] rounded-md z-0 flex items-center justify-center text-gray-300
              before:absolute before:inset-0 before:-z-10 before:rounded-lg 
              before:bg-gradient-to-r before:from-cyan-600/90 before:to-gray-950/10 
              before:p-[2px] before:content-['']">
              </div>
            </div>
          </div>
          <div className="w-1/3">
          <div ref={modelRef} className="w-1/2 md:w-full absolute -left-12 md:left-0 -mt-16 md:-mt-5 first-letter h-[800px] md:h-[400px]">
          <Canvas camera={{ position: [3, 3, 0], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Model isVisible={isVisible} />
      </Canvas>
          </div>
          </div>
          <div className="w-full md:w-3/12 flex flex-col gap-5 flex-wrap mt-6 md:mt-0">
            <div className="relative w-52 h-20 ml-auto">
              <button className="absolute top-0 left-2 md:left-11 w-52 h-[70px] font-[ClashDisplay-semibold] text-[20px] text-gray-300
              bg-gradient-to-r from-stone-950 to-gray-950 rounded-lg z-10 flex items-center justify-center">
                3D Animation
              </button>
              <div className="absolute -top-1 md:left-10 w-[218px] h-[78px] rounded-md z-0 flex items-center justify-center text-gray-300
              before:absolute before:inset-0 before:-z-10 before:rounded-lg 
              md:before:bg-gradient-to-r before:bg-gradient-to-l before:to-cyan-600/90 before:from-gray-950/10 
              before:p-[2px] before:content-['']">
              </div>
            </div>
            <div className="relative w-52 h-20 ml-auto">
              <button className="absolute left-2 top-0 md-1 md:left-[85px] w-52 h-20 font-[ClashDisplay-semibold] text-[20px] text-gray-300
              bg-gradient-to-r from-stone-950 to-gray-950 rounded-lg z-10 flex items-center justify-center">
                <p>Video <br /> Productions</p>
              </button>
              <div className="absolute -top-1 md:left-20 w-[218px] h-[87px] rounded-md z-0 flex items-center justify-center text-gray-300
              before:absolute before:inset-0 before:-z-10 before:rounded-lg 
              md:before:bg-gradient-to-r before:bg-gradient-to-l before:to-cyan-600/90 before:from-gray-950/10 
              before:p-[2px] before:content-['']">
              </div>
            </div>
            <div className="relative w-52 h-20 ml-auto">
              <button className="absolute top-0 left-2 md:left-11 w-52 h-20 font-[ClashDisplay-semibold] text-[20px] text-gray-300
              bg-gradient-to-r from-stone-950 to-gray-950 rounded-lg z-10 flex items-center justify-center">
                Motion Design
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
