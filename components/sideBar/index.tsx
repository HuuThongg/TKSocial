'use client';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { HomeModernIcon, HomeIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { SideBarItems, groups, shortcuts } from './constant';
import clsx from 'clsx';

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
    <div className=" fixed bottom-0 left-0 top-[56px] z-[1] flex min-h-0 w-[60px] origin-top-left  lg:w-[300px]">
      <div className="relative h-full w-full overflow-hidden bg-primary-clr  text-[0.9375rem] ">
        <div
          className={clsx(
            'min-0-h relative flex h-full grow flex-col  overflow-x-hidden overflow-y-scroll scrollbar-track-transparent scrollbar-thumb-fifth-clr scrollbar-thumb-rounded-md    scrollbar-w-2 hover:scrollbar-track-[#2c2d2f] lg:scrollbar-none',
            {
              'scrollbar-none ': hideScrollbar,
              scrollbar: !hideScrollbar,
            },
          )}
          ref={scrollContainerRef}
          onMouseEnter={() => setHideScrollbar(false)}
          onMouseLeave={() => setHideScrollbar(true)}
        >
          <div className="box-border flex h-full flex-col  ">
            {/* top */}
            <div className="relative z-0 flex max-w-full shrink-0  grow flex-col">
              <div className="relative flex max-w-full shrink-0 grow flex-col space-y-1 pb-2 pt-4">
                <div className=" flex">
                  <span className="flex w-full">
                    <Link
                      href="#"
                      className="group/ relative flex basis-auto  cursor-pointer rounded-lg px-5  py-2 text-start duration-300 hover:bg-third-clr"
                    >
                      <div className="absolute bottom-0  left-0 top-0 h-[36px] w-1 translate-y-[0%] scale-100 bg-blue-500 opacity-100 ease-linear"></div>
                      <span>
                        <HomeIcon className="-ml-[2px] h-6 w-6 text-blue-500" />
                      </span>
                      <div className="ml-[14px] hidden w-[calc(300px-60px-14px)] shrink-0 grow-0 select-none items-center  text-start lg:flex  ">
                        <span className="inline-block w-[200px] truncate break-words text-primary-text">
                          Home
                        </span>
                      </div>
                      <div className="invisible absolute bottom-0 left-2 right-2 top-0 rounded-lg bg-hover-overlay opacity-0 hover:visible  hover:opacity-100"></div>
                    </Link>
                  </span>
                </div>
                <div className="">
                  <div className="flex w-full flex-col">
                    <Link
                      href="#"
                      className="relative box-border flex max-w-full basis-auto  cursor-pointer rounded-lg px-[18px] py-[6px] text-start duration-300 hover:bg-third-clr"
                    >
                      {/* <div className='w-1 h-[36px] bg-blue-500 absolute left-0 top-0 bottom-0 scale-100 opacity-100 ease-linear translate-y-[0%]'>
                      </div> */}
                      {/* <span>  w-[calc(300px-60px-14px)]*/}
                      <div className="relative flex h-[24px] w-[24px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-secondary-clr">
                        <div className="absolute inset-0 flex h-full w-full shrink-0 flex-col">
                          <Image
                            src="/images/avatar.jpg"
                            alt="avatar"
                            width={24}
                            height={24}
                            className="h-full w-full"
                          />
                        </div>
                      </div>

                      <div className="ml-[14px] hidden shrink-0 grow-0 select-none items-center text-start lg:flex">
                        <span className="break-words text-primary-text ">
                          Huu Thong
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* middle */}
            <div className="relative z-0 box-border flex shrink grow basis-full flex-col bg-transparent  text-base ">
              <div className="relative z-0 flex max-w-full shrink-0 flex-col">
                <div className="relative z-0 flex min-h-0 w-full grow flex-col ">
                  {/* nub nav */}
                  <div className=" relative z-0 flex w-full max-w-full shrink-0 flex-col pb-2 pt-1 ">
                    <div className="w-full ">
                      {/* border */}
                      <div className="mx-4 mb-2 ">
                        <hr className="m-0 h-[1px] w-full border-0 bg-fifth-clr p-0 " />
                      </div>
                      {/* data-isanimatedlayout = true */}
                      <div className="relative w-full origin-top-left">
                        <div className=" visible absolute left-0 top-0 origin-top-left rounded-lg opacity-100"></div>
                        <div className="relative h-full w-full  overflow-visible rounded-lg ">
                          <div className="h-full min-h-0 w-full origin-top-left">
                            <div className="relative z-0  flex max-w-full flex-col">
                              <div className="relative flex min-h-0 grow flex-col">
                                <div className="relative flex max-w-full shrink-0 flex-col items-start ">
                                  {SideBarItems.map((item, index) => (
                                    <Link
                                      href={item.href}
                                      key={index}
                                      className="box-border flex min-h-0 min-w-0 shrink-0 basis-auto items-center rounded-lg border-0 px-5  py-2 duration-300 hover:bg-third-clr"
                                    >
                                      <div className="flex flex-col ">
                                        <item.icon className="h-6 w-6 text-primary-text" />
                                      </div>
                                      <div className="ml-3 hidden w-[calc(300px-60px-14px)]  lg:flex">
                                        <span className="inline-block min-w-0 max-w-full select-none truncate break-words  text-[15px] font-medium text-white">
                                          {item.name}
                                        </span>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                                {/* see all */}
                                <div className="relative flex max-w-full shrink-0 flex-col items-end "></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* all grpu[s] */}
                  <div className="relative z-0 flex w-full max-w-full shrink-0 flex-col pb-2 pt-1 ">
                    <div className="w-full ">
                      {/* border */}
                      <div className="mx-4 mb-2 ">
                        <hr className="m-0 h-[1px] w-full border-0 bg-fifth-clr p-0 " />
                      </div>
                      {/* data-isanimatedlayout = true */}
                      <div className="relative w-full origin-top-left">
                        <div className="visible absolute left-0 top-0 origin-top-left rounded-lg opacity-100"></div>
                        <div className="relative h-full w-full  overflow-visible rounded-lg ">
                          <div className="h-full min-h-0 w-full origin-top-left">
                            <div className="relative z-0  flex max-w-full flex-col">
                              <div className="relative flex min-h-0 grow flex-col">
                                <div className="relative flex max-w-full shrink-0 flex-col items-start ">
                                  {groups.map((item, index) => (
                                    <Link
                                      href={item.href}
                                      key={index}
                                      className="flex min-h-0 min-w-0 shrink-0 basis-auto items-center rounded-lg border-0 px-[18px] py-2 duration-300 hover:bg-third-clr"
                                    >
                                      <div className="h-6 w-6 overflow-hidden rounded-md">
                                        <Image
                                          src={item.url}
                                          alt="group name"
                                          width={24}
                                          height={24}
                                        />
                                      </div>
                                      <div className="ml-3 hidden w-[calc(300px-60px-14px)] lg:flex">
                                        <span className="inline-block min-w-0 max-w-full select-none truncate break-words text-[15px] font-medium text-primary-text">
                                          {item.name}
                                        </span>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                                {/* see all */}
                                <div className="relative flex max-w-full shrink-0 flex-col items-end "></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* short cuts */}
                  <div className="relative z-0 flex w-full max-w-full shrink-0 flex-col pb-2 pt-1 ">
                    <div className="w-full ">
                      {/* border */}
                      <div className="mx-4 mb-2 ">
                        <hr className="m-0 h-[1px] w-full border-0 bg-fifth-clr p-0 " />
                      </div>
                      {/* data-isanimatedlayout = true */}
                      <div className="relative w-full origin-top-left">
                        <div className="visible absolute left-0 top-0 origin-top-left rounded-lg opacity-100"></div>
                        <div className="relative h-full w-full  overflow-visible rounded-lg ">
                          <div className="h-full min-h-0 w-full origin-top-left">
                            <div className="relative z-0  flex max-w-full flex-col">
                              <div className="relative flex min-h-0 grow flex-col">
                                <div className="relative flex max-w-full shrink-0 flex-col items-start ">
                                  {shortcuts.map((item, index) => (
                                    <Link
                                      href={item.href}
                                      key={index}
                                      className="flex min-h-0 min-w-0 shrink-0 basis-auto items-center rounded-lg border-0 px-[18px] py-2 outline-none duration-300  hover:bg-third-clr "
                                    >
                                      <div className="h-6 w-6 overflow-hidden rounded-md">
                                        <Image
                                          src={item.url}
                                          alt="group name"
                                          width={24}
                                          height={24}
                                        />
                                      </div>
                                      <div className="ml-3 hidden w-[calc(300px-60px-14px)] lg:flex">
                                        <span className="inline-block min-w-0 max-w-full select-none truncate break-words text-[15px] font-medium text-primary-text">
                                          {item.name}
                                        </span>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                                {/* see all */}
                                <div className="relative flex max-w-full shrink-0 flex-col items-end "></div>
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
            <div className="relative hidden max-w-full shrink-0 flex-col  border-t border-third-clr lg:flex">
              <div className="p-4">
                <footer>
                  <span className="max-w-full overflow-hidden break-words text-sm font-normal leading-5">
                    <ul className="m-0 inline list-none p-0 ">
                      <li className="inline">
                        <Link
                          href={'/'}
                          className="text-xs text-secondary-text hover:text-blue-300"
                        >
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
  );
};

export default SideBar;
