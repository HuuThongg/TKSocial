'use client';
import {
  PhotoIcon,
  HandThumbUpIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useTransition } from 'react';
import likeButtonFn from './action';
import { cn } from '@/lib/utils';

type InteractionMetricProps = {
  likeAmount: number;
  commentAmount: number;
  shareAmount: number;
  postId: number;
  isLiked: boolean;
};

export default function InteractionMetric({
  commentAmount,
  likeAmount,
  shareAmount,
  postId,
  isLiked,
}: InteractionMetricProps) {
  const [isPending, startTransition] = useTransition();

  async function handleLikeButton({
    postId,
    isLiked,
  }: {
    postId: number;
    isLiked: boolean;
  }) {
    await likeButtonFn({ postId, isLiked });
  }
  return (
    <div className="flex flex-col ">
      <div className=" mx-4 flex items-center justify-between border-b border-solid border-divider py-[10px] leading-[1.3333] text-secondary-text">
        <div className="flex   w-full grow ">
          <span
            aria-label="See how reacted to this"
            role="toolbar"
            className="flex"
          >
            <span id="1" className="flex items-center ">
              <span>
                <button
                  type="button"
                  className="h-[18px] w-[18px]  rounded-full"
                  title="Like button"
                >
                  <Image
                    className="h-full w-full"
                    src="/images/like.svg"
                    width={18}
                    height={18}
                    alt=""
                    priority={false}
                  />
                </button>
              </span>
              <span>
                <button
                  type="button"
                  title="like "
                  className="h-[18px] w-[18px]  rounded-full "
                >
                  <Image
                    className="h-full w-full"
                    src="/images/haha.svg"
                    width={18}
                    height={18}
                    alt=""
                    priority={false}
                  />
                </button>
              </span>
            </span>
          </span>
          <div>
            <span>{likeAmount}</span>
          </div>
        </div>
        <div className="-mr-[6px] flex shrink-0   ">
          <div className="flex  gap-x-1 text-[15px]">
            <div className="flex gap-1 px-[2px] py-1 ">
              <span className="cursor-pointer select-none hover:underline">
                {commentAmount}
              </span>
              <span>
                <ChatBubbleLeftIcon className="stroke h-5 w-5 stroke-secondary-text" />
              </span>
            </div>
            {shareAmount !== 0 && (
              <div className="flex gap-x-1 px-[2px] py-1">
                <span className="cursor-pointer select-none font-normal hover:underline">
                  {shareAmount}
                </span>
                <span>
                  <PaperAirplaneIcon className="stroke h-5 w-5 stroke-secondary-text" />
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* like comment share */}
      <div className="mx-[12px] mr-4  box-border flex items-center  ">
        <div className=" -px-1 mx-1 flex w-full  items-center justify-around gap-x-1  py-1  text-[15px]">
          {/* like */}
          <button
            className="flex flex-auto grow cursor-pointer items-center justify-center rounded-lg p-2 ring-blue-500 ring-offset-2 ring-offset-white hover:bg-third-clr focus:outline-none focus-visible:ring"
            disabled={isPending}
            onClick={() => {
              startTransition(() => {
                handleLikeButton({ postId, isLiked });
              });
            }}
          >
            <div className="flex items-center justify-center gap-2 overflow-hidden">
              <span>
                <HandThumbUpIcon
                  className={cn(`h-6 w-6 stroke-secondary-text stroke-2`, {
                    'stroke-blue-link': isLiked,
                  })}
                />
              </span>
              <div className="m-0 flex min-w-0 items-center justify-center break-words  p-0 text-start text-[15px] font-semibold">
                <span
                  className={cn(
                    `relative inline-block  overflow-x-hidden text-ellipsis whitespace-nowrap leading-5 `,
                    {
                      'text-blue-link': isLiked,
                      'text-secondary-text': !isLiked,
                    },
                  )}
                >
                  Like
                </span>
              </div>
            </div>
          </button>
          {/* comment */}
          <div
            className="flex flex-auto grow cursor-pointer items-center justify-center rounded-lg p-2 ring-blue-500 ring-offset-2 ring-offset-white hover:bg-third-clr focus:outline-none focus-visible:ring"
            tabIndex={1}
          >
            <div className="flex items-center justify-center gap-2 overflow-hidden">
              <span>
                <ChatBubbleLeftIcon className="h-6 w-6 stroke-secondary-text stroke-2" />
              </span>
              <div className="m-0 flex min-w-0 max-w-full items-center justify-center break-words p-0 text-start text-[15px] font-semibold">
                <span className="relative inline-block  overflow-x-hidden text-ellipsis whitespace-nowrap leading-5 text-secondary-text">
                  Comment
                </span>
              </div>
            </div>
          </div>
          {/* send */}
          <div
            className="flex flex-auto  cursor-pointer items-center justify-center rounded-lg p-2 ring-blue-500 ring-offset-2 ring-offset-white hover:bg-third-clr focus:outline-none focus-visible:ring"
            tabIndex={1}
          >
            <div className="flex items-center justify-center gap-2 overflow-hidden">
              <span>
                <PaperAirplaneIcon className="h-6 w-6 stroke-secondary-text stroke-2" />
              </span>
              <div className="m-0 flex min-w-0 max-w-full items-center justify-center break-words p-0 text-start text-[15px] font-semibold">
                <span className="relative inline-block  overflow-x-hidden text-ellipsis whitespace-nowrap leading-5 text-secondary-text">
                  Share
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
