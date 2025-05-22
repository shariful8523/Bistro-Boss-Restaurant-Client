
const Cover = ({image , tittle}) => {
    return (
        <div>
            <div
                className="hero h-[550px]"
                style={{
                    backgroundImage:
                        `url("${image}")`,
                }}
            >
                <div className="  "></div>
                <div className="hero-content text-neutral-content text-center bg-[#15151599] p-20 px-50 ">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{tittle}</h1>
                        <p className=" text-xl ">Would you like to try a dish?</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;