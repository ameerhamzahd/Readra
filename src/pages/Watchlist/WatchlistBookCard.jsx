import React from 'react';
import Tag from '../Tag/Tag';
import { FiMapPin } from "react-icons/fi";
import { IoPeopleOutline } from "react-icons/io5";
import { BsFiles } from "react-icons/bs";

const WatchlistBookCard = ({ book }) => {
    const { image, bookName, author, category, tags, totalPages, publisher, yearOfPublishing, rating } = book;

    return (
        <div>
            <div className="flex flex-col gap-3 py-3">
                <div className=" flex flex-col justify-center w-full card bg-base-100 shrink-0 border border-gray-200">
                    <div className="flex justify-between p-5 items-center">
                        <div className="gap-3 flex justify-center items-center">
                            <div className="avatar">
                                <div className="w-60 p-5 bg-base-200 rounded-2xl">
                                    <img
                                        src={image}
                                        alt={image} />
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <h1 className="text-2xl font-bold">{bookName}</h1>
                                <p className='text-md font-medium'>By: {author}</p>

                                <p className='flex items-center '><span className='font-bold text-md '>Tag:</span>
                                    {
                                        tags.map((tag, index) => <Tag key={index} tag={tag}></Tag>)
                                    }

                                    <p className='flex items-center gap-2 text-md'>
                                        <FiMapPin className='ml-10' size={15} /> Year of Publishing: <span className='font-bold'>{yearOfPublishing}</span>
                                    </p>
                                </p>

                                <div className='flex gap-10 pb-3 border-b-2 border-dashed border-gray-200 w-full'>
                                    <p className='text-md font-medium flex items-center gap-2'><IoPeopleOutline size={15} /> Publisher: {publisher}</p>
                                    <p className='text-md font-medium flex items-center gap-2'><BsFiles size={15} /> Page: {totalPages}</p>
                                </div>

                                <div className='flex gap-5 pt-3'>
                                    <p className='text-md font-medium text-[#328EFF] bg-sky-100 rounded-full btn'>Category: {category}</p>
                                    <p className='text-md font-medium text-[#FFAC33] bg-orange-100 rounded-full btn'>Rating: {rating}</p>
                                    <p className='text-md font-medium text-white bg-[#23BE0A] rounded-full btn'>View Details</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WatchlistBookCard;