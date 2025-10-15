import React, { useState } from 'react';
import { AppName, GitHubLink } from '../settings';
import { FaGithub } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import { RiMenuAddFill } from 'react-icons/ri';

const NavBar = () => {
    const [menu, setMenu] = useState(false);
    const handleMenu = () => {
        // console.log(menu)
        setMenu(!menu)
    };

    return (
        <div>
            <div>
                <div className='bg-white border-b-1 border-b-gray-300 py-2 z-999 w-full max-[750px]:fixed max-[750px]:top-0'>
                    <div className='container flex justify-between items-center max-[750px]:flex-wrap  max-[750px]:justify-around'>
                        <div className='flex justify-between items-center max-[750px]:w-full'>
                            <Link to='/' className='flex gap-2 text-nowrap items-center text-2xl font-bold'><img src='/logo1.png' className='w-[50px] h-[50px]' /><div className='bg-linear-to-br bg-clip-text text-transparent from-[#632EE3] to-[#9F62F2]'>{AppName}</div></Link>
                            <RiMenuAddFill onClick={() => { handleMenu(); }} className='hidden max-[750px]:block text-3xl' />
                        </div>
                        <div className={` transition-[all] duration-500 ease-in-out ${menu ? 'max-[750px]:max-h-[400px] mt-3' : 'max-[750px]:max-h-[0px] mt-0'} overflow-hidden hover:overflow-visible`}>
                            <div className='flex gap-3 font-bold '>
                                <NavLink to='/' className={({ isActive }) => { return (isActive ? "max-[450px]:text-[16px] bg-linear-to-br bg-clip-text text-transparent from-[#632EE3] to-[#9F62F2] border-b-2 border-[#632EE3]" : "hover:text-[#632EE3]") + " hover:scale-105 transition ease-in-out" }}>Home</NavLink>
                                <NavLink to='/apps' className={({ isActive }) => { return (isActive ? "max-[450px]:text-[16px] bg-linear-to-br bg-clip-text text-transparent from-[#632EE3] to-[#9F62F2] border-b-2 border-[#632EE3]" : "hover:text-[#632EE3]") + " hover:scale-105 transition ease-in-out" }}>Apps</NavLink>
                                <NavLink to='/installed' className={({ isActive }) => { return (isActive ? "max-[450px]:text-[16px] bg-linear-to-br bg-clip-text text-transparent from-[#632EE3] to-[#9F62F2] border-b-2 border-[#632EE3]" : "hover:text-[#632EE3]") + " hover:scale-105 transition ease-in-out" }}>Installed</NavLink>
                            </div>
                        </div>
                        <div className={` transition-[all] duration-500 ease-in-out ${menu ? 'max-[750px]:max-h-[400px] mt-3' : 'max-[750px]:max-h-[0px] mt-0'} overflow-hidden hover:overflow-visible`}><a href={GitHubLink} target='_blank'>
                            <button className='bg-linear-to-br from-[#632EE3] to-[#9F62F2] hover:from-[#5217db] hover:to-[#7d36e0] hover:scale-105 transition ease-in-out flex gap-1 items-center rounded-md p-3 text-white font-bold text-[20px] max-[450px]:text-[18px]'><FaGithub /> Contribute</button>
                        </a></div>
                    </div>
                </div>
            </div>
            <div className='max-[750px]:h-16'></div>
        </div>
    );
};

export default NavBar;