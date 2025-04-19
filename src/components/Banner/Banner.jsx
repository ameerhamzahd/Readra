import React from 'react';

const Banner = () => {
    return (
        <div className='lg:px-28 px-5 lg:py-10 py-5'>
            <div className="hero bg-base-200 rounded-4xl">
                <div className="hero-content flex-col lg:flex-row-reverse md:px-36 text-center lg:text-left">
                    <img
                        src="/src/assets/resources/thumbnail.png"
                        className="w-full md:max-w-sm"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                        <button className="btn bg-[#23BE0A] text-white hover:border hover:border-[#23BE0A] hover:text-[#23BE0A] hover:bg-base-200 my-6"><a>View the List</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;