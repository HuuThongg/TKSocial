"use client"
import Link from 'next/link'

import { FacebookIcon, Settings } from '../icon'

import Search from './Search'

import MenuNav from './MenuNav'

const NavBar = () => {
  const chatsHandler = () => {
    console.log("chatsHandler");
  }
  const notificationsHandler = () => {
    console.log("notificationsHandler");
  }
  return (
    <div className=' sticky top-0 z-40  '>
      <nav className='bg-secondary-clr  w-full h-[56px]  flex items-center'>
        {/* logo */}

        <div className='flex justify-start items-center ml-4 fixed left-0  h-[56px] ' >
          <Link href="/" className='p-1 pb-[2px] min-w-0 min-h-0 cursor-pointer'>
            <FacebookIcon className="fill-white " />
          </Link>
        </div>

        {/* searhc and fake menu md:left-[160px] lg: */}
        <div className='fixed  top-0   h-[56px] left-[160px] right-[unset]   md:right-[160px]  lg:left-[300px] lg:right-0  flex grow  z-[10] bg-secondary-clr'>
          {/* search */}

          <Search />

          {/* fake  menu */}
          <div className='hidden lg:block max-w-[360px] basis-[360px] min-w-[280px] shrink-[9999] w-full'>
            {/* fake menu */}
          </div>
        </div>
        {/* menu */}
        <MenuNav/>
      </nav>
    </div>
  )
}

export default NavBar
