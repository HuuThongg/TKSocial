'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { StoryIcon } from '../icon';
import Image from 'next/image';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import { stories } from './constant';
import clsx from 'clsx';
const storyLength = stories.length;

// const defaultWidthScroll = 618.75;

export default function Story() {
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
    <div className="mb-4 flex justify-center pt-2">
      <div className="relative z-0 flex flex-col space-y-2 overflow-hidden rounded-lg bg-secondary-clr ">
        <div className="flex w-full flex-wrap items-center justify-center border-b border-third-clr">
          <div className="m-0 flex min-w-0 shrink grow flex-col px-[6px] pt-[6px] ">
            <div className="flex w-full gap-x-2 px-2">
              {/* stories */}
              {[...Array(2)].map((item, index) => (
                <div
                  key={index}
                  className="relative flex max-w-full shrink-0 grow flex-col bg-transparent py-1"
                >
                  <div className="relative m-0 flex border-0 border-none p-0 ">
                    <div className="relative flex h-[60px] shrink-0 grow items-center justify-center">
                      <div className="mr-2 ">
                        <StoryIcon className="h-5 w-5  text-accent " />
                      </div>
                      <div className="m-0 flex min-w-0 max-w-full items-center justify-center break-words p-0 text-start text-[15px] font-semibold">
                        <span className="relative inline-block  overflow-x-hidden text-ellipsis whitespace-nowrap leading-5 text-secondary-text">
                          Live Video
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-accent"></div>
                    </div>
                  </div>
                </div>
              ))}
              {/* reels */}

              {/* <div className="py-1">

              </div> */}
            </div>
          </div>
        </div>
        <div className="z-0 flex w-[500px] max-w-full flex-col 2sm:w-[680px]">
          <div className="relative min-h-[200px]  py-1">
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
                    <div className="min-w-0 shrink-0 grow-0 basis-[112.5px] snap-start  ">
                      <Link
                        href="/"
                        className="group/story relative m-0  block  w-full rounded-[10px] border border-primary-clr p-0 shadow-sm ring-blue-500  ring-offset-2  ring-offset-white hover:bg-secondary-darker-clr hover:opacity-80 focus:outline-none focus-visible:ring active:scale-[0.96]"
                        tabIndex={0}
                        role="link"
                      >
                        <div className="relative h-0 w-full overflow-hidden rounded-lg pt-[177.77777%]">
                          <div className="absolute inset-0">
                            <div className="flex h-full min-h-0 flex-col">
                              {/* video or image */}
                              <div className="flex grow  flex-col">
                                <Image
                                  src="/images/createStory.jpg"
                                  className="h-full w-full max-w-full select-none object-cover   group-hover/story:scale-x-[1.04]"
                                  alt="story"
                                  width={112.5}
                                  height={151}
                                  draggable="false"
                                />
                              </div>
                              {/* create p */}
                              <div className="relative flex shrink-0 items-center justify-center bg-transparent px-4 pb-3 pt-[28px]">
                                <div className="absolute -top-5 flex h-[40px] w-[40px] select-none items-center justify-center rounded-full bg-secondary-clr">
                                  <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-accent">
                                    <PlusIcon className="h-5 w-5 text-white" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    {stories.map((story, index) => (
                      <div
                        key={index}
                        className="min-w-0 shrink-0 grow-0 basis-[112.5px] snap-start  "
                      >
                        <Link
                          href={story.href}
                          className="group/story relative m-0  block w-full rounded-[10px] border-0 p-0 shadow-sm ring-blue-500 ring-offset-2 ring-offset-white hover:opacity-80 focus:outline-none focus-visible:ring active:scale-[0.96]"
                          tabIndex={0}
                          role="link"
                        >
                          <div className="relative h-0 w-full overflow-hidden rounded-lg pt-[177.77777%]">
                            <div className="absolute inset-0">
                              {/* video or image */}
                              <div className="absolute inset-0">
                                <Image
                                  src={story.imgStory}
                                  className="h-full w-full max-w-full select-none object-cover   group-hover/story:scale-[1.02]"
                                  alt="story"
                                  width={112.5}
                                  height={200}
                                  draggable="false"
                                />
                              </div>
                              {/* poster */}
                              <div className="pointer-events-none absolute bottom-0 w-full bg-transparent p-3 text-left">
                                <span className="block min-w-0 max-w-full break-words text-[0.8125rem] font-semibold leading-[1.2308] text-white">
                                  <span className=" line-clamp-2 ">
                                    {story.name}
                                  </span>
                                </span>
                              </div>
                              {/* avatar of the poster */}
                              <div className="absolute left-0 top-0 p-2 ">
                                <div
                                  className={clsx(
                                    `flex h-[40px] w-[40px] items-center justify-center overflow-hidden rounded-full border-4  `,
                                    {
                                      'border-media-outer-border': story.seen,
                                      'border-accent': !story.seen,
                                    },
                                  )}
                                >
                                  <Image
                                    className="aspect-square max-w-full  "
                                    src={story.avatar}
                                    alt={`${story.name}'s avatar`}
                                    width={40}
                                    height={40}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
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
      </div>
    </div>
  );
}
