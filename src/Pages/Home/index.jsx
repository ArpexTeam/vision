import Slider from '../../components/Slider';
import Services from '../../components/Services';
import Banner from '../../components/Banner';
import Partners from '../../components/Partners';
import Robot from '../../components/RobotSection';

function Home(){
    return(
        <>
        <Slider/>
        <Robot/>
        <Services/>
        <Banner/>
        <Partners/>
        </>
    )
}

export default Home;