// import { useState } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { IoHeartOutline } from 'react-icons/io5';
import { NavLink, useLocation } from 'react-router-dom';
// import { myCartLength } from '../utility/addToLocalStorage';
const Navbar = () => {
  // const isLogo = useState(false);
  const navLocation = useLocation();
  const isMainNav =
    navLocation.pathname === '/' ||
    location.pathname.startsWith('/categories/');
  // const isNum = true;

  const getCartLength = localStorage.getItem('add-cart');
  const myCartLength = JSON.parse(getCartLength);

  const getWishLength = localStorage.getItem('add-wish');
  const myWishLength = JSON.parse(getWishLength);

  // console.log(myCartLength.length, getCartLength);

  return (
    <div
      className={`navbar ${
        isMainNav ? 'bg-ph-purple text-white' : 'bg-white text-black'
      }  rounded-t-md`}
    >
      <div className='navbar-start'>
        <div className='dropdown'>
          {/* Small Device */}
          <div
            tabIndex={0}
            role='button'
            className='md:btn md:btn-ghost lg:hidden'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow'
          >
            <li>
              <NavLink
                to='/'
                className={({ isActive, isPending }) =>
                  isActive ? 'underline ' : isPending ? 'pending' : ''
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/statistics'>Statistics</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard'>Dashboard</NavLink>
            </li>
            <li>
              <NavLink to='/reviews'>Reviews</NavLink>
            </li>
          </ul>
        </div>
        <a className='btn btn-ghost text-xl'>Gadget Heaven</a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <div className='flex gap-x-5'>
            <NavLink
              to='/'
              className={({ isActive, isPending }) =>
                isActive ? 'underline ' : isPending ? 'pending' : ''
              }
            >
              Home
            </NavLink>
            <NavLink
              to='/statistics'
              className={({ isActive, isPending }) =>
                isActive ? 'underline ' : isPending ? 'pending' : ''
              }
            >
              Statistics
            </NavLink>
            <NavLink
              to='/dashboard'
              className={({ isActive, isPending }) =>
                isActive ? 'underline ' : isPending ? 'pending' : ''
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to='/reviews'
              className={({ isActive, isPending }) =>
                isActive ? 'underline ' : isPending ? 'pending' : ''
              }
            >
              Reviews
            </NavLink>
          </div>
        </ul>
      </div>
      <div className='navbar-end text-xl flex gap-x-2'>
        {/* cart */}
        <div className='border bg-white text-black rounded-full p-1 relative cursor-pointer active:scale-95 transition-all'>
          <IoCartOutline></IoCartOutline>
          <span className='indicator-item badge badge-secondary absolute -top-3 left-2'>
            {myCartLength?.length > 0 ? myCartLength.length : 0}
          </span>
        </div>
        {/* love */}
        <div className='border bg-white text-black rounded-full p-1 relative cursor-pointer active:scale-95 transition-all'>
          <IoHeartOutline></IoHeartOutline>
          <span
            className={`indicator-item badge badge-secondary absolute -top-3 left-2`}
          >
            {myWishLength?.length > 0 ? myWishLength.length : 0}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
