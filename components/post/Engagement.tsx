import React from 'react'
import InteractionMetric from './InteractionMetric'
import CommentSection from './comment/CommentSection'
import { SchemaComment } from './comment/constanst'
import { Comment, Like, User } from '@/db/schema';

interface EngagementProps {
  comments: Comment[];
  likes: Like[];
  author: User;
  postId: number;
}
const Engagement = ({ comments, likes, author, postId } : EngagementProps) => {
  const likeAmount = likes.length;
  const commentAmount = comments.length;
  const shareAmount = 0;
  return (
    <section className='overflow-hidden relative'>
      <InteractionMetric likeAmount={likeAmount} commentAmount={commentAmount} shareAmount={shareAmount} postId={postId} />
      {/* <CommentSection comments={comments} /> */}
    </section>
  )
}

export default Engagement