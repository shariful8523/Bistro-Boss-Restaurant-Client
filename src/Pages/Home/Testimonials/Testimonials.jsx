import React, { useEffect, useState } from 'react';
import SectionTittle from '../../../Components/SectionTittle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'



const Testimonials = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <section className='my-20 '>
            <SectionTittle
                subHeading="What Our Client Say"
                heading="Testimonials"
            />

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className='flex flex-col items-center mx-24 my-16 space-y-6'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />

                            <span className="text-6xl text-black  ">
                                <FaQuoteLeft size={60} />
                            </span>


                            <p>{review.details}</p>
                            <h3 className='text-2xl text-orange-400'> {review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </section>
    );
};

export default Testimonials;