import SectionTittle from "../../../Components/SectionTittle";

import Imag1 from '../../../assets/home/slide1.jpg'
import Imag2 from '../../../assets/home/slide2.jpg'
import Imag3 from '../../../assets/home/slide3.jpg'

const Recommends = () => {
    return (
        <section>
            <SectionTittle
                subHeading={"Should Try"}
                heading={" chef recommends"}
            />

            <div className="flex  gap-10 justify-center">

                <div className="card bg-base-100 w-96 shadow-sm mb-10">
                    <figure>
                        <img
                            className="w-full h-96"
                            src={Imag1}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body  items-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center ">
                            <button className="btn bg-[#E8E8E8] hover:bg-[#1F2937] hover:text-red-600 uppercase">add to cart</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 w-96 shadow-sm mb-10">
                    <figure>
                        <img
                            className="w-full h-96"
                            src={Imag2}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body  items-center">
                        <h2 className="card-title">Pizzas</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center ">
                            <button className="btn bg-[#E8E8E8] hover:bg-[#1F2937] hover:text-red-600 uppercase">add to cart</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 w-96 shadow-sm mb-10">
                    <figure>
                        <img
                            className="w-full h-96"
                            src={Imag3}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body  items-center">
                        <h2 className="card-title">Soups</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center ">
                            <button className="btn  bg-[#E8E8E8] hover:bg-[#1F2937] hover:text-red-600 uppercase">add to cart</button>
                        </div>
                    </div>
                </div>



            </div>



        </section>
    );
};

export default Recommends;