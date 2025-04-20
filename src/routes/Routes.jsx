import React from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Books from '../pages/Books/Books';
import BookDetails from '../pages/BookDetails/BookDetails';
import Watchlist from '../pages/Watchlist/Watchlist';

export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            index: true,
            path:"/",
            loader: () => fetch('../../public/booksData.json'),
            Component: Home,
        },
        {
            path:"/listed-books",
            loader: () => fetch('../../public/booksData.json'),
            Component: Watchlist,
        },
        // {
        //     path:"/pages-to-read",
        //     Component: ,
        // },
        {
            path:"/book-details/:id",
            loader: () => fetch('../../public/booksData.json'),
            Component: BookDetails,
        },
      ]
    },
  ]);