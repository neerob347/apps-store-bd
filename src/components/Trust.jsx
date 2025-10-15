import React from 'react';

const Trust = () => {
    return (
        <div className='bg-linear-to-br from-[#632EE3] to-[#9F62F2] py-20 flex flex-col justify-center items-center text-white max-[800px]:py-10 max-[600px]:py-7'>
            <div className='text-5xl font-bold max-[800px]:text-4xl max-[600px]:text-2xl max-[400px]:text-3xl'>Trusted By Millions, <span className='max-[400px]:block text-center'>Built For You</span></div>
            <div className='flex justify-around my-10 w-3/5 max-[900px]:w-4/5 max-[800px]:w-7/9 max-[700px]:w-8/9 max-[600px]:w-11/12 max-[800px]:my-7 max-[600px]:my-5'>
                <div className='text-center'>
                    <div className='font-thin max-[600px]:text-[14px]'>Total Downloads</div>
                    <div className='text-6xl font-bold max-[800px]:text-4xl max-[600px]:text-2xl'>29.6M</div>
                    <div className='font-thin max-[600px]:text-[14px]'>21% more than last month</div>
                </div>

                 <div className='text-center'>
                    <div className='font-thin max-[600px]:text-[14px]'>Total Reviews</div>
                    <div className='text-6xl font-bold max-[800px]:text-4xl max-[600px]:text-2xl'>906K</div>
                    <div className='font-thin max-[600px]:text-[14px]'>46% more than last month</div>
                </div>

                 <div className='text-center'>
                    <div className='font-thin max-[600px]:text-[14px]'>Active Apps</div>
                    <div className='text-6xl font-bold max-[800px]:text-4xl max-[600px]:text-2xl'>132+</div>
                    <div className='font-thin max-[600px]:text-[14px]'>31 more will Launch</div>
                </div>
                
            </div>
        </div>
    );
};

export default Trust;

