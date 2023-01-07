import React from 'react';

export default function Container({ children }) {
    return (
        <div className='grid p-5 place-items-center h-screen'>
            <figure className='rounded-xl p-8 backdrop-blur-md border-red-400 border-2 max-w-2xl w-full'>
                {children}
            </figure>
        </div>
    );
}
