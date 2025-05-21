import Img from '../../../assets/home/chef-service.jpg';



const Hero = () => {
    return (

        <div
            className="hero w-12/12 h-[500px] mb-10 "
            style={{
                backgroundImage: `url(${Img})`,
            }}
        >
            <div className=""></div>
            <div className="hero-content px-50   bg-white text-black text-center  py-8 shadow-lg ">
                <div className="max-w-md p-10 justify-center">
                    <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi 
                         exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    
                </div>
            </div>
        </div>


    );
};

export default Hero;