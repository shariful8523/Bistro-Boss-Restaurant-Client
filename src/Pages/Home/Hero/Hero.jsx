import React from 'react';
import Img from '../../../assets/home/chef-service.jpg';

const Hero = () => {
  return (
    <section className="relative w-full mb-10">
      {/* Background Image */}
      <div
        className="w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${Img})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-20">
          <div className="bg-white bg-opacity-90 text-black text-center p-6 sm:p-10 rounded-lg shadow-lg max-w-md">
            <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold">
              Bistro Boss
            </h1>
            <p className="text-sm sm:text-base md:text-lg">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
