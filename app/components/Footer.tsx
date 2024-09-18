import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
    return (
        <footer className="bg-black text-gray-300">
            <div className="mx-auto w-full max-w-screen-xl px-4 py-6 lg:py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="col-span-1">
                        <div className="text-white text-3xl font-semibold mb-4">
                            <Image src={'/Frame (1).png'} width={67} height={24} />
                        </div>
                        <p className="text-gray-400 text-sm">
                            Website design & development that interacts & connects with your prospects and customers just like you would do if in your office & store.
                            Design & development that interacts & connects with your prospects and customers just like you would do if in your office & store.
                        </p>
                    </div>

                    {/* Important Links */}
                    <div className="col-span-1">
                        <h2 className="mb-6 text-lg font-semibold text-white">Important Links</h2>
                        <ul className="text-gray-400 space-y-4">
                            <li><Link href="/">Services</Link></li>
                            <li><Link href="/">Work</Link></li>
                            <li><Link href="/">Insights</Link></li>
                            <li><Link href="/">About</Link></li>
                            <li><Link href="/">Get In Touch</Link></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="col-span-1">
                        <h2 className="mb-6 text-lg font-semibold text-white">Contact Us</h2>
                        <p className="text-gray-400">
                            Cxful, Subsidiary of<br />
                            Openthrive Service Pvt. Ltd.<br />
                            Sahakar Nagar, Bangalore<br />
                            India, 560092
                        </p>
                    </div>

                    {/* Openthrive Links */}
                    <div className="col-span-1">
                        <h2 className="mb-6 text-lg font-semibold text-white">Openthrive</h2>
                        <ul className="text-gray-400 space-y-4">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/">About</Link></li>
                            <li><Link href="/">Insider</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="mt-8 flex justify-between items-center   pt-6">
                    <p className="text-gray-400 text-sm">
                        Copy Right 2023. Cxful & Openthrive
                    </p>
                    <div className="flex space-x-6">
                        <Link href="/" className="text-gray-400">Privacy Policy</Link>
                        <Link href="/" className="text-gray-400 ">Terms Of Services</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
