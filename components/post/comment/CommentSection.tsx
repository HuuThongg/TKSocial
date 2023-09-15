/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

import Comment from './Comment';
import TypeComment from './TypeComment';
import { SchemaComment } from './constanst';

interface CommentSectionProps {
  comments: SchemaComment
}

const CommentSection = ({ comments }: CommentSectionProps) => {


  return (
    <div>
      <div className='mx-4  pt-1 border-t border-solid border-third-clr '>
      </div>
      {/* write comment here */}
      <TypeComment />
      {/* comments */}
      
      {/* view more answers */}
    </div>
  )
}

export default CommentSection