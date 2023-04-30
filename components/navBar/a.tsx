'use client'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid'
const Search = () => {

  const [isSearchOpen, setIsSearchOpen] = useState<Boolean>(false)
  const hidden = true;


  return (
    <div className='  min-w-0 flex justify-center items-center basis-[744px]  px-0 lg:px-8 w-full grow' >
      <div className='w-[500px] max-w-full  ss:max-w-[320px] md:max-w-[532px] 2sm:w-[680px] lg:w-[680px] lg:max-w-full h-full'>
        {/* transition data- insaimatedlayout */}
        <div className='relative min-h-0 h-full   origin-top-left' >
          <div className='w-full flex flex-col '>
            {/* search form */}
            <div className='flex h-[56px] items-center w-full'>
              <label htmlFor="" className={clsx('rounded-[50px] flex items-stretch w-full relative outline-none min-h-[40px] min-w-[40px] text-xs font-semibold align-middle ', {
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
            <div className={clsx('mt-2 p-2 flex  rounded-[8px] bg-gray-700  max-h-[calc(100vh_-_80px)] ', {
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
                      {Array.from(Array(6).keys()).map((item, index) => (
                        <li key={index} className='w-full'>
                          <div className='rounded-[8px] cursor-pointer flex p-2 text-left relative overflow-hidden my-0 text-xs '>
                            <Link href={"#"} className='w-full'>
                              <div className='flex items-center justify-between z-0 relative w-full '>
                                <div className='p-[6px] flex shrink-0 flex-col select-none'>
                                  <div className='flex items-center justify-center w-[40px] h-[40px] rounded-full overflow-hidden'>
                                    <Image src="/images/avatar.jpg" alt="avatar" width={40} height={40} />
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
                                    <XMarkIcon />
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
  )
}

export default Search