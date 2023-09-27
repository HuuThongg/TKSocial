import React from 'react'
import InteractionMetric from './InteractionMetric'
import CommentSection from './comment/CommentSection'
import { Comment, Like, User, likes as likesDbSchema, } from '@/db/schema';
import { currentProfile } from '@/lib/query/db/current-profile';
import { db } from '@/db';
import { sql, eq,and } from 'drizzle-orm';
interface EngagementProps {
  comments: Comment[];
  likes: Like[];
  author: User;
  postId: number;
}
export default async function Engagement({ comments, likes, author, postId } : EngagementProps) {
  const likeAmount = likes.filter((like) => like.commentId === null).length;
  //  
  const commentAmount = comments.length;
  const shareAmount = 0;
  const user = await currentProfile();
  let isLiked = false;
  let likeData: Like[] | undefined;
  if(user){
    likeData = await db.select().from(likesDbSchema).where(
      and(
        eq(likesDbSchema.postId,postId),
        eq(likesDbSchema.userId,user[0].id)
      ))
    if (likeData[0]){
      isLiked = !!likeData[0];
    }
  }
  return (
    <section className='overflow-hidden relative'>
      <InteractionMetric likeAmount={likeAmount} commentAmount={commentAmount} shareAmount={shareAmount} postId={postId} isLiked={isLiked} />
      <CommentSection  comments={comments} postId={postId} />
    </section>
  )
}

