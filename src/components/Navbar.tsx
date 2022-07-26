import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

export interface INavbarProps {
    
}

export default function Navbar (props: INavbarProps) {
    const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  return (
    <div className='h-16 p-3 px-10 lg:px-20 flex items-center bg-white shadow-md fixed top-0 z-20 w-full'>
        <Link to="/">
            <div className='text-orange-500 font-bold text-2xl'>
                <h1>พรรคธารพีพฤกษ์</h1>
            </div>
        </Link>
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        <div className='block lg:hidden ml-auto'>
            <button onClick={() => setOpenSidebar(!openSidebar)} className='text-3xl'><AiOutlineMenu /></button>
        </div>
        <div className='ml-auto text-lg font-semibold hidden lg:block'>
            <Link className='mr-3 cursor-pointer text-orange-500 transition-all duration-300 hover:text-orange-700' to="/">
                หน้าแรก
            </Link>
            <Link className='ml-3 cursor-pointer text-orange-500 transition-all duration-300 hover:text-orange-700'  to="/members">
                สมาชิกพรรค
            </Link>
            <Link className='ml-3 cursor-pointer text-orange-500 transition-all duration-300 hover:text-orange-700' to="/policy">
                นโยบายพรรค
            </Link>
            <Link className='ml-3 cursor-pointer text-orange-500 transition-all duration-300 hover:text-orange-700' to="/news">
                ข่าวสาร
            </Link>
            <Link className='ml-3 cursor-pointer text-orange-500 transition-all duration-300 hover:text-orange-700' to="/about">
                เกี่ยวกับพรรค
            </Link>
        </div>
    </div>
  );
}
