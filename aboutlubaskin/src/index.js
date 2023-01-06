import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import About from './components/About';
import Projects from './components/Projects';
import FollowMe from './components/FollowMe';

import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <About></About>,
    },
    {
        path: '/projects/',
        element: <Projects></Projects>,
    },
    {
        path: '/followme/',
        element: <FollowMe></FollowMe>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}></RouterProvider>);

