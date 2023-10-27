import {
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { onlineContacts } from './constanst';
import clsx from 'clsx';

export default function RightSideBar() {
  return (
    <div className="sticky top-[56px] -mb-[56px] hidden  h-screen max-h-screen min-w-[280px] max-w-[360px] shrink-[9999] grow basis-[360px] overflow-visible overflow-x-hidden bg-primary-clr text-[15px] font-medium text-primary-text md:flex ">
      <div className="box relative flex min-h-0 shrink grow basis-full flex-col overflow-x-hidden overflow-y-scroll pt-2 scrollbar scrollbar-track-transparent  scrollbar-thumb-fifth-clr   scrollbar-thumb-rounded-md scrollbar-w-2 hover:scrollbar-track-[#2c2d2f]">
        <div className=" relative flex  grow flex-col ">
          <div className="pt-2">
            {/* ads */}
            {/* <div className='pt-5 max-w-full'>
                    dsadasdsadasdsad
                  </div> */}
            {/* contact */}
            <div className="relative">
              <div className="relative z-0 flex max-w-full flex-col pb-1 pt-5">
                <div className="relative flex min-h-0 shrink-0 grow flex-col px-4 ">
                  <span className="min-w-0 max-w-full break-words font-semibold leading-[1.1765rem]">
                    <div className="flex items-center gap-2">
                      <h3 className="flex min-w-0 max-w-full grow basis-0 flex-col">
                        <span className="line-clamp-2">Contact</span>
                      </h3>
                      <div
                        className="flex min-w-0  max-w-full shrink-0
                            "
                      >
                        <div className="flex items-center">
                          <div className="mx-3 ">
                            <VideoCameraIcon className="h-4 w-4  " />
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="mx-3 ">
                            <MagnifyingGlassIcon className="h-4 w-4  " />
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="mx-3 ">
                            <EllipsisHorizontalIcon className="h-4 w-4  " />
                          </div>
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
              </div>

              {/* contact names */}
              <div className="flex flex-col pt-2">
                <ul>
                  {onlineContacts.map((contact, index) => (
                    <li key={index} className="flex    w-full">
                      <div className="flex w-full flex-col  justify-center  px-2 ">
                        <div className="duration-400 flex cursor-pointer items-center gap-3 rounded-lg p-[1.5px] px-2 hover:bg-hover-overlay">
                          <div className="relative my-2 flex h-6 w-6 shrink-0 grow-0 items-center justify-center rounded-full bg-zinc-600">
                            <svg className="h-6 w-6" aria-hidden="true">
                              <mask id={`:${index}:`}>
                                <circle
                                  cx="12"
                                  cy="12"
                                  r="12"
                                  className="fill-white"
                                ></circle>
                                {/* has story  */}
                                {contact.haveStories ? (
                                  <circle
                                    cx="12"
                                    cy="12"
                                    fill="transparent"
                                    r="9"
                                    stroke="black"
                                    strokeWidth="2"
                                  ></circle>
                                ) : null}

                                <circle
                                  cx="20"
                                  cy="20"
                                  r="4.5 "
                                  className="fill-black"
                                ></circle>
                              </mask>
                              <g mask={`url(#:${index}:)`}>
                                {/* has story : w-6 h-6 x=0 y=0 */}
                                <image
                                  x={`${contact.haveStories ? '4' : '0'}`}
                                  y={`${contact.haveStories ? '4' : '0'}`}
                                  className={clsx(``, {
                                    'h-4 w-4': contact.haveStories,
                                    'h-6 w-6': !contact.haveStories,
                                  })}
                                  xlinkHref={contact.url}
                                />
                                <circle
                                  className="fill-none stroke-media-inner-border stroke-2"
                                  cx="12"
                                  cy="12"
                                  r="12"
                                ></circle>

                                {contact.haveStories && (
                                  <circle
                                    className={clsx(`stroke-2 `, {
                                      'stroke-blue-500': contact.seen,
                                      'stroke-third-clr': !contact.haveStories,
                                    })}
                                    cx="12"
                                    cy="12"
                                    fill="transparent"
                                    r="11"
                                  ></circle>
                                )}
                              </g>
                            </svg>
                            <div className="absolute bottom-1 right-1 z-[2] translate-x-1/2 translate-y-1/2  rounded-full ">
                              <div className="relative flex overflow-hidden rounded-full ">
                                <span className="h-[6px] w-[6px] bg-green-700"></span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col py-2">
                            <span className="line-clamp-1 text-sm font-semibold">
                              <span className="line-clamp-1 text-left text-[15px] font-medium leading-5">
                                {contact.name}
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* groups converstaion */}
            <div className="relative">
              <div className="flex max-w-full  flex-col border-t border-gray-700 pb-1 pt-5  ">
                <div className="relative flex min-h-0 shrink-0 grow flex-col  ">
                  <span className="min-w-0 max-w-full break-words font-semibold leading-[1.1765rem]">
                    <div className="flex items-center gap-2">
                      <h3 className="flex min-w-0 max-w-full grow basis-0 flex-col">
                        <span className="line-clamp-2 px-4">
                          Group converstations
                        </span>
                      </h3>
                    </div>
                  </span>
                </div>
              </div>
              {/* groups converstations */}
              <div className="flex flex-col pt-2">
                <ul>
                  {onlineContacts.map((contact, index) => (
                    <li key={index} className="flex    w-full">
                      <div className="flex w-full flex-col  justify-center  px-2 ">
                        <div className="duration-400 flex cursor-pointer items-center gap-3 rounded-lg p-[1.5px] px-2 hover:bg-hover-overlay">
                          <div className="relative my-2 flex h-6 w-6 shrink-0  grow-0 items-center justify-center rounded-full">
                            <svg className="h-6 w-6 " aria-hidden="true">
                              <mask id={`:${index}:`}>
                                <circle
                                  cx="12"
                                  cy="12"
                                  r="12"
                                  className="fill-white"
                                ></circle>
                                <circle
                                  cx="20"
                                  cy="20"
                                  r="4.5 "
                                  className="fill-black"
                                ></circle>
                                {/* has story  */}
                                {contact.haveStories ? (
                                  <circle
                                    cx="12"
                                    cy="12"
                                    fill="transparent"
                                    r="9"
                                    stroke="black"
                                    strokeWidth="2"
                                    className="stroke-black"
                                  ></circle>
                                ) : null}
                              </mask>
                              <g mask={`url(#:${index}:)`}>
                                {/* has story : w-6 h-6 x=0 y=0 */}
                                <image
                                  x={`${contact.haveStories ? '4' : '0'}`}
                                  y={`${contact.haveStories ? '4' : '0'}`}
                                  className={clsx(``, {
                                    'h-4 w-4': contact.haveStories,
                                    'h-6 w-6': !contact.haveStories,
                                  })}
                                  xlinkHref={contact.url}
                                />
                                <circle
                                  className="fill-none stroke-media-inner-border stroke-2"
                                  cx="12"
                                  cy="12"
                                  r="12"
                                ></circle>

                                {contact.haveStories && (
                                  <circle
                                    className={clsx(`stroke-2 `, {
                                      'stroke-blue-500': contact.seen,
                                      'stroke-divider': !contact.seen,
                                    })}
                                    cx="12"
                                    cy="12"
                                    fill="transparent"
                                    r="11"
                                  ></circle>
                                )}
                              </g>
                            </svg>
                            <div className="absolute bottom-1 right-1 z-[2] translate-x-1/2 translate-y-1/2  rounded-full ">
                              <div className="relative flex overflow-hidden rounded-full ">
                                <span className="h-[6px] w-[6px] bg-green-700"></span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col py-2">
                            <span className="line-clamp-1 text-sm font-semibold">
                              <span className="line-clamp-1 text-left text-[15px] font-medium leading-5">
                                {contact.name}
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mb-[70px] flex items-center gap-2  px-2">
                  <div className="flex w-full items-center gap-x-4 rounded-lg px-2 py-2 drop-shadow-2xl hover:bg-hover-overlay">
                    <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-third-clr drop-shadow-lg">
                      <PlusIcon className="h-5 w-5 text-primary-text" />
                    </div>
                    <div className="flex h-full grow basis-auto flex-col ">
                      <span className="line-clamp-1 text-sm font-semibold">
                        <span className="line-clamp-1 text-[17px]">
                          Create New Group
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* scroll bar */}
      </div>
    </div>
  );
}
