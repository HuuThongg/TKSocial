'use client';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import { messages } from './constant';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { Message, MessageBox } from '../windowChat/WindowChat';

// interface Message {
//   id: number;
//   name: string;
//   url: string;
//   seen: boolean;
//   lastMessage: string;
// }
// interface MessageBox extends Message{
//   isOpen: boolean;
// }
const Messages = () => {
  const [messageIds, setMessageIds] = useLocalStorage<MessageBox[]>(
    'messageIds',
    [],
  );

  const addMessageId = (message: Message) => {
    // Check if the message already exists in the messageIds array
    const messageExists = messageIds.some((msg) => msg.id === message.id);
    if (!messageExists) {
      setMessageIds((prevMessageIds) => [
        ...prevMessageIds,
        { ...message, isOpen: true },
      ]);
    }
  };

  return (
    <div className="flex max-h-[calc(100vh-90px-152px)] flex-col overflow-y-scroll   scrollbar scrollbar-track-transparent scrollbar-thumb-fifth-clr scrollbar-thumb-rounded-md   scrollbar-w-3 hover:scrollbar-track-[#2c2d2f]">
      {messages.map((message, index) => (
        <div className=" relative px-2" key={index}>
          <button
            className="group/item relative m-0 flex flex-col rounded-lg p-2 group-hover/edit:bg-red-500 hover:bg-third-clr"
            onClick={() => addMessageId(message)}
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
                              src={message.url}
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
              <div className="flex min-w-0 max-w-full shrink grow basis-auto flex-col items-start">
                <div className="relative flex w-full min-w-0 max-w-full shrink grow  basis-auto flex-col">
                  {/* name */}
                  <div className="min-w-0 max-w-full break-words text-left leading-[1.33rem] text-primary-text">
                    <span className="relative block overflow-hidden text-ellipsis whitespace-nowrap">
                      {message.name}
                    </span>
                  </div>
                  <div className="h-2 w-full"></div>
                  {/* last message */}
                  <div className="min-h-4 flex w-full items-center text-[12px] text-primary-text">
                    <span className="block pr-2">
                      <span className="block  max-w-[200px]  overflow-hidden truncate">
                        {' '}
                        {message.lastMessage}
                      </span>
                    </span>

                    <span>
                      <span aria-hidden="true"> · </span>
                    </span>
                    <span className="whitespace-nowrap pl-2">51m</span>
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
          </button>
        </div>
      ))}
    </div>
  );
};

export default Messages;
