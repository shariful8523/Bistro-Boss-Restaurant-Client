import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {

    const { user, logOutUser } = useContext(AuthContext);


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
                        user ?

                            (
                                <button onClick={handelLogOut} className='btn'>log Out</button>
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