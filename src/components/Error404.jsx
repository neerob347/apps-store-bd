import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { AppName } from '../settings';

const Error404 = ({ img = "/assets/error-404.png", title = 'Oops, page not found!', subtitle = 'The page you are looking for is not available.' }) => {
    useEffect(() => {
        document.title = AppName + " | " + title;
    }, [title]);
    const navigate = useNavigate();
    return (
        <div className='bg-[#E9E9E9] flex flex-col justify-center items-center py-20 px-3 gap-7'>
            <img src={img} className='w-4/10 aspect-auto max-[800px]:w-6/10' />
            <div className='text-5xl font-bold max-[800px]:text-4xl max-[600px]:text-3xl'>{title}</div>
            <div className='text-gray-600'>{subtitle}</div>
            <div className='flex gap-4'>
                <button onClick={() => navigate(-1)} className='bg-linear-to-br from-[#cccccc] to-[#aaaaaa] hover:from-[#aaaaaa] hover:to-[#777777] hover:scale-105 transition ease-in-out flex gap-1 items-center rounded-md py-3 px-8 text-white font-bold text-[20px]'>Go Back</button>
                <Link to="/"><button className='bg-linear-to-br from-[#632EE3] to-[#9F62F2] hover:from-[#5217db] hover:to-[#7d36e0] hover:scale-105 transition ease-in-out flex gap-1 items-center rounded-md py-3 px-8 text-white font-bold text-[20px]'>Go Home!</button></Link>
            </div>
        </div>
    );
};

export default Error404;
