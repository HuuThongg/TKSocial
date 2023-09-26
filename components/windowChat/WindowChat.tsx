'use client'
import clsx from 'clsx'
import { ChevronDownIcon,PhoneIcon,FaceSmileIcon,EllipsisVerticalIcon, PlayCircleIcon,PhotoIcon,PaperAirplaneIcon, PencilSquareIcon, XMarkIcon,VideoCameraIcon,MinusIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline"
  import Link from "next/link"
import Image from 'next/image'
import { ReplyIcon } from '../icons'
import { PlusCircleIcon } from '@heroicons/react/20/solid'
import TextareaAutosize from 'react-textarea-autosize';
import React, { useId, useState } from 'react'

const WindowChat = () => {

  const [text, setText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isShownChatBoxOptions, setIsShownChatBoxOptions] = useState(false)
  const onChangeInputText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value
    setIsTyping(inputValue.length > 0);
    setText(inputValue)
  }
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
                    <div className="p-2 flex justify-between items-center relative shrink-0 rounded-t-lg  overflow-hidden h-8  shadow-md z-[2] box-content select-none" >
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
                                  
                                  <ChevronDownIcon className='pl-2 w-[15px] h-[15px]  fill-disabled-icon'/>
                                </div>
                              </div>
                            </div>
                            
                          </button>
                        </div>
                      </div>
                      <ul className="bg-transparent flex items-center -mr-1">
                        <li  className='p-[1px]'>
                          <div className='flex items-center rounded-full overflow-hidden hover:bg-third-clr p-[3px] box-border pointer-events-auto cursor-pointer '>
                            <PhoneIcon className=' w- h-5 text-disabled-icon'/>
                          </div>
                        </li>
                        <li className='p-[1px]'>
                          <div className='flex items-center rounded-full overflow-hidden hover:bg-third-clr p-[3px] box-border pointer-events-auto cursor-pointer '>
                            <VideoCameraIcon className=' w- h-5 text-disabled-icon' />
                          </div>
                        </li>
                        <li className='p-[1px]'>
                          <div className='flex items-center rounded-full overflow-hidden hover:bg-third-clr p-[3px] box-border pointer-events-auto cursor-pointer '>
                            <MinusIcon className=' w- h-5 text-disabled-icon' />
                          </div>
                        </li>
                        <li className='p-[1px]'>
                          <div className='flex items-center rounded-full overflow-hidden hover:bg-third-clr p-[3px] box-border pointer-events-auto cursor-pointer '>
                            <XMarkIcon className=' w- h-5 text-disabled-icon' />
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    {/* chat container  */}
                    <div className='flex relative flex-col grow min-h-0 max-w-full '>
                      {/* messages */}
                      <div className='flex flex-col relative overflow-hidden max-h-full flex-1'>
                        <div className='flex flex-col relative overflow-hidden max-h-full flex-1 border-r-2 border-l-2 border-messenger-card-bg'>
                          <div className='flex flex-col relative flex-1 overflow-x-hidden overflow-y-scroll scrollbar-thumb-fifth-clr scrollbar-track-transparent hover:scrollbar-track-[#2c2d2f]    scrollbar-w-2 scrollbar-thumb-rounded-md scrollbar'>
                            {/* each message */}
                            {Array.from(Array(10).keys()).map((item, index) => (

                              <div key={index} className='relative'>
                                <div className='flex flex-col relative'>
                                  {/* for Assistive Techonology  clip-path:inset(50%) */}
                                  <h3 className='outline-none'>
                                    <span className='h-[1px] overflow-hidden absolute w-[1px] ' style={{clipPath:'inset(50%)'}}>
                                      Kiet
                                    </span>
                                  </h3>
                                  {/* perhaps do a height:2px here */}
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
                                      <div className='flex flex-col bg-transparent justify-start '>
                                        <div className='flex w-full flex-col'>
                                          {/* like padding */}
                                          <div className='h-[2px] bg-messenger-card-bg w-full '>
                                          </div>
                                          <div className='flex flex-col  relative max-w-full items-start'>
                                            <div className='py-2 px-3 overflow-hidden relative text-white rounded-2xl z-[1] bg-wash '>
                                              <div className='text-[0.9375rem] leading-[1.3333] text-primary-text text-left  whitespace-pre-wrap'>
                                                T Hay bat tieng de nghe   thoi ta den a s  a

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
                            ))}
                            <div className='relative'>
                              <div className='flex flex-col relative'>
                                {/* for Assistive Techonology  clip-path:inset(50%) */}
                                <h3 className='outline-none'>
                                  <span className='h-[1px] overflow-hidden absolute w-[1px] ' style={{ clipPath: 'inset(50%)' }}>
                                    Kiet
                                  </span>
                                </h3>
                                {/* perhaps do a height:2px here */}
                                <div className='flex group/message '>
                                  {/* avatar */}
                                  <div className='pl-[6px] pr-2 flex flex-col bg-transparent grow-0 justify-end '>
                                    {/* if the message has interaction icon */}
                                    <div className=''>
                                    </div>
                                  </div>
                                  {/* message */}
                                  <div className='flex flex-row-reverse min-w-0 shrink  grow '>
                                    <div className='flex flex-col bg-transparent justify-start '>
                                      <div className='flex w-full flex-col'>
                                        {/* like padding */}
                                        <div className='h-[2px] bg-messenger-card-bg w-full '>
                                        </div>
                                        <div className='flex flex-col  relative max-w-full items-start'>
                                          <div className='py-2 px-3 overflow-hidden relative text-white rounded-2xl z-[1] bg-wash '>
                                            <div className='text-[0.9375rem] leading-[1.3333] text-primary-text text-left  whitespace-pre-wrap'>
                                              Nay tr di nhan bang ra truong ne

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
                      <div className='py-3 flex items-end leading-4 text-[0.9375] shadow-md'>
                        {/* more */}
                        <div className=' min-w-0  shrink-0 grow-0 basis-auto m-1 p-1 rounded-full overflow-hidden hover:bg-third-clr' >
                          <div className='flex items-center    box-border pointer-events-auto cursor-pointer '>
                            <PlusCircleIcon className=' w-5 h-5 text-disabled-icon' />
                          </div>
                        </div>
                        {/* input message */}
                        <div className='min-w-0 basis-0 overflow-x-hidden grow relative  -ml-1  '>
                          <div className={clsx(`absolute left-0 mr-1 flex justify-center items-center mb-1 z-[1] bottom-0 transition-transform delay-100  `, {
                            'scale-0': isTyping,
                            'scale-100': !isTyping
                          })}>
                            <input type="file" multiple className='hidden' />
                            <div className='p-1 min-w-0 shrink-0 grow-0 basis-auto   rounded-full overflow-hidden hover:bg-third-clr' >
                              <div className='flex items-center    box-border pointer-events-auto cursor-pointer  '>
                                <PhotoIcon className=' w-5 h-5 text-disabled-icon' />
                              </div>
                            </div>
                          </div>
                          <div className={clsx(`transition-[margin]   flex`, {
                            'ml-[36px]': !isTyping,
                            'ml-0': isTyping
                          })}>
                            <div className='rounded-[20px] grow bg-comment-bg min-w-0 box-border'>
                              <div className='flex flex-wrap flex-col justify-start w-full'>
                                <div className='m-2 mr-3  min-w-0 relative flex'>
                                  {/* <div className='relative outline-none text-primary-text grow  select-text whitespace-pre-wrap break-before-all min-h-[20px] max-h-[124px] min-w-0 overflow-x-hidden overflow-y-auto'>
                                  <p className='text-left '>
                                    <span>
                                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima eligendi a excepturi? Voluptatibus expedita dolore dolorum ratione? Unde, saepe ipsum quasi vel sit eos consequuntur! Libero architecto natus nihil mollitia et consectetur quibusdam labore dolorem illo, tempore ipsa ad dolorum.
                                    </span>
                                  </p>
                                </div> */}
                                  <TextareaAutosize
                                    minRows={1}
                                    maxRows={6}
                                    placeholder='Aa'
                                    value={text}
                                    style={{ height: 17 }}
                                    className='grow     resize-none bg-transparent text-primary-text overflow-x-hidden '
                                    onChange={onChangeInputText}

                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* send message */}
                        <div className='inline-flex grow-0'>
                          <div className=' min-w-0  shrink-0 grow-0 basis-auto mx-1 p-2 rounded-full overflow-hidden hover:bg-third-clr cursor-pointer'>
                            <PaperAirplaneIcon className='w-5 h-5 fill-disabled-icon stroke-transparent' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
        {/* util for chat  */}
        <div className='absolute right-[16px]  w-[48px] bottom-[16px] '>
          <div className='flex flex-col justify-center items-center'>
            <div className='peer/options order-last flex items-center justify-center rounded-full overflow-hidden  w-[48px] h-[48px] box-border pointer-events-auto cursor-pointer shadow-xl bg-sec-btn-bg hover:bg-sec-btn-bg-hover '
              onMouseEnter={() => setIsShownChatBoxOptions(true)}
              onMouseLeave={() => setIsShownChatBoxOptions(false)}
            >
              <PencilSquareIcon className=' w-5 h-5 text-white' />
            </div>
            {Array.from(Array(3).keys()).map((item, index) => (
              <div key={index } className='mb-[10px]  h-[48px] w-[48px] flex justify-center items-center group relative order-2'>
                <div className='h-[48px] w-[48px] flex justify-center items-center '>
                  <button aria-label="Open chat" className=' w-full h-full flex justify-center items-center p-0 m-0 border-0 border-none focus:outline-none focus-visible:ring ring-blue-500 ring-offset-2 ring-offset-white rounded-full  select-none ' 
                  onMouseEnter={() => setIsShownChatBoxOptions(true)}
                  onMouseLeave={() => setIsShownChatBoxOptions(false)}
                  >
                    <div className='shadow-xl bg-messenger-card-bg rounded-full overflow-hidden w-full h-full'>
                      <Image className=" w-full h-full object-cover" src="/images/avatar.jpg" alt="avatar" width={48} height={48} />
                    </div>
                  </button>
                  
                </div>
                {/* close chat */}
                <div className='absolute rounded-full  cursor-pointer flex justify-center items-center  flex-auto grow-0 shrink-0 w-5 h-5 -top-1 bg-messenger-card-bg scale-0 invisible -right-1 group/close group-hover:scale-100 group-hover:visible hover:bg-fourth-clr'>
                  <XMarkIcon className='w-4 h-4 text-disabled-icon' />
                </div>
              </div>

            ))}
            <div className={clsx(`flex items-center justify-center   w-[48px] h-[48px] box-border `)}>
              <div className={clsx(`flex justify-center items-center w-[48px] h-[48px] transition-all delay-75`, {
                'scale-0': !isShownChatBoxOptions,
                'scale-100': isShownChatBoxOptions
              })}
                onMouseEnter={() => setIsShownChatBoxOptions(true)}
                onMouseLeave={() => setIsShownChatBoxOptions(false)}
              
              >

                <div className={clsx(`flex items-center justify-center rounded-full overflow-hidden  w-[36px] h-[36px] box-border pointer-events-auto cursor-pointer shadow-xl bg-sec-btn-bg hover:bg-sec-btn-bg-hover  transition-[scale] delay-500`)}>
                  <EllipsisHorizontalIcon className=' w-5 h-5 text-white' />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default WindowChat