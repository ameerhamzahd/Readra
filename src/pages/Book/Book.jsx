import React from 'react';
import { FaRegStar } from "react-icons/fa6";
import Tag from '../Tag/Tag';

const Book = ({ book }) => {
    const { image, tags, bookName, author, category, rating, yearOfPublishing } = book;

    return (
        <div className='w-full'>
            <div className="card bg-base-100 w-full shadow-sm h-full">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt={image}
                        className="max-h-60" />
                </figure>
                <div className="card-body">
                    <div className="card-actions">
                        {
                            tags.map((tag, index) => <Tag key={index} tag={tag}></Tag>)
                        }
                    </div>
                    <h2 className="card-title">{bookName} <div className="badge badge-neutral">{yearOfPublishing}</div> </h2>
                    <p className='pb-3 border-b-2 border-dashed border-gray-200 font-medium'>By: {author}</p>

                    <div className='flex justify-between font-medium'>
                        <p>{category}</p>
                        <span className='flex justify-center items-center gap-1'>{rating} <FaRegStar size={15} /></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;