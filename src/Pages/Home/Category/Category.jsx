import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import image1 from '../../../assets/home/slide1.jpg';
import image2 from '../../../assets/home/slide2.jpg';
import image3 from '../../../assets/home/slide3.jpg';
import image4 from '../../../assets/home/slide4.jpg';
import image5 from '../../../assets/home/slide5.jpg';
import SectionTittle from '../../../Components/SectionTittle';

const Category = () => {
  return (
    <section className="mt-10 mb-10 px-4 sm:px-6 lg:px-10">
      <SectionTittle
        heading="Order Online"
        subHeading="From 11.00am to 10.00pm"
      />

      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide className="relative">
          <img
            src={image1}
            alt="Salads"
            className="w-full h-48 sm:h-60 md:h-72 lg:h-80 object-cover rounded-lg"
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase text-center text-white absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-40 px-3 py-1 rounded-md">
            Salads
          </h1>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="relative">
          <img
            src={image2}
            alt="Pizzas"
            className="w-full h-48 sm:h-60 md:h-72 lg:h-80 object-cover rounded-lg"
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase text-center text-white absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-40 px-3 py-1 rounded-md">
            Pizzas
          </h1>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="relative">
          <img
            src={image3}
            alt="Soups"
            className="w-full h-48 sm:h-60 md:h-72 lg:h-80 object-cover rounded-lg"
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase text-center text-white absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-40 px-3 py-1 rounded-md">
            Soups
          </h1>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide className="relative">
          <img
            src={image4}
            alt="Desserts"
            className="w-full h-48 sm:h-60 md:h-72 lg:h-80 object-cover rounded-lg"
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase text-center text-white absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-40 px-3 py-1 rounded-md">
            Desserts
          </h1>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide className="relative">
          <img
            src={image5}
            alt="Salads"
            className="w-full h-48 sm:h-60 md:h-72 lg:h-80 object-cover rounded-lg"
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase text-center text-white absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-40 px-3 py-1 rounded-md">
            Salads
          </h1>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
