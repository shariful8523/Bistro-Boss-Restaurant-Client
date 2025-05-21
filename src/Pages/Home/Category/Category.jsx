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

const Category = () => {
    return (
        <div className='mt-10 mb-10'>
            <Swiper
                slidesPerView={4}

                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}

            >
                <SwiperSlide >
                    <img src={image1} alt="" />
                    <h1 className='text-4xl uppercase text-center -mt-25 text-white'>Salads</h1>

                </SwiperSlide>

                <SwiperSlide>
                    <img src={image2} alt="" />
                    <h1 className='text-4xl uppercase text-center -mt-25 text-white'>pizzas</h1>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={image3} alt="" />
                    <h1 className='text-4xl uppercase text-center -mt-25 text-white'>soups</h1>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={image4} alt="" />
                    <h1 className='text-4xl uppercase text-center -mt-25 text-white'>desserts</h1>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={image5} alt="" />
                    <h1 className='text-4xl uppercase text-center -mt-25 text-white'>Salads</h1>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Category;