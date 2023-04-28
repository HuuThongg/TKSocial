import Image from 'next/image'
import { Inter } from 'next/font/google'
import { VideoCameraIcon, MagnifyingGlassIcon, EllipsisHorizontalIcon, PlusIcon,PhotoIcon,FaceSmileIcon ,XMarkIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'
import RightSideBar from '@/components/rightSideBar'
import { Earth } from '@/components/icon'
import Post from '@/components/post'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=" relative flex flex-col   min-h-0   left-[60px] lg:left-[300px]  origin-top-left  ">
      <div className='relative min-h-[56px] overflow-visible w-full h-full flex '>
        <div className='flex relative grow min-w-0 z-0 shrink justify-between items-start flex-nowrap basis-0 max-w-none 2xl:max-w-[1464px]'>
          {/*  main */}
          <main role='main' className='px-8 relative flex justify-center grow min-w-0  shrink flex-nowrap bg-slate-500  basis-[744px] w-[744] ' >
            <div className='min-w-0 flex flex-col shrink-0 relative z-0 max-w-full'>
              <div className='w-full  mt-4 '>
                {/* story */}

                {/* posts */}
                <div className='flex justify-center bg-yellow-900'>
                  <div className='w-[500px] 2sm:w-[680px] max-w-full '>
                    {/* create post */}
                    <div className='mb-4 flex max-w-full w-full relative rounded-lg overflow-x-hidden z-0 shadow-xl bg-green-500'>
                      <div className='flex flex-wrap pt-[12px] px-4 pb-[10px] justify-center  '>
                        {/* what's on your mind */}
                        <div className='flex w-full grow shrink items-center gap-x-2'>
                          <Link href={"/"} className='p-0 m-0 cursor-pointer flex justify-center items-center rounded-full w-[40px] h-[40px] overflow-hidden'>
                            <Image src={"/images/avatar.jpg"} alt='avatar' width={40} height={40}/>
                          </Link>
                          <div className='py-2 px-3 rounded-2xl select-none flex justify-start items-center relative cursor-pointer'>
                            <div className='w-full'>
                              <span className='line-clamp-2 '>What&#39;s on your mind, Thong</span>  
                            </div>      
                          </div>
                        </div>
                        {/* live/video/phto/ feeling */}
                        <div className='border-t flex  w-full h-[40px] overflow-hidden justify-around flex-wrap pt-2 mt-3'>
                          <div className='p-2 rounded-md bg-red-300 flex justify-center items-center'>
                            <div className='flex justify-center items-center overflow-hidden gap-2'>
                              <span>
                                <VideoCameraIcon className='w-5 h-5' />
                              </span>
                              <span className='font-semibold break-words'>
                                <span className='relative  overflow-x-hidden text-ellipsis whitespace-nowrap'>Live Video</span>
                              </span>
                            </div>
                          </div>
                          <div className='p-2 rounded-md bg-red-300 flex justify-center items-center'>
                            <div className='flex justify-center items-center overflow-hidden gap-2'>
                              <span>
                                <PhotoIcon className='w-5 h-5' />
                              </span>
                              <span className='font-semibold break-words'>
                                <span className='relative  overflow-x-hidden text-ellipsis whitespace-nowrap'>Photo/video</span>
                              </span>
                            </div>
                          </div>
                          <div className='p-2 rounded-md bg-red-300 flex justify-center items-center'>
                            <div className='flex justify-center items-center overflow-hidden gap-2'>
                              <span>
                                <FaceSmileIcon className='w-5 h-5' />
                              </span>
                              <span className='font-semibold break-words'>
                                <span className='relative  overflow-x-hidden text-ellipsis whitespace-nowrap'>Feeling/activity</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='transition-all duration-300 opacity-100 '>
                      {/* feed */}
                      {
                        Array.from(Array(10).keys()).map((item,index) => (

                          <Post key={index}/>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          
          <RightSideBar/>
        </div>
      </div>
    </div>
  )
}
