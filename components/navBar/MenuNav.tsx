'use client';
import Link from 'next/link';

import { FacebookIcon, Settings } from '../icon';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import {
  BellIcon,
  ChatBubbleBottomCenterIcon,
  ChevronDownIcon,
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
  Cog8ToothIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';
import Search from './Search';
import { Popover, Transition } from '@headlessui/react';
import { messages, profileToolkit } from './constant';
import { useRouter } from 'next/navigation';
import Messages from './Messages';

const MenuNav = () => {
  const router = useRouter();
  const chatsHandler = () => {
    console.log('chatsHandler');
  };
  const notificationsHandler = () => {
    console.log('notificationsHandler');
  };
  return (
    <div className=" fixed right-0 top-0 z-[10] h-[56px] select-none pl-1 pr-4">
      <Popover.Group
        as="div"
        className=" relative z-[10] flex h-full flex-row-reverse items-center gap-x-2"
      >
        <Popover>
          <Popover.Button className="group/account-icon relative flex h-full items-center justify-center rounded-full active:scale-95 active:opacity-50">
            <div className="relative m-0 flex min-h-0 cursor-pointer select-none overflow-hidden rounded-full p-0 ">
              <Image
                src="/images/avatar.jpg"
                alt="avatar"
                width={40}
                height={40}
                onClick={() => router.push('/profile')}
              ></Image>
            </div>
            <div className="absolute -top-1 right-[2px] box-content flex h-[10px] w-[10px] items-center justify-center rounded-full border-2 border-secondary-clr bg-red-500 ">
              <span className="text-[10px] font-semibold text-white dark:text-black"></span>
            </div>
            <div className="absolute bottom-0 right-0 box-content flex h-3 w-3 cursor-pointer items-center justify-center rounded-full border-2 border-secondary-clr bg-third-clr">
              <ChevronDownIcon className="text-primary-icon" />
            </div>
            <div
              className={clsx(
                'invisible absolute -right-2 top-full z-[5] mt-1 h-auto w-fit origin-top-left select-none rounded-lg bg-primary-text px-3 py-2 text-[12px] tracking-tight text-black opacity-0 shadow-2xl shadow-cyan-500/50 transition-all  duration-300 group-hover/account-icon:visible group-hover/account-icon:opacity-100',
              )}
            >
              Account
            </div>
          </Popover.Button>
          <Popover.Panel>
            <div
              className={clsx(
                ' absolute left-0 top-0  z-[2] -translate-x-[220px] translate-y-[48px] duration-200',
              )}
            >
              <div className="mr-[5px] mt-[5px] ">
                <div className=" overflow-hidden rounded-lg bg-secondary-clr text-[15px] shadow-md  shadow-zinc-600/50">
                  <div className="max-w-[calc(100vw-24px])] relative flex max-h-[calc(100vh-90px)] w-[360px] flex-col   overflow-auto overscroll-contain scrollbar scrollbar-track-transparent scrollbar-thumb-fifth-clr   scrollbar-thumb-rounded-md scrollbar-w-3    hover:scrollbar-track-[#2c2d2f]">
                    <div className="w-auto  ">
                      <div className="pointer-events-none visible absolute left-0 top-0 z-0 w-full -translate-x-full bg-red-500 opacity-100 transition-opacity-transform duration-200 ease-fds-soft">
                        {/* profile */}
                        <div className="relative flex shrink-0 grow flex-col justify-start overflow-hidden ">
                          <div className="flex flex-col px-2">
                            <div className="mx-2 mb-4 mt-2  flex flex-col rounded-2xl  shadow-[0_2px_12px_rgba(0,0,0,0.2)]">
                              <div className="my-1 flex   flex-col overflow-hidden rounded-2xl ">
                                <Link
                                  href="/"
                                  className="flex cursor-pointer  select-auto flex-col  hover:bg-third-clr"
                                >
                                  <div className="z-0 flex flex-nowrap items-center p-1 text-white ">
                                    {/* avatar */}
                                    <div className="relative flex min-w-0 max-w-full shrink-0 flex-col p-1">
                                      <div className="flex select-none">
                                        <div className="relative h-[36px] w-[36px]">
                                          <div className="absolute inset-0 h-full w-full ">
                                            <div className="z-0 block overflow-hidden rounded-full bg-primary-clr">
                                              <div className="relative h-0 pt-[100%]">
                                                <div className="absolute inset-0 m-0 h-full w-full p-0">
                                                  <Image
                                                    src="/images/avatar.jpg"
                                                    width={56}
                                                    height={56}
                                                    alt="user acvatar"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* Owner name */}
                                    <div className="flex min-w-0 shrink grow basis-0 flex-col items-start p-1">
                                      <div className="relative flex min-w-0 max-w-full shrink grow basis-auto flex-col flex-wrap ">
                                        {/* name */}
                                        <div className="min-w-0 max-w-full break-words text-left text-[17px] leading-[1.33rem] text-primary-text">
                                          <span className="relative block overflow-hidden text-ellipsis whitespace-nowrap">
                                            BE Yeu
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    {/* fake */}
                                    <div className="min-0 relative z-0 flex max-w-full  shrink-0 flex-col">
                                      <div className="select-none pl-3">
                                        <div className="flex cursor-pointer flex-nowrap items-center justify-center rounded-full"></div>
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </div>
                            {/* hr */}
                            <div className="mx-6 h-[1px] bg-gray-700" />
                          </div>
                          {/* ma */}
                          <div className="mb-2 flex flex-col py-1 ">
                            <div className="flex flex-col">
                              {profileToolkit.map((item, i) => (
                                <div className="flex flex-col px-2" key={i}>
                                  <div className="flex  w-full cursor-pointer items-center rounded-xl px-2 hover:bg-hover-overlay">
                                    <div className="pointer-events-auto m-2 ml-0 flex flex-col items-center justify-center rounded-full bg-primary-icon-clr-hover">
                                      <div className="flex h-[36px] w-[36px] flex-col items-center justify-center overflow-hidden rounded-full border-none outline-none">
                                        <item.icon className="h-5 w-5 text-primary-icon" />
                                      </div>
                                    </div>
                                    <div className="flex w-full items-center ">
                                      <div className="flex min-w-0 grow basis-0 flex-col py-3">
                                        <div className="min-w-0 max-w-full break-words text-left text-[15px] leading-[1.33rem] text-primary-text">
                                          <span className="relative block overflow-hidden text-ellipsis whitespace-nowrap">
                                            {item.name}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="tems-center pointer-events-auto m-3 mr-0 flex flex-col justify-center">
                                        <div className="flex h-[36px] w-[36px] flex-col items-center justify-center overflow-hidden rounded-full border-none outline-none">
                                          <ChevronRightIcon className="h-7 w-7 text-primary-icon" />
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

                      <div className="pointer-events-none visible absolute left-0 top-0 z-[10] w-full -translate-x-0 bg-blue-500 opacity-100 transition-opacity-transform duration-200 ease-fds-soft">
                        {/* profile */}
                        <div className="relative flex shrink-0 grow flex-col justify-start overflow-hidden ">
                          <div className="flex flex-col px-2">
                            <div className="mx-2 mb-4 mt-2  flex flex-col rounded-2xl  shadow-[0_2px_12px_rgba(0,0,0,0.2)]">
                              <div className="my-1 flex   flex-col overflow-hidden rounded-2xl ">
                                <Link
                                  href="/"
                                  className="flex cursor-pointer  select-auto flex-col  hover:bg-third-clr"
                                >
                                  <div className="z-0 flex flex-nowrap items-center p-1 text-white ">
                                    {/* avatar */}
                                    <div className="relative flex min-w-0 max-w-full shrink-0 flex-col p-1">
                                      <div className="flex select-none">
                                        <div className="relative h-[36px] w-[36px]">
                                          <div className="absolute inset-0 h-full w-full ">
                                            <div className="z-0 block overflow-hidden rounded-full bg-primary-clr">
                                              <div className="relative h-0 pt-[100%]">
                                                <div className="absolute inset-0 m-0 h-full w-full p-0">
                                                  <Image
                                                    src="/images/avatar.jpg"
                                                    width={56}
                                                    height={56}
                                                    alt="user acvatar"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* Owner name */}
                                    <div className="flex min-w-0 shrink grow basis-0 flex-col items-start p-1">
                                      <div className="relative flex min-w-0 max-w-full shrink grow basis-auto flex-col flex-wrap ">
                                        {/* name */}
                                        <div className="min-w-0 max-w-full break-words text-left text-[17px] leading-[1.33rem] text-primary-text">
                                          <span className="relative block overflow-hidden text-ellipsis whitespace-nowrap">
                                            BE Yeu
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    {/* fake */}
                                    <div className="min-0 relative z-0 flex max-w-full  shrink-0 flex-col">
                                      <div className="select-none pl-3">
                                        <div className="flex cursor-pointer flex-nowrap items-center justify-center rounded-full"></div>
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </div>
                            {/* hr */}
                            <div className="mx-6 h-[1px] bg-gray-700" />
                          </div>
                          {/* ma */}
                          <div className="mb-2 flex flex-col py-1 ">
                            <div className="flex flex-col">
                              {profileToolkit.map((item, i) => (
                                <div className="flex flex-col px-2" key={i}>
                                  <div className="flex  w-full cursor-pointer items-center rounded-xl px-2 hover:bg-hover-overlay">
                                    <div className="pointer-events-auto m-2 ml-0 flex flex-col items-center justify-center rounded-full bg-primary-icon-clr-hover">
                                      <div className="flex h-[36px] w-[36px] flex-col items-center justify-center overflow-hidden rounded-full border-none outline-none">
                                        <item.icon className="h-5 w-5 text-primary-icon" />
                                      </div>
                                    </div>
                                    <div className="flex w-full items-center ">
                                      <div className="flex min-w-0 grow basis-0 flex-col py-3">
                                        <div className="min-w-0 max-w-full break-words text-left text-[15px] leading-[1.33rem] text-primary-text">
                                          <span className="relative block overflow-hidden text-ellipsis whitespace-nowrap">
                                            {item.name}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="tems-center pointer-events-auto m-3 mr-0 flex flex-col justify-center">
                                        <div className="flex h-[36px] w-[36px] flex-col items-center justify-center overflow-hidden rounded-full border-none outline-none">
                                          <ChevronRightIcon className="h-7 w-7 text-primary-icon" />
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
              </div>
            </div>
          </Popover.Panel>
        </Popover>
        <Popover>
          <Popover.Button className="relative flex h-full items-center justify-center ">
            <div
              className={clsx(
                'group/messenger-icon m-0 flex h-[40px] w-[40px] cursor-pointer items-center justify-center overflow-hidden rounded-full  bg-secondary-btn-bg   p-0 ui-open:bg-blue-btb-bg-acitve ui-open:bg-primary-deemphasized-bt-bg  hover:bg-primary-icon-clr-hover  ui-open:hover:bg-primary-deemphasized-bt-hover active:scale-95 active:bg-primary-icon-clr-active',
              )}
              onClick={notificationsHandler}
            >
              <BellIcon
                className={clsx(
                  'h-5 w-5 text-primary-btn-icon ui-open:fill-blue-500',
                )}
              />
              <div
                className={clsx(
                  'invisible absolute -right-3 top-full z-[5] mt-1 h-auto w-fit origin-top-left cursor-none select-none rounded-lg bg-primary-text px-3 py-2 text-[12px] tracking-tight text-black opacity-0 shadow-2xl shadow-cyan-500/50 transition-all duration-300 group-hover/messenger-icon:visible group-hover/messenger-icon:opacity-100',
                )}
              >
                Notifications
              </div>
            </div>

            <div className="absolute -top-1 right-0 flex h-4 w-4 select-none items-center justify-center rounded-full bg-red-500 ">
              <span className="text-[10px] font-semibold  text-white">9</span>
            </div>
          </Popover.Button>

          <Popover.Panel className="absolute left-0 top-0  z-[2] duration-200 ui-open:-translate-x-[220px] ui-open:translate-y-[48px]">
            <div className="mr-[5px] mt-[5px] ">
              <div className="overflow-hidden rounded-lg bg-secondary-clr shadow-md  shadow-zinc-600/50 ">
                <div className="max-w-[calc(100vw-24px])] flex max-h-[calc(100vh-90px)] w-[360px] flex-col  ">
                  <div className="flex flex-col">
                    <div className="relative flex grow flex-col justify-start overflow-hidden">
                      <div className="relative flex shrink grow flex-col overflow-hidden">
                        <div>
                          <header className="z-0 flex items-center justify-between bg-transparent px-4 py-3  pb-1">
                            <div className="flex shrink-0  flex-nowrap items-stretch">
                              <div className="flex min-w-0 shrink-0  flex-col self-center  py-[6px]">
                                <h1 className=" mx-0 break-words  p-0 text-2xl font-bold leading-5 text-primary-text  outline-none ">
                                  <span>Notifications</span>
                                </h1>
                              </div>
                            </div>
                            <div className="flex items-stretch">
                              {Array.from(Array(1).keys()).map(
                                (item, index) => (
                                  <div
                                    key={index}
                                    className="max-w-full px-1 py-[6px]"
                                  >
                                    <div className="flex cursor-pointer flex-row items-center justify-center overflow-hidden rounded-full bg-transparent  p-[6px] hover:bg-hover-overlay  active:bg-secondary-clr">
                                      <EllipsisHorizontalIcon className="h-5 w-5 text-primary-icon" />
                                    </div>
                                  </div>
                                ),
                              )}
                            </div>
                          </header>
                          <div className="text-primary-text">
                            <div className=" px-4 ">
                              <label
                                htmlFor=""
                                className="flex w-full min-w-[40px] rounded-2xl  bg-third-clr align-baseline text-sm font-semibold outline-none"
                              >
                                <span className="my-auto pl-[10px]">
                                  <MagnifyingGlassIcon className="h-4 w-4 text-primary-text" />
                                </span>
                                {/* input */}
                                <input
                                  type="text"
                                  className="h-[36px] min-h-0 w-full min-w-0 shrink grow basis-auto cursor-text rounded-full bg-transparent px-[6px] pb-[9px] pt-[7px] text-sm font-semibold text-primary-text outline-none  "
                                  placeholder="Search Messenger"
                                />
                              </label>
                            </div>
                            <div className="mt-1 px-4 py-2">
                              <div className=" box-border flex h-[36px] ">
                                <div className="relative   h-full">
                                  <div className="flex h-full w-full items-center justify-start">
                                    <div className="flex h-full w-fit cursor-pointer items-center justify-center overflow-hidden rounded-[18px] bg-primary-deemphasized-bt-bg px-3  font-semibold leading-5 hover:bg-primary-deemphasized-bt-hover">
                                      <span className="text-[15px]relative overflow-hidden text-ellipsis break-words text-primary-deemphasized-bt-text ">
                                        All
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="relative  h-full px-1">
                                  <div className="flex h-full w-full items-center justify-start">
                                    <div className="flex h-full w-fit cursor-pointer items-center justify-center overflow-hidden rounded-[18px] bg-transparent px-3  font-semibold leading-5 hover:bg-third-clr ">
                                      <span className="text-[15px]relative overflow-hidden text-ellipsis break-words text-primary-text ">
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
                        <div className="flex max-h-[calc(100vh-90px-152px)] flex-col overflow-y-scroll scrollbar scrollbar-track-transparent scrollbar-thumb-fifth-clr scrollbar-thumb-rounded-md   scrollbar-w-3 hover:scrollbar-track-[#2c2d2f] ">
                          {Array.from(Array(15).keys()).map((item, index) => (
                            <div className=" relative px-2" key={index}>
                              <Link
                                href="/"
                                className="group/item relative m-0 flex flex-col rounded-lg p-2 group-hover/edit:bg-red-500 hover:bg-third-clr"
                              >
                                <div className="relative flex h-full w-full flex-nowrap items-center justify-between overflow-hidden">
                                  {/* avatar */}
                                  <div className="relative flex min-w-0 max-w-full shrink-0 flex-col">
                                    <div className="flex select-none pr-3">
                                      <div className="relative h-[56px] w-[56px]">
                                        <div className="absolute inset-0 h-full w-full ">
                                          <div className="z-0 block overflow-hidden rounded-full bg-primary-clr">
                                            <div className="relative h-0 pt-[100%]">
                                              <div className="absolute inset-0 m-0 h-full w-full p-0">
                                                <Image
                                                  src="/images/avatar.jpg"
                                                  width={56}
                                                  height={56}
                                                  alt="user acvatar"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* messages */}
                                  <div className="flex min-w-0 shrink grow basis-0 flex-col items-start">
                                    <div className="relative flex min-w-0 max-w-full shrink grow basis-auto flex-col flex-wrap ">
                                      {/* name */}
                                      <div className="min-w-0 max-w-full break-words text-left leading-[1.33rem] text-primary-text">
                                        <span className="relative block overflow-hidden text-ellipsis whitespace-nowrap">
                                          BE Yeu
                                        </span>
                                      </div>
                                      <div className="h-2"></div>
                                      {/* last message */}
                                      <div className="min-h-4 flex items-center text-[12px] text-primary-text">
                                        <span className="pr-2">
                                          <span className="relative block overflow-hidden text-ellipsis whitespace-nowrap">
                                            {' '}
                                            Hello e iu
                                          </span>
                                        </span>

                                        <span>
                                          <span aria-hidden="true"> · </span>
                                        </span>
                                        <span className="whitespace-nowrap pl-2">
                                          51m
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  {/* fake */}
                                  <div className="min-0 relative z-0 flex max-w-full  shrink-0 flex-col">
                                    <div className="select-none pl-3">
                                      <div className="flex cursor-pointer flex-nowrap items-center justify-center rounded-full">
                                        {/* <svg className="fill-disabled-icon" height="12px" role="img" viewBox="2 2 20 20" width="12px" xmlns="http://www.w3.org/2000/svg"><title>Delivered</title><path d="m12 2a10 10 0 1 0 10 10 10.011 10.011 0 0 0 -10-10zm5.219 8-6.019 6.016a1 1 0 0 1 -1.414 0l-3.005-3.008a1 1 0 1 1 1.419-1.414l2.3 2.3 5.309-5.31a1 1 0 1 1 1.41 1.416z"></path></svg> */}
                                        <div className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full">
                                          <Image
                                            src="/images/avatar.jpg"
                                            alt="responder"
                                            width={16}
                                            height={16}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* tool */}

                                <div
                                  className={clsx(
                                    'group/edit invisible absolute right-[30px]  top-1/2   h-[32px] w-[32px]  -translate-y-1/2 rounded-full border border-gray-700 bg-hover-overlay opacity-0  transition-all duration-100 ease-fade-out group-hover/item:visible group-hover/item:opacity-100 hover:bg-fifth-clr',
                                  )}
                                >
                                  <div className="flex h-full items-center justify-center drop-shadow-xl ">
                                    <EllipsisHorizontalIcon className="h-5 w-5 text-blue-500 " />
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
          <Popover.Button className="relative flex h-full items-center justify-center">
            <div
              className={clsx(
                'group/noti m-0 flex h-[40px] w-[40px] cursor-pointer items-center justify-center overflow-hidden   rounded-full bg-secondary-btn-bg p-0 ui-open:bg-blue-btb-bg-acitve ui-open:bg-primary-deemphasized-bt-bg hover:bg-primary-icon-clr-hover  ui-open:hover:bg-primary-deemphasized-bt-hover active:scale-95 active:bg-primary-icon-clr-active ',
              )}
              onClick={chatsHandler}
            >
              <ChatBubbleBottomCenterIcon
                className={clsx(
                  'h-5 w-5 text-primary-btn-icon ui-open:fill-blue-500 ',
                )}
              />
              <div
                className={clsx(
                  'invisible absolute -right-3 top-full z-[5] mt-1 h-auto w-fit origin-top-left cursor-none select-none rounded-lg bg-primary-text px-3 py-2 text-[12px] tracking-tight text-black opacity-0 shadow-2xl shadow-cyan-500/50 transition-all duration-300 group-hover/noti:visible group-hover/noti:opacity-100',
                )}
              >
                Messenger
              </div>
            </div>
            <div className="absolute -top-1 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500">
              <span className="text-[10px] font-semibold  text-white">99</span>
            </div>
          </Popover.Button>
          <Popover.Panel
            as="div"
            className="absolute left-0 top-0  z-[2] -translate-x-[220px] translate-y-[48px] duration-200"
          >
            <div className="mr-[5px] mt-[5px] ">
              <div className="xl overflow-hidden rounded-lg bg-secondary-clr shadow-md  shadow-zinc-600/50 ">
                <div className="max-w-[calc(100vw-24px])] flex h-full max-h-[calc(100vh-90px)] w-[360px]  flex-col">
                  {/* chats */}
                  <div className="flex flex-col ">
                    <div className="relative flex grow flex-col justify-start overflow-hidden ">
                      <div className="relative flex shrink grow flex-col overflow-hidden ">
                        <div>
                          <header className="z-0 flex items-center justify-between bg-transparent px-4 py-3  pb-1">
                            <div className="flex shrink-0  flex-nowrap items-stretch">
                              <div className="flex min-w-0 shrink-0 flex-col self-center px-1  py-[6px]">
                                <h1 className=" mx-0 break-words  p-0 text-2xl font-bold leading-5 text-primary-text  outline-none ">
                                  <span>Chats</span>
                                </h1>
                              </div>
                            </div>
                            <div className="flex items-stretch">
                              {Array.from(Array(4).keys()).map(
                                (item, index) => (
                                  <div
                                    key={index}
                                    className="max-w-full px-1 py-[6px]"
                                  >
                                    <div className="flex cursor-pointer flex-row items-center justify-center overflow-hidden rounded-full bg-gray-700  p-[6px] hover:bg-hover-overlay  active:bg-secondary-clr">
                                      <EllipsisHorizontalIcon className="h-5 w-5 text-primary-icon" />
                                    </div>
                                  </div>
                                ),
                              )}
                            </div>
                          </header>
                          <div className="text-primary-text">
                            <div className=" px-4 ">
                              <label
                                htmlFor=""
                                className="flex w-full min-w-[40px] rounded-2xl  bg-third-clr align-baseline text-sm font-semibold outline-none"
                              >
                                <span className="my-auto pl-[10px]">
                                  <MagnifyingGlassIcon className="h-4 w-4 text-primary-text" />
                                </span>
                                {/* input */}
                                <input
                                  type="text"
                                  className="h-[36px] min-h-0 w-full min-w-0 shrink grow basis-auto cursor-text rounded-full bg-transparent px-[6px] pb-[9px] pt-[7px] text-sm font-semibold text-primary-text outline-none  "
                                  placeholder="Search Messenger"
                                />
                              </label>
                            </div>
                            <div className="mt-1 px-4 py-2">
                              <div className=" box-border flex h-[36px] ">
                                <div className="relative   h-full">
                                  <div className="flex h-full w-full items-center justify-start">
                                    <div className="flex h-full w-fit cursor-pointer items-center justify-center overflow-hidden rounded-[18px] bg-primary-deemphasized-bt-bg px-3  font-semibold leading-5 hover:bg-primary-deemphasized-bt-hover">
                                      <span className="text-[15px]relative overflow-hidden text-ellipsis break-words text-primary-deemphasized-bt-text ">
                                        Inbox
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="relative  h-full px-1">
                                  <div className="flex h-full w-full items-center justify-start">
                                    <div className="flex h-full w-fit cursor-pointer items-center justify-center overflow-hidden rounded-[18px] bg-transparent px-3  font-semibold leading-5 hover:bg-third-clr ">
                                      <span className="text-[15px]relative overflow-hidden text-ellipsis break-words text-primary-text ">
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
                        <Messages />
                      </div>
                    </div>
                    <div className="pointer-auto  w-full justify-end  border-t border-slate-700  bg-transparent py-[16px]">
                      <span className="mx-auto block w-full text-center text-xs">
                        <Link
                          href="/"
                          className="inline   w-fit  cursor-pointer text-base font-semibold leading-6 text-blue-link hover:underline"
                        >
                          See all In Messenger
                        </Link>
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
  );
};

export default MenuNav;
