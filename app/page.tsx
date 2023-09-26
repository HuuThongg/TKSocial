
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { VideoCameraIcon, PhotoIcon, FaceSmileIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import RightSideBar from '@/components/rightSideBar'
import { Earth } from '@/components/icon'
import Post from '@/components/post'
const inter = Inter({ subsets: ['latin'] })
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { CreatePost } from '@/components/createPost'
import Story from '@/components/story'
import { commentsData } from '@/components/post/comment/constanst'


import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  UserProfile
} from "@clerk/nextjs";
import { initialProfile } from '@/lib/query/db/intial-profile'
import { currentProfile } from '@/lib/query/db/current-profile'
import { db } from '@/db'
import { sql } from 'drizzle-orm'

import { User, posts, Comment,Like,Post as TypePost } from '@/db/schema';

interface PostWithRelated {
  post: TypePost &{
    comments: Comment[];
    likes: Like[];
    author: User | null;
  };
}


async function getPosts(): Promise<PostWithRelated[]> {
  const allPosts= await db.query.posts.findMany({
    with: {
      author: true,
      comments: true,
      likes: true,
    }
  })  ;
  const formattedPosts: PostWithRelated[] = allPosts.map(post => ({
    post: {
      id: post.id,
      authorId: post.authorId,
      content: post.content,
      imageUrls: post.imageUrls,
      imgURL: post.imgURL,
      img: post.img,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
      comments: post.comments,
      likes: post.likes,
      author: post.author,
    }
  }));
  
  return formattedPosts;
}




export default async  function  Home() {
  const profile = await initialProfile();
  const b = await currentProfile();
  const id = b ? b[0]?.id : null;
  // let post, allPosts;
  // if(id){
  //   post = await db.select().from(posts).where(sql`${posts.authorId} = ${id}`);
  //   allPosts = await db.query.posts.findMany({
  //     with:{
  //       author:true,
  //       comments:true,
  //       likes:true,
  //     }
  //   })
  //   // allPosts.map(post =>{
      
  //   // })
  // }
  const allPosts = await getPosts();
  return (
    <div className=" relative flex flex-col   min-h-0   left-[60px] lg:left-[300px]  origin-top-left mr-[60px] lg:mr-[300px]  ">
      {/* sign in sign out */}
      
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>

      <div className='relative min-h-[56px] overflow-visible w-full h-full flex '>
        <div className='flex relative grow min-w-0 z-0 shrink justify-between items-start flex-nowrap basis-0 max-w-none 2xl:max-w-[1464px] '>
          {/*  main */}

          <main role='main' className=' md:px-8 relative flex justify-center grow min-w-0  shrink flex-nowrap bg-primary-clr  basis-[744px] w-[744] ' >
            <div className='min-w-0 flex flex-col shrink-0 relative z-0 max-w-full'>
              <div className='w-full  mt-4 '>
                
                {/* story */}
                <Story/>
                {/* posts */}
                <div className='flex justify-center bg-primary-clr'>
                  <div className='w-[500px] 2sm:w-[680px] max-w-full '>
                    {/* create post */}
                    <CreatePost/>
                    <div>

                      {JSON.stringify(allPosts)}
                    </div>
                    <div className='transition-all duration-300 opacity-100 '>
                      {/* feed */}
                      

                      {/* {
                        Array.from(Array(1).keys()).map((item, index) => {
                          return <Post  comments={commentsData[index]} key={index} />
                        })
                      } */}
                      {allPosts?.map((post) => {
                        return <Post  post={post.post} key={post.post.id} />;
                      })}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <RightSideBar />
        </div>
      </div>
    </div>
  )
}
