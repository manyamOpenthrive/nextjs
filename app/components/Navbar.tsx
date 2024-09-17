import Link from 'next/link';
import React from 'react';

function Navbar() {
    return (
        <nav className="bg-white border-gray-200 text-black shadow-sm">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Logo section */}
                <div className='flex flex-1 gap-5 font-medium'>
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-600">Cx<span className="text-red-600">Ful</span></span>
                    </Link>
                    <ul className='flex flex-initial'>
                        <li>
                            <Link href="/" className="block py-2 px-3 text-gray-900 ">Services</Link>
                        </li>
                        <li>
                            <Link href="/" className="block py-2 px-3 text-gray-900 ">Work</Link>
                        </li>
                        <li>
                            <Link href="/" className="block py-2 px-3 text-gray-900 ">Insights</Link>
                        </li>
                    </ul>
                </div>
                {/* Menu section */}
                <div className="w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <Link href="/" className="block py-2 px-3 text-gray-900 ">About Us</Link>
                        </li>
                        <li className="block py-2 px-3 text-gray-900"> | </li>
                        <li>
                            <Link href="/" className="flex items-center py-2 px-2 text-gray-900">
                                Start A Project
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
