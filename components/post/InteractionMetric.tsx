"use client"
import { PhotoIcon,HandThumbUpIcon, PaperAirplaneIcon,ChatBubbleLeftIcon  } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useTransition } from 'react';
import likeButtonFn from './action';
import { cn } from '@/lib/utils';

type InteractionMetricProps ={
  likeAmount : number;
  commentAmount : number;
  shareAmount : number;
  postId:number;
  isLiked: boolean;
}

export default function InteractionMetric({ commentAmount, likeAmount, shareAmount, postId, isLiked }:InteractionMetricProps) {

  const [isPending, startTransition] = useTransition();

  async function handleLikeButton({ postId, isLiked }: { postId : number; isLiked: boolean}) {
    await likeButtonFn({ postId, isLiked });
  }
  return (
    <div className='flex flex-col '>
      <div className=' mx-4 py-[10px] border-b border-solid border-divider text-secondary-text leading-[1.3333] flex justify-between items-center'>
        <div className='flex   grow w-full '>
          <span aria-label='See how reacted to this' role="toolbar" className='flex'>
            <span id="1" className='flex items-center '>
              <span>
                <button type="button" className='w-[18px] h-[18px]  rounded-full' title="Like button">
                  <Image className='w-full h-full'  src="/images/like.svg" width={18} height={18} alt="" priority={false}/>
                </button>
              </span>
              <span>
                <button type="button" title='like ' className='w-[18px] h-[18px]  rounded-full '>
                  <Image className='w-full h-full' src="/images/haha.svg" width={18} height={18} alt="" priority={false} />
                </button>
              </span>
            </span>
          </span>
          <div>
            <span>
              {likeAmount}
            </span>
          </div>
        </div>
        <div className='flex shrink-0 -mr-[6px]   '>
          <div className='flex  text-[15px] gap-x-1'>
            <div className='py-1 px-[2px] flex gap-1 '>
              <span className='hover:underline cursor-pointer select-none'>
                {commentAmount}
              </span>
              <span>
                <ChatBubbleLeftIcon className='w-5 h-5 stroke stroke-secondary-text' />
              </span>
            </div>
            {shareAmount!==0 && (
              <div className='py-1 px-[2px] flex gap-x-1'>
                <span className='hover:underline cursor-pointer select-none font-normal' >
                  {shareAmount} 
                </span>
                <span>
                  <PaperAirplaneIcon className='w-5 h-5 stroke stroke-secondary-text' />
                </span>
              </div>
              )}
          </div>
        </div>
      </div>
      {/* like comment share */}
      <div className='flex box-border  items-center mx-[12px] mr-4  '>

        <div className=' flex w-full items-center justify-around  py-1 -px-1 gap-x-1  text-[15px]  mx-1'>
          {/* like */}
          <button className='p-2 rounded-lg grow hover:bg-third-clr flex justify-center items-center flex-auto cursor-pointer focus:outline-none focus-visible:ring ring-blue-500 ring-offset-2 ring-offset-white' disabled={isPending} 
            onClick={()=>{
              startTransition(()=>{
                handleLikeButton({postId,isLiked})
              })
            }}
          >
            <div className='flex justify-center items-center overflow-hidden gap-2'>
              <span>
                <HandThumbUpIcon className={cn(`w-6 h-6 stroke-2 stroke-secondary-text`,{
                  'stroke-blue-link' : isLiked,
                }
                )} />
              </span>
              <div className='flex justify-center items-center font-semibold break-words text-[15px]  min-w-0 text-start m-0 p-0'>
                <span className={cn(`inline-block relative  overflow-x-hidden text-ellipsis whitespace-nowrap leading-5 `, {
                  'text-blue-link': isLiked,
                  'text-secondary-text':!isLiked,
                }
                )}>Like</span>
              </div>
            </div>
          </button>
          {/* comment */}
          <div className='p-2 rounded-lg grow hover:bg-third-clr flex justify-center items-center flex-auto cursor-pointer focus:outline-none focus-visible:ring ring-blue-500 ring-offset-2 ring-offset-white' tabIndex={1}>
            <div className='flex justify-center items-center overflow-hidden gap-2'>
              <span>
                <ChatBubbleLeftIcon className='w-6 h-6 stroke-2 stroke-secondary-text' />
              </span>
              <div className='flex justify-center items-center font-semibold break-words text-[15px] max-w-full min-w-0 text-start m-0 p-0'>
                <span className='inline-block relative  overflow-x-hidden text-ellipsis whitespace-nowrap leading-5 text-secondary-text'>Comment</span>
              </div>
            </div>
          </div>
          {/* send */}
          <div className='p-2 rounded-lg  hover:bg-third-clr flex justify-center items-center flex-auto cursor-pointer focus:outline-none focus-visible:ring ring-blue-500 ring-offset-2 ring-offset-white' tabIndex={1}>
            <div className='flex justify-center items-center overflow-hidden gap-2'>
              <span>
                <PaperAirplaneIcon className='w-6 h-6 stroke-2 stroke-secondary-text' />
              </span>
              <div className='flex justify-center items-center font-semibold break-words text-[15px] max-w-full min-w-0 text-start m-0 p-0'>
                <span className='inline-block relative  overflow-x-hidden text-ellipsis whitespace-nowrap leading-5 text-secondary-text'>Share</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}


