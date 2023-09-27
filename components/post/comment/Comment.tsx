
import Image from 'next/image'
import { cache } from 'react'
import React, { useId, useState } from 'react'
import { ChevronDownIcon, FaceSmileIcon, PhotoIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import TextareaAutosize from 'react-textarea-autosize';
import Link from 'next/link';
import { Comment as CommentDbSchema, users, Like as LikeDbSchema, likes } from '@/db/schema';
import { db } from '@/db';
import { and, eq } from 'drizzle-orm';

import LikeReply from './LIkeReply';
import { currentProfile } from '@/lib/query/db/current-profile';
import { redirectToSignIn } from '@clerk/nextjs';
import TypeComment from './TypeComment';
// interface CommentProps1 extends React.HTMLAttributes<HTMLDivElement> {
//   comment: CommentDbSchema;
  
// }
interface CommentProps {
  comment: CommentDbSchema;
}


export default async function  Comment ({ comment}: CommentProps ) {
  const user = await db.select().from(users).where(and(eq(users.id, comment.authorId)))

  const profile = await currentProfile();
  if (!profile) {
    return redirectToSignIn();
  }
  let isLiked = false;
  if (profile) {
    const likeData = await db.select().from(likes).where(
      and(
        eq(likes.postId!, comment.postId!),
        eq(likes.commentId, comment.id),
        eq(likes.userId, profile[0].id),
      ),
    );
    isLiked = !!likeData[0];
  }
  const allLikes = await db.select().from(likes).
    where(
      and(
        eq(likes.postId!, comment.postId!),
        eq(likes.commentId, comment.id),
      ),
    );
  const likesAmount = allLikes.length;

  return (
    <div  className='pl-4 flex flex-col '
    >
      <div className='flex flex-row'>
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
                  <image x='0' y='0' className='h-8 w-8' xlinkHref={user[0].imageUrl!} />
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
                          {user[0].name}
                        </span>
                      </Link>
                    </span>
                    <div className='py-1 '>
                      <span className='block min-w-0 max-w-full text-[15px] break-words font-normal leading-4'>
                        {/* refer to who  */}
                        {/* <Link href={"/"} className='mr-1'>
                          <span className='font-semibold'>
                            Huu Thong
                          </span>
                        </Link> */}
                        {comment.comment}
                      </span>
                    </div>
                  </div>
                  {/* icon interaction */}
                  {likesAmount >0 && (
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
                              {likesAmount}
                            </span>
                          </div>
                        </div>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* edit */}
            <div>

            </div>
          </div>
          {/* interaction metrics */}
          <LikeReply postId={comment.postId!} commentId={comment.id} isLiked={isLiked} createdAt={comment.createdAt!}/>
        </div>
      </div>
      <TypeComment postId={comment.postId!} parentId={comment.id}/>
    </div>
  )
}
