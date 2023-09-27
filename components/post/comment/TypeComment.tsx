"use client"
import Image from 'next/image'
import React, { useId, useState } from 'react'
import { ChevronDownIcon, FaceSmileIcon, PhotoIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import TextareaAutosize from 'react-textarea-autosize';
import Link from 'next/link';
import Comment from './Comment';
import commentFn from './action';


interface TypeCommentProps {
  postId: number;
  parentId?: number | null;
}


const TypeComment = ({ postId ,parentId }: TypeCommentProps) => {
  const [text, setText] = useState('')
  const [isWritingCommentOpen, setIsWritingCommentOpen] = useState(false)
  const avatarId = useId()
  const onChangeInputText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }
  const scrollStyle = "scrollbar-thumb-fifth-clr scrollbar-track-transparent hover:scrollbar-track-[#2c2d2f]  scrollbar   scrollbar-w-2 scrollbar-thumb-rounded-md";
  async function onCreateComment(formData: FormData) {
    console.log("pppp" + parentId);
    await commentFn(formData);
    setText("");
    setIsWritingCommentOpen(!isWritingCommentOpen);
    // form.reset();
    // setSelectedFile([]);
    // setIsModalOpen(!isModalOpen);
    // router.refresh();
  }
  return (
    <div>
      <div className='my-1 px-4'>
        <div className='flex items-start relative  '>
          {/* avatar */}
          <div className='mt-[2px] mr-[6px]'>
            <button className='relative rounded-full p-0 m-0 inline-flex min-w-0 min-h-0' tabIndex={-1} aria-hidden="true">
              <div className='w-[32px] h-[32px] flex items-stretch relative'>
                <svg className='w-8 h-8 ' role='none'  >
                  <mask id={`:${avatarId}:`}>
                    <circle cx="16" cy="16" r="16" className='fill-white'  >
                    </circle>
                    <circle cx="27" cy="27" r="6 " className='fill-black'  ></circle>
                    {/* has story  */}
                    {/* {contact.haveStories ? <circle cx="12" cy="12" fill="transparent" r="9" stroke="black"
                      strokeWidth="2" className='stroke-black'></circle> : null} */}

                  </mask>
                  <g mask={`url(#:${avatarId}:)`}>
                    {/* <Image x={`${contact.haveStories ? '4' : '0'}`} y={`${contact.haveStories ? '4' : '0'}`} className={clsx(``, {
                      'w-4 h-4': contact.haveStories,
                      'w-6 h-6': !contact.haveStories
                    })}
                      xlinkHref={contact.url}

                    /> */}
                    <image x='0' y='0' className='h-8 w-8' xlinkHref="/images/avatar.jpg" />
                    {/* border */}
                    <circle className='stroke-[2] fill-none stroke-media-inner-border' cx="16" cy="16" r="16"> </circle>

                    {/* {contact.haveStories &&
                      <circle className={clsx(`stroke-2 `, {
                        'stroke-blue-500': contact.seen,
                        'stroke-divider': !contact.seen
                      })}
                        cx="12" cy="12" fill="transparent" r="11" ></circle>
                    } */}

                  </g>
                </svg>
                <div className='absolute  right-[5px] bottom-[5px]  rounded-full  overflow-hidden z-[2]   translate-x-1/2 translate-y-1/2  bg-third-clr '>
                  <div className='p-[2px] rounded-full'>
                    <span>
                      <ChevronDownIcon className='w-3 h-3 stroke-2 stroke-secondary-text' />
                    </span>
                  </div>
                </div>
              </div>

            </button>
          </div>
          <div className='flex flex-col overflow-hidden flex-1'>
            <form action={onCreateComment} className='flex  flex-wrap text-xs relative p-0 m-0  grow  rounded-2xl bg-third-clr   justify-between'>
              {/* type here */}
              <input className=' sr-only' type="number" name='postId' readOnly value={postId} />
              <input className='sr-only' type="number" name='parentId' value={parentId !== null ? parentId?.toString() : undefined} readOnly />

              <TextareaAutosize
                minRows={1}
                maxRows={6}
                name='comment'
                placeholder='Write a comment...'
                value={text}
                style={{ height: 45 }}
                className={`grow   px-3 py-2 resize-none bg-transparent text-primary-text ${scrollStyle}`}
                onChange={onChangeInputText}
                onFocus={() => setIsWritingCommentOpen(true)}
              />
              {!isWritingCommentOpen && (
                <div className='flex grow-0 shrink-0 '>
                  <div className=' flex justify-end items-center  flex-wrap px-2'>
                    <ul className='flex items-center text-xs p-1 h-[36px] -ml-1'>
                      <li className='-mx-[3px]  hover:bg-fourth-clr w-[32px] h-full flex items-center justify-center rounded-full'>
                        <span>
                          <FaceSmileIcon className='w-4 h-4 stroke-2 stroke-secondary-text' />
                        </span>
                      </li>
                      <li className='-mx-[3px]  hover:bg-fourth-clr w-[32px] h-full flex items-center justify-center rounded-full'>
                        <span>
                          <PhotoIcon className='w-4 h-4 stroke-2 stroke-secondary-text' />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              {/*  icons, gift , images */}
              {isWritingCommentOpen && (
                <div className='flex w-full pb-[6px]'>
                  <div className=' flex justify-between items-center w-full flex-wrap px-2 '>
                    <ul className='flex items-center text-xs p-1 h-[36px] -ml-1'>
                      <li className='-mx-[3px]  hover:bg-fourth-clr w-[32px] h-full flex items-center justify-center rounded-full'>
                        <span>
                          <FaceSmileIcon className='w-4 h-4 stroke-2 stroke-secondary-text' />
                        </span>
                      </li>
                      <li className='-mx-[3px]  hover:bg-fourth-clr w-[32px] h-full flex items-center justify-center rounded-full'>
                        <span>
                          <PhotoIcon className='w-4 h-4 stroke-2 stroke-secondary-text' />
                        </span>
                      </li>
                    </ul>
                    <button type='submit' title='Post Comment'  className='flex justify-center items-center p-2 rounded-full hover:bg-gray-500 cursor-pointer transition-colors '>
                      <span>
                        <PaperAirplaneIcon className='w-4 h-4 stroke-2 stroke-secondary-text' />
                      </span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TypeComment