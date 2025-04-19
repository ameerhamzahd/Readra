import React from 'react';

const Tag = ({tag}) => {
    return (
        <div className='p-1 text-[#23BE0A]'>
            <button className="hover:underline hover:cursor-pointer">{tag}</button>
        </div>
    );
};

export default Tag;