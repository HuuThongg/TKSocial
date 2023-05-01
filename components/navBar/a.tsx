"use client"
import Link from 'next/link'

import { FacebookIcon } from '../icon'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'
import { BellIcon, ChatBubbleBottomCenterIcon, ChevronDownIcon, EllipsisHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Search from './Search'
const NavBar = () => {
  const [isChatsOpen, setIsChatsOpen] = useState<Boolean>(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState<Boolean>(false)
  const [isSidePanelOpen, setIsSidePanelOpen] = useState<Boolean>(false)

  const refChatNotiPanel = useRef<HTMLDivElement>(null);
  const chatsHandler = (e: MouseEvent) => {
    setIsChatsOpen(!isChatsOpen)
    setIsNotificationsOpen(false)
    if (!isSidePanelOpen)
      setIsSidePanelOpen(true)
    else
      setIsSidePanelOpen(false)
    checkIfLickedOutside(e)

  }
  const notificationsHandler = (e: MouseEvent) => {
    setIsNotificationsOpen(!isNotificationsOpen)
    setIsChatsOpen(false)
    if (!isSidePanelOpen)
      setIsSidePanelOpen(true)
    else
      setIsSidePanelOpen(false)
    checkIfLickedOutside(e)
  }
  function checkIfLickedOutside(e: MouseEvent) {
    // // If the menu is open and the clicked target is not within the menu, then close filter sidebar
    console.log("object");
    if (isSidePanelOpen && refChatNotiPanel.current && !refChatNotiPanel.current.contains(e.target as Node)) {

      setIsSidePanelOpen(false);
    }
  };
  useEffect(() => {

    document.addEventListener("mousedown", checkIfLickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfLickedOutside);
    };
  }, []);
  console.log(isSidePanelOpen);
  return (
    <div className=' sticky top-0 z-40  '>
      <nav className='bg-secondary-clr  w-full h-[56px] flex items-center '>
        {/* logo */}
        <div className='flex justify-start items-center ml-4 fixed left-0  h-[56px] ' >
          <Link href="/" className='p-1 pb-[2px] min-w-0 min-h-0 cursor-pointer'>
            <FacebookIcon className="fill-white dark:fill-dark" />
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
        <div className=' z-[10] fixed right-0 top-0 pr-4 pl-1 h-[56px] select-none'>
          <div className=' h-full flex items-center relative z-[10] flex-row-reverse gap-x-2'>
            <div className='h-full flex items-center justify-center relative active:scale-95 active:opacity-50 group/account-icon rounded-full'>
              <div className='flex relative p-0 m-0 min-h-0 rounded-full overflow-hidden select-none cursor-pointer '
              >
                <Image src="/images/avatar.jpg" alt="avatar" width={40} height={40}>

                </Image>
              </div>
              <div className='bg-red-500 absolute top-[6px] right-[2px] w-[10px] h-[10px] rounded-full flex justify-center items-center border-2 border-secondary-clr box-content '
              >
                <span className='text-[10px] text-white dark:text-black font-semibold'></span>
              </div>
              <div className='bg-third-clr absolute bottom-1 right-0 w-3 h-3 rounded-full flex justify-center items-center border-2 border-secondary-clr box-content cursor-pointer'
              >
                <ChevronDownIcon className='text-primary-icon' />
              </div>
              <div className={clsx('absolute bg-primary-text text-black -right-2 top-full w-fit h-auto px-3 py-2 mt-1 rounded-lg text-[12px] tracking-tight shadow-2xl shadow-cyan-500/50 transition-all origin-top-left duration-300 select-none invisible opacity-0  group-hover/account-icon:opacity-100 group-hover/account-icon:visible')}>
                Account
              </div>
            </div>

            <div className='h-full flex items-center justify-center relative '>
              <div className='h-[40px] w-[40px] flex items-center justify-center p-0 m-0 rounded-full overflow-hidden  bg-secondary-btn-bg hover:bg-primary-icon-clr-hover
                active:bg-primary-icon-clr-active active:scale-95 cursor-pointer group/messenger-icon'
                onClick={(e) => notificationsHandler(e)}
              >
                <BellIcon className='w-5 h-5 text-primary-btn-icon' />
                <div className={clsx('absolute bg-primary-text text-black -right-3 top-full w-fit h-auto px-3 py-2 mt-1 rounded-lg text-[12px] tracking-tight shadow-2xl shadow-cyan-500/50 transition-all origin-top-left duration-300 select-none cursor-none z-[3000] invisible opacity-0 group-hover/messenger-icon:visible group-hover/messenger-icon:opacity-100',)}>
                  Notifications
                </div>
              </div>

              <div className='bg-red-500 absolute top-1 right-0 w-4 h-4 rounded-full flex justify-center items-center select-none '>
                <span className='text-[10px] text-white dark:text-black font-semibold'>9</span>
              </div>

            </div>
            <div className='h-full flex items-center justify-center relative'>
              <div className={clsx('h-[40px] w-[40px] flex items-center justify-center p-0 m-0 rounded-full overflow-hidden    active:scale-95 cursor-pointer group/noti', {
                'bg-blue-btb-bg-acitve bg-primary-deemphasized-bt-bg hover:bg-primary-deemphasized-bt-hover': isChatsOpen,
                'bg-secondary-btn-bg hover:bg-primary-icon-clr-hover active:bg-primary-icon-clr-active': !isChatsOpen
              })}
                onClick={(e) => chatsHandler(e)}

              >
                <ChatBubbleBottomCenterIcon className={clsx('w-5 h-5 text-primary-btn-icon ', {
                  'fill-blue-500 ': isChatsOpen,
                  '': !isChatsOpen

                })} />
                <div className={clsx('absolute bg-primary-text text-black -right-3 top-full w-fit h-auto px-3 py-2 mt-1 rounded-lg text-[12px] tracking-tight shadow-2xl shadow-cyan-500/50 transition-all origin-top-left duration-300 cursor-none select-none invisible opacity-0 group-hover/noti:visible group-hover/noti:opacity-100')}>
                  Messenger
                </div>
              </div>
              <div className='bg-red-500 absolute top-1 right-0 w-4 h-4 rounded-full flex justify-center items-center'>
                <span className='text-[10px] text-white dark:text-black font-semibold'>99</span>
              </div>

            </div>
          </div>

          {/* chat and notif pops up  */}
          <div className={clsx('  top-0 left-0 absolute  translate-y-[48px] -translate-x-[220px] z-[2] duration-200', {
            'opacity-0 ': !isSidePanelOpen,
            'opacity-100 ': isSidePanelOpen,
          })}
            ref={refChatNotiPanel}
          >
            <div className='mt-[5px] mr-[5px] '>
              <div className='overflow-hidden rounded-lg shadow-2xl shadow-slate-600/50 bg-secondary-clr ' >
                <div className='flex flex-col max-w-[calc(100vw-24px])] max-h-[calc(100vh-90px)] w-[360px]  '>
                  {/* chats */}
                  {isChatsOpen ? (
                    <div className='flex flex-col'>
                      <div className='flex flex-col overflow-hidden grow relative justify-start'>
                        <div className='flex flex-col overflow-hidden grow shrink relative'>
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
                          <div className='overflow-y-scroll'>
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
                  ) : (
                    <div className='flex flex-col'>
                      <div className='flex flex-col overflow-hidden grow relative justify-start'>
                        <div className='flex flex-col overflow-hidden grow shrink relative'>
                          <div>
                            <header className='px-4 py-3 pb-1 flex justify-between items-center bg-transparent  z-0'>
                              <div className='flex shrink-0  items-stretch flex-nowrap'>
                                <div className='flex flex-col py-[6px] px-1 shrink-0 min-w-0  self-center'>
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
                              <div className=' px-4 mx-1'>
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
                                  <div className='relative  px-1 h-full'>
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
                          <div className='overflow-y-scroll'>
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
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default NavBar