import React from 'react';

import Container from './Container';
import Navigation from './Navigation';

import FollowMeLinks from './FollowMeLinks';
import FollowMeTitle from './FollowMeTitle';

import LinkTo from './LinkTo';

export default function FollowMe() {
    return (
        <Container>
            <FollowMeTitle></FollowMeTitle>
            <FollowMeLinks></FollowMeLinks>
            <Navigation
                elements={[<LinkTo url='/about/' text='<< Back'></LinkTo>]}
            ></Navigation>
        </Container>
    );
}
