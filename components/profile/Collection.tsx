'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';

const Collection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isReachingStart, setIsReachingStart] = useState(true);
  const [isReachingEnd, setIsReachingEnd] = useState(false);
  const [defaultWidthScrollbar, setDefaultWidthScrollbar] = useState(618.75);
  useEffect(() => {
    window.innerWidth < 800 && setDefaultWidthScrollbar(500);
  }, [defaultWidthScrollbar]);
  const prevHandler = () => {
    console.log(currentIndex);
    carouselRef?.current?.scrollTo({
      top: 0,
      left: defaultWidthScrollbar * (currentIndex - 2),
      behavior: 'smooth',
    });
    isReachingEnd && setIsReachingEnd(false);
    if (carouselRef.current) {
      setIsReachingStart(
        carouselRef?.current?.scrollWidth -
          defaultWidthScrollbar * currentIndex >=
          defaultWidthScrollbar,
      );
    }
    setCurrentIndex(currentIndex - 1);
  };
  const nextHandler = () => {
    carouselRef?.current?.scrollTo({
      top: 0,
      left: defaultWidthScrollbar * currentIndex,
      behavior: 'smooth',
    });
    currentIndex >= 1 && setIsReachingStart(false);
    if (carouselRef.current) {
      setIsReachingEnd(
        carouselRef?.current?.scrollWidth -
          defaultWidthScrollbar * currentIndex <=
          defaultWidthScrollbar,
      );
    }
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="z-0 flex w-full max-w-full flex-col">
      <div className=" relative">
        <div className="relative z-0 box-border">
          {/* prev */}
          <div
            className={clsx(
              `absolute left-[44px] top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2  transition-opacity duration-300  `,
              {
                'pointer-events-none opacity-0': isReachingStart,
                'pointer-events-auto opacity-100': !isReachingStart,
              },
            )}
          >
            <div
              className={clsx(
                `relative m-0 flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full bg-popover-bg p-0 ring-blue-500 ring-offset-2 ring-offset-white hover:bg-fourth-clr focus:outline-none focus-visible:ring`,
              )}
              onClick={prevHandler}
              tabIndex={0}
            >
              <ChevronLeftIcon className="h-6 w-6 text-secondary-text" />
            </div>
          </div>

          {/* stories */}
          <div className=" relative -my-2 h-full w-full py-2">
            <div
              className=" relative z-0 m-0 flex snap-x snap-mandatory scroll-px-[44px] flex-col overflow-x-auto  overflow-y-hidden scroll-smooth py-2 scrollbar-none  "
              ref={carouselRef}
            >
              <div className="relative  flex grow scroll-px-[44px] space-x-2 ">
                <span className="min-w-[8px]"></span>

                {stories.map((story, index) => (
                  //w-1/3
                  <div
                    key={index}
                    className="mx-1 flex w-[calc((100%-88px)/3-8px)] shrink-0  snap-start  items-stretch"
                  >
                    <div className="flex min-h-0 flex-1 basis-full  flex-col">
                      <div className="relative flex w-full max-w-full  shrink-0">
                        <div className="rounded-mg relative flex w-full overflow-hidden bg-red-400">
                          <Link
                            href={'#'}
                            className="relative m-0 overflow-hidden border-0 border-none p-0"
                          >
                            <div className="relative h-0 w-full select-none overflow-hidden rounded-md pt-[177.778%]">
                              <div className="absolute inset-0 h-full w-full">
                                <Image
                                  src="/images/storiesAva/sangnguyen.jpg"
                                  fill
                                  className="h-full w-full object-cover"
                                  alt=""
                                />
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      {/* name of collection */}
                      <div className="flex w-full max-w-full items-center justify-center pt-2">
                        <div>landScape</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* next */}
          <div
            className={clsx(
              `absolute right-[44px] top-1/2 z-[1] -translate-y-1/2 translate-x-1/2  transition-opacity duration-300 `,
              {
                'pointer-events-none opacity-0': isReachingEnd,
                'pointer-events-auto opacity-100': !isReachingEnd,
              },
            )}
          >
            <div
              className="relative m-0 flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full bg-popover-bg p-0 ring-blue-500 ring-offset-2 ring-offset-white hover:bg-fourth-clr focus:outline-none focus-visible:ring "
              onClick={nextHandler}
              tabIndex={0}
            >
              <ChevronRightIcon className="h-6 w-6 text-secondary-text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
export const stories = [
  {
    name: 'Trang Duong',
    href: '#',
    avatar: '/images/storiesAva/trangduong.jpg',
    imgStory: '/images/stories/trangduongStoryImg.jpg',
    seen: true,
  },
  {
    name: 'Quynh Nhu',
    href: '#',
    avatar: '/images/storiesAva/quynhnhu.jpg',
    imgStory: '/images/stories/quynhnhuStoryImg.jpg',
    seen: true,
  },
  {
    name: 'dieuhien',
    href: '#',
    avatar: '/images/storiesAva/dieuhien.jpg',
    imgStory: '/images/stories/dieuhienStoryImg.jpg',
    seen: false,
  },
  {
    name: 'Sofm',
    href: '#',
    avatar: '/images/storiesAva/sofm.jpg',
    imgStory: '/images/stories/sofmStoryImg.jpg',
    seen: true,
  },
  {
    name: 'Cai Nao cung Hay',
    href: '#',
    avatar: '/images/storiesAva/cainaocunghay.png',
    imgStory: '/images/stories/cainaocunghayStoryImg.jpg',
    seen: true,
  },
  {
    name: 'Love Japan',
    href: '#',
    avatar: '/images/storiesAva/lovejapan.jpg',
    imgStory: '/images/stories/lovejapanStoryImg.jpg',
    seen: false,
  },
  {
    name: 'BLIZbooks',
    href: '#',
    avatar: '/images/storiesAva/sach.jpg',
    imgStory: '/images/stories/sach.jpg',
    seen: true,
  },
  {
    name: 'Kim Chi Truong',
    href: '#',
    avatar: '/images/storiesAva/kimchitruong.jpg',
    imgStory: '/images/stories/kimchitruongStoryImg.jpg',
    seen: true,
  },
  {
    name: 'SuperCar Blondie',
    href: '#',
    avatar: '/images/storiesAva/supercar.jpg',
    imgStory: '/images/stories/supercarStoryImg.jpg',
    seen: false,
  },
  {
    name: 'Steve Harvey',
    href: '#',
    avatar: '/images/storiesAva/steve.jpg',
    imgStory: '/images/stories/steveStoryImg.jpg',
    seen: true,
  },
  {
    name: 'Lotte Cinema Hue',
    href: '#',
    avatar: '/images/storiesAva/lotte.jpg',
    imgStory: '/images/stories/lotteStoryImg.jpg',
    seen: false,
  },
];
