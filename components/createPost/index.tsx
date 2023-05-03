'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { VideoCameraIcon, PhotoIcon, FaceSmileIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'


export function CreatePost() {
  return(
    <div className='mb-4 flex max-w-full w-full relative rounded-lg overflow-x-hidden z-0 shadow-xl bg-secondary-clr '>
      <div className='flex flex-wrap pt-[12px] px-4 pb-[10px] justify-center  '>
        {/* what's on your mind */}
        <div className='flex w-full grow shrink gap-x-2 items-start'>
          <Link href={"/"} className='p-0 m-0 cursor-pointer flex justify-center items-center rounded-full w-[40px] h-[40px] overflow-hidden focus:outline-none focus-visible:ring ring-blue-500 ring-offset-2 ring-offset-white grow-0 shrink-0'
          tabIndex={0}>
            <Image src={"/images/avatar.jpg"} alt='avatar' width={40} height={40} />
          </Link>
          <div className='py-2 px-3 rounded-2xl select-none flex justify-start items-center relative cursor-pointer focus:outline-none focus-visible:ring ring-blue-500 ring-offset-2 ring-offset-white bg-third-clr hover:bg-fourth-clr min-w-0 basis-0 grow shrink' tabIndex={0}>
            <div className='w-full'>
              <span className='line-clamp-2 text-secondary-text '>What&#39;s on your mind,Thong?</span>
            </div>
          </div>
        </div>
        {/* live/video/phto/ feeling */}
        <div className='border-t border-t-third-clr flex  w-full  overflow-hidden justify-stretch flex-wrap pt-2 pb-1 mt-3 '>
          <div className='p-2 rounded-lg  hover:bg-third-clr flex justify-center items-center  grow flex-auto cursor-pointer focus:outline-none focus-visible:ring ring-blue-500 ring-offset-2 ring-offset-white' tabIndex={1}>
            <div className='flex justify-center items-center overflow-hidden gap-2'>
              <span>
                <VideoCameraIcon className='w-6 h-6 stroke-2 stroke-red-500' />
              </span>
              <div className='flex justify-center items-center font-semibold break-words text-[15px] max-w-full min-w-0 text-start m-0 p-0'>
                  <span className='inline-block relative  overflow-x-hidden text-ellipsis whitespace-nowrap leading-5 text-secondary-text'>Live Video</span>
              </div>
            </div>
          </div>
          <div className='p-2 rounded-lg grow hover:bg-third-clr flex justify-center items-center flex-auto cursor-pointer focus:outline-none focus-visible:ring ring-blue-500 ring-offset-2 ring-offset-white' tabIndex={1}>
            <div className='flex justify-center items-center overflow-hidden gap-2'>
              <span>
                <PhotoIcon className='w-6 h-6 stroke-2 stroke-green-500' />
              </span>
              <div className='flex justify-center items-center font-semibold break-words text-[15px] max-w-full min-w-0 text-start m-0 p-0'>
                <span className='inline-block relative  overflow-x-hidden text-ellipsis whitespace-nowrap leading-5 text-secondary-text'>Photo/Video</span>
              </div>
            </div>
          </div>
          <div className=' hidden xs:flex p-2 grow rounded-lg hover:bg-third-clr  justify-center items-center flex-auto cursor-pointer focus:outline-none focus-visible:ring ring-blue-500 ring-offset-2 ring-offset-white ' tabIndex={1}>
            <div className='flex justify-center items-center overflow-hidden gap-2'>
              <span>
                <FaceSmileIcon className='w-6 h-6 stroke-yellow-500 stroke-2' />
              </span>
              <div className='flex justify-center items-center font-semibold break-words text-[15px] max-w-full min-w-0 text-start m-0 p-0'>
                <span className='inline-block relative  overflow-x-hidden text-ellipsis whitespace-nowrap leading-5 text-secondary-text'>Feeling/Activity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}