import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';
import Man from '../../../assets/others/profile.png';
import { ImExit } from 'react-icons/im';
import { VscAccount } from 'react-icons/vsc';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const { user, logOutUser, justRegister } = useContext(AuthContext);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    setDropdown(false);
  }, [user]);

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        Swal.fire({
          title: 'Success!',
          text: 'LogOut Successfully',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
      });
  };

  const handelUpdate = () => {

  }

  const navOptions = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/menu">Our Menu</Link></li>
      <li><Link to="/order/salad">Order Food</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>

      <li><Link to="/contact">
        <button className=" flex gap-2 items-center">
          <FaShoppingCart className='text-xl '></FaShoppingCart> 
          <div className="badge badge-sm badge-secondary">+99</div>
        </button>
      </Link></li>


    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-10 max-w-screen-xl mx-auto bg-[#15151580] text-white justify-between">
      {/* Left: Project Name */}
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">Bistro-Boss-Restaurant</Link>
      </div>

      {/* Right: Nav Menu + User/Profile */}
      <div className="flex-none flex items-center gap-4">
        {/* Desktop Menu */}
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          {navOptions}
        </ul>

        {/* Mobile Dropdown */}
        <div className="dropdown dropdown-end lg:hidden">
          <button tabIndex={0} role="button" className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
            {navOptions}
          </ul>
        </div>

        {/* Profile / Auth Buttons */}
        {user && !justRegister ? (
          <div className="relative">
            <button onClick={() => setDropdown(!dropdown)} className="flex items-center gap-2 focus:outline-none">
              <img
                src={user.photoURL || Man}
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </button>

            {dropdown && (
              <div className="absolute right-0 mt-2 w-56 max-w-xs bg-white text-black rounded-md shadow-lg z-20 origin-top-right">
                <div className="px-4 py-2 border-b border-gray-200">
                  <p className="font-medium truncate">{user.displayName || 'User'}</p>
                  <p className="text-sm text-gray-600 truncate">{user.email}</p>
                </div>
                <button onClick={handelUpdate} className="w-full text-left px-4 py-2 hover:bg-green-400 hover:text-white flex items-center gap-2"
                > Update Profile <VscAccount /> </button>
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
          <>
            <NavLink to="/login"><button className="btn btn-warning">Login</button></NavLink>
            <NavLink to="/register"><button className="btn btn-success">Sign Up</button></NavLink>
          </>
        )}
      </div>
    </div>

  );
};

export default Navbar;
