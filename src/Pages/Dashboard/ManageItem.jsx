import { FaTrash, FaEdit } from "react-icons/fa";
import SectionTittle from "../../Components/SectionTittle";
import useMenu from "../../Hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItem = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Success!",
                        text: `${item.name} has been Delete.`,
                        icon: "success"
                    });
                }

            }
        });


    };




    return (
        <div className="min-h-screen">
            <section className="py-5">
                <SectionTittle subHeading="Hurry Up!" heading="MANAGE ALL ITEMS" />
            </section>

            <div className="px-8 py-10 bg-gray-50 ">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold uppercase">Total items: {menu.length}</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full bg-white rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-[#D1A054] text-center text-white ">
                                <th className="p-4">#</th>
                                <th className="p-4 text-left">ITEM IMAGE</th>
                                <th className="p-4">ITEM NAME</th>
                                <th className="p-4">PRICE</th>
                                <th className="p-4">ACTION</th>
                                <th className="p-4">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) => (
                                    <tr className="border-t text-center" key={item._id}>
                                        <td className="p-4 font-bold">{index + 1}</td>

                                        <td className="p-4">
                                            <div className="h-12 w-20">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="h-full w-full object-cover rounded"
                                                />
                                            </div>
                                        </td>

                                        <td className="p-4">{item.name}</td>
                                        <td className="p-4">${item.price}</td>
                                        <td className="p-4">
                                            <Link to={`/dashboard/updateItem/${item._id}`} >
                                                <button className="bg-[#D1A054] text-white p-2 rounded">
                                                    <FaEdit />
                                                </button>
                                            </Link>
                                        </td>
                                        <td className="p-4">
                                            <button onClick={() => handleDelete(item)} className="bg-red-600 text-white p-2 rounded">
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

export default ManageItem;
