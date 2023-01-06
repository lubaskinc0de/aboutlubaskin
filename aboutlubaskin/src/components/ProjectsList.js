import React from 'react';

export default function AboutProjectsList() {
    return (
        <ul className='list-disk text-center mt-2 text-lg font-mono font-light'>
            <li className='text-green-300'>
                <a href='https://github.com/lubaskinc0de/Social-Net'>
                    My own social network!
                </a>
            </li>
            <li className='text-blue-500'>
                <a href='https://github.com/lubaskinc0de/tgbot-shop-template'>
                    Internet shop in the telegram!
                </a>
            </li>
            <li className='text-orange-400'>
                <a href='https://github.com/lubaskinc0de/spacerush'>
                    My own space rush game!
                </a>
            </li>
        </ul>
    );
}
