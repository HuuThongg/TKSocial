'use client'
import clsx from 'clsx'
import { ChevronDownIcon,PhoneIcon,FaceSmileIcon,EllipsisVerticalIcon } from "@heroicons/react/24/outline"
  import Link from "next/link"
import Image from 'next/image'
import { ReplyIcon } from '../icons'

const WindowChat = () => {
  return (
    <div className="fixed right-0 bottom-0 ">
      <div className="flex isolate items-end">
        {/* chat boxes container */}
        <ul className="fixed flex z-[1] bottom-0 right-[80px] ">
          {
            Array.from(Array(2).keys()).map((item, index) =>(
              <li key={index + item} className="relative ">
                <div className=" h-full " tabIndex={-1}>
                  <div className="ml-[10px] flex flex-col  rounded-t-lg  bg-messenger-card-bg  text-[0.9375rem] leading-[1.3333] w-[328px] max-h-[calc(100vh-56px-10px)] h-[455px] shadow-lg">
                    {/* info recieved person */}
                    <div className="p-2 flex justify-between items-center relative shrink-0 rounded-t-lg  overflow-hidden h-8  shadow-md z-[2] box-content">
                      <div className="flex items-center  relative grow shrink   box-border z-0  basis-0 flex-nowrap -ml-[6px]">
                        <div className="flex">
                          <button className="p-0 m-0 inline-flex  relative min-w-0  basis-auto mr-2 rounded-md   hover:bg-third-clr transition-colors delay-75 group/head " >
                            <div className="flex flex-col shrink-0 min-w-0 max-w-full p-[6px]  rounded-md">
                              <div className="flex -my-[6px] items-center shrink-0 justify-between flex-nowrap ">
                                <div className="py-[6px] flex items-center">
                                  <div className="flex item-center relative grow shrink -m-[6px] justify-between  ">
                                    <Link href={"#"} tabIndex={-1} className="flex border-0 border-none  p-0 m-0 rounded-md
                                    hover:bg-fourth-clr
                                    ">
                                      <div className="flex relative items-center justify-center  w- shrink-0 p-[6px] min-w-0 box-border">
                                        <div className="flex h-8 aspect-square rounded-full overflow-hidden">

                                          <Image className=" w-full h-full object-cover" src="/images/avatar.jpg" alt="avatar" width={32} height={32}  />
                                        </div>
                                        
                                      </div>  
                                    </Link>
                                    <div className="flex py-[6px] px-[2px] relative grow  min-w-0 shrink max-w-full">
                                      <div className="flex flex-col  justify-center items-start  grow min-h-[26px] max-w-full">
                                        <h1 className="flex min-w-0 max-w-full  outline-none">
                                          <span className="font-bold text-primary-text text-center min-w-0 max-w-full break-words">

                                            Leo John
                                          </span>
                                        </h1>

                                      </div>
                                    </div>
                                  </div>
                                  
                                  <ChevronDownIcon className='pl-2 w-15px] h-[15px]  fill-disabled-icon'/>
                                </div>
                              </div>
                            </div>
                            
                          </button>
                        </div>
                      </div>
                      <ul className="bg-transparent flex items-center -mr-1">
                        {Array.from(Array(4).keys()).map((item, index) => (
                          <li key={index} className='p-[1px]'>
                            <div className='flex items-center rounded-full overflow-hidden hover:bg-third-clr p-[3px] box-border pointer-events-auto cursor-pointer '>
                              <PhoneIcon className=' w- h-5 text-disabled-icon'/>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* chat container  */}
                    <div className='flex relative flex-col grow min-h-0 max-w-full '>
                      {/* messages */}
                      <div className='flex flex-col relative overflow-hidden max-h-full flex-1'>
                        <div className='flex flex-col relative overflow-hidden max-h-full flex-1 border-r-2 border-l-2 border-messenger-card-bg'>
                          <div className='flex flex-col relative flex-1 overflow-x-hidden overflow-y-scroll '>
                            {/* each message */}
                            <div className='relative'>
                              <div className='flex flex-col relative'>
                                {/* for Assistive Techonology  clip-path:inset(50%) */}
                                <h3 className='outline-none'>
                                  <span className='h-[1px] overflow-hidden absolute w-[1px] ' style={{clipPath:'inset(50%)'}}>
                                    Kiet
                                  </span>
                                </h3>
                                <div className='h-[2px] bg-messenger-card-bg w-full '>
                                </div>
                                <div className='flex group/message '>
                                  {/* avatar */}
                                  <div className='pl-[6px] pr-2 flex flex-col bg-transparent grow-0 justify-end '>
                                    <div className='flex items-end w-[28px] aspect-square'>
                                      <div className='flex relative w-full h-full rounded-full overflow-hidden'>
                                        <Image className='w-full h-full object-cover' src='/images/avatar.jpg' alt='avatar' width={28} height={28} />
                                      </div>
                                    </div>
                                    {/* if the message has interaction icon */}
                                    <div className=''>
                                    </div>
                                  </div>
                                  {/* message */}
                                  <div className='flex min-w-0 shrink  grow '>
                                    <div className='flex flex-col bg-transparent justify-end '>
                                      <div className='flex w-full '>
                                        <div className='flex flex-col  relative max-w-full items-start'>
                                          <div className='py-2 px-3 overflow-hidden relative text-white rounded-2xl z-[1] bg-wash '>
                                            <div className='text-[0.9375rem] leading-[1.3333] text-primary-text text-left  whitespace-pre-wrap'>
                                              T Hay bat tieng de nghe   thoi ta den

                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* if the message has interaction icon */}
                                      <div className='w-full bg-transparent grow-0 max-w-full justify-end items-stretch'>


                                      </div>
                                    </div>
                                    {/* drop icons, reply to specific message and edit */}
                                    {/* if the message has interaction icon
                                    do: pb-[18px] */}
                                    <div className='pl-[5px] flex  justify-center shrink-0 grow relative invisible opacity-0 group-hover/message:opacity-100 group-hover/message:visible transition-all delay-70' aria-hidden="true">
                                      <div className='flex items-center justify-center'>
                                        <div className='flex items-center justify-center rounded-full overflow-hidden hover:bg-third-clr  box-border pointer-events-auto cursor-pointer  w-6 h-6  '>
                                          <FaceSmileIcon className=' w-[20px] h-[20px] text-disabled-icon' />
                                        </div>
                                      </div>

                                      <div className='flex items-center justify-center'>
                                        <div className='flex items-center justify-center rounded-full overflow-hidden hover:bg-third-clr  box-border pointer-events-auto cursor-pointer  w-6 h-6  '>
                                          <ReplyIcon className=' w-[20px] h-[20px] fill-disabled-icon ' />
                                        </div>
                                      </div>


                                      <div className='flex items-center justify-center'>
                                        <div className='flex items-center justify-center rounded-full overflow-hidden hover:bg-third-clr  box-border pointer-events-auto cursor-pointer  w-6 h-6  '>
                                          <EllipsisVerticalIcon className=' w-[20px] h-[20px] text-disabled-icon  stroke-3' />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* sigal message seen */}
                                  <div className='flex flex-col self-stretch bg-transparent grow-0 max-w-full justify-end'>
                                    <div className='flex overflow-hidden w-5 items-end'>
                                      <div className='flex items-end w-[14px] aspect-square'>
                                        <div className='flex relative w-full h-full rounded-full overflow-hidden'>
                                          <Image className='w-full h-full object-cover' src='/images/avatar.jpg' alt='avatar' width={14} height={14} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='h-[7px] bg-messenger-card-bg w-full '>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                        
                      </div>
                      {/* type message */}
                      <div>

                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
        {/* util for chat  */}
      </div>
    </div>
  )
}

export default WindowChat