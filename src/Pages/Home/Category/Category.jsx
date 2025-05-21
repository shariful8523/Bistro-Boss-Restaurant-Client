import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import image1 from '../../../assets/home/slide1.jpg'
import image2 from '../../../assets/home/slide2.jpg'
import image3 from '../../../assets/home/slide3.jpg'
import image4 from '../../../assets/home/slide4.jpg'
import image5 from '../../../assets/home/slide5.jpg'
import SectionTittle from '../../../Components/SectionTittle';

const Category = () => {
    return (
        <section className='mt-10 mb-10'>
            <SectionTittle
                heading="Order Online"
                subHeading="From 11.00am to 10.00pm"
            />

            <Swiper
                slidesPerView={4}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}
                spaceBetween={10}
            >
                <SwiperSlide className="relative">
                    <img src={image1} alt="Salads" />
                    <h1 className='text-4xl uppercase text-center text-white absolute bottom-4 left-1/2 transform -translate-x-1/2'>Salads</h1>
                </SwiperSlide>

                <SwiperSlide className="relative">
                    <img src={image2} alt="Pizzas" />
                    <h1 className='text-4xl uppercase text-center text-white absolute bottom-4 left-1/2 transform -translate-x-1/2'>Pizzas</h1>
                </SwiperSlide>

                <SwiperSlide className="relative">
                    <img src={image3} alt="Soups" />
                    <h1 className='text-4xl uppercase text-center text-white absolute bottom-4 left-1/2 transform -translate-x-1/2'>Soups</h1>
                </SwiperSlide>

                <SwiperSlide className="relative">
                    <img src={image4} alt="Desserts" />
                    <h1 className='text-4xl uppercase text-center text-white absolute bottom-4 left-1/2 transform -translate-x-1/2'>Desserts</h1>
                </SwiperSlide>

                <SwiperSlide className="relative">
                    <img src={image5} alt="Salads" />
                    <h1 className='text-4xl uppercase text-center text-white absolute bottom-4 left-1/2 transform -translate-x-1/2'>Salads</h1>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;
