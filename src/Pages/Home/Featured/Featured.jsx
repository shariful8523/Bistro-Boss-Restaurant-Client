import SectionTittle from "../../../Components/SectionTittle";
import featuredImg from '../../../assets/home/featured.jpg';

const Featured = () => {
  return (
    <section className="relative featured-item mb-10 text-white bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${featuredImg})` }}>
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      <div className="relative pt-10 px-4 sm:px-6 lg:px-10">
        <SectionTittle
          subHeading="Check it out"
          heading="Featured Item"
        />

        <div className="md:flex flex-col md:flex-row items-center justify-center py-8 gap-6 md:gap-16  bg-opacity-30 rounded-lg mt-6">
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src={featuredImg}
              alt="Featured"
              className="w-full max-w-sm h-auto rounded-lg object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-4 text-center md:text-left md:ml-6 lg:ml-10">
            <p className="text-xl sm:text-2xl">March 20, 2025</p>
            <p className="uppercase text-2xl sm:text-3xl font-bold">WHERE CAN I GET SOME?</p>
            <p className="text-sm sm:text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, 
              deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad 
              laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-outline border-0 border-b-4 text-amber-400 mt-2 hover:border-amber-500">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
