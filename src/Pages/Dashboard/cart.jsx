import React from 'react';
import SectionTittle from '../../Components/SectionTittle';
import { FaTrash } from 'react-icons/fa';

const Cart = () => {
    return (
        <div className='bg-gray-50 min-h-screen'>

            <section className='py-5'>
                <SectionTittle subHeading="My Cart" heading="Wanna add more" />
            </section>
            <div className="px-8 py-10 ">


                {/* Top summary */}
                <div className="flex justify-between items-center mt-15 mb-6">
                    <h2 className="text-2xl font-bold">Total orders: 6</h2>
                    <h2 className="text-2xl font-bold">Total price: $88.2</h2>
                    <button className="bg-[#D1A054] hover:bg-[#b38239] text-white px-6 py-2 rounded">PAY</button>
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
                            {[...Array(6)].map((_, index) => (
                                <tr key={index} className="border-t">
                                    <td className="p-4 font-bold">{index + 1}</td>
                                    <td className="p-4">
                                        <div className="w-12 h-12 bg-gray-300 rounded"></div>
                                    </td>
                                    <td className="p-4">Sample Item Name</td>
                                    <td className="p-4">$14.5</td>
                                    <td className="p-4">
                                        <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded">
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;
