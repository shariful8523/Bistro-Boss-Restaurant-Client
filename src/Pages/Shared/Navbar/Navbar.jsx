import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';
import Man from '../../../assets/others/profile.png'
const Navbar = () => {

    const { user, logOutUser, justRegister } = useContext(AuthContext);
    const [dropdown, setDropdown] = useState(false);




    const handelLogOut = () => {
        logOutUser()
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'LogOut Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
            })

    }

    const navOption =
        <>
            <li> <Link to={"/"}>Home</Link>  </li>
            <li> <Link to={"/menu"}>Our Menu</Link>  </li>
            <li> <Link to={"/order/salad"}>Order Food </Link>  </li>
            <li> <Link to={"/Contact"}>Contact Us</Link>  </li>


        </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-10	 max-w-screen-xl mx-auto bg-[#15151580] text-white ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navOption}


                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro-Boss-Restaurant</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end gap-7">
                    {
                        user && !justRegister ?
                            (
                                <div className='relative'>

                                    <button onClick={() => setDropdown(!dropdown)} className=" flex items-center gap-2 focus:outline-none  ">
                                        {
                                            user.photoURL ?
                                                (
                                                    <img
                                                        src={user.photoURL}
                                                        alt="User"
                                                        className="w-10 h-10 rounded-full border-2 border-white"
                                                    />
                                                )
                                                :
                                                (
                                                    <img className='w-10 rounded-full' src={Man} alt="" />
                                                )
                                        }
                                    </button>
                                    {
                                        dropdown && (
                                            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-20">
                                                <div className="px-4 py-2 border-b border-gray-200">
                                                    <p className="font-medium">{user.displayName || 'User'}</p>
                                                    <p className="text-sm text-gray-600">{user.email}</p>
                                                </div>
                                                <button
                                                    onClick={handelLogOut}
                                                    className=" w-full text-left px-4 py-2 hover:bg-red-600 "
                                                >
                                                    Log Out
                                                </button>
                                            </div>
                                        )
                                    }
                                </div>


                            )
                            :

                            (<>
                                <NavLink to={'/login'}> <button className='btn'>Login</button></NavLink>

                                <NavLink to={'/register'}> <button className='btn'>Sing Up</button></NavLink>
                            </>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;