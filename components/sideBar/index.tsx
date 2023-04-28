import Link from 'next/link'
import React from 'react'
import {HomeModernIcon,HomeIcon} from '@heroicons/react/24/solid'
import Image from 'next/image'
const SideBar = () => {
  return (
    <div className=' flex fixed z-[1] min-h-0 bottom-0 left-0 top-[56px] origin-top-left w-[60px] lg:w-[300px]'>
      <div className='relative w-full h-full bg-zinc-700 overflow-hidden  text-[0.9375rem] '>
        <div className='flex flex-col relative grow min-0-h h-full '>
          {/* top */}
          <div className='flex flex-col shrink-0 z-0 relative  max-w-full'>
            <div className='pt-4 pb-2 max-w-full flex flex-col shrink-0 grow relative space-y-1'>
              <div className=' flex'>
                <span className='flex w-full'>
                  <Link href="#" className='w-full py-2 px-5 basis-auto flex  text-start cursor-pointer relative'>
                    <div className='w-1 h-[36px] bg-blue-500 absolute left-0 top-0 bottom-0 scale-100 opacity-100 ease-linear translate-y-[0%]'>
                    </div>
                    <span>
                      <HomeIcon className='w-5 h-5 text-blue-500' />
                    </span>
                    <div className='flex shrink-0 grow-0 ml-[14px] text-start w-[calc(300px-60px-14px)] select-none items-center'>
                      <span className='text-zinc-200 break-words '>
                        Home
                      </span>
                    </div>
                  </Link>
                </span>
              </div>
              <div className='bg-red-400'>
                <span className='flex w-full'>
                  <Link href="#" className='w-full py-2 px-5 basis-auto flex  text-start cursor-pointer relative box-border'>
                    {/* <div className='w-1 h-[36px] bg-blue-500 absolute left-0 top-0 bottom-0 scale-100 opacity-100 ease-linear translate-y-[0%]'>
                    </div> */}
                    { /* <span>  w-[calc(300px-60px-14px)]*/}
                    <div className='flex items-center justify-center w-[24px] h-[24px] rounded-full overflow-hidden bg-white'>
                      <Image src="/images/avatar.jpg" alt="avatar" width={30} height={24} className='w-full h-full'/>
                    </div>
                    
                    <div className='flex shrink-0 grow-0 ml-[14px] text-start select-none items-center'>
                      <span className='text-zinc-200 break-words '>
                        Huu Thong
                      </span>
                    </div>
                  </Link>
                </span>
              </div>
            </div>
          </div>
          {/* middle */}
          <div className='box-border flex flex-col grow shrink text-base relative z-0 basis-full  bg-slate-700'>
            <div className='flex flex-col shrink-0 relative z-0 max-w-full'>
              <div className='flex flex-col relative grow min-h-0 z-0 w-full'>
                {/* nub nav */}
                <div className=' w-full pb-2 pt-1 shrink-0 max-w-full relative z-0 flex flex-col '>
                  <div className='w-full '>
                    {/* border */}
                    <div className='mx-4 mb-2 '>
                      <hr  className='border-0 bg-blue-500 w-full h-[1px] m-0 p-0 '/>
                    </div>
                    {/* data-isanimatedlayout = true */}
                    <div className='w-full relative origin-top-left'>
                      <div className='bg-red-200 rounded-lg absolute top-0 left-0 visible opacity-100 origin-top-left'>
                      </div>
                      <div className='w-full relative h-full bg-red-200 rounded-lg overflow-visible '>
                        <div className='min-h-0 w-full h-full origin-top-left'>
                          <div className='flex flex-col  relative z-0 max-w-full'>
                            <div className='flex flex-col relative grow min-h-0'>
                              <div className='flex flex-col shrink-0 relative max-w-full items-start '>
                                {
                                  Array.from(Array(6).keys()).map((item,index) => 
                                    (
                                      <Link href={"/"} key={index} className='flex shrink-0 py-2 px-5 items-center min-w-0 basis-auto border-0 min-h-0'>
                                        <div>
                                          <HomeModernIcon className='w-5 h-5 text-blue-500' />
                                        </div>
                                        <div className='ml-3'>
                                          <span className='text-white min-w-0 break-words max-w-full select-none'>

                                            Friend
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
                      <hr className='border-0 bg-blue-500 w-full h-[1px] m-0 p-0 ' />
                    </div>
                    {/* data-isanimatedlayout = true */}
                    <div className='w-full relative origin-top-left'>
                      <div className='bg-red-200 rounded-lg absolute top-0 left-0 visible opacity-100 origin-top-left'>
                      </div>
                      <div className='w-full relative h-full bg-red-200 rounded-lg overflow-visible '>
                        <div className='min-h-0 w-full h-full origin-top-left'>
                          <div className='flex flex-col  relative z-0 max-w-full'>
                            <div className='flex flex-col relative grow min-h-0'>
                              <div className='flex flex-col shrink-0 relative max-w-full items-start '>
                                {
                                  Array.from(Array(6).keys()).map((item, index) =>
                                  (
                                    <Link href={"/"} key={index} className='flex shrink-0 py-2 px-5 items-center min-w-0 basis-auto border-0 min-h-0'>
                                      <div>
                                        <HomeModernIcon className='w-5 h-5 text-blue-500' />
                                      </div>
                                      <div className='ml-3'>
                                        <span className='text-white min-w-0 break-words max-w-full select-none'>

                                          Friend
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
                      <hr className='border-0 bg-blue-500 w-full h-[1px] m-0 p-0 ' />
                    </div>
                    {/* data-isanimatedlayout = true */}
                    <div className='w-full relative origin-top-left'>
                      <div className='bg-red-200 rounded-lg absolute top-0 left-0 visible opacity-100 origin-top-left'>
                      </div>
                      <div className='w-full relative h-full bg-red-200 rounded-lg overflow-visible '>
                        <div className='min-h-0 w-full h-full origin-top-left'>
                          <div className='flex flex-col  relative z-0 max-w-full'>
                            <div className='flex flex-col relative grow min-h-0'>
                              <div className='flex flex-col shrink-0 relative max-w-full items-start '>
                                {
                                  Array.from(Array(1).keys()).map((item, index) =>
                                  (
                                    <Link href={"/"} key={index} className='flex shrink-0 py-2 px-5 items-center min-w-0 basis-auto border-0 min-h-0'>
                                      <div>
                                        <HomeModernIcon className='w-5 h-5 text-blue-500' />
                                      </div>
                                      <div className='ml-3'>
                                        <span className='text-white min-w-0 break-words max-w-full select-none'>

                                          Friend
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
          <div className='hidden lg:flex flex-col shrink-0 max-w-full justify-end relative'>
            <div className='p-4'>
              <footer>
                <span className='break-words overflow-hidden max-w-full text-sm font-normal leading-5'>
                  <ul className='inline m-0 p-0 list-none '>
                    <li className='inline'>
                      <Link href={"/"} className='text-white hover:text-blue-500'>
                        About
                      </Link>
                      <span>
                        <span aria-hidden="true"> · 
                        </span>
                      </span>
                    </li>
                    <li className='inline'>
                      <Link href={"/"} className='text-white hover:text-blue-500'>
                        About
                      </Link>
                    </li>
                    <li className='inline'>
                      <Link href={"/"} className='text-white hover:text-blue-500'>
                        About
                      </Link>
                    </li>

                  </ul>
                  T&K © 2023
                </span>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar