import React from 'react';

export default function Center({ children }) {
    return (
        <main className='min-h-screen p-[16px] flex items-center justify-center'>
            {children}
        </main>
    );
}
