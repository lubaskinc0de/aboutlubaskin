import React from 'react';

import AboutFigure from './AboutFigure';
import AboutText from './AboutText';

import Container from './Container';
import Navigation from './Navigation';

import LinkTo from './LinkTo';

export default function About() {
    return (
        <Container>
            <AboutFigure></AboutFigure>
            <AboutText></AboutText>
            <Navigation
                elements={[
                    <LinkTo url='/projects/' text='See my projects!'></LinkTo>,
                    <LinkTo url='/followme/' text='Follow me!'></LinkTo>,
                ]}
            ></Navigation>
        </Container>
    );
}
