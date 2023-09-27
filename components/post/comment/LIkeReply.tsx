"use client"
import { cn } from '@/lib/utils';
import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocal from "dayjs/plugin/updateLocale";
import { likeCommentFn } from './action';
dayjs().format()
dayjs.extend(relativeTime);
dayjs.extend(updateLocal);

dayjs.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s",
    s: "1m",
    m: "1m",
    mm: "%dm",
    h: "1h",
    hh: "%dh",
    d: "1d",
    dd: "%dd",
    M: "1M",
    MM: "%dM",
    y: "1y",
    yy: "%dy",
  },
});
export default function LikeReply({ createdAt, isLiked ,commentId,postId}: { createdAt: Date, isLiked : boolean, postId:number, commentId:number}){


  async function onLikeButton(){
    await likeCommentFn({
      postId,
      isLiked,
      commentId,
});
  }
  return (
    <ul className='ml-1 pt-1 text-secondary-text'>
      <li className='inline-block align-middle mx-2'>
        <button className={cn(`inline-block text-[12px] font-bold leading-3 cursor-pointer  hover:underline px-1`,{
          'text-secondary-text': !isLiked,
          'text-blue-link':isLiked,
        })}
          onClick={onLikeButton}
        >
          like
        </button>
      </li>
      <li className='inline-block align-middle mx-2'>
        <span className='inline-block text-[12px] font-bold leading-3  cursor-pointer  hover:underline'>
          Reply
        </span>
      </li>
      <li className='inline-block align-middle mx-2'>
        <span className='inline-block text-[12px] font-bold leading-3 '>
          {dayjs(createdAt).fromNow()}
        </span>
      </li>
    </ul>
  )
}