import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';
import Man from '../../../assets/others/profile.png';
import { ImExit } from 'react-icons/im';
import { VscAccount } from 'react-icons/vsc';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../../Hooks/useCart';
import useAdmin from '../../../Hooks/useAdmin';

const Navbar = () => {
  const { user, logOutUser, justRegister } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [dropdown, setDropdown] = useState(false);
  const [cart] = useCart();

  useEffect(() => {
    setDropdown(false);
  }, [user]);

  const handleLogOut = () => {
    logOutUser().then(() => {
      Swal.fire({
        title: 'Success!',
        text: 'LogOut Successfully',
        icon: 'success',
        confirmButtonText: 'Cool',
      });
    });
  };

  const handelUpdate = () => {};

  const navOptions = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/menu">Our Menu</Link></li>
      <li><Link to="/order/salad">Order Food</Link></li>
      {user && isAdmin && <li><Link to="/dashboard/adminHome">Dashboard</Link></li>}
      {user && !isAdmin && <li><Link to="/dashboard/userHome">Dashboard</Link></li>}
      <li><Link to="/contact">Contact Us</Link></li>
      <li>
        <Link to="/dashboard/cart">
          <button className="flex gap-2 items-center">
            <FaShoppingCart className="text-xl" />
            <div className="badge badge-sm badge-secondary text-black bg-white">
              +{cart.length}
            </div>
          </button>
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-80 backdrop-blur-lg max-w-screen-xl mx-auto bg-[#151515cc] text-white flex justify-between px-4 sm:px-6">
      {/* Left: Project Name */}
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-lg sm:text-xl font-semibold normal-case">
          Bistro-Boss
        </Link>
      </div>

      {/* Right Side */}
      <div className="flex-none flex items-center gap-2 sm:gap-4">
        {/* Desktop Menu */}
        <ul className="menu menu-horizontal px-1 hidden lg:flex">{navOptions}</ul>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end lg:hidden">
          <button
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-56 text-black"
          >
            {navOptions}
            {/* Auth Buttons on mobile */}
            {!user && (
              <div className="mt-2 flex flex-col gap-2">
                <NavLink to="/login">
                  <button className="btn btn-warning w-full">Login</button>
                </NavLink>
                <NavLink to="/register">
                  <button className="btn btn-success w-full">Sign Up</button>
                </NavLink>
              </div>
            )}
          </ul>
        </div>

        {/* Profile / Auth Buttons */}
        {user && !justRegister ? (
          <div className="relative">
            <button
              onClick={() => setDropdown(!dropdown)}
              className="flex items-center gap-2 focus:outline-none"
            >
              <img
                src={user.photoURL || Man}
                alt="User"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
              />
            </button>

            {dropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-white text-black rounded-md shadow-lg z-20 origin-top-right">
                <div className="px-4 py-2 border-b border-gray-200">
                  <p className="font-medium truncate">
                    {user.displayName || 'User'}
                  </p>
                  <p className="text-sm text-gray-600 truncate">{user.email}</p>
                </div>
                <button
                  onClick={handelUpdate}
                  className="w-full text-left px-4 py-2 hover:bg-green-400 hover:text-white flex items-center gap-2"
                >
                  Update Profile <VscAccount />
                </button>
                <button
                  onClick={handleLogOut}
                  className="w-full text-left px-4 py-2 hover:bg-red-600 hover:text-white flex items-center gap-2"
                >
                  Log Out <ImExit />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="hidden lg:flex gap-2">
            <NavLink to="/login">
              <button className="btn btn-warning btn-sm sm:btn-md">
                Login
              </button>
            </NavLink>
            <NavLink to="/register">
              <button className="btn btn-success btn-sm sm:btn-md">
                Sign Up
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
