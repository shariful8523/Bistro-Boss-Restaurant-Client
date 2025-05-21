const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    
    return (
        <div className="card bg-base-100 w-96 shadow-sm mb-10 relative">
          
            <figure className="relative">
                <img className="w-full h-96 object-cover" src={image} alt={name} />
                
                <p className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-md text-sm">
                    ${price}
                </p>
            </figure>

          
            <div className="card-body items-start text-left">
                <h2 className="card-title">{name}</h2>
                <p className="text-sm text-gray-700">{recipe}</p>
                <div className="card-actions mt-4">
                    <button className="btn bg-[#E8E8E8] hover:bg-[#1F2937] hover:text-red-600 uppercase">
                        add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};
export default FoodCard;