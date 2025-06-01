import SectionTittle from '../../Components/SectionTittle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const Img_Hosting_key = import.meta.env.VITE_IMGBB_KEY;
const ImgBB_Hosting_API = `https://api.imgbb.com/1/upload?key=${Img_Hosting_key}`

const AddItem = () => {
    const axiosPublic = useAxiosPublic();

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) =>{ 
        console.log(data)

        const imageFile = {image: data.image[0] }

        const res = await axiosPublic.post(ImgBB_Hosting_API, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        console.log(res.data);
        
    };


    
    return (
        <div>

            <section>
                <SectionTittle subHeading="What's new?" heading="ADD AN ITEM" />
            </section>

            <div className="bg-gray-100 p-8 max-w-3xl mx-auto rounded mb-10">


                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Recipe name */}
                    <div>
                        <label className="block font-semibold mb-1">Recipe name*</label>
                        <input
                            type="text"
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
                                defaultValue=""
                                {...register("category")}
                                className="select select-bordered w-full"
                            >
                                <option value="" disabled>Select a Category</option>
                                <option value="salad">Salad</option>
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
                        className="btn bg-[#835D23FF] text-white hover:bg-yellow-700 transition"
                    >
                        Add Item <FaUtensils />
                    </button>
                </form>
            </div>

        </div>

    );
};

export default AddItem;
