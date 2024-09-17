// components/BlogList.tsx (Client Component)
'use client';

import { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Card from "./Card";
import { urlFor } from "../lib/sanity";
import { simpleBlogCard } from "../lib/interface";
interface BlogListProps {
    data: simpleBlogCard[];
}

export default function BlogList({ data }: BlogListProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <main className="mt-8 w-full max-w-7xl mx-auto mb-6 px-4">
            <div className="flex flex-col md:flex-row md:justify-between pb-12 space-y-4 md:space-y-0">
                <span>
                    <p className="font-semibold text-sm sm:text-base md:text-lg">Resources</p>
                    <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl">CX Insights</h1>
                </span>

                <ul className="hidden md:flex gap-4 justify-end items-end text-sm sm:text-base md:text-lg">
                    <li className="hover:text-blue-600 cursor-pointer">All</li>
                    <li className="hover:text-blue-600 cursor-pointer">Website</li>
                    <li className="hover:text-blue-600 cursor-pointer">eCommerce</li>
                    <li className="hover:text-blue-600 cursor-pointer">Marketing</li>
                    <li className="hover:text-blue-600 cursor-pointer">More</li>
                </ul>

                <div className="md:hidden flex justify-end items-center">
                    <button onClick={toggleMenu} className="text-2xl text-gray-700 hover:text-blue-600 focus:outline-none">
                        <HiOutlineDotsVertical />
                    </button>

                    {menuOpen && (
                        <ul className="absolute right-4 mt-2 bg-white shadow-lg rounded-lg py-2 w-40 text-sm">
                            <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">All</li>
                            <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Website</li>
                            <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">eCommerce</li>
                            <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Marketing</li>
                            <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">More</li>
                        </ul>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
                {data.map((post, index) => {
                    const imageUrl = urlFor(post.titleImage)?.url() || "/fallback-image.jpg";
                    return (
                        <Card key={index} imageurl={imageUrl} title={post.title} shortdesc={post.smallDescription} slug={post.currentSlug} />
                    );
                })}
            </div>

            <div className="flex justify-center items-center mt-6 mb-16">
                <button className="bg-[#1A28C9] text-white px-[22px] py-[14px] gap-5 rounded-xl text-[16px]">
                    Load More Insights {">"}
                </button>
            </div>
        </main>
    );
}
