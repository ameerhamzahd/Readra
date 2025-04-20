import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Tag from '../Tag/Tag';
import { addToStoredDatabase } from '../../utilities/databaseManagement';

const BookDetails = () => {
    const { id } = useParams();
    const convertedId = parseInt(id);
    const data = useLoaderData();
    const targetedBook = data.find((book) => book.bookId === convertedId)

    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = targetedBook;

    const handleMarkAsRead = (id) => {
        addToStoredDatabase(id);
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="flex justify-between flex-col lg:grid grid-cols-2 gap-10 lg:px-28 px-5 lg:py-10 py-5">
                    <div className='flex justify-center bg-base-200 rounded-3xl'>
                        <img
                            src={image}
                            className=" p-10 "
                        />
                    </div>
                    <div className='flex flex-col gap-3 '>
                        <h1 className="text-5xl font-bold">{bookName}</h1>
                        <p className='text-2xl font-medium pb-3 border-b-2 border-dashed border-gray-200'>By: {author}</p>
                        <p className='text-lg font-medium pb-3 border-b-2 border-dashed border-gray-200'>{category}</p>

                        <p><span className='font-bold text-lg text-justify'>Review: </span>{review}</p>

                        <p className='flex items-center pb-3 border-b-2 border-dashed border-gray-200'><span className='font-bold text-lg '>Tag:</span>
                            {
                                tags.map((tag, index) => <Tag key={index} tag={tag}></Tag>)
                            }
                        </p>

                        <div className='grid grid-cols-2'>
                            <div>
                                <p className='text-lg'>Number of Pages: </p>
                                <p className='text-lg'>Publisher: </p>
                                <p className='text-lg'>Year of Publishing: </p>
                                <p className='text-lg'>Rating: </p>
                            </div>

                            <div>
                                <p className='text-lg font-bold'>{totalPages}</p>
                                <p className='text-lg font-bold'>{publisher}</p>
                                <p className='text-lg font-bold'>{yearOfPublishing}</p>
                                <p className='text-lg font-bold'>{rating}</p>
                            </div>
                        </div>

                        <div className='flex gap-3 pt-3'>
                            <button onClick={() => handleMarkAsRead(id)} className='btn'>Mark as Read</button>
                            <button className='btn text-white bg-[#50B1C9] border-[#50B1C9] hover:text-[#50B1C9] hover:bg-white'>Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;