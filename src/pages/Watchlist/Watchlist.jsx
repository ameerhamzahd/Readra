import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { RiArrowDownSLine } from "react-icons/ri";
import { useLoaderData } from 'react-router';
import { getStoredBook } from '../../utilities/databaseManagement';
import WatchlistBookCard from './WatchlistBookCard';


const Watchlist = () => {
    const [watchList, setWatchlist] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBooks = storedBookData.map((id) => parseInt(id));
        const markAsReadlist = data.filter((book) => convertedStoredBooks.includes(book.bookId));

        setWatchlist(markAsReadlist);
    }, [])

    return (
        <div className='lg:px-28 px-5 lg:py-10 py-5"'>
            <h1 className='text-center text-4xl font-bold py-5'>Watchlist</h1>
            <div className='flex justify-center pb-5'>
                <button className="btn bg-[#23BE0A] text-white hover:border hover:border-[#23BE0A] hover:text-[#23BE0A] hover:bg-white" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" }}>
                    Sort by <RiArrowDownSLine size={20} />
                </button>

                <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                    popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" }}>
                    <li><a>Rating</a></li>
                    <li><a>Number of Pages</a></li>
                    <li><a>Publisher Year</a></li>
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Mark as Read</Tab>
                    <Tab>Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-lg py-3'>Books Read: <span className='font-bold'>{watchList.length}</span></h2>

                    {
                        watchList.map((book) => <WatchlistBookCard key={book.bookId} book={book}></WatchlistBookCard>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Watchlist;