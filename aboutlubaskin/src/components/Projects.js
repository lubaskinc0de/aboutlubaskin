import React from 'react';
import cat from '../assets/images/cat.gif';

import ProjectsList from './ProjectsList';
import Container from './Container';

import LinkTo from './LinkTo';

export default function AboutProjects() {
    return (
        <Container>
            <div className='mt-4 items-center flex justify-center'>
                <p className='text-center underline text-lg font-mono font-bold text-neutral-200'>
                    This is my projects
                </p>
                <img alt='cat' className='w-7 h-7 ml-1' src={cat}></img>
            </div>
            <ProjectsList></ProjectsList>
            <LinkTo url='/' text='<< Back'></LinkTo>
        </Container>
    );
}
