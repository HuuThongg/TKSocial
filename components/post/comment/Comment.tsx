
import Image from 'next/image'
import React, { useId, useState } from 'react'
import { ChevronDownIcon, FaceSmileIcon, PhotoIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import TextareaAutosize from 'react-textarea-autosize';
import Link from 'next/link';
import { SchemaComment } from './constanst';

interface CommentProps {
  commentText: string;
  className?: string;
  comments: SchemaComment
}
// interface CommentProps extends React.HTMLAttributes<HTMLDivElement> {
//   commentText: string;
//   comments: SchemaComment
// }


const Comment = ({comments, commentText, ...props }: CommentProps) => {
  // console.log("object");
  // console.log(comments);
  return (
    <div {...props}
    >
      {/* avatar */}
      <div className='mt-[2px] mr-[6px]'>
        <button className='relative rounded-full p-0 m-0 inline-flex min-w-0 min-h-0' tabIndex={-1} aria-hidden="true">
          <div className='w-[32px] h-[32px] flex items-stretch relative'>

            <svg className='w-8 h-8 ' aria-hidden="true" >
              <mask id={`:1:`}>
                <circle cx="16" cy="16" r="16" className='fill-white'  >
                </circle>

              </mask>
              <g mask={`url(#:1:)`}>
                <image x='0' y='0' className='h-8 w-8' xlinkHref="/images/avatar.jpg" />
                {/* border */}
                <circle className='stroke-[2] fill-none stroke-media-inner-border' cx="16" cy="16" r="16"> </circle>

              </g>
            </svg>

          </div>

        </button>
      </div>
      {/*right comment */}
      <div className=' overflow-hidden pr-4 flex flex-col flex-1'>
        {/* text */}
        <div className='flex flex-col  grow'>
          <div className='inline-block align-middle break-words max-w-[calc(100%-26px)] '>
            <div className='relative inline-flex w-full align-middle '>
              <div className='inline-flex min-w-0 w-full flex-auto  relative'>
                <div className='px-3 py-2 whitespace-normal break-words bg-third-clr rounded-2xl z-0'>
                  {/* name */}
                  <span className='block leading-3'>
                    <Link href={"/"} className='p-0 m-0 relative leading-3' >
                      <span className="inline-flex font-semibold min-w-0 break-words max-w-full text-ss leading-3 ">
                        Khuong
                      </span>
                    </Link>
                  </span>
                  {/* comment by  */}
                  <div className='py-1 '>
                    <span className='block min-w-0 max-w-full text-[15px] break-words font-normal leading-4'>
                      <Link href={"/"} className='mr-1'>
                        <span className='font-semibold'>
                          Huu Thong
                        </span>
                      </Link>
                      {/* {comments.content} */}
                      compressing obkject


                    </span>
                  </div>
                </div>
                {/* icon interaction */}
                <div className='  self-end visibility  relative -ml-2 mb-1  shrink-0'>
                  <span>
                    <div aria-label='203 reactions see who reacted to this' role='button' tabIndex={0}>
                      <div className=' flex justify-center items-center p-[2px] rounded-[10px] bg-third-clr 
                              '>
                        <div className='inline-flex items-center pl-1'>
                          <span className='flex rounded-[10px'>
                            <Image src={'/images/like.svg'} width={18} height={18} alt="like button" />
                          </span>
                          <span className='flex rounded-[10px'>
                            <Image src={'/images/haha.svg'} width={18} height={18} alt="interaction button" />
                          </span>
                        </div>
                        <span className='px-[2px] text-ss font-normal leading-4 text-secondary-text'>
                          203
                        </span>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* edit */}
          <div>

          </div>
        </div>
        {/* interaction metrics */}
        <ul className='ml-1 pt-1 text-secondary-text'>
          <li className='inline-block align-middle mx-2'>
            <span className='inline-block text-[12px] font-bold leading-3 '>
              like
            </span>
          </li>
          <li className='inline-block align-middle mx-2'>
            <span className='inline-block text-[12px] font-bold leading-3 '>
              Reply
            </span>
          </li><li className='inline-block align-middle mx-2'>
            <span className='inline-block text-[12px] font-bold leading-3 '>
              Share
            </span>
          </li>
          <li className='inline-block align-middle mx-2'>
            <span className='inline-block text-[12px] font-bold leading-3 '>
              3w
            </span>
          </li>



        </ul>
      </div>
    </div>
  )
}

export default Comment