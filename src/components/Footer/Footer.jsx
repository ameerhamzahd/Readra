import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
                <nav className="grid grid-flow-col gap-4">
                    <Link to="/"><a className='font-bold hover:text-[#23BE0A] hover:cursor-pointer'>Home</a></Link>
                    <Link to="/listed-books"><a className='font-bold hover:text-[#23BE0A] hover:cursor-pointer'>Listed Books</a></Link>
                    <Link to="/pages-to-read"><a className='font-bold hover:text-[#23BE0A] hover:cursor-pointer'>Pages to Read</a></Link>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Readra</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;