import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router';

const AppCard = ({ app }) => {
    const { image, id, title, downloads, ratingAvg } = app;
    // console.log(image, title, downloads, ratingAvg);
    return (
        <Link to={`/apps/${id}`}>
            <div className='shadow-md flex flex-col gap-2 bg-white hover:bg-purple-100 hover:scale-105 transition ease-in-out justify-center items-center p-3 rounded-md'>
                <img src={image?`/appIcons/${image}`:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"} alt="" className='w-8/10 aspect-square xbg-gray-500 rounded-4xl' />
                <div className='text-left w-full font-medium text-[20px]'>{title}</div>
                <div className='flex justify-between w-full'>
                    <div className='flex gap-1 items-center bg-[#F1F5E8] text-[#00D390] p-1 rounded-md'><FaDownload /> {downloads}M</div>
                    <div className='flex gap-1 items-center bg-[#FFF0E1] text-[#FF8811] p-1 rounded-md'><FaStar /> {ratingAvg}</div>
                </div>
            </div>
        </Link>
    );
};

export const AppCardInline = ({ app, isInstalled, removeInstalled }) => {
    const { image, id, size, title, downloads, ratingAvg } = app;
    // let isInstalled=false;
    // console.log(image, title, downloads, ratingAvg);
    return (
        <Link to={`/apps/${id}`}>
            <div className='shadow-md flex flex-wrap w-full gap-2 bg-white hover:bg-purple-100 hover:scale-102 transition ease-in-out  items-center p-3 rounded-md my-3'>
                <img src={image?`/appIcons/${image}`:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"} alt="" className='w-[80px] h-[80px] xbg-gray-500' />
                <div>
                    <div className='text-left w-full font-medium text-[20px]'>{title}</div>
                <div className='flex gap-5 w-full'>
                    <div className='flex gap-1 items-center bg-[#F1F5E8] text-[#00D390] p-1 rounded-md'><FaDownload /> {downloads}M</div>
                    <div className='flex gap-1 items-center bg-[#FFF0E1] text-[#FF8811] p-1 rounded-md'><FaStar /> {ratingAvg}</div>
                    <div className='flex gap-1 items-center bg-[#cccccc] text-[#111111] p-1 rounded-md'> {size}MB</div>
                </div>
                </div>
                <div className="flex-1 text-right"> 
                    <button onClick={(e) => {  e.preventDefault(); e.stopPropagation(); if (e.target.innerText.trim().toLowerCase()!=="uninstall") { return; } if(isInstalled && removeInstalled){  removeInstalled(e, id, title); }  }} className={"bg-[#00D390] text-white py-3 px-6 hover:bg-[#01553a] transition ease-in-out rounded-md shadow-md "+(!isInstalled?"bg-gray-400 hover:bg-gray-400":"")}>{isInstalled?"Uninstall" : `Install Now (${size}MB)`}</button>
                  </div>
            </div>
        </Link>
    );
};

export default AppCard;
