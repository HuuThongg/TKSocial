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
      <ul className='mb-6'>
        <li>
          {/* just for one comment  */}
          <div className='relative'>
            {/* if comment has reply */}
            <div className='absolute  h-[calc(100%-43px)] bg-comment-bg w-[2px] top-[43px] left-[30px]'>
            </div>

            <Comment className='pl-4 pt-1 flex  relative' aria-label='Comment by who' commentText='How have you bene bro ?' />
            {/* replis */}
            <div className='pl-[54px]  relative'>
              {/* <div className='absolute w-6 ml-1  h-[50%] border-b-2 border-l-2 left-[30px] rounded-l-[10px] border-third-clr'>

              </div> */}
              <div className='min-h-8 flex relative'>
                <div className=' relative flex flex-1 text-secondary-text min-w-0  bg-transparent pr-1'>
                  <span className='flex mr-[6px] ml-3'>

                  </span>
                  <span className='mr-1 '>

                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* reply */}
          <div className='p-0 m-0 relative'>
            <ul>
              {/* each reply comment  */}
              <li className='p-0 m-0 flex flex-col'>
                <div className='relative pl-[54px]'>
                  {/* path */}
                  <div className='absolute w-6 h-5 bg-transparent border-solid border-transparent border-b-2 border-l-2 rounded-bl-[10px] border-l-comment-bg border-b-comment-bg left-[30px] top-0'>
                  </div>
                  {/* vertical path */}
                  {/* if has one reply comment this out */}
                  {/* <div className='absolute h-full w-[2px] bg-comment-bg  left-[30px]'>
                  </div> */}

                  {/* if this reply also has another reply */}
                  <div className='absolute h-[calc(100%-38px)]  w-[2px] top-[40px] left-[76px] bg-comment-bg' />

                  <Comment comments={comments} className='pl-2 pt-1 flex  relative' aria-label='Comment by who' commentText="How are you" />
                </div>
                {/*  reply for this above comment */}
                <div className='flex flex-col grow relative p-o m-0'>
                  <ul className='h-full'>
                    <li className='p-0 m-0'>
                      <div className='relative pl-[92px]'>
                        {/* path */}
                        <div className='absolute w-6 h-5 bg-transparent border-solid border-transparent border-b-2 border-l-2 rounded-bl-[10px] border-l-comment-bg border-b-comment-bg left-[76px] top-0'>
                        </div>
                        {/* vertical path */}
                        {/* if has  root comment has only one comment then comment this out */}
                        {/* <div className='absolute h-full w-[2px] bg-comment-bg  left-[30px]'>
                        </div> */}
                        {/* if this reply also has another reply */}
                        {/* <div className='absolute h-[calc(100%-48px)]  w-[2px] top-[40px] left-[22px] bg-comment-bg' /> */}
                        {/* <Comment className='pl-2 pt-1 flex  relative' aria-label='Comment by who' commentText="Im good" /> */}
                        <TypeComment />
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      {/* view more answers */}
    </div>
  )
}

export default CommentSection