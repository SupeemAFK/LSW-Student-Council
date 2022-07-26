import * as React from 'react';
import { Link } from 'react-router-dom';

export interface ISidebarProps {
    openSidebar: boolean;
    setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar ({ openSidebar, setOpenSidebar }: ISidebarProps) {
  return (
    <div className={`w-36 h-full fixed top-16 z-50 bg-white shadow-lg ${openSidebar ? 'right-0' : 'right-[-100%]'} transition-all duration-300`}>
        <div className='ml-auto text-lg font-semibold flex flex-col items-start p-4'>
            <Link onClick={() => setOpenSidebar(false)} className='text-orange-500' to="/">
                หน้าแรก
            </Link>
            <div className='p-[0.01rem] bg-orange-500 w-full my-2'></div>
            <Link onClick={() => setOpenSidebar(false)} className='text-orange-500'  to="/members">
                สมาชิกพรรค
            </Link>
            <div className='p-[0.01rem] bg-orange-500 w-full my-2'></div>
            <Link onClick={() => setOpenSidebar(false)} className='text-orange-500' to="/policy">
                นโยบายพรรค
            </Link>
            <div className='p-[0.01rem] bg-orange-500 w-full my-2'></div>
            <Link onClick={() => setOpenSidebar(false)} className='text-orange-500' to="/about">
                เกี่ยวกับพรรค
            </Link>
        </div>
    </div>
  );
}

