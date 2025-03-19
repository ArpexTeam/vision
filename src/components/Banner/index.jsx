import thumb from '../../images/sponsor.png';
import video1 from '../../images/Motion Sponsor_1.mp4';
import { useTranslation } from "react-i18next";
import "../../lib/i18n";



function Banner(){

    const { t } = useTranslation();

    return(
        <div className="bg-black w-full pb-10 h-auto relative">
            <div className="max-w-[1280px] w-4/5 mr-auto ml-auto h-auto relative">
            <h2 className='text-[32px] md:text-[40px] font-[ClashDisplay-Semibold]'>{t("content.title_sponsor")}</h2>
                <div className="w-full h-40 md:h-72 rounded-3xl mt-20">
                    <video
                    className="rounded-xl bg-slate-900"
                            width="100%"
                            height="100%"
                            loop
                            autoPlay
                            muted
                        >
                            <source src={video1} type="video/mp4" />
                            {t("content.sponsor-error")}
                        </video>
                </div>
            </div>
        </div>
    );
}

export default Banner;