import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { IoHomeSharp, IoCartOutline } from "react-icons/io5";
import { FaRegCalendarAlt, FaWallet } from 'react-icons/fa';
import { TbMessageStar, TbCalendarClock } from 'react-icons/tb';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosMail } from 'react-icons/io';
import { RiShoppingBag4Fill } from 'react-icons/ri';

const Dashboard = () => {
    return (
        <div className='flex gap-20 mt-20'>

            <div className='w-52 min-h-full bg-[#D1A054] text-center'>

                <h1 className='text-xl font-bold mt-10'>BISTRO BOSS</h1>
                <p className='text-xl mb-10'>Restaurant</p>

                <ul className='menu'>

                    <li><NavLink ><IoHomeSharp /> USER HOME</NavLink></li>

                    <li><NavLink ><FaRegCalendarAlt /> RESERVATION</NavLink></li>

                    <li><NavLink ><FaWallet /> PAYMENT HISTORY</NavLink></li>

                    <li><NavLink to="/dashboard/cart"
                     className={({ isActive }) =>
                        isActive ? 'text-white font-bold' : 'text-black' } 
                        
                        ><IoCartOutline /> MY CART</NavLink></li>

                    <li><NavLink   to="/dashboard/reviewsAdd" className={({ isActive }) =>
                        isActive ? 'text-white font-bold' : 'text-black' } 
                         >

                    <TbMessageStar /> ADD REVIEW</NavLink></li>

                    <li><NavLink ><TbCalendarClock /> MY BOOKING</NavLink></li>

                </ul>

                <div className="divider"></div>

                <ul className='menu'>

                    <li><NavLink to="/"><IoHomeSharp /> HOME</NavLink></li>


                    <li><NavLink to="/menu"><GiHamburgerMenu /> MENU</NavLink></li>


                    <li><NavLink to="/order/salad"><RiShoppingBag4Fill /> SHOP</NavLink></li>

                    <li><NavLink to="/contact"><IoIosMail /> CONTACT</NavLink></li>

                </ul>

            </div>

            <div className='flex-1'>
                <Outlet />
            </div>

        </div>
    );
};

export default Dashboard;
