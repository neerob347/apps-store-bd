import React from 'react';
import { AppName } from '../settings';

const Footer = () => {
    return (
        <footer className="bg-[#001931] text-white">
            <div className="container">
                <div className='py-20 max-[1300px]:py-18 max-[1100px]:py-16 max-[1000px]:py-14 max-[800px]:py-12 max-[600px]:py-10 flex flex-wrap gap-20 max-[1150px]:gap-15 max-[1100px]:gap-10 justify-between'>
                    <div className=' max-w-[350px] max-[1000px]:basis-full max-[1000px]:max-w-none'><h1 className='text-3xl pb-4 font-bold'>Apps Store BD</h1>
                        <p className='text-justify'>Explore, download, and manage your favorite software with ease. Our app store offers a wide range of trusted apps, automatic updates, smart recommendations, and fast installation — everything you need to keep your PC optimized, secure, and up to date effortlessly.</p></div>
                    <nav className=' max-w-[120px] flex flex-col justify-between gap-2'>
                        <h1 className='text-2xl font-medium'>Company</h1>

                        <a className='hover:underline' href="#">About Us</a>
                        <a className='hover:underline' href="#">Our Mission</a>
                        <a className='hover:underline' href="#">Contact Sale</a>
                        <a className='invisible '>#</a>
                    </nav>
                    <nav className=' max-w-[160px] flex flex-col justify-between  gap-2'>
                        <h1 className='text-2xl font-medium'>Services</h1>

                        <a className='hover:underline' href="#">Products & Services</a>
                        <a className='hover:underline' href="#">Customer Stories</a>
                        <a className='hover:underline' href="#">Download Apps</a>
                        <a className='invisible'>#</a>
                    </nav>
                    <nav className=' max-w-[160px] flex flex-col justify-between  gap-2'>
                        <h1 className='text-2xl font-medium'>Information</h1>

                        <a className='hover:underline' href="#">Privacy Policy</a>
                        <a className='hover:underline' href="#">Terms & Conditions</a>
                        <a className='hover:underline' href="#">Join Us</a>
                        <a className='invisible'>#</a>
                    </nav>
                    <nav className=' max-w-[220px] flex flex-col justify-between gap-2 text-nowrap'>
                        <h1 className='text-2xl  font-medium'>Social Links</h1>

                        <a className='hover:underline' href="#"><img src='/twitter.png' className='inline' /> @{AppName}</a>
                        <a className='hover:underline' href="#"><img src='/linkedin.png' className='inline' /> @{AppName}</a>
                        <a className='hover:underline' href="#"><img src='/facebook.png' className='inline' /> @{AppName}</a>
                        <a className='hover:underline' href="mailto:support@appsspace.com"><img src='/email.png' className='inline' /> support@appsstorebd.io</a>
                    </nav>

                </div>
                <div className='border-t-[1px] border-gray-700 text-[16px] text-center '>
                    <div className='py-[30px]'>
                        Copyright © 2025 - All right reserved
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;