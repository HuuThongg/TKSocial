
import React from 'react'

import TypeComment from './TypeComment';
import { SchemaComment } from './constanst';
import { Comment as CommentDbSchema } from '@/db/schema';
import Comment from './Comment';

interface CommentSectionProps {
  comments: CommentDbSchema[];
  postId: number;
  
}

const CommentSection = ({ comments, postId }: CommentSectionProps) => {
  const a = comments.filter(c => c.parentId === null);
  return (
    <div>
      <div className='mx-4  pt-1 border-t border-solid border-third-clr '>
      </div>
      {/* write comment here */}
      <TypeComment postId={postId}   />
      {/* comments */}
      {a.map(comment => (
        //@ts-expect-error Server Component
        <Comment comment={comment} key={comment.id}/>
      ))}
      {/* view more answers */}
    </div>
  )
}

export default CommentSection