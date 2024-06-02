
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
const Slider = () => {
    
    return (
        <>
        <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='w-full h-2/3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH__f3JcomqjetFn7n95fA12NCD5WouJYWng&s" alt="" />
        
        </SwiperSlide>
        <SwiperSlide><img className='w-full h-2/3' src="https://media.cnn.com/api/v1/images/stellar/prod/201114095333-05-indian-arranged-marriage-dst-intl-hnk.jpg" alt="" /></SwiperSlide>
        
        
      </Swiper>
        </>
    );
};

export default Slider;