import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

import About from './components/About';
import TerminalWindow from './components/TerminalWindow';
import Projects from './components/Projects';
import FollowMe from './components/FollowMe';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter basename='/aboutlubaskin'>
        <Routes>
            <Route path='/' element={<TerminalWindow></TerminalWindow>}></Route>
            <Route path='/about/' element={<About></About>}></Route>
            <Route path='/projects/' element={<Projects></Projects>}></Route>
            <Route path='/followme/' element={<FollowMe></FollowMe>}></Route>
        </Routes>
    </BrowserRouter>
);

