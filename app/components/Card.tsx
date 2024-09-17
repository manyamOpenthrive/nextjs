import Image from 'next/image'
import React from 'react'
import { card } from '../lib/interface'
import Link from 'next/link'



function Card({ imageurl, title, shortdesc, slug }: card) {
    return (
        <div className="max-w-sm w-full bg-white pb-5 overflow-hidden">
            <Link href={`/blog/${slug}`}>
                <div className="relative w-full h-80 rounded-xl">
                    {/* Image component for optimized loading */}
                    <Image
                        src={imageurl}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        className='rounded-xl'
                    />
                </div>
            </Link>
            <div className="pt-3 h-35 flex flex-col justify-start items-start">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{shortdesc}</p>
            </div>
        </div>
    )
}

export default Card