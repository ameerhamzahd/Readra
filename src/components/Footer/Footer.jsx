import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
                <nav className="grid grid-flow-col gap-4">
                    <a className='font-bold hover:text-[#23BE0A] hover:bg-white hover:cursor-pointer'>Home</a>
                    <a className='font-bold hover:text-[#23BE0A] hover:bg-white hover:cursor-pointer'>Listed Books</a>
                    <a className='font-bold hover:text-[#23BE0A] hover:bg-white hover:cursor-pointer'>Pages to Read</a>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Readra</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;