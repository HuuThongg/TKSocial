"use client"
import { useState, useRef, useEffect } from 'react';
import Link from "next/link"
import { StoryIcon } from "../icon"
import Image from "next/image"
import {ChevronLeftIcon, ChevronRightIcon, PlusIcon} from "@heroicons/react/24/outline"
import {stories} from './constant'
import clsx from 'clsx';
const storyLength = stories.length;

// const defaultWidthScroll = 618.75;

export default function Story() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isReachingStart, setIsReachingStart] = useState(true);
  const [isReachingEnd, setIsReachingEnd] = useState(false);
  const [defaultWidthScrollbar, setDefaultWidthScrollbar] = useState(618.75);
  useEffect(()=>{
    (window.innerWidth < 800 )&& setDefaultWidthScrollbar(500);
  }, [defaultWidthScrollbar])
  const prevHandler = () => {
    console.log(currentIndex);
    carouselRef?.current?.scrollTo({
      top: 0,
      left: defaultWidthScrollbar * (currentIndex -2 ),
      behavior: 'smooth'
    });
    isReachingEnd&&setIsReachingEnd(false);
    if(carouselRef.current){

      setIsReachingStart(carouselRef?.current?.scrollWidth - defaultWidthScrollbar * currentIndex >= defaultWidthScrollbar);
    }
    setCurrentIndex(currentIndex - 1);
  } 
  const nextHandler = () => {
    carouselRef?.current?.scrollTo({
      top: 0,
      left: defaultWidthScrollbar * currentIndex,
      behavior: 'smooth'
    });
    currentIndex >= 1 && setIsReachingStart(false) 
    if (carouselRef.current){
      setIsReachingEnd(carouselRef?.current?.scrollWidth - defaultWidthScrollbar * currentIndex <= defaultWidthScrollbar);
    }
    setCurrentIndex(currentIndex + 1);
  }
  return(
    <div className="mb-4 pt-2 flex justify-center">
      <div className="flex flex-col z-0 overflow-hidden relative rounded-lg space-y-2 bg-secondary-clr ">
        <div className="flex w-full flex-wrap justify-center items-center border-b border-third-clr">
          <div className="px-[6px] pt-[6px] flex min-w-0 flex-col grow shrink m-0 ">
            <div className="flex w-full px-2 gap-x-2">
              {/* stories */}
              {[...Array(2)].map((item, index) => (

                <div key={index} className="bg-transparent py-1 flex flex-col shrink-0 relative grow max-w-full">
                  <div className="flex relative p-0 m-0 border-none border-0 ">
                    <div className="flex justify-center items-center grow shrink-0 relative h-[60px]">
                      <div className="mr-2 ">
                        <StoryIcon className="w-5 h-5  text-accent " />
                      </div>
                      <div className='flex justify-center items-center font-semibold break-words text-[15px] max-w-full min-w-0 text-start m-0 p-0'>
                        <span className='inline-block relative  overflow-x-hidden text-ellipsis whitespace-nowrap leading-5 text-secondary-text'>Live Video</span>
                      </div>
                      <div className='bg-accent absolute bottom-0 left-0 h-[3px] w-full'>
                      </div>
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
        <div className="flex flex-col z-0 w-[500px] 2sm:w-[680px] max-w-full">
          <div className="min-h-[200px] py-1  relative">
            <div className="relative box-border z-0">
              {/* prev */}
              <div className={clsx(`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-[1] left-[44px]  duration-300 transition-opacity  `,{
                'opacity-0 pointer-events-none': isReachingStart,
                'opacity-100 pointer-events-auto': !isReachingStart,
              })}  >
                <div className={clsx(`flex justify-center items-center p-0 m-0 relative rounded-full h-[48px] w-[48px] bg-popover-bg hover:bg-fourth-clr cursor-pointer focus:outline-none focus-visible:ring ring-blue-500 ring-offset-2 ring-offset-white`)} onClick={prevHandler} tabIndex={0}>
                  <ChevronLeftIcon className='w-6 h-6 text-secondary-text'/>
                </div>
              </div>
              
              {/* stories */}
              <div className=" py-2 -my-2 relative w-full h-full">
                <div className=" flex flex-col scroll-px-[44px] py-2 relative m-0 z-0 snap-mandatory snap-x  scroll-smooth overflow-y-hidden overflow-x-auto scrollbar-none  "
                  ref={carouselRef} 
                >
                  <div className="flex  relative grow space-x-2 scroll-px-[44px] ">
                    <span className="min-w-[8px]"></span>
                    <div className="basis-[112.5px] min-w-0 shrink-0 grow-0 snap-start  ">
                      <Link href="/" className="relative m-0 p-0  block  w-full rounded-[10px] shadow-sm group/story focus:outline-none border border-primary-clr  hover:bg-secondary-darker-clr  focus-visible:ring ring-blue-500 ring-offset-2 ring-offset-white active:scale-[0.96] hover:opacity-80" tabIndex={0} role="link">
                        <div className="pt-[177.77777%] h-0 relative w-full overflow-hidden rounded-lg">
                          <div className="absolute inset-0">
                            <div className='flex flex-col min-h-0 h-full'>
                              {/* video or image */}
                              <div className="flex flex-col  grow">
                                <Image src='/images/createStory.jpg' className="select-none max-w-full w-full h-full object-cover   group-hover/story:scale-x-[1.04]" alt="story" width={112.5} height={151} draggable="false" />
                              </div>
                              {/* create p */}
                              <div className="flex justify-center items-center pt-[28px] px-4 pb-3 shrink-0 bg-transparent relative">
                                <div className='absolute bg-secondary-clr flex justify-center items-center -top-5 h-[40px] w-[40px] rounded-full select-none'>
                                  <div className='flex justify-center items-center w-[32px] h-[32px] rounded-full bg-accent'>
                                    <PlusIcon className='w-5 h-5 text-white'/>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                      </Link>
                    </div>
                    {stories.map((story, index) => (
                      <div key={index} className="basis-[112.5px] min-w-0 shrink-0 grow-0 snap-start  ">
                        <Link href={story.href} className="relative m-0 p-0  block border-0 w-full rounded-[10px] shadow-sm group/story focus:outline-none focus-visible:ring ring-blue-500 ring-offset-2 ring-offset-white active:scale-[0.96] hover:opacity-80" tabIndex={0} role="link">
                          <div className="pt-[177.77777%] h-0 relative w-full overflow-hidden rounded-lg">
                            <div className="absolute inset-0">
                              {/* video or image */}
                              <div className="absolute inset-0">
                                <Image src={story.imgStory} className="select-none max-w-full w-full h-full object-cover   group-hover/story:scale-[1.02]" alt="story" width={112.5} height={200} draggable="false" />
                              </div>
                              {/* poster */}
                              <div className="absolute bottom-0 text-left p-3 pointer-events-none bg-transparent w-full">
                                <span className="block font-semibold min-w-0 break-words max-w-full text-[0.8125rem] leading-[1.2308] text-white">
                                  <span className=" line-clamp-2 ">
                                    {story.name}
                                  </span>
                                </span>
                              </div>
                              {/* avatar of the poster */}
                              <div className='absolute top-0 left-0 p-2 '>
                                <div className={clsx(`flex overflow-hidden rounded-full justify-center items-center w-[40px] h-[40px] border-4  `,{
                                  'border-media-outer-border': story.seen,
                                  'border-accent': !story.seen
                                })}>
                                  <Image className='max-w-full aspect-square  ' src={story.avatar} alt={`${story.name}'s avatar`} width={40} height={40} />
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
              <div className={clsx(`absolute top-1/2 -translate-y-1/2 translate-x-1/2 z-[1] right-[44px]  duration-300 transition-opacity `,{
                'opacity-0 pointer-events-none': isReachingEnd,
                'opacity-100 pointer-events-auto': !isReachingEnd,
              })} >
                <div className='flex justify-center items-center p-0 m-0 relative rounded-full h-[48px] w-[48px] bg-popover-bg hover:bg-fourth-clr cursor-pointer focus:outline-none focus-visible:ring ring-blue-500 ring-offset-2 ring-offset-white ' onClick={nextHandler} tabIndex={0}>
                  <ChevronRightIcon className='w-6 h-6 text-secondary-text' />
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}