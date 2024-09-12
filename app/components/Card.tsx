import Image from 'next/image'
import React from 'react'
import { card } from '../lib/interface'
import Link from 'next/link'



function Card({ imageurl, title, shortdesc, slug }: card) {
    return (
        <div className="max-w-sm w-full bg-white rounded-lg shadow-md overflow-hidden">
            <Link href={`/blog/${slug}`}>
                <div className="relative w-full h-48">
                    {/* Image component for optimized loading */}
                    <Image
                        src={imageurl}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                    />
                </div>
            </Link>
            <div className="p-5 h-40 flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{shortdesc}</p>
            </div>
        </div>
    )
}

export default Card