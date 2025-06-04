import React, { useState } from 'react';
import SectionTittle from '../../Components/SectionTittle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const Img_Hosting_key = import.meta.env.VITE_IMGBB_KEY;
const ImgBB_Hosting_API = `https://api.imgbb.com/1/upload?key=${Img_Hosting_key}`


const UpdateItem = () => {
    const { name, recipe, price, category, _id } = useLoaderData();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const [loading, setLoading] = useState(false);




    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {

        setLoading(true);

        try {
            // image upload to ImgBB and get the url
            const imageFile = { image: data.image[0] }
            const res = await axiosPublic.post(ImgBB_Hosting_API, imageFile, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });

            if (res.data.success) {
                // now send the Menu Item in the server with Image url
                const menuItem = {
                    name: data.name,
                    category: data.category,
                    price: parseFloat(data.price),
                    recipe: data.recipe,
                    image: res.data.data.display_url

                }

                const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);

                if (menuRes.data.modifiedCount > 0) {
                    reset();
                    Swal.fire({
                        title: "Success!",
                        text: `${data.name} has been Updated.`,
                        icon: "success"
                    });

                }

            }

        } catch {
            Swal.fire({
                title: "Error!",
                text: "Something went wrong.",
                icon: "error"
            });
        } finally {
            setLoading(false);
        }


    };




    return (
        <div>

            <section>
                <SectionTittle subHeading=" whats a new ?" heading="UPDATE ITEM" />
            </section>

            <div className="bg-gray-100 p-8 max-w-3xl mx-auto rounded mb-10">


                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Recipe name */}
                    <div>
                        <label className="block font-semibold mb-1">Recipe name*</label>
                        <input
                            type="text"
                            defaultValue={name}
                            placeholder="Recipe name"
                            {...register("name")}
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Category & Price */}
                    <div className="flex gap-4">
                        {/* Category */}
                        <div className="w-1/2">
                            <label className="block font-semibold mb-1">Category*</label>
                            <select
                                defaultValue={category}
                                {...register("category")}
                                className="select select-bordered w-full"
                            >
                                <option value="" disabled>Select a Category</option>
                                <option value="salad">salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>

                        {/* Price */}
                        <div className="w-1/2">
                            <label className="block font-semibold mb-1">Price*</label>
                            <input
                                type="number"
                                defaultValue={price}
                                step="0.01"
                                placeholder="Price"
                                {...register("price")}
                                className="input input-bordered w-full"
                            />
                        </div>
                    </div>

                    {/* Recipe Details */}
                    <div>
                        <label className="block font-semibold mb-1">Recipe Details*</label>
                        <textarea
                            placeholder="Recipe Details"
                            defaultValue={recipe}
                            {...register("recipe")}
                            className="textarea textarea-bordered w-full h-24"
                        ></textarea>
                    </div>

                    {/* File Input */}
                    <div>
                        <label className="block font-semibold mb-1">Upload Image*</label>
                        <input
                            type="file"
                            {...register("image")}
                            className="file-input file-input-bordered file-input-warning w-full"
                        />
                    </div>


                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn text-center  bg-[#835D23FF] text-white hover:bg-yellow-700 transition"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <span className="loading loading-spinner loading-sm mr-2"></span>
                                Updating...
                            </>
                        )
                            :
                            (
                                <>
                                    Update Item <FaUtensils />
                                </>
                            )}
                    </button>
                </form>
            </div>

        </div>
    );
};

export default UpdateItem;