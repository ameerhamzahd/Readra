import React from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    
    
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-15 justify-items-center lg:px-28 px-5 lg:py-10 py-5'>
            {
                data.map((book) => <Book key={book.bookId} book={book}></Book>)
            }
        </div>
    );
};

export default Books;