import Slider from '../../components/Slider';
import Services from '../../components/Services';
import Banner from '../../components/Banner';
import Partners from '../../components/Partners';
import Robot from '../../components/RobotSection';
import Feedback from '../../components/Feedback';
import '../../lib/i18n';

function Home(){
    return(
        <>
        <Slider/>
        <Robot/>
        <Services/>
        <Banner/>
        <Partners/>
        <Feedback/>
        </>
    )
}

export default Home;