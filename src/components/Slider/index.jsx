import React, { useState } from 'react';
import video1 from '../../images/Home.mp4';
import './style.css';

function Slider() {
  const [isMuted, setIsMuted] = useState(true);  // Inicialmente o vídeo é mudo

  const handleVideoEnd = () => {
    // Após a primeira repetição, podemos alterar a lógica do som, se necessário
    setIsMuted(false); // Aqui eu estou só silenciando após o fim do vídeo
  };

  return (
    <div className="bg-[#242424] w-full h-[500px] slider relative">
      <video
<<<<<<< HEAD
        className="w-full h-full object-cover"
=======
        width="100%"
        height="100%"
>>>>>>> 79e6a68819721e49f2aaab7ab626b79f4ea45e1d
        loop
        autoPlay
        muted={isMuted}  // O vídeo começa mudo
        onEnded={handleVideoEnd}
      >
        <source src={video1} type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
    </div>
  );
}

export default Slider;
