import { GrLocation } from "react-icons/gr";
import Cover from "../../Pages/Shared/MenuCover/Cover";
import Img from '../../assets/contact/banner.jpg'
import SectionTittle from "../SectionTittle";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";



const Contacts = () => {

    return (
        <div className="mt-5 mb-15   ">
            <Cover image={Img} tittle={"CONTACT US"}  ></Cover>
            <SectionTittle subHeading={"Visit Us"} heading={"OUR LOCATION"} />


            <div className="flex gap-15 justify-center mt-20 mb-20 ">
                {/* contact card */}
                <div className="w-96 h-[30
                0px] border-white border shadow-sm  ">

                    <div className="bg-[#D1A054] text-white flex justify-center items-center h-16">
                        <FaPhoneVolume className="w-6 h-6" />
                    </div>

                    <div className="px-5 mb-5 outline-none bg-[#FFFFFF] border-white ">
                        <div className=" bg-[#F3F3F3] text-center py-25  px-4">
                            <h3 className="text-lg font-semibold mb-2">PHONE</h3>
                            <p className="text-gray-700">+38 (012) 34 56 789</p>
                        </div>
                    </div>

                </div>

                {/* address card */}

                <div className="w-96 h-[30
                0px] border-white border shadow-sm  ">

                    <div className="bg-[#D1A054] text-white flex justify-center items-center h-16">
                        <GrLocation className="w-6 h-6" />
                    </div>

                    <div className="px-5 mb-5 outline-none bg-[#FFFFFF] border-white ">
                        <div className=" bg-[#F3F3F3] text-center py-25  px-4">
                            <h3 className="text-lg font-semibold mb-2">ADDRESS</h3>
                            <p className="text-gray-700"> Rangpur, Bangladesh </p>
                        </div>
                    </div>

                </div>

                {/* Working House */}

                <div className="w-96 h-[30
                0px] border-white border shadow-sm  ">

                    <div className="bg-[#D1A054] text-white flex justify-center items-center h-16">
                        <MdAccessTime className="w-6 h-6" />
                    </div>

                    <div className="px-5 mb-5 outline-none bg-[#FFFFFF] border-white ">
                        <div className=" bg-[#F3F3F3] text-center py-25  px-4">
                            <h3 className="text-lg font-semibold mb-2">WORKING HOURS</h3>
                            <p className="text-gray-700">Mon - Fri: 08:00 - 22:00</p>
                            <p className="text-gray-700"> Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </div>

                </div>


            </div>


            <SectionTittle subHeading={"Send Us a Message"} heading={"CONTACT FORM"} />

            {/* Construct form */}

            <div className="mt-20">
                <div className="max-w-4xl mx-auto p-10 bg-gray-100">
                    <form className="space-y-6">
                       
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Name*</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Email*</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                />
                            </div>
                        </div>

                    
                        <div>
                            <label className="block text-sm font-medium mb-1">Phone*</label>
                            <input
                                type="tel"
                                placeholder="Enter your phone number"
                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                            />
                        </div>

                      
                        <div>
                            <label className="block text-sm font-medium mb-1">Message*</label>
                            <textarea
                                rows="5"
                                placeholder="Write your message here"
                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                            ></textarea>
                        </div>

                
                        <div className="border border-gray-300 p-2 inline-block rounded-md">
                            <p className="text-sm text-gray-500">[ reCAPTCHA goes here ]</p>
                        </div>

                      
                        <div>
                            <button
                                type="submit"
                                className="bg-yellow-600 text-white px-6 py-2 rounded-md hover:bg-yellow-700 transition font-semibold flex items-center gap-2"
                            >
                                Send Message <FaTelegramPlane />
                                
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contacts;