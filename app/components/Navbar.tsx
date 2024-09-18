'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white border-gray-200 text-black shadow-sm">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex flex-1 gap-5 font-medium">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image src={'/Frame.png'} width={67} height={24} alt='logo' />
                    </Link>
                    <ul className="hidden md:flex md:space-x-5 font-medium">
                        <li>
                            <Link href="/" className="block py-2 px-3 text-gray-900">Services</Link>
                        </li>
                        <li>
                            <Link href="/" className="block py-2 px-3 text-gray-900">Work</Link>
                        </li>
                        <li>
                            <Link href="/" className="block py-2 px-3 text-gray-900">Insights</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex space-x-2 md:space-x-8 items-center">
                    <ul className="hidden md:flex font-medium flex-row items-center space-x-2">
                        <li>
                            <Link href="/" className="block py-2 px-3 text-gray-900">About Us</Link>
                        </li>
                        <li className="hidden md:block">|</li>
                        <li>
                            <Link href="/" className="flex items-center py-2 px-3 text-gray-900 rounded-lg ">
                                Start A Project
                                <Image src={'/Vector.png'} width={18} height={18} className='pl-1' alt='vector' />
                            </Link>
                        </li>
                    </ul>

                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden mt-4 p-4 border-t border-gray-200">
                    <ul className="flex flex-col space-y-2">
                        <li>
                            <Link href="/" className="block py-2 px-3 text-gray-900">Services</Link>
                        </li>
                        <li>
                            <Link href="/" className="block py-2 px-3 text-gray-900">Work</Link>
                        </li>
                        <li>
                            <Link href="/" className="block py-2 px-3 text-gray-900">Insights</Link>
                        </li>
                        <li>
                            <Link href="/" className="block py-2 px-3 text-gray-900">About Us</Link>
                        </li>
                        <li>
                            <Link href="/" className="block py-2 px-3 text-gray-900">Start A Project</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
