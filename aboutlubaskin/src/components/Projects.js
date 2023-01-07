import React from 'react';

import ProjectsList from './ProjectsList';
import ProjectsTitle from './ProjectsTitle';

import Container from './Container';
import Navigation from './Navigation';

import LinkTo from './LinkTo';

export default function AboutProjects() {
    return (
        <Container>
            <ProjectsTitle></ProjectsTitle>
            <ProjectsList></ProjectsList>
            <Navigation
                elements={[<LinkTo url='/' text='<< Back'></LinkTo>]}
            ></Navigation>
        </Container>
    );
}
