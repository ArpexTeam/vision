import thumb from '../../images/sponsor.png';
import video1 from '../../images/Motion Sponsor.MP4';



function Banner(){
    return(
        <div className="bg-black w-full pb-10 h-auto relative">
            <div className="max-w-[1280px] w-4/5 mr-auto ml-auto h-auto relative">
            <h1 className='text-[38px] font-[ClashDisplay-Semibold]'>Oficial Sponsor 2025</h1>
                <div className="w-full h-72 rounded-3xl mt-20">
                    <video
                    className="rounded-xl"
                            width="100%"
                            height="100%"
                            loop
                            autoPlay
                            muted
                        >
                            <source src={video1} type="video/mp4" />
                            Seu navegador não suporta a tag de vídeo.
                        </video>
                </div>
            </div>
        </div>
    );
}

export default Banner;