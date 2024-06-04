import React from 'react';
import Link from 'next/link';
import Logo from '../global/Logo';

// NOTE: not actually using this rn

const Header = () => {
    return (
        <header className='flex justify-between items-center py-5 px-6 shadow-[0_1px_1px_0_rgb(0,0,0,0.1)]'>
            <Logo />
            <nav className='flex gap-5'>
                <Link href='/quickstart'>
                    <p className='text-sm text-gray-600 hover:text-gray-800'>Quickstart</p>
                </Link>
                <Link href='/about'>
                    <p className='text-sm text-gray-600 hover:text-gray-800'>About</p>
                </Link>
                <Link href='/contact'>
                    <p className='text-sm text-gray-600 hover:text-gray-800'>Contact</p>
                </Link>
            </nav>
        </header>
    );
};

export default Header;
