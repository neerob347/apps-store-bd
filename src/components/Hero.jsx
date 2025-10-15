
import React from 'react';
import { AppName, AppStoreLink, PlayStoreLink } from '../settings';

const Hero = () => {
    return (
        <div className='container flex items-center flex-col gap-7 pt-20 max-[800px]:pt-12 max-[600px]:pt-9 max-[500px]:pt-6'>
            <div className='text-7xl font-bold text-center max-[800px]:text-5xl max-[600px]:text-4xl max-[400px]:text-3xl'>
                We Build
                <div className='flex gap-3'><div className='bg-linear-to-br bg-clip-text text-transparent from-[#632EE3] to-[#9F62F2]'>Productive</div> Apps</div>
            </div>

            <div className='text-[20px] text-gray-500 text-center'>At {AppName} , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</div>
            
            <div className='grid grid-cols-2 gap-3 max-[400px]:text-[14px]'>
                <a href={PlayStoreLink} target='_blank' className='flex gap-2 border-1 border-gray-400 py-3 px-7 hover:bg-gray-300 hover:scale-105 transition ease-in-out max-[500px]:py-2 max-[500px]:px-4 max-[400px]:px-3'><img src='playstore.png' className='w-[30px] h-[30px] max-[400px]:w-[25px]' /><button>Google Play</button></a>
                <a href={AppStoreLink} target='_blank' className='flex gap-2 border-1 border-gray-400 py-3 px-7  hover:bg-gray-300 hover:scale-105 transition ease-in-out max-[500px]:py-2 max-[500px]:px-4 max-[400px]:px-3'><img src='appstore.png' className='w-[30px] h-[30px] max-[400px]:w-[25px]' /><button>App Store</button></a>
            </div>
            <img src='assets/hero.png' className='max-[500px]:w-9/10'/>
        </div>
    );
};

export default Hero;