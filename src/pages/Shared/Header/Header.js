import React from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../../../assets/logo.png'

const Header = () => {

    const menuItems = 
        <>
        <li className='font-semibold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'><Link to='/'>Home</Link></li>
        <li className='font-semibold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'><Link to='/login'>Login</Link></li>
        <li className='font-semibold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'><Link to='/blog'>Blog</Link></li>
        <li className='font-semibold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'><Link to='/reviews'>My Review</Link></li>
        <li className='font-semibold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'><Link to='/addservice'>Add Service</Link></li>
        </>

    return (
        <div className="navbar h-100 px-10 py-4 bg-fuchsia-100 drop-shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <GiHamburgerMenu className='text-indigo-500'></GiHamburgerMenu>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-fuchsia-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="normal-case text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
            <button className="btn btn-outline btn-gray">Get Started</button>
            </div>
        </div>
    );
};

export default Header;