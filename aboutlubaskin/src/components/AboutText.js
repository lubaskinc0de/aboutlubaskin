import React from 'react';
import AboutTextHeader from './AboutTextHeader';
import AboutTextUsername from './AboutTextUsername';
import AboutTextMain from './AboutTextMain';

import LinkTo from './LinkTo';

export default function AboutText() {
    return (
        <div className='pt-6 space-y-4 text-center'>
            <AboutTextUsername></AboutTextUsername>
            <AboutTextHeader></AboutTextHeader>
            <AboutTextMain></AboutTextMain>
            <LinkTo url='/projects/' text='See my projects!'></LinkTo>
            <LinkTo url='/followme/' text='Follow me!'></LinkTo>
        </div>
    );
}
