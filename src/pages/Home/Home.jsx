import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <h1 className='text-center text-4xl font-bold'>Books</h1>
            <Books data={data}></Books>
        </div>
    );
};

export default Home;