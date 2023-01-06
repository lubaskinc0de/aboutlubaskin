import React from 'react';

import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

export default function AboutTextHeader() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Fullstack', 'Game', 'Backend', 'Frontend', 'Python', 'JS', 'Java', 'Django', 'React'], // Strings to display
            startDelay: 70,
            typeSpeed: 70,
            backSpeed: 70,
            backDelay: 70,
            showCursor: false,
            loop: true,
            loopCount: 'infinity',
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <blockquote>
            <p className='text-lg font-medium text-neutral-200'>
                <span ref={el}>Fullstack</span> developer.
            </p>
        </blockquote>
    );
}
