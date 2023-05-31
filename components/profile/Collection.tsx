'use client'
import { useState, useRef, useEffect } from 'react';
import Link from "next/link"
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon } from "@heroicons/react/24/outline"
import clsx from 'clsx';
import Image from "next/image"


const Collection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isReachingStart, setIsReachingStart] = useState(true);
  const [isReachingEnd, setIsReachingEnd] = useState(false);
  const [defaultWidthScrollbar, setDefaultWidthScrollbar] = useState(618.75);
  useEffect(() => {
    (window.innerWidth < 800) && setDefaultWidthScrollbar(500);
  }, [defaultWidthScrollbar])
  const prevHandler = () => {
    console.log(currentIndex);
    carouselRef?.current?.scrollTo({
      top: 0,
      left: defaultWidthScrollbar * (currentIndex - 2),
      behavior: 'smooth'
    });
    isReachingEnd && setIsReachingEnd(false);
    if (carouselRef.current) {

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
    if (carouselRef.current) {
      setIsReachingEnd(carouselRef?.current?.scrollWidth - defaultWidthScrollbar * currentIndex <= defaultWidthScrollbar);
    }
    setCurrentIndex(currentIndex + 1);
  }

  return (
    <div className="flex flex-col z-0 w-full max-w-full">
      <div className=" relative">
        <div className="relative box-border z-0">
          {/* prev */}
          <div className={clsx(`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-[1] left-[44px]  duration-300 transition-opacity  `, {
            'opacity-0 pointer-events-none': isReachingStart,
            'opacity-100 pointer-events-auto': !isReachingStart,
          })}  >
            <div className={clsx(`flex justify-center items-center p-0 m-0 relative rounded-full h-[48px] w-[48px] bg-popover-bg hover:bg-fourth-clr cursor-pointer focus:outline-none focus-visible:ring ring-blue-500 ring-offset-2 ring-offset-white`)} onClick={prevHandler} tabIndex={0}>
              <ChevronLeftIcon className='w-6 h-6 text-secondary-text' />
            </div>
          </div>

          {/* stories */}
          <div className=" py-2 -my-2 relative w-full h-full">
            <div className=" flex flex-col scroll-px-[44px] py-2 relative m-0 z-0 snap-mandatory snap-x  scroll-smooth overflow-y-hidden overflow-x-auto scrollbar-none  "
              ref={carouselRef}
            >
              <div className="flex  relative grow space-x-2 scroll-px-[44px] ">
                <span className="min-w-[8px]"></span>
                
                {stories.map((story, index) => (
                  <div key={index} className="snap-start mx-1 flex shrink-0  w-[calc((100%-88px)/3-8px)] w-1/3 items-stretch">
                    <div className='flex flex-col flex-1 basis-full  min-h-0'>
                      <div className='flex shrink-0 relative w-full  max-w-full'>
                        <div className='rounded-mg flex relative bg-red-400 w-full overflow-hidden'>
                          <Link href={"#"} className='p-0 m-0 relative overflow-hidden border-none border-0'>
                            <div className='w-full h-0 pt-[177.778%] select-none relative rounded-md overflow-hidden'>
                              <div className='absolute inset-0 w-full h-full'>
                                <img src="/images/storiesAva/sangnguyen.jpg" className='w-full h-full object-cover' alt="" />
                              </div>
                            </div>
                          </Link>
                        </div>

                      </div>
                      {/* name of collection */}
                      <div className='pt-2 flex w-full max-w-full items-center justify-center'>
                        <div>
                          landScape
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* next */}
          <div className={clsx(`absolute top-1/2 -translate-y-1/2 translate-x-1/2 z-[1] right-[44px]  duration-300 transition-opacity `, {
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
  )
}

export default Collection
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