import React from 'react';

import Center from './Center';

export default function Container({ children }) {
    return (
        <Center>
            <div className='rounded-xl p-8 backdrop-blur-md border-red-400 border-2 max-w-2xl'>
                {children}
            </div>
        </Center>
    );
}
