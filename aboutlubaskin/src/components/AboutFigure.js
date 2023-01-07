import React from 'react';

import Avatar from './Avatar';

import AboutUsername from './AboutUsername';

export default function AboutFigure() {
    return (
        <figure className='pt-6 space-y-4 text-center'>
            <Avatar></Avatar>
            <AboutUsername></AboutUsername>
        </figure>
    );
}
