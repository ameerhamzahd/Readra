import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm lg:px-28 px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <Link to="/"><li><a>Home</a></li></Link>
                            <Link to="/listed-books"><li><a href=''>Listed Books</a></li></Link>
                            <Link to="/pages-to-read"><li><a>Pages to Read</a></li></Link>
                            <li className='gap-1 md:hidden'>
                                <a className="btn bg-[#23BE0A] text-white hover:border hover:border-[#23BE0A] hover:text-[#23BE0A] hover:bg-white">Sign In</a>
                                <a className="btn bg-[#59C6D2] text-white hover:border hover:border-[#23BE0A] hover:text-[#59C6D2] hover:bg-white">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                    <a className="text-xl font-bold">Readra</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link to="/"><li><a className='font-bold hover:border hover:border-[#23BE0A] hover:text-[#23BE0A] hover:bg-white'>Home</a></li></Link>
                        <Link to="/listed-books"><li><a className='font-bold hover:border hover:border-[#23BE0A] hover:text-[#23BE0A] hover:bg-white'>Listed Books</a></li></Link>
                        <Link to="/pages-to-read"><li><a className='font-bold hover:border hover:border-[#23BE0A] hover:text-[#23BE0A] hover:bg-white'>Pages to Read</a></li></Link>
                    </ul>
                </div>
                <div className="navbar-end gap-3 hidden md:flex">
                    <a className="btn bg-[#23BE0A] text-white hover:border hover:border-[#23BE0A] hover:text-[#23BE0A] hover:bg-white">Sign In</a>
                    <a className="btn bg-[#59C6D2] text-white hover:border hover:border-[#23BE0A] hover:text-[#59C6D2] hover:bg-white">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;