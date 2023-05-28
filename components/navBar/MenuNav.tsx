"use client"
import Link from 'next/link'

import { FacebookIcon, Settings } from '../icon'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'
import { BellIcon, ChatBubbleBottomCenterIcon, ChevronDownIcon, EllipsisHorizontalIcon, MagnifyingGlassIcon, Cog8ToothIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import Search from './Search'
import { Popover, Transition } from '@headlessui/react'
import { profileToolkit } from './constant'


const MenuNav = () => {

  const chatsHandler = () => {
    console.log("chatsHandler");
  }
  const notificationsHandler = () => {
    console.log("notificationsHandler");
  }
  return (
    <div className=' z-[10] fixed right-0 top-0 pr-4 pl-1 h-[56px] select-none'>
      <Popover.Group as="div" className=' h-full flex items-center relative z-[10] flex-row-reverse gap-x-2'>
        <Popover>
          <Popover.Button className='h-full flex items-center justify-center relative active:scale-95 active:opacity-50 group/account-icon rounded-full'>
            <div className='flex relative p-0 m-0 min-h-0 rounded-full overflow-hidden select-none cursor-pointer '
            >
              <Image src="/images/avatar.jpg" alt="avatar" width={40} height={40}>

              </Image>
            </div>
            <div className='bg-red-500 absolute -top-1 right-[2px] w-[10px] h-[10px] rounded-full flex justify-center items-center border-2 border-secondary-clr box-content '
            >
              <span className='text-[10px] text-white dark:text-black font-semibold'></span>
            </div>
            <div className='bg-third-clr absolute bottom-0 right-0 w-3 h-3 rounded-full flex justify-center items-center border-2 border-secondary-clr box-content cursor-pointer'
            >
              <ChevronDownIcon className='text-primary-icon' />
            </div>
            <div className={clsx('absolute bg-primary-text text-black -right-2 top-full w-fit h-auto px-3 py-2 mt-1 rounded-lg text-[12px] tracking-tight shadow-2xl shadow-cyan-500/50 transition-all origin-top-left duration-300 select-none invisible opacity-0  group-hover/account-icon:opacity-100 group-hover/account-icon:visible z-[5]')}>
              Account
            </div>
          </Popover.Button>
          <Popover.Panel>
            <div className={clsx(' top-0 left-0 absolute  translate-y-[48px] -translate-x-[220px] z-[2] duration-200')}
            >
              <div className='mt-[5px] mr-[5px] '>
                <div className='overflow-hidden rounded-lg shadow-md shadow-zinc-600/50 bg-secondary-clr text-[15px] ' >
                  <div className='flex flex-col max-w-[calc(100vw-24px])] max-h-[calc(100vh-90px)] w-[360px]  '>
                    {/* profile */}
                    <div className='flex flex-col overflow-hidden shrink-0 relative grow justify-start '>
                      <div className='flex flex-col px-1'>
                        <div className='flex flex-col  mt-2 mx-4 mb-4'>
                          <div className='flex flex-col   rounded-2xl overflow-hidden my-1 '>
                            <Link href='/' className='flex flex-col  cursor-pointer hover:bg-third-clr  select-auto'>

                              <div className='p-1 flex items-center flex-nowrap z-0 text-white '>

                                {/* avatar */}
                                <div className='flex flex-col min-w-0 relative shrink-0 max-w-full p-1'>
                                  <div className='flex select-none'>
                                    <div className='h-[36px] w-[36px] relative'>
                                      <div className='absolute inset-0 w-full h-full '>
                                        <div className='overflow-hidden rounded-full bg-primary-clr block z-0'>
                                          <div className='pt-[100%] h-0 relative'>
                                            <div className='absolute inset-0 m-0 p-0 w-full h-full'>
                                              <Image src="/images/avatar.jpg" width={56} height={56} alt="user acvatar" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                  </div>
                                </div>
                                {/* Owner name */}
                                <div className='grow flex flex-col shrink items-start basis-0 min-w-0 p-1'>
                                  <div className='flex flex-col min-w-0 relative shrink grow max-w-full flex-wrap basis-auto '>
                                    {/* name */}
                                    <div className='leading-[1.33rem] min-w-0 text-left break-words max-w-full text-primary-text text-[17px]'>
                                      <span className='overflow-hidden relative block whitespace-nowrap text-ellipsis'>BE Yeu</span>
                                    </div>
                                  </div>
                                </div>
                                {/* fake */}
                                <div className='flex flex-col shrink-0 relative max-w-full  min-0 z-0'>
                                  <div className='pl-3 select-none'>
                                    <div className='flex items-center justify-center flex-nowrap rounded-full cursor-pointer'>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                        {/* hr */}
                        <div className='mx-6 h-[1px] bg-gray-700' />

                      </div>
                      {/* ma */}
                      <div className='flex flex-col py-1 mb-2 '>
                        <div className='flex flex-col'>
                          {profileToolkit.map((item, i) => (
                            <div className='flex flex-col px-2' key={i}>
                              <div className='flex  px-2 items-center w-full rounded-xl hover:bg-hover-overlay cursor-pointer'>
                                <div className='flex flex-col items-center justify-center pointer-events-auto m-2 ml-0'>
                                  <div className='flex flex-col items-center justify-center w-[36px] h-[36px] rounded-full border-none outline-none overflow-hidden'>
                                    <item.icon className='w-7 h-7 text-primary-icon' />
                                  </div>
                                </div>
                                <div className='flex w-full items-center '>
                                  <div className='flex flex-col min-w-0 basis-0 grow py-3'>
                                    <div className='leading-[1.33rem] min-w-0 text-left break-words max-w-full text-primary-text text-[15px]'>
                                      <span className='overflow-hidden relative block whitespace-nowrap text-ellipsis'>{item.name}</span>
                                    </div>
                                  </div>
                                  <div className='flex flex-col m-3 mr-0 tems-center justify-center pointer-events-auto'>
                                    <div className='flex flex-col items-center justify-center w-[36px] h-[36px] rounded-full border-none outline-none overflow-hidden'>
                                      <ChevronRightIcon className='w-7 h-7 text-primary-icon' />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Popover>
        <Popover>
          <Popover.Button className='h-full flex items-center justify-center relative '>
            <div className={clsx('h-[40px] w-[40px] flex items-center justify-center p-0 m-0 rounded-full overflow-hidden group/messenger-icon  cursor-pointer   hover:bg-primary-icon-clr-hover active:bg-primary-icon-clr-active active:scale-95  bg-secondary-btn-bg  ui-open:bg-blue-btb-bg-acitve ui-open:bg-primary-deemphasized-bt-bg ui-open:hover:bg-primary-deemphasized-bt-hover')}
              onClick={notificationsHandler}
            >
              <BellIcon className={clsx('w-5 h-5 text-primary-btn-icon ui-open:fill-blue-500')} />
              <div className={clsx('absolute bg-primary-text text-black -right-3 top-full w-fit h-auto px-3 py-2 mt-1 rounded-lg text-[12px] tracking-tight shadow-2xl shadow-cyan-500/50 transition-all origin-top-left duration-300 select-none cursor-none z-[5] invisible opacity-0 group-hover/messenger-icon:visible group-hover/messenger-icon:opacity-100',)}>
                Notifications
              </div>
            </div>

            <div className='bg-red-500 absolute -top-1 right-0 w-4 h-4 rounded-full flex justify-center items-center select-none '>
              <span className='text-[10px] text-white  font-semibold'>9</span>
            </div>

          </Popover.Button>

          <Popover.Panel className='top-0 left-0 absolute  ui-open:translate-y-[48px] ui-open:-translate-x-[220px] z-[2] duration-200'>
            <div className='mt-[5px] mr-[5px] '>
              <div className='overflow-hidden rounded-lg shadow-md shadow-zinc-600/50  bg-secondary-clr ' >
                <div className='flex flex-col max-w-[calc(100vw-24px])] max-h-[calc(100vh-90px)] w-[360px]  '>
                  <div className='flex flex-col'>
                    <div className='flex flex-col overflow-hidden grow relative justify-start'>
                      <div className='flex flex-col overflow-hidden grow shrink relative'>
                        <div>
                          <header className='px-4 py-3 pb-1 flex justify-between items-center bg-transparent  z-0'>
                            <div className='flex shrink-0  items-stretch flex-nowrap'>
                              <div className='flex flex-col py-[6px]  shrink-0 min-w-0  self-center'>
                                <h1 className=' text-2xl leading-5  break-words outline-none mx-0 p-0 font-bold  text-primary-text '>
                                  <span>
                                    Notifications 
                                  </span>
                                </h1>
                              </div>
                            </div>
                            <div className='flex items-stretch'>
                              {Array.from(Array(1).keys()).map((item, index) => (

                                <div key={index} className='px-1 py-[6px] max-w-full'>
                                  <div className='flex flex-row items-center justify-center rounded-full overflow-hidden bg-transparent hover:bg-hover-overlay  p-[6px] cursor-pointer  active:bg-secondary-clr'>
                                    <EllipsisHorizontalIcon className='w-5 h-5 text-primary-icon' />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </header>
                          <div className='text-primary-text'>
                            <div className=' px-4 '>
                              <label htmlFor="" className='flex w-full rounded-2xl outline-none  bg-third-clr font-semibold text-sm align-baseline min-w-[40px]'>
                                <span className='pl-[10px] my-auto'>

                                  <MagnifyingGlassIcon className='w-4 h-4 text-primary-text' />
                                </span>
                                {/* input */}
                                <input type="text" className='bg-transparent outline-none w-full text-sm font-semibold text-primary-text px-[6px] pt-[7px] pb-[9px] cursor-text min-h-0 min-w-0 h-[36px] basis-auto grow shrink rounded-full  ' placeholder='Search Messenger' />
                              </label>
                            </div>
                            <div className='px-4 py-2 mt-1'>

                              <div className=' h-[36px] box-border flex '>
                                <div className='relative   h-full'>
                                  <div className='flex justify-start items-center w-full h-full'>
                                    <div className='px-3 bg-primary-deemphasized-bt-bg rounded-[18px] w-fit h-full flex items-center justify-center cursor-pointer font-semibold  leading-5 overflow-hidden hover:bg-primary-deemphasized-bt-hover'>

                                      <span className='text-[15px]relative overflow-hidden break-words text-ellipsis text-primary-deemphasized-bt-text '>
                                        All
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className='relative  px-1 h-full'>
                                  <div className='flex justify-start items-center w-full h-full'>
                                    <div className='px-3 bg-transparent rounded-[18px] w-fit h-full flex items-center justify-center cursor-pointer font-semibold  leading-5 overflow-hidden hover:bg-third-clr '>

                                      <span className='text-[15px]relative overflow-hidden break-words text-ellipsis text-primary-text '>
                                        Unread
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* each person  */}
                        <div className='overflow-y-scroll flex flex-col max-h-[calc(100vh-90px-152px)] scrollbar-thumb-fifth-clr scrollbar-track-transparent hover:scrollbar-track-[#2c2d2f] scrollbar   scrollbar-w-3 scrollbar-thumb-rounded-md '>
                          {Array.from(Array(15).keys()).map((item, index) => (
                            <div className=' px-2 relative' key={index}>
                              <Link href="/" className='p-2 rounded-lg hover:bg-third-clr m-0 flex flex-col relative group/item group-hover/edit:bg-red-500'

                              >
                                <div className='flex flex-nowrap justify-between items-center relative w-full h-full overflow-hidden'>
                                  {/* avatar */}
                                  <div className='flex flex-col min-w-0 relative shrink-0 max-w-full'>
                                    <div className='pr-3 flex select-none'>
                                      <div className='h-[56px] w-[56px] relative'>
                                        <div className='absolute inset-0 w-full h-full '>
                                          <div className='overflow-hidden rounded-full bg-primary-clr block z-0'>
                                            <div className='pt-[100%] h-0 relative'>
                                              <div className='absolute inset-0 m-0 p-0 w-full h-full'>
                                                <Image src="/images/avatar.jpg" width={56} height={56} alt="user acvatar" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>
                                  </div>
                                  {/* messages */}
                                  <div className='grow flex flex-col shrink items-start basis-0 min-w-0'>
                                    <div className='flex flex-col min-w-0 relative shrink grow max-w-full flex-wrap basis-auto '>
                                      {/* name */}
                                      <div className='leading-[1.33rem] min-w-0 text-left break-words max-w-full text-primary-text'>
                                        <span className='overflow-hidden relative block whitespace-nowrap text-ellipsis'>BE Yeu</span>
                                      </div>
                                      <div className='h-2'>
                                      </div>
                                      {/* last message */}
                                      <div className='flex text-[12px] items-center text-primary-text min-h-4'>
                                        <span className='pr-2'>
                                          <span className='overflow-hidden relative block whitespace-nowrap text-ellipsis'> Hello e iu</span>
                                        </span>

                                        <span>
                                          <span aria-hidden="true"> · </span>
                                        </span>
                                        <span className='whitespace-nowrap pl-2'>
                                          51m
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  {/* fake */}
                                  <div className='flex flex-col shrink-0 relative max-w-full  min-0 z-0'>
                                    <div className='pl-3 select-none'>
                                      <div className='flex items-center justify-center flex-nowrap rounded-full cursor-pointer'>
                                        {/* <svg className="fill-disabled-icon" height="12px" role="img" viewBox="2 2 20 20" width="12px" xmlns="http://www.w3.org/2000/svg"><title>Delivered</title><path d="m12 2a10 10 0 1 0 10 10 10.011 10.011 0 0 0 -10-10zm5.219 8-6.019 6.016a1 1 0 0 1 -1.414 0l-3.005-3.008a1 1 0 1 1 1.419-1.414l2.3 2.3 5.309-5.31a1 1 0 1 1 1.41 1.416z"></path></svg> */}
                                        <div className='flex items-center justify-center overflow-hidden rounded-full cursor-pointer'>
                                          <Image src="/images/avatar.jpg" alt="responder" width={16} height={16} />
                                        </div>
                                      </div>
                                    </div>

                                  </div>
                                </div>
                                {/* tool */}

                                <div className={clsx('bg-hover-overlay absolute top-1/2 -translate-y-1/2  right-[30px]   rounded-full transition-all  duration-100 ease-fade-out w-[32px] h-[32px] invisible opacity-0  group-hover/item:visible group-hover/item:opacity-100 group/edit hover:bg-fifth-clr border border-gray-700')}>
                                  <div className='flex justify-center items-center h-full drop-shadow-xl '>
                                    <EllipsisHorizontalIcon className='text-blue-500 w-5 h-5 ' />
                                  </div>
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Popover>
        <Popover>
          <Popover.Button className='h-full flex items-center justify-center relative'>
            <div className={clsx('h-[40px] w-[40px] flex items-center justify-center p-0 m-0 rounded-full overflow-hidden   active:scale-95 cursor-pointer group/noti hover:bg-primary-icon-clr-hover active:bg-primary-icon-clr-active bg-secondary-btn-bg  ui-open:bg-blue-btb-bg-acitve ui-open:bg-primary-deemphasized-bt-bg ui-open:hover:bg-primary-deemphasized-bt-hover ')}
              onClick={chatsHandler}
            >
              <ChatBubbleBottomCenterIcon className={clsx('w-5 h-5 text-primary-btn-icon ui-open:fill-blue-500 ')} />
              <div className={clsx('absolute bg-primary-text text-black -right-3 top-full w-fit h-auto px-3 py-2 mt-1 rounded-lg text-[12px] z-[5] tracking-tight shadow-2xl shadow-cyan-500/50 transition-all origin-top-left duration-300 cursor-none select-none invisible opacity-0 group-hover/noti:visible group-hover/noti:opacity-100')}>
                Messenger
              </div>
            </div>
            <div className='bg-red-500 absolute -top-1 right-0 w-4 h-4 rounded-full flex justify-center items-center'>
              <span className='text-[10px] text-white  font-semibold'>99</span>
            </div>

          </Popover.Button>
          <Popover.Panel as='div' className='top-0 left-0 absolute  translate-y-[48px] -translate-x-[220px] z-[2] duration-200'>
            <div className='mt-[5px] mr-[5px] '>
              <div className='overflow-hidden rounded-lg xl shadow-md shadow-zinc-600/50  bg-secondary-clr ' >
                <div className='flex flex-col max-w-[calc(100vw-24px])] max-h-[calc(100vh-90px)] w-[360px]  h-full'>
                  {/* chats */}
                  <div className='flex flex-col '>
                    <div className='flex flex-col overflow-hidden grow relative justify-start '>
                      <div className='flex flex-col overflow-hidden grow shrink relative '>
                        <div>
                          <header className='px-4 py-3 pb-1 flex justify-between items-center bg-transparent  z-0'>
                            <div className='flex shrink-0  items-stretch flex-nowrap'>
                              <div className='flex flex-col py-[6px] px-1 shrink-0 min-w-0  self-center'>
                                <h1 className=' text-2xl leading-5  break-words outline-none mx-0 p-0 font-bold  text-primary-text '>
                                  <span>
                                    Chats
                                  </span>
                                </h1>
                              </div>
                            </div>
                            <div className='flex items-stretch'>
                              {Array.from(Array(4).keys()).map((item, index) => (

                                <div key={index} className='px-1 py-[6px] max-w-full'>
                                  <div className='flex flex-row items-center justify-center rounded-full overflow-hidden bg-transparent hover:bg-hover-overlay  p-[6px] cursor-pointer  active:bg-secondary-clr'>
                                    <EllipsisHorizontalIcon className='w-5 h-5 text-primary-icon' />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </header>
                          <div className='text-primary-text'>
                            <div className=' px-4 '>
                              <label htmlFor="" className='flex w-full rounded-2xl outline-none  bg-third-clr font-semibold text-sm align-baseline min-w-[40px]'>
                                <span className='pl-[10px] my-auto'>

                                  <MagnifyingGlassIcon className='w-4 h-4 text-primary-text' />
                                </span>
                                {/* input */}
                                <input type="text" className='bg-transparent outline-none w-full text-sm font-semibold text-primary-text px-[6px] pt-[7px] pb-[9px] cursor-text min-h-0 min-w-0 h-[36px] basis-auto grow shrink rounded-full  ' placeholder='Search Messenger' />
                              </label>
                            </div>
                            <div className='px-4 py-2 mt-1'>

                              <div className=' h-[36px] box-border flex '>
                                <div className='relative   h-full'>
                                  <div className='flex justify-start items-center w-full h-full'>
                                    <div className='px-3 bg-primary-deemphasized-bt-bg rounded-[18px] w-fit h-full flex items-center justify-center cursor-pointer font-semibold  leading-5 overflow-hidden hover:bg-primary-deemphasized-bt-hover'>

                                      <span className='text-[15px]relative overflow-hidden break-words text-ellipsis text-primary-deemphasized-bt-text '>
                                        Inbox
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className='relative  px-1 h-full'>
                                  <div className='flex justify-start items-center w-full h-full'>
                                    <div className='px-3 bg-transparent rounded-[18px] w-fit h-full flex items-center justify-center cursor-pointer font-semibold  leading-5 overflow-hidden hover:bg-third-clr '>

                                      <span className='text-[15px]relative overflow-hidden break-words text-ellipsis text-primary-text '>
                                        Communities
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* each person  */}
                        <div className='overflow-y-scroll flex flex-col max-h-[calc(100vh-90px-152px)]   scrollbar-thumb-fifth-clr scrollbar-track-transparent hover:scrollbar-track-[#2c2d2f] scrollbar   scrollbar-w-3 scrollbar-thumb-rounded-md'>
                          {Array.from(Array(13).keys()).map((item, index) => (
                            <div className=' px-2 relative' key={index}>
                              <Link href="/" className='p-2 rounded-lg hover:bg-third-clr m-0 flex flex-col relative group/item group-hover/edit:bg-red-500'

                              >
                                <div className='flex flex-nowrap justify-between items-center relative w-full h-full overflow-hidden'>
                                  {/* avatar */}
                                  <div className='flex flex-col min-w-0 relative shrink-0 max-w-full'>
                                    <div className='pr-3 flex select-none'>
                                      <div className='h-[56px] w-[56px] relative'>
                                        <div className='absolute inset-0 w-full h-full '>
                                          <div className='overflow-hidden rounded-full bg-primary-clr block z-0'>
                                            <div className='pt-[100%] h-0 relative'>
                                              <div className='absolute inset-0 m-0 p-0 w-full h-full'>
                                                <Image src="/images/avatar.jpg" width={56} height={56} alt="user acvatar" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>
                                  </div>
                                  {/* messages */}
                                  <div className='grow flex flex-col shrink items-start basis-0 min-w-0'>
                                    <div className='flex flex-col min-w-0 relative shrink grow max-w-full flex-wrap basis-auto '>
                                      {/* name */}
                                      <div className='leading-[1.33rem] min-w-0 text-left break-words max-w-full text-primary-text'>
                                        <span className='overflow-hidden relative block whitespace-nowrap text-ellipsis'>Be Nhi</span>
                                      </div>
                                      <div className='h-2'>
                                      </div>
                                      {/* last message */}
                                      <div className='flex text-[12px] items-center text-primary-text min-h-4'>
                                        <span className='pr-2'>
                                          <span className='overflow-hidden relative block whitespace-nowrap text-ellipsis'> Hey are you in uyou das a</span>
                                        </span>

                                        <span>
                                          <span aria-hidden="true"> · </span>
                                        </span>
                                        <span className='whitespace-nowrap pl-2'>
                                          51m
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  {/* fake */}
                                  <div className='flex flex-col shrink-0 relative max-w-full  min-0 z-0'>
                                    <div className='pl-3 select-none'>
                                      <div className='flex items-center justify-center flex-nowrap rounded-full cursor-pointer'>
                                        {/* <svg className="fill-disabled-icon" height="12px" role="img" viewBox="2 2 20 20" width="12px" xmlns="http://www.w3.org/2000/svg"><title>Delivered</title><path d="m12 2a10 10 0 1 0 10 10 10.011 10.011 0 0 0 -10-10zm5.219 8-6.019 6.016a1 1 0 0 1 -1.414 0l-3.005-3.008a1 1 0 1 1 1.419-1.414l2.3 2.3 5.309-5.31a1 1 0 1 1 1.41 1.416z"></path></svg> */}
                                        <div className='flex items-center justify-center overflow-hidden rounded-full cursor-pointer'>
                                          <Image src="/images/avatar.jpg" alt="responder" width={16} height={16} />
                                        </div>
                                      </div>
                                    </div>

                                  </div>
                                </div>
                                {/* tool */}

                                <div className={clsx('bg-hover-overlay absolute top-1/2 -translate-y-1/2  right-[30px]   rounded-full transition-all  duration-100 ease-fade-out w-[32px] h-[32px] invisible opacity-0  group-hover/item:visible group-hover/item:opacity-100 group/edit hover:bg-fifth-clr border border-gray-700')}>
                                  <div className='flex justify-center items-center h-full drop-shadow-xl '>
                                    <EllipsisHorizontalIcon className='text-blue-500 w-5 h-5 ' />
                                  </div>
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className='justify-end  bg-transparent py-[16px]  pointer-auto w-full  border-t border-slate-700'>
                      <span className='block text-xs w-full mx-auto text-center'>
                        <Link href="/" className='inline   cursor-pointer  text-blue-link w-fit hover:underline font-semibold text-base leading-6'>See all In Messenger</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Popover>
      </Popover.Group>
      {/* chat and notif pops up  */}
    </div>
  )
}

export default MenuNav