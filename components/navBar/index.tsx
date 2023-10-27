'use client';
import Link from 'next/link';

import { FacebookIcon, Settings } from '../icon';

import Search from './Search';

import MenuNav from './MenuNav';

const NavBar = () => {
  const chatsHandler = () => {
    console.log('chatsHandler');
  };
  const notificationsHandler = () => {
    console.log('notificationsHandler');
  };
  return (
    <div className=" sticky top-0 z-40 border-[1px] border-b border-wash  ">
      <nav className="flex  h-[56px] w-full  items-center bg-secondary-clr">
        {/* logo */}

        <div className="fixed left-0 ml-4 flex h-[56px] items-center  justify-start ">
          <Link
            href="/"
            className="min-h-0 min-w-0 cursor-pointer p-1 pb-[2px]"
          >
            <FacebookIcon className="fill-white " />
          </Link>
        </div>

        {/* searhc and fake menu md:left-[160px] lg: */}
        <div className="fixed  left-[160px]   right-[unset] top-0 z-[10]   flex  h-[56px] grow  bg-secondary-clr md:right-[160px]  lg:left-[300px] lg:right-0">
          {/* search */}

          <Search />

          {/* fake  menu */}
          <div className="hidden w-full min-w-[280px] max-w-[360px] shrink-[9999] basis-[360px] lg:block">
            {/* fake menu */}
          </div>
        </div>
        {/* menu */}
        <MenuNav />
      </nav>
    </div>
  );
};

export default NavBar;
