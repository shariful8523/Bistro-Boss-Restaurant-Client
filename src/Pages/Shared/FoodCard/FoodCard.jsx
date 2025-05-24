import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handelAddtoCart = (food) => {
        if (user && user.email) {
            // send cart to database


            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }

            axios.post('http://localhost:5000/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: ` ${name} Added to Cart `,
                            icon: 'success',
                            confirmButtonText: 'Cool',
                        });
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

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
                    <button onClick={() => handelAddtoCart(item)} className="btn bg-[#E8E8E8] hover:bg-[#1F2937] hover:text-red-600 uppercase">
                        add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};
export default FoodCard;