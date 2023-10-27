import Image from 'next/image';
import { Earth } from '@/components/icon';
import { EllipsisHorizontalIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Engagement from './Engagement';
import { SchemaComment } from './comment/constanst';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocal from 'dayjs/plugin/updateLocale';
import dayjs from 'dayjs';
dayjs().format();
import { User, posts, Comment, Like, Post as TypePost } from '@/db/schema';

dayjs.extend(relativeTime);
dayjs.extend(updateLocal);

dayjs.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s',
    s: '1m',
    m: '1m',
    mm: '%dm',
    h: '1h',
    hh: '%dh',
    d: '1d',
    dd: '%dd',
    M: '1M',
    MM: '%dM',
    y: '1y',
    yy: '%dy',
  },
});
type PostProps = {
  post: TypePost & {
    comments: Comment[];
    likes: Like[];
    author: User | null;
  };
};

// this is how i past data to Post;
export default function Post({ post }: PostProps) {
  const content = post.content;

  // const content = postInfo.post.content;
  const authorAvatar = post.author?.imageUrl;
  const authorName = post.author?.name;
  const time = post.createdAt!;
  const imageUrl = post.img;
  return (
    <div className="relative z-0 mb-4 w-full">
      <div className="relative z-0 w-full overflow-hidden rounded-lg bg-secondary-clr text-primary-text">
        {/* head */}
        <div className="flex items-start  px-4 pt-3">
          {/* avatar */}
          <div className="mr-2">
            <Link
              href={'/d'}
              className=" m-0 flex h-[40px] w-[40px] cursor-pointer overflow-hidden rounded-full p-0"
            >
              <Image src={authorAvatar!} alt="avatar " width={40} height={40} />
            </Link>
          </div>
          <div className="-mt-1 flex grow flex-col">
            <div className="my-1">
              <span className="block min-w-0 max-w-full break-words text-left text-xs font-semibold">
                <h4 className="mt-1 text-left">
                  <Link href={'/'} className="cursor-pointer hover:underline">
                    {authorName}
                  </Link>
                </h4>
              </span>
            </div>
            <div className="-my-1">
              <span className="block min-w-0 max-w-full break-words text-left text-xs font-normal">
                <span className="flex">
                  <span>
                    {' '}
                    {dayjs(time).fromNow()} · {'  '}
                  </span>
                  <Earth className=" ml-[3px] mt-[1px]" />
                </span>
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center  gap-x-2 p-2">
            <span className="cursor-pointer overflow-hidden rounded-full p-1 hover:bg-third-clr">
              <EllipsisHorizontalIcon className="h-6 w-6" />
            </span>
            <span className="cursor-pointer overflow-hidden rounded-full p-1 hover:bg-third-clr">
              <XMarkIcon className="h-6 w-6" />
            </span>
          </div>
        </div>
        {/* actual content */}
        <div>
          {/* text */}
          <div className="p-4 pt-1">
            <div className="-mb-[5px] flex flex-col">
              <span className="min-w-0 max-w-full break-words ">{content}</span>
            </div>
          </div>
          {/* image/video */}
          {imageUrl && (
            <div className="relative">
              <Link href="/" className="relative m-0 min-h-0 min-w-0 p-0">
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black">
                  {/* use hook to measure element dimension */}
                  <div className="w-[calc((100vh-325px)*1.1257)] min-w-[500px] max-w-full ">
                    <div className="relative h-0 overflow-hidden pt-[88.83333%]">
                      <div className="absolute left-0 top-0 h-full w-full">
                        <div className="flex h-full w-full items-center justify-center  object-cover">
                          <Image
                            src={imageUrl}
                            alt="content"
                            width={800}
                            height={800}
                          />
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
        <Engagement
          comments={post.comments}
          likes={post.likes}
          author={post.author!}
          postId={post.id}
        />
      </div>
    </div>
  );
}
