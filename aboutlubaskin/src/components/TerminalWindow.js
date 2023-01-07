import React, { useEffect } from 'react';

import Center from './Center';

import TerminalText from './TerminalText';
import TerminalHeader from './TerminalHeader';

import { useNavigate } from 'react-router-dom';

export default function Page404() {
    const navigate = useNavigate();

    const string = 'cat lubaskin.txt';
    const typeSpeed = 20;

    useEffect(() => {
        setTimeout(() => {
            navigate('/about/');
        }, string.length * typeSpeed + 2000);
    }, [navigate]);

    return (
        <Center>
            <div className='text-white font-console relative bg-[#333] pt-[47px] pl-[12px] pb-[12px] shadow-2xl shadow-black w-[550px] h-[350px] rounded-tl-[5px] rounded-tr-[5px'>
                <TerminalHeader></TerminalHeader>
                <TerminalText
                    string={string}
                    typeSpeed={typeSpeed}
                ></TerminalText>
            </div>
        </Center>
    );
}
