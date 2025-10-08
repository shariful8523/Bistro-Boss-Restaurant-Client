import SectionTittle from "../../../Components/SectionTittle";

import Imag1 from '../../../assets/home/slide1.jpg';
import Imag2 from '../../../assets/home/slide2.jpg';
import Imag3 from '../../../assets/home/slide3.jpg';

const Recommends = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-10 mb-12">
      <SectionTittle
        subHeading="Should Try"
        heading="Chef Recommends"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {/* Card 1 */}
        <div className="card bg-base-100 shadow-sm rounded-lg overflow-hidden">
          <figure>
            <img
              className="w-full h-64 sm:h-72 md:h-80 object-cover"
              src={Imag1}
              alt="Caeser Salad"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn bg-[#E8E8E8] hover:bg-[#1F2937] hover:text-red-600 uppercase">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 shadow-sm rounded-lg overflow-hidden">
          <figure>
            <img
              className="w-full h-64 sm:h-72 md:h-80 object-cover"
              src={Imag2}
              alt="Pizzas"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Pizzas</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn bg-[#E8E8E8] hover:bg-[#1F2937] hover:text-red-600 uppercase">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 shadow-sm rounded-lg overflow-hidden">
          <figure>
            <img
              className="w-full h-64 sm:h-72 md:h-80 object-cover"
              src={Imag3}
              alt="Soups"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Soups</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn bg-[#E8E8E8] hover:bg-[#1F2937] hover:text-red-600 uppercase">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommends;
