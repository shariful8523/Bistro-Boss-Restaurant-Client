import React from 'react';
import SectionTittle from '../../Components/SectionTittle';
import { FaTrash, FaUsers } from 'react-icons/fa';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AllUser = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;

        }

    })
    

const handelRole = user => {
    axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            if (res.data.modifiedCount > 0) {
                refetch();
                Swal.fire({
                    title: "Success!",
                    text: `${user.name} is now an Admin`,
                    icon: "success"
                });
            }
        });
};

const handelDelete = user => {
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
            axiosSecure.delete(`/users/${user._id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "User has been deleted.",
                            icon: "success"
                        });
                        refetch();
                    }
                });
        }
    });
};

return (
    <div className="bg-gray-50 min-h-screen">
        <section className="py-5">
            <SectionTittle subHeading="How many??" heading="manage all users" />
        </section>

        <div className="px-8 py-10">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold uppercase">Total users: {users.length}</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-[#D1A054] text-white text-left">
                            <th className="p-4">#</th>
                            <th className="p-4">NAME</th>
                            <th className="p-4">EMAIL</th>
                            <th className="p-4">ROLE</th>
                            <th className="p-4">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item, index) => (
                                <tr className="border-t" key={item._id}>
                                    <td className="p-4 font-bold">{index + 1}</td>
                                    <td className="p-4">{item.name}</td>
                                    <td className="p-4">{item.email}</td>
                                    <td className="p-4">
                                        {
                                            item.role === 'admin' ? 'Admin' : (
                                                <button onClick={() => handelRole(item)} className="bg-[#D1A054] text-white p-2 rounded">
                                                    <FaUsers />
                                                </button>
                                            )
                                        }
                                    </td>
                                    <td className="p-4">
                                        <button onClick={() => handelDelete(item)} className="bg-red-600 text-white p-2 rounded">
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);
};

export default AllUser;
