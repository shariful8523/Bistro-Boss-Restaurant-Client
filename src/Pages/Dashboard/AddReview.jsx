import React, { useState } from 'react';
import SectionTittle from '../../Components/SectionTittle';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddReview = () => {
    const [rating, setRating] = useState(0);

    const axiosSecure = useAxiosSecure();

    const handleSubmit = (e) => {
        e.preventDefault();
        const Name = e.target.Name.value;
        const Details = e.target.Details.value;

        const item = { name: Name, details: Details, rating };

        if (rating === 0) {
            Swal.fire({
                title: "Rating Required!",
                text: "Please give a rating before submitting.",
                icon: "warning"
            });
            return;
        }

        axiosSecure.post(`/review`, item)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: " Thanks for Rating",
                        text: "",
                        icon: "success"
                    });

                    e.target.reset();
                }
            })

    };



    return (
        <div>
             {/* tiitle section */}
            <section>
                <SectionTittle subHeading="Sharing is Caring!!!" heading="Give a Review" />
            </section>

            <div className='bg-gray-50 min-h-screen px-4'>
                <h1 className='text-2xl text-center py-10'>Rate Us!</h1>

                <div className='flex justify-center mb-6'>
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={rating}
                        onChange={setRating}
                        required
                    />
                </div>
 
              {/* form section */}
                <form onSubmit={handleSubmit} className="rounded-box w-full max-w-md mx-auto p-4 bg-white shadow-md">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        name='Name'
                        className="input input-bordered w-full"
                        placeholder="Your name"
                        required
                    />

                    <label className="label mt-4">
                        <span className="label-text">Write your review</span>
                    </label>
                    <textarea
                        name="Details"
                        className="textarea textarea-bordered w-full h-32 resize-none"
                        placeholder="Write your detailed review here"
                        required
                    ></textarea>

                    <button type="submit" className="btn btn-neutral mt-6 w-full">Submit Review</button>
                </form>
            </div>
        </div>
    );
};

export default AddReview;
