'use client'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import { HomeModernIcon, HomeIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { SideBarItems, groups, shortcuts } from './constant'
import clsx from 'clsx'


const SideBar = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [hideScrollbar, setHideScrollbar] = useState<Boolean>(true);

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      setHideScrollbar(false); // Reset timer and show scrollbar
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        setHideScrollbar(true); // Hide scrollbar after 3 seconds of inactivity
      }, 3000);
    };
    const scrollContainer = scrollContainerRef.current;
    scrollContainer?.addEventListener('scroll', handleScroll);
    return () => {
      scrollContainer?.removeEventListener('scroll', handleScroll);
      clearTimeout(timerId);
    };
  }, []);
  return (
    // lg:w-[300px]
    <div className=' flex fixed z-[1] min-h-0 bottom-0 left-0 top-[56px] origin-top-left w-[60px]  lg:w-[300px]'>
      <div className='relative w-full h-full bg-primary-clr overflow-hidden  text-[0.9375rem] '>
        <div className={clsx('flex flex-col relative grow min-0-h h-full  overflow-y-scroll overflow-x-hidden scrollbar-thumb-fifth-clr scrollbar-track-transparent hover:scrollbar-track-[#2c2d2f]    scrollbar-w-2 scrollbar-thumb-rounded-md lg:scrollbar-none', {
          'scrollbar-none ': hideScrollbar,
          'scrollbar': !hideScrollbar,

        })}
          ref={scrollContainerRef}
          onMouseEnter={() => setHideScrollbar(false)}
          onMouseLeave={() => setHideScrollbar(true)}
        >
          <div className="flex flex-col box-border h-full  ">
            {/* top */}
            <div className='flex flex-col shrink-0 z-0 relative  max-w-full grow'>
              <div className='pt-4 pb-2 max-w-full flex flex-col shrink-0 grow relative space-y-1'>
                <div className=' flex'>
                  <span className='flex w-full'>
                    <Link href="#" className='py-2 px-5 basis-auto flex  text-start cursor-pointer relative  rounded-lg hover:bg-third-clr duration-300 group/'>
                      <div className='w-1 h-[36px]  absolute left-0 top-0 bottom-0 scale-100 opacity-100 ease-linear translate-y-[0%] bg-blue-500'>
                      </div>
                      <span>
                        <HomeIcon className='-ml-[2px] w-6 h-6 text-blue-500' />
                      </span>
                      <div className='hidden lg:flex shrink-0 grow-0 ml-[14px] text-start w-[calc(300px-60px-14px)]  select-none items-center  '>
                        <span className='text-primary-text break-words inline-block w-[200px] truncate'>
                          Home
                        </span>
                      </div>
                      <div className='opacity-0 invisible hover:visible hover:opacity-100 absolute top-0 bottom-0 left-2 right-2 rounded-lg  bg-hover-overlay'>
                      </div>
                    </Link>
                  </span>
                </div>
                <div className=''>
                  <div className='flex flex-col w-full'>
                    <Link href="#" className='max-w-full py-[6px] px-[18px] basis-auto flex  text-start cursor-pointer relative box-border rounded-lg hover:bg-third-clr duration-300'>
                      {/* <div className='w-1 h-[36px] bg-blue-500 absolute left-0 top-0 bottom-0 scale-100 opacity-100 ease-linear translate-y-[0%]'>
                      </div> */}
                      { /* <span>  w-[calc(300px-60px-14px)]*/}
                      <div className='flex items-center justify-center w-[24px] h-[24px] rounded-full overflow-hidden bg-secondary-clr relative shrink-0'>
                        <div className='absolute inset-0 w-full h-full flex flex-col shrink-0'>

                          <Image src="/images/avatar.jpg" alt="avatar" width={24} height={24} className='w-full h-full' />
                        </div>
                      </div>


                      <div className='hidden lg:flex shrink-0 grow-0 ml-[14px] text-start select-none items-center'>
                        <span className='text-primary-text break-words '>
                          Huu Thong
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* middle */}
            <div className='box-border flex flex-col grow shrink text-base relative z-0 basis-full  bg-transparent '>
              <div className='flex flex-col shrink-0 relative z-0 max-w-full'>
                <div className='flex flex-col relative grow min-h-0 z-0 w-full '>
                  {/* nub nav */}
                  <div className=' w-full pb-2 pt-1 shrink-0 max-w-full relative z-0 flex flex-col '>
                    <div className='w-full '>
                      {/* border */}
                      <div className='mx-4 mb-2 '>
                        <hr className='border-0 bg-fifth-clr w-full h-[1px] m-0 p-0 ' />
                      </div>
                      {/* data-isanimatedlayout = true */}
                      <div className='w-full relative origin-top-left'>
                        <div className=' rounded-lg absolute top-0 left-0 visible opacity-100 origin-top-left'>
                        </div>
                        <div className='w-full relative h-full  rounded-lg overflow-visible '>
                          <div className='min-h-0 w-full h-full origin-top-left'>
                            <div className='flex flex-col  relative z-0 max-w-full'>
                              <div className='flex flex-col relative grow min-h-0'>
                                <div className='flex flex-col shrink-0 relative max-w-full items-start '>
                                  {
                                    SideBarItems.map((item, index) =>
                                    (
                                      <Link href={item.href} key={index} className='flex shrink-0 py-2 px-5 items-center min-w-0 basis-auto border-0 min-h-0 box-border  rounded-lg hover:bg-third-clr duration-300'>
                                        <div className='flex flex-col '>
                                          <item.icon className='w-6 h-6 text-primary-text' />
                                        </div>
                                        <div className='ml-3 hidden lg:flex  w-[calc(300px-60px-14px)]'>
                                          <span className='text-white min-w-0 break-words max-w-full select-none inline-block  truncate text-[15px] font-medium'>

                                            {item.name}
                                          </span>
                                        </div>
                                        
                                      </Link>
                                    ))
                                  }
                                </div>
                                {/* see all */}
                                <div className='flex flex-col shrink-0 relative max-w-full items-end '>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  {/* all grpu[s] */}
                  <div className='w-full pb-2 pt-1 shrink-0 max-w-full relative z-0 flex flex-col '>
                    <div className='w-full '>
                      {/* border */}
                      <div className='mx-4 mb-2 '>
                        <hr className='border-0 bg-fifth-clr w-full h-[1px] m-0 p-0 ' />
                      </div>
                      {/* data-isanimatedlayout = true */}
                      <div className='w-full relative origin-top-left'>
                        <div className='rounded-lg absolute top-0 left-0 visible opacity-100 origin-top-left'>
                        </div>
                        <div className='w-full relative h-full  rounded-lg overflow-visible '>
                          <div className='min-h-0 w-full h-full origin-top-left'>
                            <div className='flex flex-col  relative z-0 max-w-full'>
                              <div className='flex flex-col relative grow min-h-0'>
                                <div className='flex flex-col shrink-0 relative max-w-full items-start '>
                                  {
                                    groups.map((item, index) =>
                                    (
                                      <Link href={item.href} key={index} className='flex shrink-0 py-2 px-[18px] items-center min-w-0 basis-auto border-0 min-h-0 rounded-lg hover:bg-third-clr duration-300'>
                                        <div className='w-6 h-6 rounded-md overflow-hidden'>
                                          <Image src={item.url} alt="group name" width={24} height={24} />
                                        </div>
                                        <div className='ml-3 hidden lg:flex w-[calc(300px-60px-14px)]'>
                                          <span className='inline-block text-primary-text min-w-0 break-words max-w-full select-none truncate text-[15px] font-medium'>

                                            {item.name}
                                          </span>
                                        </div>
                                      </Link>
                                    ))

                                  }
                                </div>
                                {/* see all */}
                                <div className='flex flex-col shrink-0 relative max-w-full items-end '>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  {/* short cuts */}
                  <div className='w-full pb-2 pt-1 shrink-0 max-w-full relative z-0 flex flex-col '>
                    <div className='w-full '>
                      {/* border */}
                      <div className='mx-4 mb-2 '>
                        <hr className='border-0 bg-fifth-clr w-full h-[1px] m-0 p-0 ' />
                      </div>
                      {/* data-isanimatedlayout = true */}
                      <div className='w-full relative origin-top-left'>
                        <div className='rounded-lg absolute top-0 left-0 visible opacity-100 origin-top-left'>
                        </div>
                        <div className='w-full relative h-full  rounded-lg overflow-visible '>
                          <div className='min-h-0 w-full h-full origin-top-left'>
                            <div className='flex flex-col  relative z-0 max-w-full'>
                              <div className='flex flex-col relative grow min-h-0'>
                                <div className='flex flex-col shrink-0 relative max-w-full items-start '>
                                  {
                                    shortcuts.map((item, index) =>
                                    (
                                      <Link href={item.href} key={index} className='flex shrink-0 py-2 px-[18px] items-center min-w-0 basis-auto border-0 min-h-0 outline-none rounded-lg hover:bg-third-clr  duration-300 '>
                                        <div className='w-6 h-6 rounded-md overflow-hidden'>
                                          <Image src={item.url} alt="group name" width={24} height={24} />
                                        </div>
                                        <div className='ml-3 hidden lg:flex w-[calc(300px-60px-14px)]'>
                                          <span className='inline-block text-primary-text min-w-0 break-words max-w-full select-none truncate text-[15px] font-medium'>

                                            {item.name}
                                          </span>
                                        </div>
                                      </Link>
                                    ))

                                  }
                                </div>
                                {/* see all */}
                                <div className='flex flex-col shrink-0 relative max-w-full items-end '>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* bottom/ footer */}
            <div className='hidden lg:flex flex-col shrink-0 max-w-full  relative border-t border-third-clr'>
              <div className='p-4'>
                <footer>
                  <span className='break-words overflow-hidden max-w-full text-sm font-normal leading-5'>
                    <ul className='inline m-0 p-0 list-none '>
                      
                      <li className='inline'>
                        <Link href={"/"} className='text-secondary-text hover:text-blue-300 text-xs'>
                          Developed by Huu Thong & Khuong
                        </Link>
                      </li>

                    </ul>
                  </span>
                </footer>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SideBar