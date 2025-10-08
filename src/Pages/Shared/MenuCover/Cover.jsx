const Cover = ({ image, tittle }) => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div
        className="hero w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[550px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0  bg-opacity-60"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-20">
          <div className="text-center bg-[#15151599] bg-opacity-40 p-6 sm:p-10 rounded-lg max-w-md">
            <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-white">
              {tittle}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white">
              Would you like to try a dish?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
