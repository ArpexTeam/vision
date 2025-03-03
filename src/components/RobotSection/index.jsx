import back from '../../images/Background.jpg';
import './style.css';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations  } from "@react-three/drei";
import { useEffect } from "react";


function Model() {
    const { scene, animations } = useGLTF("/models/Robozinho.glb");
    const { actions } = useAnimations(animations, scene); // Obtém animações

    useEffect(() => {
        if (actions && actions["animation_0"]) {  // Substitua "Idle" pelo nome da animação correta
            console.log(actions);
            actions["animation_0"].play();
          }
      }, [actions]);


 
    return <primitive object={scene} scale={0.3} position={[0, -200, 200]}/>;
  }

function Robot(){
    return(
        <div style={{backgroundImage:`url(${back})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'0 30%'}} className='bg-black w-full py-20 md:h-[700px] relative'>
            <div className='max-w-[1280px] w-4/5 mr-auto ml-auto h-full relative'>      
                <div className='flex justify-center content-center w-full h-full flex-wrap text-white'>
                    <h1 className="mb-20 font-[ClashDisplay-Bold] text-[45px]">Our Services</h1>
                    <div className='w-full h-fit mb-5 md:mb-0'>
                        <div className="w-40 md:w-52 h-fit p-1 md:mr-auto ml-auto gradientDiv">
                        <button className='font-[ClashDisplay-Medium] text-[13px] md:text-[20px] mr-auto ml-auto border w-full h-20 bg-gradient-to-b from-[#06E5F1]/10 to-[#000000]/15 rounded-xl'>
                            CGI 3D
                        </button>
                        </div>
                    </div>
                    <Canvas className='absolute' camera={{ position: [300, 1000, 0], fov: 50, near: 0.1, far: 10000 }}>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[5, 5, 5]} intensity={1} />
                        <Model />
                        <OrbitControls enableZoom={false}/>
                    </Canvas>
                    <div className='w-full md:w-3/12 flex flex-col gap-5 mb-5 md:mb-0'>
                    <button className='font-[ClashDisplay-Medium] text-[13px] md:text-[20px] ml-auto border w-40 md:w-11/12 h-20 bg-gradient-to-r from-[#06E5F108]/10 to-[#00000026]/15 rounded-md'>
                        3D Modeling
                        </button>
                        <button className='font-[ClashDisplay-Medium] text-[13px] md:text-[20px] md:mr-auto ml-auto border w-40 md:w-full h-20 bg-gradient-to-r from-[#06E5F108]/10 to-[#00000026]/15 rounded-md'>
                        Website creation and editing
                        </button>
                        <button className='font-[ClashDisplay-Medium] text-[13px] md:text-[20px] ml-auto border w-40 md:w-11/12 h-20 bg-gradient-to-r from-[#06E5F108]/10 to-[#00000026]/15 rounded-md'>
                        Graphic Animation
                        </button>
                        </div>
                    
                    <div className='hidden md:block w-1/3'></div>
                    <div className='w-full md:w-3/12 flex flex-col gap-5 mb-5 md:mb-0'>
                    <button className='font-[ClashDisplay-Medium] text-[13px] md:text-[20px] md:mr-auto ml-auto md:ml-0 border w-40 md:w-11/12 h-20 bg-gradient-to-l from-[#06E5F108]/10 to-[#00000026]/15 rounded-md'>
                         3D Animation
                        </button>
                        <button className='font-[ClashDisplay-Medium] text-[13px] md:text-[20px] md:mr-auto ml-auto border w-40 md:w-full h-16 bg-gradient-to-l from-[#06E5F108]/10 to-[#00000026]/15 rounded-md'>
                        Video Productions
                        </button>
                        <button className='font-[ClashDisplay-Medium] text-[13px] md:text-[20px] md:mr-auto ml-auto md:ml-0 border w-40 md:w-11/12 h-20 bg-gradient-to-l from-[#06E5F108]/10 to-[#00000026]/15 rounded-md'>
                        Motion Design
                        </button>
                    </div>
                    </div>
                </div>
            </div>
    
    );
}

export default Robot;