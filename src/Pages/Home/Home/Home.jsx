import SixPremium from "../SixPremium/SixPremium";
import Slider from "../Slider/Slider";
import SuccessCounter from "../SuccessCountersec/SuccessCounter";
import SuccessStory from "../SuccessStory/SuccessStory";
import WorksSection from "../WorksSection/WorksSection";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <SixPremium></SixPremium>
            <WorksSection></WorksSection>
            <SuccessCounter></SuccessCounter>
            <SuccessStory></SuccessStory>
        </div>
    );
};

export default Home;