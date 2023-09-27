import Image from 'next/image'
import { Earth } from '@/components/icon'
import {  EllipsisHorizontalIcon,  XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Engagement from './Engagement'
import { SchemaComment } from './comment/constanst'
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocal from "dayjs/plugin/updateLocale";
import dayjs from 'dayjs'
dayjs().format()
import { User, posts, Comment, Like, Post as TypePost } from '@/db/schema';

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
type PostProps = {
  post: TypePost & {
    comments: Comment[];
    likes: Like[];
    author: User | null;
  };
}

// this is how i past data to Post;  
export default function Post({ post }: PostProps ) {
  
  const content = post.content;
  
  // const content = postInfo.post.content;
  const authorAvatar = post.author?.imageUrl;
  const authorName = post.author?.name;
  const time = post.createdAt! ;
  const imageUrl = post.img;
  return(
    <div className='w-full relative z-0 mb-4'>
      <div className='bg-secondary-clr rounded-lg overflow-hidden w-full relative z-0 text-primary-text'>
        {/* head */}
        <div className='px-4 pt-3  flex items-start'>
          {/* avatar */}
          <div className='mr-2'>
            <Link href={"/d"} className=' flex cursor-pointer m-0 p-0 rounded-full overflow-hidden w-[40px] h-[40px]'>
              <Image src={authorAvatar!} alt="avatar " width={40} height={40} />
            </Link>
          </div>
          <div className='grow flex flex-col -mt-1'>
              <div className='my-1'>
                <span className='block min-w-0 break-words max-w-full font-semibold text-left text-xs'>
                  <h4 className='mt-1 text-left'>
                    <Link href={"/"} className='cursor-pointer hover:underline'>
                      {authorName}
                    </Link>
                  </h4>
                </span>
              </div>
              <div className='-my-1'>
                <span className='block min-w-0 break-words max-w-full font-normal text-left text-xs'>
                  <span className='flex'>
                    <span> {dayjs(time).fromNow()}
                      {" "}· {"  "}
                    </span>
                    <Earth className=' mt-[1px] ml-[3px]' />
                  </span>
                </span>
              </div>
          </div>
          <div className='flex justify-center items-center  p-2 gap-x-2'>
            <span className='hover:bg-third-clr rounded-full overflow-hidden cursor-pointer p-1'>
              <EllipsisHorizontalIcon className='w-6 h-6' />
            </span>
            <span className='hover:bg-third-clr rounded-full overflow-hidden cursor-pointer p-1'>
              <XMarkIcon className='w-6 h-6' />
            </span>
          </div>

        </div>
        {/* actual content */}
        <div>
          {/* text */}
          <div className='p-4 pt-1'>
            <div className='-mb-[5px] flex flex-col'>
              <span className='min-w-0 break-words max-w-full '>
                {content}
              </span>
            </div>
          </div>
          {/* image/video */}
          {imageUrl && (
            <div className='relative'>
              <Link href="/" className='relative m-0 p-0 min-w-0 min-h-0'>
                <div className='flex flex-col justify-center items-center relative overflow-hidden w-full bg-black'>

                  {/* use hook to measure element dimension */}
                  <div className='max-w-full min-w-[500px] w-[calc((100vh-325px)*1.1257)] '>
                    <div className='pt-[88.83333%] h-0 overflow-hidden relative'>
                      <div className='absolute left-0 h-full w-full top-0'>
                        <div className='flex items-center justify-center w-full h-full  object-cover'>
                          <Image src={imageUrl} alt='content' width={800} height={800} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

        </div>
        {/* comment */}
        {/* @ts-expect-error Async Server Component */}
        <Engagement comments={post.comments} likes={post.likes} author={post.author!} postId={post.id} />
      </div>
    </div>
  )
}