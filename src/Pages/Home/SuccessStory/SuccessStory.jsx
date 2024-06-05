import  { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';

const SuccessStory = () => {
    const [reviews, setReviews] = useState([]);
    const [sortOrder, setSortOrder] = useState('ascending');

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                const sortedData = sortReviews(data, sortOrder);
                setReviews(sortedData);
            });
    }, [sortOrder]);

    const sortReviews = (reviews, order) => {
        return [...reviews].sort((a, b) => {
            const dateA = new Date(a.marriageDate);
            const dateB = new Date(b.marriageDate);
            return order === 'ascending' ? dateA - dateB : dateB - dateA;
        });
    };

    const handleSortOrderChange = (event) => {
        setSortOrder(event.target.value);
    };

    return (
        <div className="mt-7">
            <div>
                <h1 className="text-3xl text-green-500 font-bold uppercase text-center">Success Story</h1>
                <div className="flex mt-7 justify-center mb-4">
                    <label htmlFor="sortOrder" className="mr-2">Sort by marriage date:</label>
                    <select
                        id="sortOrder"
                        value={sortOrder}
                        onChange={handleSortOrderChange}
                        className="border rounded p-2"
                    >
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                    </select>
                </div>
            </div>

            <div>
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    {reviews.map(review => (
                        <SwiperSlide key={review._id}>
                            <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                                <div className="absolute w-full bg-slate-600 -z-10 md:h-96 rounded-2xl"></div>
                                
                                <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                                    <img
                                        className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
                                        src={review.image}
                                        alt="client photo"
                                    />
                                    
                                    <div className="mt-2 md:mx-6">
                                        <div>
                                            <p className="text-xl font-medium tracking-tight text-white">
                                                <Rating
                                                    style={{ maxWidth: 180 }}
                                                    value={review.reviewStar}
                                                    readOnly
                                                />
                                            </p>
                                            <p className="text-blue-200 mt-4">{review.marriageDate}</p>
                                        </div>

                                        <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                                            {review.successStoryText}
                                        </p>
                                        
                                        <div className="flex items-center justify-between mt-6 md:justify-start">
                                            {/* Additional content can be added here if needed */}
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default SuccessStory;