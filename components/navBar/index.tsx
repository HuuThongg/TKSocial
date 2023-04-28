"use client"
import Link from 'next/link'
import {useState} from 'react'
import { FacebookIcon } from '../icon'
import Image from 'next/image'
import clsx from 'clsx'
import { BellIcon,ChatBubbleBottomCenterIcon, MagnifyingGlassIcon,XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
const NavBar = () => {
  const[isSearchOpen, setIsSearchOpen] = useState<Boolean>(false)

  const hidden = true;

  return (
    <div className=' sticky top-0 z-40  '>
      <nav className='bg-secondary-clr  w-full h-[56px] flex items-center '>
        {/* logo */}
        <div className='flex justify-start items-center ml-4 fixed left-0  h-[56px] ' >
          <Link href="/" className='p-1 pb-[2px] min-w-0 min-h-0 cursor-pointer'>
            <FacebookIcon className="fill-white dark:fill-dark"/>
          </Link>
        </div>
        {/* searhc and fake menu md:left-[160px] lg: */}
        <div className='fixed  top-0   h-[56px] left-[160px] right-[unset]   md:right-[160px]  lg:left-[300px] lg:right-0  flex grow  z-[3] bg-secondary-clr'>
          {/* search */}
          <div className='  min-w-0 flex justify-center items-center basis-[744px]  px-0 lg:px-8 w-full grow' >
            <div className='w-[500px] max-w-full  ss:max-w-[320px] md:max-w-[532px] 2sm:w-[680px] lg:w-[680px] lg:max-w-full h-full'>
              {/* transition data- insaimatedlayout */}
              <div className='relative min-h-0 h-full   origin-top-left' >
                  <div className='w-full flex flex-col '>
                    {/* search form */}
                    <div className='flex h-[56px] items-center w-full'>
                    <label htmlFor="" className={clsx('rounded-[50px] flex items-stretch w-full relative outline-none min-h-[40px] min-w-[40px] text-xs font-semibold align-middle ',{
                      'bg-fourth-clr': !isSearchOpen,
                      'bg-third-clr': isSearchOpen,
                    })}
                    onClick={() => setIsSearchOpen(true)}
                    >
                        <span className='flex items-center whitespace-nowrap pointer-events-none ease-linear pl-3'>
                          <MagnifyingGlassIcon className='w-4 h-4' />
                        </span>
                        <input type="text" className='w-full bg-transparent grow shrink pt-[7px] px-2 pb-[9px]  rounded-[50px] cursor-text text-left basis-auto h-[40px]' />
                      </label>
                    </div>
                    {/* search result */}
                    {/* add box shadow */}
                    <div className={clsx('mt-2 p-2 flex  rounded-[8px] bg-gray-700  max-h-[calc(100vh_-_80px)] ',{
                      'hidden': hidden
                    })}>
                      <div className='overflow-x-hidden overflow-y-auto flex flex-col relative z-0 w-full'>
                        <ul className='flex flex-col '>
                          <li >
                            <div className='mb-2'>
                              <div className='flex flex-col pt-3 pb-2 max-w-full z-0'>
                                <div className='min-h-0 flex flex-col grow relative z-0 w-full'>
                                  <div className='px-2 ,mt-[5px] '>
                                    <div className='flex items-center justify-between flex-nowrap w-full'>
                                      <div className='grow'>
                                        <h2 className='text-white text-base font-semibold'>Recent</h2>
                                      </div>
                                      <div className='grow-0 '>
                                        <button className='text-blue-500 text-base font-semibold'>Edit</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <ul>
                                {Array.from(Array(6).keys()).map((item,index) => (
                                  <li key={index} className='w-full'>
                                    <div className='rounded-[8px] cursor-pointer flex p-2 text-left relative overflow-hidden my-0 text-xs '>
                                      <Link href={"#"} className='w-full'>
                                        <div className='flex items-center justify-between z-0 relative w-full '>
                                          <div className='p-[6px] flex shrink-0 flex-col select-none'>
                                            <div className='flex items-center justify-center w-[40px] h-[40px] rounded-full overflow-hidden'>
                                              <Image src="/images/avatar.jpg" alt="avatar" width={40} height={40}/>
                                            </div>
                                              
                                          </div>
                                          <div className='flex flex-col grow shrink min-w-0 basis-0  bg-red-400 max-w-full p-[6px] '>
                                            <div className='my-[5px]'>
                                              <span>
                                                J2TeamComminuty
                                              </span>
                                            </div>
                                          </div>
                                          {/* delete */}
                                          <div className='flex flex-col p-[6px] bg-yellow-300 min-w-0 max-w-full'>
                                            <div className='flex items-center justify-center w-[20px] h-[20px] rounded-full overflow-hidden cursor-pointer'>
                                              <XMarkIcon/>
                                            </div>
                                          </div>
                                        </div>
                                      </Link>
                                    </div>
                                  </li>
                                  ))
                                }
                            </ul>
                          </li>
                        </ul>
                      </div>
                      </div>
                    </div>
              </div>
            </div>
          </div>
          {/* fake  menu */}
          <div className='hidden lg:block max-w-[360px] basis-[360px] min-w-[280px] shrink-[9999] w-full'>
            {/* fake menu */}
          </div>
        </div>
        {/* menu */}
        <div className=' z-[3] fixed right-0 top-0 pr-4 pl-1 h-[56px]'>
          <div className=' h-full flex items-center relative z-0 flex-row-reverse gap-x-2'>
            <div className='h-full flex items-center justify-center relative active:scale-95 active:opacity-50'>
              <div className='flex relative p-0 m-0 min-h-0 rounded-full overflow-hidden'>
                <Image src="/images/avatar.jpg" alt="avatar" width={40} height={40}>

                </Image>
              </div>
              <div className='bg-red-500 absolute top-[6px] right-[2px] w-[10px] h-[10px] rounded-full flex justify-center items-center'>
                <span className='text-[10px] text-white dark:text-black font-semibold'></span>
              </div>
              <div className='bg-third-clr absolute bottom-1 right-0 w-3 h-3 rounded-full flex justify-center items-center'>
                <ChevronDownIcon/>
              </div>
            </div>

            <div className='h-full flex items-center justify-center relative'>
              <div className='h-[40px] w-[40px] flex items-center justify-center p-0 m-0 rounded-full overflow-hidden  bg-secondary-btn-bg hover:bg-primary-icon-clr-hover
                active:bg-primary-icon-clr-active active:scale-95'>
                <BellIcon className='w-5 h-5 text-primary-btn-icon'/>
              </div> 

              <div className='bg-red-500 absolute top-1 right-0 w-4 h-4 rounded-full flex justify-center items-center'>
                <span className='text-[10px] text-white dark:text-black font-semibold'>9</span>
              </div>
            </div>
            <div className='h-full flex items-center justify-center relative'>
              <div className='h-[40px] w-[40px] flex items-center justify-center p-0 m-0 rounded-full overflow-hidden  bg-secondary-btn-bg hover:bg-primary-icon-clr-hover
                active:bg-primary-icon-clr-active active:scale-95'>
                <ChatBubbleBottomCenterIcon className='w-5 h-5 text-primary-btn-icon' />
              </div>
              <div className='bg-red-500 absolute top-1 right-0 w-4 h-4 rounded-full flex justify-center items-center'>
                <span className='text-[10px] text-white dark:text-black font-semibold'>99</span>
              </div>
            </div>
          </div>
          
        </div>
      </nav>
    </div>
  )
}

export default NavBar