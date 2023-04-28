import { EllipsisHorizontalIcon, MagnifyingGlassIcon, PlusIcon, VideoCameraIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
export default function RightSideBar() {
  return (
    <div className='hidden md:flex overflow-visible basis-[360px]  sticky top-[56px] min-w-[280px] grow shrink-[9999] max-w-[360px] bg-red-500 overflow-y-scroll max-h-screen h-screen -mb-[56px]'>
      <div className='flex relative flex-col min-h-0 grow shrink overflow-x-hidden basis-full pt-2'>
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
                  {Array.from(Array(8).keys()).map((i) => (
                    <li key={i} className='flex items-center gap-2 px-4 py-2 hover:bg-slate-500'>
                      <div className='flex items-center justify-center w-10 h-10 rounded-full bg-slate-600'>
                        <Image alt='contact name' src='/images/avatar.jpg' width={36} height={36} className='rounded-full' />
                      </div>
                      <div className='flex flex-col'>
                        <span className='font-semibold text-sm line-clamp-1'>
                          <span className='line-clamp-1'>
                            Contact Name
                          </span>
                        </span>
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
                          Contact
                        </span>
                      </h3>
                    </div>
                  </span>
                </div>
              </div>
              {/* groups converstations */}
              <div className='flex flex-col pt-2'>
                <ul>
                  {Array.from(Array(14).keys()).map((i) => (
                    <li key={i} className='flex items-center gap-2 px-4 py-2 hover:bg-slate-500'>
                      <div className='flex items-center justify-center w-10 h-10 rounded-full bg-slate-600'>
                        <Image alt='contact name' src='/images/avatar.jpg' width={36} height={36} className='rounded-full' />
                      </div>
                      <div className='flex flex-col'>
                        <span className='font-semibold text-sm line-clamp-1'>
                          <span className='line-clamp-1'>
                            Contact Name
                          </span>
                        </span>
                      </div>
                    </li>

                  ))}
                </ul>
                <div className='flex items-center gap-2 px-4 py-2 hover:bg-slate-500'>
                  <div className='flex items-center justify-center w-10 h-10 rounded-full bg-slate-600'>
                    <PlusIcon className='' />
                  </div>
                  <div className='flex flex-col'>
                    <span className='font-semibold text-sm line-clamp-1'>
                      <span className='line-clamp-1'>
                        Create New Group
                      </span>
                    </span>
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