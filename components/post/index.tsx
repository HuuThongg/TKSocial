import Image from 'next/image'
import { Earth } from '@/components/icon'
import {  EllipsisHorizontalIcon,  XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Engagement from './Engagement'
import { SchemaComment } from './comment/constanst'

interface PostProps{
  comments: SchemaComment
}

export default function Post({comments}: PostProps) {
  return(
    <div className='w-full relative z-0 mb-4'>
      <div className='bg-secondary-clr rounded-lg overflow-hidden w-full relative z-0 text-primary-text'>
        {/* head */}
        <div className='px-4 py-3 flex items-start'>
          {/* avatar */}
          <div className='mr-2'>
            <Link href={"/d"} className=' flex cursor-pointer m-0 p-0 rounded-full overflow-hidden w-[40px] h-[40px]'>
              <Image src="/images/avatar.jpg" alt="avatar " width={40} height={40} />
            </Link>
          </div>
          <div className='grow flex flex-col -mt-2'>
            <div className='my-1'>
              <span className='block min-w-0 break-words max-w-full font-semibold text-left text-xs'>
                <h4 className='mt-1 text-left'>
                  <Link href={"/"} className='cursor-pointer hover:underline'>
                    Huu Thong Channel
                  </Link>
                </h4>
              </span>
            </div>
            <div className='-my-1'>
              <span className='block min-w-0 break-words max-w-full font-normal text-left text-xs'>
                <span className='flex'>
                  <span> 35
                    <span>
                      <span> m </span>
                    </span> · </span>
                  <Earth className='mt-[1px] ml-[2px]' />
                </span>
              </span>
            </div>
          </div>
          <div className='flex justify-center items-center  p-2 gap-x-2'>
            <span className='hover:bg-third-clr rounded-full overflow-hidden cursor-pointer p-1'>
              <EllipsisHorizontalIcon className='w-6 h-6' />
            </span>
            <span className='hover:bg-third-clr rounded-full overflow-hidden cursor-pointer p-1'>
              <XMarkIcon className='w-6 h-6' />
            </span>
          </div>

        </div>
        {/* actual content */}
        <div>
          {/* text */}
          <div className='p-4 pt-1'>
            <div className='-mb-[5px] flex flex-col'>
              <span className='min-w-0 break-words max-w-full '>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
              </span>
            </div>
          </div>
          {/* image/video */}
          <div className='relative'>
            <Link href="/" className='relative m-0 p-0 min-w-0 min-h-0'>
              <div className='flex flex-col justify-center items-center relative overflow-hidden w-full bg-black'>

                {/* use hook to measure element dimension */}
                <div className='max-w-full min-w-[500px] w-[calc((100vh-325px)*1.1257)] '>
                  <div className='pt-[88.83333%] h-0 overflow-hidden relative'>
                    <div className='absolute left-0 h-full w-full top-0'>
                      <div className='flex items-center justify-center w-full h-full  object-cover'>
                        <Image src='/images/thiendieu.png' alt='content' width={800} height={800} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

        </div>
        {/* comment */}
        <Engagement comments={comments} />
      </div>
    </div>
  )
}