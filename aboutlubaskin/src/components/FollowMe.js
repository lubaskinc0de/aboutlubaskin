import React from 'react';

import Container from './Container';
import FollowMeLinks from './FollowMeLinks';

import LinkTo from './LinkTo';

export default function FollowMe() {
    return (
        <Container>
            <p className='text-center underline text-lg font-mono font-bold text-neutral-200'>
                Follow me!
            </p>
            <FollowMeLinks></FollowMeLinks>
            <LinkTo url='/' text='<< Back'></LinkTo>
        </Container>
    );
}
