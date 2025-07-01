import React from 'react';
import SectionTittle from '../../Components/SectionTittle';
import { FaTrash } from 'react-icons/fa';
import useCart from '../../Hooks/useCart';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();

    const handelDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            refetch();
                        }
                    })
            }
        });
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <section className="py-5">
                <SectionTittle subHeading="My Cart" heading="Wanna add more" />
            </section>

            <div className="px-8 py-10">
                {/* Top summary */}
                <div className="flex justify-between items-center mt-15 mb-6">
                    <h2 className="text-2xl font-bold">Total orders: {cart.length}</h2>
                    <h2 className="text-2xl font-bold">Total price: ${totalPrice.toFixed(2)}</h2>
                    {cart.length ? <Link to="/dashboard/payment" ><button className="bg-[#D1A054] hover:bg-[#b38239] text-white px-6 py-2 rounded">PAY</button></Link> : 
                    <button disabled className="bg-[#c4bcb0] hover:bg-[#b38239] text-white px-6 py-2 rounded">PAY</button>}
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full bg-white rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-[#D1A054] text-white text-left">
                                <th className="p-4">#</th>
                                <th className="p-4">ITEM IMAGE</th>
                                <th className="p-4">ITEM NAME</th>
                                <th className="p-4">PRICE</th>
                                <th className="p-4">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => (
                                <tr key={item._id || index} className="border-t">
                                    <td className="p-4 font-bold">{index + 1}</td>
                                    <td className="p-4">
                                        <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                                    </td>
                                    <td className="p-4">{item.name}</td>
                                    <td className="p-4">${item.price.toFixed(2)}</td>
                                    <td className="p-4">
                                        <button
                                            className="bg-red-600 hover:bg-red-700 text-white p-2 rounded"
                                            onClick={() => handelDelete(item._id)} // future logic
                                        >
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {cart.length === 0 && (
                                <tr>
                                    <td colSpan="5" className="text-center py-6 text-gray-500">
                                        Your cart is empty.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;
