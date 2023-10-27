'use client';
import clsx from 'clsx';
import {
  ChevronDownIcon,
  PhoneIcon,
  FaceSmileIcon,
  EllipsisVerticalIcon,
  PlayCircleIcon,
  PhotoIcon,
  PaperAirplaneIcon,
  PencilSquareIcon,
  XMarkIcon,
  VideoCameraIcon,
  MinusIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/outline';
import { PlusCircleIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import Image from 'next/image';
import { ReplyIcon } from '../icons';
import TextareaAutosize from 'react-textarea-autosize';
import React, { useEffect, useId, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from '@/components/ui/popover';
import { useWindowSize } from '../hooks/useWindowSize';

export interface Message {
  id: number;
  name: string;
  url: string;
  seen: boolean;
  lastMessage: string;
}
export interface MessageBox extends Message {
  isOpen: boolean;
}
const WindowChat = () => {
  const [messageField, setMessageField] = useLocalStorage<MessageBox[]>(
    'messageIds',
    [],
  );
  const size = useWindowSize();
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isShownChatBoxOptions, setIsShownChatBoxOptions] = useState(false);
  const onChangeInputText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    setIsTyping(inputValue.length > 0);
    setText(inputValue);
  };

  let activeMessageField = messageField
    .filter((message) => message.isOpen === true)
    .reverse();
  const nonActiveMessageField = messageField
    .filter((message) => message.isOpen === false)
    .reverse();
  let activeMessageFieldLength = activeMessageField.length;

  // let shouldAdjustMessageBoxLength = size?.width < stackSize
  let maxMessages = 0;
  if (size.width) {
    maxMessages = size.width < 1100 ? 1 : size.width < 1530 ? 2 : 3; // set the maximum number of messages based on the condition
  }
  useEffect(() => {
    if (activeMessageFieldLength > maxMessages) {
      // check if the number of messages exceeds the maximum
      const updatedMessageField = [...messageField];
      const lastActiveMessageIndex = updatedMessageField.findIndex(
        (message) => message.isOpen === true,
      );
      if (lastActiveMessageIndex !== -1) {
        updatedMessageField[lastActiveMessageIndex].isOpen = false;
        setMessageField(updatedMessageField);
      }
    }
  }, [messageField, maxMessages, setMessageField, activeMessageFieldLength]);

  const handleMinimizeMessageBox = (id: number) => {
    const updatedMessageField = messageField.map((message) => {
      if (message.id === id) {
        return { ...message, isOpen: false };
      }
      return message;
    });
    setMessageField(updatedMessageField);
  };
  const handleCloseMessageBox = (id: number) => {
    const updatedMessageField = messageField.filter(
      (message) => message.id !== id,
    );
    setMessageField(updatedMessageField);
  };
  const handleOpenMessageBox = (id: number) => {
    const updatedMessageField = messageField.map((message) => {
      if (message.id === id) {
        return { ...message, isOpen: true };
      }
      return message;
    });
    setMessageField(updatedMessageField);
  };
  const closeAllChats = () => {
    setMessageField([]);
  };
  const minimizeAllChats = () => {
    const updatedMessageField = messageField.map((message) => {
      return { ...message, isOpen: false };
    });
    setMessageField(updatedMessageField);
  };
  return (
    <div className="fixed bottom-0 right-0 ">
      <div className="isolate flex items-end">
        {/* chat boxes container */}

        <ul className="fixed bottom-0 right-[80px] z-[1] flex ">
          {activeMessageField.map((item, index) => (
            <li key={item?.id} className="relative ">
              <div className=" h-full " tabIndex={-1}>
                <div className="ml-[10px] flex h-[455px]  max-h-[calc(100vh-56px-10px)]  w-[328px]  flex-col rounded-t-lg bg-messenger-card-bg text-[0.9375rem] leading-[1.3333] shadow-lg">
                  {/* info recieved person */}
                  <div className="relative z-[2] box-content flex h-8 shrink-0 select-none  items-center justify-between  overflow-hidden rounded-t-lg p-2 shadow-md">
                    <div className="relative z-0  -ml-[6px] box-border flex   shrink grow  basis-0 flex-nowrap items-center">
                      <div className="flex">
                        <button className="group/head relative m-0  mr-2 inline-flex  min-w-0 basis-auto rounded-md   p-0 transition-colors delay-75 hover:bg-third-clr ">
                          <div className="flex min-w-0 max-w-full shrink-0 flex-col rounded-md  p-[6px]">
                            <div className="-my-[6px] flex shrink-0 flex-nowrap items-center justify-between ">
                              <div className="flex items-center py-[6px]">
                                <div className="item-center relative -m-[6px] flex shrink grow justify-between  ">
                                  <Link
                                    href={'#'}
                                    tabIndex={-1}
                                    className="m-0 flex rounded-md  border-0 border-none p-0
                                    hover:bg-fourth-clr
                                    "
                                  >
                                    <div className="w- relative box-border flex  min-w-0 shrink-0 items-center justify-center p-[6px]">
                                      <div className="flex aspect-square h-8 overflow-hidden rounded-full">
                                        <Image
                                          className=" h-full w-full object-cover"
                                          src={item.url}
                                          alt="avatar"
                                          width={32}
                                          height={32}
                                        />
                                      </div>
                                    </div>
                                  </Link>
                                  <div className="relative flex min-w-0 max-w-full shrink  grow px-[2px] py-[6px]">
                                    <div className="flex min-h-[26px]  max-w-full grow  flex-col items-start justify-center">
                                      <h1 className="flex min-w-0 max-w-full  outline-none">
                                        <span className="min-w-0 max-w-full break-words text-center font-bold text-primary-text">
                                          {item.name}
                                        </span>
                                      </h1>
                                    </div>
                                  </div>
                                </div>

                                <ChevronDownIcon className="h-[15px] w-[15px] fill-disabled-icon  pl-2" />
                              </div>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                    <ul className="-mr-1 flex items-center bg-transparent">
                      <li className="p-[1px]">
                        <div className="pointer-events-auto box-border flex cursor-pointer items-center overflow-hidden rounded-full p-[3px] hover:bg-third-clr ">
                          <PhoneIcon className=" w- h-5 text-disabled-icon" />
                        </div>
                      </li>
                      <li className="p-[1px]">
                        <div className="pointer-events-auto box-border flex cursor-pointer items-center overflow-hidden rounded-full p-[3px] hover:bg-third-clr ">
                          <VideoCameraIcon className=" w- h-5 text-disabled-icon" />
                        </div>
                      </li>
                      <li className="p-[1px]">
                        <div
                          className="pointer-events-auto box-border flex cursor-pointer items-center overflow-hidden rounded-full p-[3px] hover:bg-third-clr  "
                          onClick={() => handleMinimizeMessageBox(item.id)}
                        >
                          <MinusIcon className=" w- h-5 text-disabled-icon" />
                        </div>
                      </li>
                      <li className="p-[1px]">
                        <div
                          className="pointer-events-auto box-border flex cursor-pointer items-center overflow-hidden rounded-full p-[3px] hover:bg-third-clr "
                          onClick={() => handleCloseMessageBox(item.id)}
                        >
                          <XMarkIcon className=" w- h-5 text-disabled-icon" />
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* chat container  */}
                  <div className="relative flex min-h-0 max-w-full grow flex-col ">
                    {/* messages */}
                    <div className="relative flex max-h-full flex-1 flex-col overflow-hidden">
                      <div className="relative flex max-h-full flex-1 flex-col overflow-hidden border-l-2 border-r-2 border-messenger-card-bg">
                        <div className="relative flex flex-1 flex-col overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-transparent scrollbar-thumb-fifth-clr    scrollbar-thumb-rounded-md scrollbar-w-2 hover:scrollbar-track-[#2c2d2f]">
                          {/* each message */}
                          {Array.from(Array(10).keys()).map((item, index) => (
                            <div key={index} className="relative">
                              <div className="relative flex flex-col">
                                {/* for Assistive Techonology  clip-path:inset(50%) */}
                                <h3 className="outline-none">
                                  <span
                                    className="absolute h-[1px] w-[1px] overflow-hidden "
                                    style={{ clipPath: 'inset(50%)' }}
                                  >
                                    Kiet
                                  </span>
                                </h3>
                                {/* perhaps do a height:2px here */}
                                <div className="group/message flex ">
                                  {/* avatar */}
                                  <div className="flex grow-0 flex-col justify-end bg-transparent pl-[6px] pr-2 ">
                                    <div className="flex aspect-square w-[28px] items-end">
                                      <div className="relative flex h-full w-full overflow-hidden rounded-full">
                                        <Image
                                          className="h-full w-full object-cover"
                                          src="/images/avatar.jpg"
                                          alt="avatar"
                                          width={28}
                                          height={28}
                                        />
                                      </div>
                                    </div>
                                    {/* if the message has interaction icon */}
                                    <div className=""></div>
                                  </div>
                                  {/* message */}
                                  <div className="flex min-w-0 shrink  grow ">
                                    <div className="flex flex-col justify-start bg-transparent ">
                                      <div className="flex w-full flex-col">
                                        {/* like padding */}
                                        <div className="h-[2px] w-full bg-messenger-card-bg "></div>
                                        <div className="relative flex  max-w-full flex-col items-start">
                                          <div className="relative z-[1] overflow-hidden rounded-2xl bg-wash px-3 py-2 text-white">
                                            <div className="whitespace-pre-wrap text-left text-[0.9375rem] leading-[1.3333]  text-primary-text">
                                              How are you?
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* if the message has interaction icon */}
                                      <div className="w-full max-w-full grow-0 items-stretch justify-end bg-transparent"></div>
                                    </div>
                                    {/* drop icons, reply to specific message and edit */}
                                    {/* if the message has interaction icon
                                      do: pb-[18px] */}
                                    <div
                                      className="delay-70 invisible  relative flex shrink-0 grow justify-center pl-[5px] opacity-0 transition-all group-hover/message:visible group-hover/message:opacity-100"
                                      aria-hidden="true"
                                    >
                                      <div className="flex items-center justify-center">
                                        <div className="pointer-events-auto box-border flex h-6 w-6 cursor-pointer  items-center justify-center overflow-hidden  rounded-full hover:bg-third-clr  ">
                                          <FaceSmileIcon className=" h-[20px] w-[20px] text-disabled-icon" />
                                        </div>
                                      </div>

                                      <div className="flex items-center justify-center">
                                        <div className="pointer-events-auto box-border flex h-6 w-6 cursor-pointer  items-center justify-center overflow-hidden  rounded-full hover:bg-third-clr  ">
                                          <ReplyIcon className=" h-[20px] w-[20px] fill-disabled-icon " />
                                        </div>
                                      </div>

                                      <div className="flex items-center justify-center">
                                        <div className="pointer-events-auto box-border flex h-6 w-6 cursor-pointer  items-center justify-center overflow-hidden  rounded-full hover:bg-third-clr  ">
                                          <EllipsisVerticalIcon className=" stroke-3 h-[20px] w-[20px]  text-disabled-icon" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* sigal message seen */}
                                  <div className="flex max-w-full grow-0 flex-col justify-end self-stretch bg-transparent">
                                    <div className="flex w-5 items-end overflow-hidden">
                                      <div className="flex aspect-square w-[14px] items-end">
                                        <div className="relative flex h-full w-full overflow-hidden rounded-full">
                                          <Image
                                            className="h-full w-full object-cover"
                                            src="/images/avatar.jpg"
                                            alt="avatar"
                                            width={14}
                                            height={14}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="h-[7px] w-full bg-messenger-card-bg "></div>
                              </div>
                            </div>
                          ))}
                          <div className="relative">
                            <div className="relative flex flex-col">
                              {/* for Assistive Techonology  clip-path:inset(50%) */}
                              <h3 className="outline-none">
                                <span
                                  className="absolute h-[1px] w-[1px] overflow-hidden "
                                  style={{ clipPath: 'inset(50%)' }}
                                >
                                  Kiet
                                </span>
                              </h3>
                              {/* perhaps do a height:2px here */}
                              <div className="group/message flex ">
                                {/* avatar */}
                                <div className="flex grow-0 flex-col justify-end bg-transparent pl-[6px] pr-2 ">
                                  {/* if the message has interaction icon */}
                                  <div className=""></div>
                                </div>
                                {/* message */}
                                <div className="flex min-w-0 shrink grow  flex-row-reverse ">
                                  <div className="flex flex-col justify-start bg-transparent ">
                                    <div className="flex w-full flex-col">
                                      {/* like padding */}
                                      <div className="h-[2px] w-full bg-messenger-card-bg "></div>
                                      <div className="relative flex  max-w-full flex-col items-start">
                                        <div className="relative z-[1] overflow-hidden rounded-2xl bg-blue-600 px-3 py-2 text-white ">
                                          <div className="whitespace-pre-wrap text-left text-[0.9375rem] leading-[1.3333]  text-white">
                                            Nay tr di nhan bang ra truong ne
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* if the message has interaction icon */}
                                    <div className="w-full max-w-full grow-0 items-stretch justify-end bg-transparent"></div>
                                  </div>
                                  {/* drop icons, reply to specific message and edit */}
                                  {/* if the message has interaction icon
                                      do: pb-[18px] */}
                                  <div
                                    className="delay-70 invisible  relative flex shrink-0 grow justify-center pl-[5px] opacity-0 transition-all group-hover/message:visible group-hover/message:opacity-100"
                                    aria-hidden="true"
                                  >
                                    <div className="flex items-center justify-center">
                                      <div className="pointer-events-auto box-border flex h-6 w-6 cursor-pointer  items-center justify-center overflow-hidden  rounded-full hover:bg-third-clr  ">
                                        <FaceSmileIcon className=" h-[20px] w-[20px] text-disabled-icon" />
                                      </div>
                                    </div>

                                    <div className="flex items-center justify-center">
                                      <div className="pointer-events-auto box-border flex h-6 w-6 cursor-pointer  items-center justify-center overflow-hidden  rounded-full hover:bg-third-clr  ">
                                        <ReplyIcon className=" h-[20px] w-[20px] fill-disabled-icon " />
                                      </div>
                                    </div>

                                    <div className="flex items-center justify-center">
                                      <div className="pointer-events-auto box-border flex h-6 w-6 cursor-pointer  items-center justify-center overflow-hidden  rounded-full hover:bg-third-clr  ">
                                        <EllipsisVerticalIcon className=" stroke-3 h-[20px] w-[20px]  text-disabled-icon" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* sigal message seen */}
                                <div className="flex max-w-full grow-0 flex-col justify-end self-stretch bg-transparent">
                                  <div className="flex w-5 items-end overflow-hidden">
                                    <div className="flex aspect-square w-[14px] items-end">
                                      <div className="relative flex h-full w-full overflow-hidden rounded-full">
                                        <Image
                                          className="h-full w-full object-cover"
                                          src="/images/avatar.jpg"
                                          alt="avatar"
                                          width={14}
                                          height={14}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="h-[7px] w-full bg-messenger-card-bg "></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* type message */}
                    <div className="flex items-end py-3 leading-4 text-[0.9375] shadow-md">
                      {/* more */}
                      <div className=" m-1  min-w-0 shrink-0 grow-0 basis-auto overflow-hidden rounded-full p-1 hover:bg-third-clr">
                        <div className="pointer-events-auto box-border    flex cursor-pointer items-center ">
                          <PlusCircleIcon className=" h-5 w-5 text-disabled-icon" />
                        </div>
                      </div>
                      {/* input message */}
                      <div className="relative -ml-1 min-w-0 grow basis-0  overflow-x-hidden  ">
                        <div
                          className={clsx(
                            `absolute bottom-0 left-0 z-[1] mb-1 mr-1 flex items-center justify-center transition-transform delay-100  `,
                            {
                              'scale-0': isTyping,
                              'scale-100': !isTyping,
                            },
                          )}
                        >
                          <input type="file" multiple className="hidden" />
                          <div className="min-w-0 shrink-0 grow-0 basis-auto overflow-hidden   rounded-full p-1 hover:bg-third-clr">
                            <div className="pointer-events-auto box-border    flex cursor-pointer items-center  ">
                              <PhotoIcon className=" h-5 w-5 text-disabled-icon" />
                            </div>
                          </div>
                        </div>
                        <div
                          className={clsx(`flex   transition-[margin]`, {
                            'ml-[36px]': !isTyping,
                            'ml-0': isTyping,
                          })}
                        >
                          <div className="box-border min-w-0 grow rounded-[20px] bg-comment-bg">
                            <div className="flex w-full flex-col flex-wrap justify-start">
                              <div className="relative m-2  mr-3 flex min-w-0">
                                <TextareaAutosize
                                  minRows={1}
                                  maxRows={6}
                                  placeholder="Aa"
                                  value={text}
                                  style={{ height: 17 }}
                                  className="grow     resize-none overflow-x-hidden bg-transparent text-primary-text "
                                  onChange={onChangeInputText}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* send message */}
                      <div className="inline-flex grow-0">
                        <div className=" mx-1  min-w-0 shrink-0 grow-0 basis-auto cursor-pointer overflow-hidden rounded-full p-2 hover:bg-third-clr">
                          <PaperAirplaneIcon className="h-5 w-5 fill-disabled-icon stroke-transparent" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {/* util for chat  */}
        <div className="absolute bottom-[16px]  right-[16px] w-[48px] ">
          <div className="flex flex-col items-center justify-center">
            <div
              className="peer/options pointer-events-auto order-last box-border flex h-[48px] w-[48px]  cursor-pointer items-center justify-center overflow-hidden rounded-full bg-sec-btn-bg shadow-xl hover:bg-sec-btn-bg-hover "
              onMouseEnter={() => setIsShownChatBoxOptions(true)}
              onMouseLeave={() => setIsShownChatBoxOptions(false)}
            >
              <PencilSquareIcon className=" h-5 w-5 text-white" />
            </div>
            {nonActiveMessageField.map((message, index) => (
              <div
                key={index}
                className="group  relative order-2 mb-[10px] flex h-[48px] w-[48px] items-center justify-center"
              >
                <div className="flex h-[48px] w-[48px] items-center justify-center ">
                  <button
                    aria-label="Open chat"
                    className=" m-0 flex h-full w-full select-none items-center justify-center rounded-full border-0 border-none p-0 ring-blue-500 ring-offset-2 ring-offset-white focus:outline-none  focus-visible:ring "
                    onMouseEnter={() => setIsShownChatBoxOptions(true)}
                    onMouseLeave={() => setIsShownChatBoxOptions(false)}
                    onClick={() => handleOpenMessageBox(message.id)}
                  >
                    <div className="h-full w-full overflow-hidden rounded-full bg-messenger-card-bg shadow-xl">
                      <Image
                        className=" h-full w-full object-cover"
                        src={message.url}
                        alt="avatar"
                        width={48}
                        height={48}
                      />
                    </div>
                  </button>
                </div>
                {/* close chat */}
                <div className="group/close invisible  absolute -right-1 -top-1 flex  h-5 w-5 flex-auto shrink-0 grow-0 scale-0 cursor-pointer items-center justify-center rounded-full bg-messenger-card-bg group-hover:visible group-hover:scale-100 hover:bg-fourth-clr">
                  <XMarkIcon className="h-4 w-4 text-disabled-icon" />
                </div>
              </div>
            ))}
            <div
              className={clsx(
                `box-border flex h-[48px]   w-[48px] items-center justify-center `,
              )}
            >
              <div
                className={clsx(
                  `flex h-[48px] w-[48px] items-center justify-center transition-all delay-75`,
                  {
                    'scale-0': !isShownChatBoxOptions,
                    'scale-100': isShownChatBoxOptions,
                  },
                )}
                onMouseEnter={() => setIsShownChatBoxOptions(true)}
                onMouseLeave={() => setIsShownChatBoxOptions(false)}
              >
                <Popover>
                  <PopoverTrigger>
                    <div
                      className={clsx(
                        `pointer-events-auto box-border flex h-[36px] w-[36px]  cursor-pointer items-center justify-center overflow-hidden rounded-full bg-sec-btn-bg shadow-xl transition-[scale]  delay-500 hover:bg-sec-btn-bg-hover`,
                      )}
                    >
                      <EllipsisHorizontalIcon className=" h-5 w-5 text-white" />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent
                    align="start"
                    sideOffset={-120}
                    className="text-white "
                  >
                    <PopoverClose
                      className="mb-2 flex "
                      onClick={() => closeAllChats()}
                    >
                      <div>
                        <XMarkIcon className=" h-5 w-5 rounded-full border border-white text-white" />
                      </div>
                      <div className="pl-3">Close all chats</div>
                    </PopoverClose>
                    <PopoverClose
                      className="flex justify-center"
                      onClick={() => minimizeAllChats()}
                    >
                      <div>
                        <MinusIcon className=" h-5 w-5 rounded-full border border-white text-white" />
                      </div>
                      <div className="pl-3">Minimize open chats</div>
                    </PopoverClose>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindowChat;
