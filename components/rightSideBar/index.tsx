import { EllipsisHorizontalIcon, MagnifyingGlassIcon, PlusIcon, VideoCameraIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { onlineContacts } from './constanst';
import clsx from 'clsx';


export default function RightSideBar() {

  return (
    <div className='hidden md:flex overflow-visible basis-[360px]  sticky top-[56px] min-w-[280px] grow shrink-[9999] max-w-[360px] bg-primary-clr overflow-x-hidden max-h-screen h-screen -mb-[56px] text-primary-text text-[15px] font-medium'>
      <div className='flex relative flex-col min-h-0 grow shrink overflow-x-hidden basis-full pt-2 overflow-y-scroll scrollbar-thumb-fifth-clr scrollbar-track-transparent hover:scrollbar-track-[#2c2d2f]  scrollbar   scrollbar-w-2 scrollbar-thumb-rounded-md box'>
        <div className=' flex flex-col  relative grow '>
          <div className='pt-2'>

            {/* ads */}
            {/* <div className='pt-5 max-w-full'>
                    dsadasdsadasdsad
                  </div> */}
            {/* contact */}
            <div className='relative'>
              <div className='flex flex-col relative z-0 pb-1 pt-5 max-w-full'>
                <div className='flex flex-col min-h-0 relative grow shrink-0 px-4 '>
                  <span className='min-w-0 break-words max-w-full font-semibold leading-[1.1765rem]'>
                    <div className='flex items-center gap-2'>
                      <h3 className='min-w-0 grow flex flex-col max-w-full basis-0'>
                        <span className='line-clamp-2'>
                          Contact
                        </span>
                      </h3>
                      <div className='flex min-w-0  shrink-0 max-w-full
                            '>
                        <div className='flex items-center'>
                          <div className='mx-3 '>
                            <VideoCameraIcon className='w-4 h-4  ' />
                          </div>
                        </div>
                        <div className='flex items-center'>
                          <div className='mx-3 '>
                            <MagnifyingGlassIcon className='w-4 h-4  ' />
                          </div>
                        </div>
                        <div className='flex items-center'>
                          <div className='mx-3 '>
                            <EllipsisHorizontalIcon className='w-4 h-4  ' />
                          </div>
                        </div>
                      </div>
                    </div>

                  </span>
                </div>
              </div>

              {/* contact names */}
              <div className='flex flex-col pt-2'>
                <ul>
                  {onlineContacts.map((contact, index) => (
                    <li key={index} className='flex    w-full'>
                      <div className='flex flex-col justify-center  px-2  w-full '>
                        <div className='flex items-center px-2 p-[1.5px] gap-3 duration-400 hover:bg-hover-overlay rounded-lg cursor-pointer'>

                          <div className='flex items-center justify-center w-6 h-6 rounded-full bg-zinc-600 my-2 grow-0 shrink-0 relative'>
                            <svg className='w-6 h-6' aria-hidden="true" >
                              <mask id={`:${index}:`}>
                                <circle cx="12" cy="12" r="12" className='fill-white'  >
                                </circle>
                                {/* has story  */}
                                {contact.haveStories ? <circle cx="12" cy="12" fill="transparent" r="9" stroke="black" strokeWidth="2"></circle> : null}

                                <circle cx="20" cy="20" r="4.5 " className='fill-black'  ></circle>

                              </mask>
                              <g mask={`url(#:${index}:)`}>
                                {/* has story : w-6 h-6 x=0 y=0 */}
                                <image x={`${contact.haveStories ? '4' : '0'}`} y={`${contact.haveStories ? '4' : '0'}`} className={clsx(``, {
                                  'w-4 h-4': contact.haveStories,
                                  'w-6 h-6': !contact.haveStories
                                })}
                                  xlinkHref={contact.url}

                                />
                                <circle className="stroke-2 fill-none stroke-media-inner-border" cx="12" cy="12" r="12"></circle>

                                {contact.haveStories &&
                                  <circle className={clsx(`stroke-2 `, {
                                    'stroke-blue-500': contact.seen,
                                    'stroke-third-clr': !contact.haveStories
                                  })}
                                    cx="12" cy="12" fill="transparent" r="11" ></circle>
                                }

                              </g>
                            </svg>
                            <div className='absolute bottom-1 right-1 translate-x-1/2 translate-y-1/2 rounded-full  z-[2] '>
                              <div className='flex relative overflow-hidden rounded-full '>
                                <span className='bg-green-700 h-[6px] w-[6px]'>

                                </span>
                              </div>
                            </div>
                          </div>
                          <div className='flex flex-col py-2'>
                            <span className='font-semibold text-sm line-clamp-1'>
                              <span className='line-clamp-1 text-[15px] leading-5 font-medium text-left'>
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
            <div className='relative'>
              <div className='flex flex-col  pb-1 pt-5 max-w-full border-t border-gray-700  '>
                <div className='flex flex-col min-h-0 relative grow shrink-0  '>
                  <span className='min-w-0 break-words max-w-full font-semibold leading-[1.1765rem]'>
                    <div className='flex items-center gap-2'>
                      <h3 className='min-w-0 grow flex flex-col max-w-full basis-0'>
                        <span className='px-4 line-clamp-2'>
                          Group converstations
                        </span>
                      </h3>
                    </div>
                  </span>
                </div>
              </div>
              {/* groups converstations */}
              <div className='flex flex-col pt-2'>
                <ul>
                  {onlineContacts.map((contact,index) => (
                    <li key={index} className='flex    w-full'>
                      <div className='flex flex-col justify-center  px-2  w-full '>
                        <div className='flex items-center px-2 p-[1.5px] gap-3 duration-400 hover:bg-hover-overlay rounded-lg cursor-pointer'>

                          <div className='flex items-center justify-center w-6 h-6 rounded-full  my-2 grow-0 shrink-0 relative'>
                            <svg className='w-6 h-6 ' aria-hidden="true" >
                              <mask id={`:${index}:`}>
                                <circle cx="12" cy="12" r="12" className='fill-white'  >
                                </circle>
                                <circle cx="20" cy="20" r="4.5 " className='fill-black'  ></circle> 
                                {/* has story  */}
                                {contact.haveStories ? <circle cx="12" cy="12" fill="transparent" r="9" stroke="black" 
                                strokeWidth="2" className='stroke-black'></circle> : null}
                                
                              </mask>
                              <g mask={`url(#:${index}:)`}>
                                {/* has story : w-6 h-6 x=0 y=0 */}
                                <image x={`${contact.haveStories ? '4' : '0'}`} y={`${contact.haveStories ? '4' : '0'}`} className={clsx(``,{
                                  'w-4 h-4': contact.haveStories,
                                  'w-6 h-6': !contact.haveStories
                                })} 
                                  xlinkHref={contact.url}

                                />
                                <circle className="stroke-2 fill-none stroke-media-inner-border" cx="12" cy="12" r="12"></circle>

                                {contact.haveStories && 
                                <circle className={clsx(`stroke-2 `, {
                                  'stroke-blue-500': contact.seen,
                                  'stroke-divider': !contact.seen
                                })} 
                                cx="12" cy="12" fill="transparent" r="11" ></circle>
                                }
                                
                              </g>
                            </svg>
                            <div className='absolute bottom-1 right-1 translate-x-1/2 translate-y-1/2 rounded-full  z-[2] '>
                              <div className='flex relative overflow-hidden rounded-full '>
                                <span className='bg-green-700 h-[6px] w-[6px]'>

                                </span>
                              </div>
                            </div>
                          </div>
                          <div className='flex flex-col py-2'>
                            <span className='font-semibold text-sm line-clamp-1'>
                              <span className='line-clamp-1 text-[15px] leading-5 font-medium text-left'>
                                { contact.name }
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>

                  ))}
                </ul>
                <div className='flex items-center gap-2 px-2  mb-[70px]'>
                  <div className='flex w-full py-2 rounded-lg px-2 hover:bg-hover-overlay items-center gap-x-4 drop-shadow-2xl'>
                    <div className='flex items-center justify-center w-10 h-10 rounded-full bg-third-clr drop-shadow-lg cursor-pointer'>
                      <PlusIcon className='w-5 h-5 text-primary-text' />
                    </div>
                    <div className='flex flex-col grow basis-auto h-full '>
                      <span className='font-semibold text-sm line-clamp-1'>
                        <span className='line-clamp-1 text-[17px]'>
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