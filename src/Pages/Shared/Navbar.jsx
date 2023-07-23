/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
const NavBar = () => {
    const navItems = <>
        <li>
            <Link to="/">HOME</Link>
        </li>
        <li>
            <Link to="/about">ABOUT</Link>
        </li>
        <li>
            <Link to="/colleges">COLLEGES</Link>
        </li>
        <li>
            <Link to="/admission">ADMISSION</Link>
        </li>
        <li>
            <Link to="/mycollege">MY COLLEGE</Link>
        </li>
        <li>
            <Link to="/contact">CONTACT</Link>
        </li>
    </>
    return (
        <div className=''>
           <header className="p-8 dark:bg-gray-800 dark:text-gray-100 flex justify-center">
            <div className="w-full lg:ml-80 container flex justify-between h-16 mx-auto md:justify-center md:space-x-4 ">
                <ul className="items-stretch hidden space-x-3 md:flex">
                    <li className="flex">
                        <Link to="/" className="flex items-center px-2 -mb-1">HOME</Link>
                    </li>
                    <li className="flex">
                        <Link to="about" className="flex items-center px-2 -mb-1">ABOUT</Link>
                    </li>
                    <li className="flex">
                        <Link to="college" className="flex items-center px-2 -mb-1 dark:text-violet-400 dark:border-violet-400">COLLEGES</Link>
                    </li>
                </ul>
                <Link to="/" aria-label="Back to homepage" className="flex items-center">
                    <img src={logo} alt="" />
                </Link>
                <ul className="items-stretch hidden space-x-3 md:flex">
                    <li className="flex">
                        <Link to="" className="flex items-center px-2 -mb-1">ADMISSION</Link>
                    </li>
                    <li className="flex">
                        <Link to="" className="flex items-center px-2 -mb-1">MY COLLEGE</Link>
                    </li>
                    <li className="flex">
                        <Link to="" className="flex items-center px-2 -mb-1">CONTACT</Link>
                    </li>
                </ul>
                <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                </div>
            </div>
            <div className="items-center flex-shrink-0 hidden lg:flex md:colmun">
                <Link to='login'><button className="self-center px-8 text-black py-3 font-semibold hover:text-white bg-white  rounded-full shadow hover:bg-[#fc9928] transition-colors duration-500 hover:border-[#fc9928] border-gray-400 border mr-4">SIGN IN</button></Link>
                <Link to='register'><button className="self-center px-8 py-3 font-semibold hover:text-black bg-[#fc9928] text-white rounded-full shadow hover:bg-white transition-colors duration-500 hover:border-[#fc9928] border">SIGN UP</button></Link>              
            </div>
        </header>
        </div>
    );
};

export default NavBar;