import SixPremium from "../SixPremium/SixPremium";
import Slider from "../Slider/Slider";
import SuccessCounter from "../SuccessCountersec/SuccessCounter";
import WorksSection from "../WorksSection/WorksSection";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <SixPremium></SixPremium>
            <WorksSection></WorksSection>
            <SuccessCounter></SuccessCounter>
        </div>
    );
};

export default Home;