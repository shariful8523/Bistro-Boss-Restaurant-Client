import SectionTittle from "../../../Components/SectionTittle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed mb-10 text-white pt-10">
            <SectionTittle  subHeading=" check it out "
                heading=" Featured Item " />

          <div className=" md:flex justify-center items-center py-8 px-16   bg-opacity-60  ">
            <div>
                <img src={featuredImg} alt="" />
            </div>


            <div className="md:ml-10 space-y-5">
                <p className="text-2xl">March 20, 2025 </p>
                <p className="uppercase text-2xl font-bold"> WHERE CAN I GET SOME?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, 
                    deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad 
                     laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

                     <button className="btn btn-outline border-0 border-b-4 text-amber-400 ">Order Now 
                         
                     </button>
            </div>

          </div>


        </div>
    );
};

export default Featured;