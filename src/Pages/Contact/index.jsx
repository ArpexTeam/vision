import world from '../../images/world.jpeg';
import React, { useState, useRef } from 'react';



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
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations  } from "@react-three/drei";
import { useEffect } from "react";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import * as THREE from "three";


import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Model() {
    const gltf = useLoader(GLTFLoader, "/models/globo.glb");
    const mixerRef = useRef(null);
    const actionRef = useRef(null);
    const { camera } = useThree();
  
    // Variáveis de controle do zoom e fade-out
    const zoomSpeed = 0.02;
    const zoomTarget = 3; // Ponto em que começa a desaparecer
    const fadeStart = 3.5; // Distância em que começa a perder opacidade
    const [zoomActive, setZoomActive] = useState(false);
    const [opacity, setOpacity] = useState(1);
  
    useEffect(() => {
      if (!gltf) return;
      gltf.scene.rotation.x = 13.4;
      gltf.scene.rotation.y = 0.8;

      // Deixa o material transparente
      gltf.scene.traverse((node) => {
        if (node.isMesh) {
          node.material.transparent = true;
        }
      });
  
      if (gltf.animations.length > 0) {
        mixerRef.current = new THREE.AnimationMixer(gltf.scene);
        const action = mixerRef.current.clipAction(gltf.animations[0]);
  
        action.setLoop(THREE.LoopOnce, Infinity);
        action.clampWhenFinished = true;
        action.enabled = true;
        action.timeScale = 0.5;
        action.play();
        actionRef.current = action;
        mixerRef.current.addEventListener("finished", () => {
          if (actionRef.current) {
            actionRef.current.fadeOut(1.5);
          }
        });
      }
  
      // Aguarda 2.3s antes de ativar o zoom
      const timeout = setTimeout(() => {
        setZoomActive(true);
      }, 2300);
  
      return () => clearTimeout(timeout);
    }, [gltf]);
  
    gltf.scene.scale.set(0.1, 0.1, 0.1);
    gltf.scene.position.set(0, 0, 0);
  
    useFrame(() => {
      if (zoomActive) {
        console.log(camera.position.z);
        
        // Aplica zoom e aumenta escala
        gltf.scene.scale.x += 0.001;
        gltf.scene.scale.y += 0.001;
        gltf.scene.scale.z += 0.001;

        camera.lookAt(gltf.scene.position);
        
        setTimeout(() => {
            gltf.scene.traverse((node) => {
                if (node.isMesh) {
                  node.material.opacity -= 0.01;
                  if(node.material.opacity <= 0.2){
                    document.getElementById("mapaGoogle").style.opacity = 1;
                    document.getElementById("worldAnimation").style.display = "none";
                    document.getElementById("contactForm").style.opacity = 1;

                }
                }

               
            });

        }, 800);

      

        
      }
    });
  
    useFrame((_, delta) => {
      if (mixerRef.current) mixerRef.current.update(delta);
    });
  

    return <primitive object={gltf.scene} />;
}


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
        <div className='w-full pt-20 h-auto relative bg-black'>
                   <div id="worldAnimation" className='w-full h-[700px] absolute z-30'>
                      <Canvas camera={{ position: [3, 10, 0], fov: 50 }} width="100vw" height="300px">
                    <ambientLight intensity={3} />
                    <directionalLight position={[5, 5, 5]} intensity={7} />
                    <Model/>
                  </Canvas>
                  </div>

                  <iframe id="mapaGoogle" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.720496711281!2d9.1436055!3d45.19275389999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47872655e5b0970d%3A0xbbb95258ec199069!2sVia%20Teodoro%20Lovati%2C%2020%2C%2027100%20Pavia%20PV%2C%20It%C3%A1lia!5e0!3m2!1spt-BR!2sbr!4v1742254221646!5m2!1spt-BR!2sbr" className='invert w-full h-[700px] absolute transition-all opacity-0' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className='max-w-[1280px] w-4/5 mr-auto ml-auto h-auto relative pointer-events-none'>

          
            <div className='flex z-10 relative pt-10'>
                 <div className='w-0 md:w-1/2'></div>
                 <div id="contactForm" className='pointer-events-auto opacity-0 transition-all w-full md:w-9/12 lg:w-5/12 bg-black rounded-lg p-6 md:p-14 border border-[#414141]'>
                    <h1 className='font-[ClashDisplay-Bold] text-[30px]'>CONTACT</h1>
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
                     <h2 className='text-[28px] md:text-[36px] font-[ClashDisplay-Bold] mb-5'>Your feedback matters!</h2>
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