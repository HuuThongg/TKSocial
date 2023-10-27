'use client';
import Link from 'next/link';
import {
  CameraIcon,
  PlusSmallIcon,
  PencilIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { ChevronDownIconn, PlusSmIcon, DownIcon } from '@/components/icons';
import { PencilIconn } from '@/components/icons/PencilIconn';
import { useRef, useEffect, useState } from 'react';
import Collection from '@/components/profile/Collection';
import Image from 'next/image';

export default function Page() {
  const haveStories = false;
  const seen = false;
  const isTabChose = true;
  const flip = false;
  const ref = useRef<HTMLDivElement>(null);
  const [isFlip, setIsFlip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navTop = ref.current?.getBoundingClientRect().top || 0;
      setIsFlip(navTop - 56 === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFlip]);
  console.log(isFlip);

  return (
    <div className=" relative left-[60px] mr-[60px]   flex   min-h-0   origin-top-left flex-col   ">
      <div className="relative flex h-full min-h-[56px] w-full overflow-visible ">
        <div className="relative z-0 flex min-w-0 shrink grow basis-0  flex-col flex-nowrap items-center ">
          {/* Background and some info */}
          <div className="flex w-full grow">
            <div className="flex grow  justify-center">
              {/* maybe add padding here for the background image */}

              <div className="flex w-full min-w-0 flex-1 flex-col items-center justify-center bg-transparent 2sm:max-w-[1250px] ">
                <div className=" relative flex w-full items-center justify-center overflow-hidden rounded-lg">
                  <Link
                    href={'#'}
                    className="relative flex w-full cursor-pointer flex-col"
                  >
                    <div className="relative  h-0 w-full overflow-hidden pt-[37.037%]">
                      <div className="absolute inset-0 m-0 flex min-h-0 min-w-0 flex-col justify-between p-0">
                        <div className="absolute left-1/2  top-[64.5%] h-0 w-full -translate-x-1/2 -translate-y-[64.5%] overflow-hidden pt-[75%]">
                          <div className="absolute inset-0 m-0 flex flex-col justify-between p-0">
                            <Image
                              src="/images/backgroundCover.jpg"
                              alt="background Image"
                              draggable="false"
                              fill
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  {/* edit cover photo */}
                  <div className="absolute bottom-0 left-0  w-full ">
                    <div className="relative flex justify-end bg-gradient-always-dark-gradient  px-5">
                      <div className="-m-[-6px]   flex justify-end px-3  py-4 ">
                        <div className="flex flex-col p-[6px] ">
                          <div className="mb-4">
                            <button className="m-0 inline-flex rounded-md p-0 ring-blue-500 ring-offset-2 ring-offset-white focus:outline-none focus-visible:ring ">
                              <div className="relative flex shrink-0 px-3">
                                <div className="flex items-center justify-between gap-x-1">
                                  <CameraIcon className="h-5 w-5 fill-white" />
                                  <span className="hidden text-sm font-medium text-white md:inline-block">
                                    Edit Cover Photo
                                  </span>
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* info */}
          <div className="relative z-0  flex w-full    flex-1 items-center justify-center bg-secondary-clr pb-4">
            <div className="relative  flex  w-full min-w-0 max-w-[1218px] px-4">
              <div className="relative -mt-8  flex  w-full flex-col items-center justify-center md:flex-row">
                {/* avatar */}
                <div className=" mr-4">
                  <div className="flex rounded-full bg-secondary-clr p-1">
                    <div className="group/avatar relative z-0 m-0 flex cursor-pointer overflow-hidden rounded-full border-0 border-none p-0">
                      {/* <img className="w-[168px] h-[168px] object-cover" src="/images/bigAvatar.jpg" alt="dasdsad" /> */}
                      <svg
                        className={clsx(`cursor-pointer `, {
                          'h-[132px] w-[132px]': haveStories,
                          'h-[168px] w-[168px]': !haveStories,
                        })}
                        aria-hidden="true"
                      >
                        <mask id={`:1:`}>
                          <circle
                            cx={clsx(``, {
                              '66': haveStories,
                              '84': !haveStories,
                            })}
                            cy={clsx(``, {
                              '66': haveStories,
                              '84': !haveStories,
                            })}
                            r={clsx(``, {
                              '66': haveStories,
                              '84': !haveStories,
                            })}
                            className="fill-white"
                          ></circle>

                          {/* has story  */}
                          {haveStories ? (
                            <circle
                              cx="66"
                              cy="66"
                              fill="transparent"
                              r="60"
                              stroke="black"
                              strokeWidth="4"
                            ></circle>
                          ) : null}

                          {/* <circle cx="20" cy="20" r="4.5 " className='fill-black'  ></circle> */}
                        </mask>
                        <g mask={`url(#:1:)`}>
                          {/* has story : w-6 h-6 x=0 y=0 */}
                          <image
                            x={`${haveStories ? '8' : '0'}`}
                            y={`${haveStories ? '8' : '0'}`}
                            className={clsx(` `, {
                              'h-[116px] w-[116px]': haveStories,
                              'h-[168px] w-[168px]': !haveStories,
                            })}
                            xlinkHref={'/images/bigAvatar.jpg'}
                          />

                          {/* <circle className="stroke-4 fill-none  stroke-red-500" cx="66" cy="66" r="64"></circle> */}
                          {/* stroke-media-inner-border */}
                          {haveStories && (
                            <circle
                              className={clsx(`stroke-[4] `, {
                                'stroke-blue-500': !seen,
                                'stroke-third-clr': seen,
                                'stroke-red-500': !haveStories,
                              })}
                              cx="66"
                              cy="66"
                              fill="transparent"
                              r="64"
                            ></circle>
                          )}
                        </g>
                      </svg>
                      <div className="absolute  inset-0 group-hover/avatar:bg-hover-overlay"></div>
                    </div>
                  </div>
                </div>
                {/* for layout */}
                {/* <div className="shrink-0 mr-4 w-[174px]">

                </div> */}
                {/* Name and friends */}
                <div className=" mb-4 mt-5 flex self-center  md:mr-auto md:mt-8">
                  <div className="relative z-0 flex max-w-full shrink-0 grow flex-col ">
                    <div className="">
                      <span className="block min-w-0 max-w-full  break-before-all text-[2rem] font-bold leading-[1.1875] text-primary-text">
                        <h1 className=" text-center md:text-left ">
                          Huu Thong
                        </h1>
                      </span>
                    </div>
                    <div className="relative  flex max-w-full shrink-0 flex-col pt-3">
                      <span className="block min-w-0 max-w-full  break-before-all text-[0.9375rem] font-normal leading-[1.1875] text-secondary-text">
                        <span className="block text-center md:text-left ">
                          89 friends
                        </span>
                      </span>
                    </div>
                    {/* friend list */}
                    <div className="relative flex max-w-full shrink-0 flex-col">
                      <div className="relative -m-[6px] mt-2 flex  shrink-0 flex-col ">
                        <div className="relative -ml-1 mr-1 flex min-w-0  max-w-full p-[6px] ">
                          <ul className="flex h-8 w-full select-none overflow-hidden  pl-2">
                            {Array.from(Array(8).keys()).map((item, index) => (
                              <li
                                key={index}
                                className="relative -ml-1 flex-shrink-0"
                              >
                                <Link href={'#'}>
                                  <div className="inline-block h-8 w-8 overflow-hidden rounded-full ">
                                    <Image
                                      src="/images/avatar.jpg"
                                      fill
                                      alt=""
                                    />
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* add to story and edit profile */}
                <div className="max-w-[400px] self-center md:mb-4 md:ml-8 md:mt-8 md:grow-0 md:self-end">
                  <div className="flex flex-col ">
                    <div className="-mx-1  flex  items-end justify-between">
                      {navigationEditProfile.map((item, index) => (
                        <div key={index} className="mx-1 mt-2">
                          <div className="w-full">
                            <Link
                              href={'#'}
                              aria-label="Add to story"
                              className="m-0 flex items-center justify-center p-0"
                            >
                              <div
                                className={clsx(
                                  `flex shrink-0 items-center justify-center gap-x-1 rounded-md px-3  py-2 ${item.color} ${item.hoverColor}`,
                                )}
                              >
                                {/* logo */}
                                <div>
                                  <item.icon className="h-[18px] w-[18px] text-primary-text" />
                                </div>
                                {/* add to story */}
                                <div className="flex items-center justify-center">
                                  <span className="min-w-0 max-w-full text-[0.875rem] font-semibold leading-5 text-primary-text">
                                    <span>{item.name}</span>
                                  </span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* navigation */}
          <div ref={ref} className="sticky top-[56px] z-auto flex w-full ">
            <div className="flex shrink grow flex-nowrap items-stretch justify-center  bg-secondary-clr  ">
              <div className="relative z-0 flex min-w-0  max-w-[1218px] flex-1 flex-col px-4 ">
                <div className="relative z-0 flex items-center justify-between border-t-2  border-third-clr">
                  <div className="relative flex min-w-0  max-w-full flex-1 shrink-0 flex-col ">
                    <div className="relative  z-0 flex overflow-hidden">
                      <div
                        className={clsx(
                          `transition-transform ease-quick-move-in `,
                          {
                            'translate-y-0': !isFlip,
                            '-translate-y-full': isFlip,
                          },
                        )}
                      >
                        {/* first nav */}
                        <div
                          className={clsx(
                            `visible relative z-0 flex min-h-[60px] flex-nowrap justify-between opacity-100 transition-opacity-visible  duration-200-1000 ease-fade-out   `,
                            {
                              'visible opacity-100': !isFlip,
                              'invisible opacity-0': isFlip,
                            },
                          )}
                        >
                          <div className="z-0   flex  h-[60px] flex-wrap items-center justify-start overflow-hidden ">
                            {navigation.map((item) => (
                              <Link
                                key={item.name}
                                href={'#'}
                                className="group/tab relative m-0 box-border inline-block rounded-md p-0"
                                role="tab"
                              >
                                <div className="min-h-4 relative flex h-[60px] shrink-0 items-center justify-center px-4">
                                  <span
                                    className={clsx(
                                      `block min-w-0 max-w-full break-before-all text-md  font-semibold `,
                                      {
                                        'text-secondary-text': !item.active,
                                        'text-accent': item.active,
                                      },
                                    )}
                                  >
                                    {item.name}
                                  </span>

                                  {item.active ? (
                                    <div className="absolute bottom-0 left-0 h-[3px] w-full bg-accent"></div>
                                  ) : null}
                                </div>
                                {/* for display hover */}
                                <div className="absolute  inset-x-0 inset-y-1 rounded-md bg-hover-overlay opacity-0 group-hover/tab:opacity-100"></div>
                              </Link>
                            ))}
                            <div
                              className="group/tab relative m-0 inline-block  cursor-pointer rounded-md p-0 "
                              role="tab"
                            >
                              <div className="min-h-4 relative flex h-[60px] shrink-0 items-center justify-center gap-x-2 px-4">
                                <span
                                  className={clsx(
                                    `block min-w-0 max-w-full break-before-all text-md  font-semibold text-secondary-text`,
                                  )}
                                >
                                  More
                                </span>
                                <DownIcon className="fill-secondary-text" />
                              </div>
                              {/* for display hover */}
                              <div className="absolute  inset-x-0 inset-y-1 rounded-md bg-hover-overlay opacity-0 group-hover/tab:opacity-100"></div>
                            </div>
                          </div>
                        </div>
                        {/* this nav will be visible when the first nav is hidden */}
                        <div
                          className={clsx(
                            `absolute z-0 flex h-[60px] w-full items-center   justify-between`,
                            {
                              'invisible opacity-0': !isFlip,
                              'visible opacity-100': isFlip,
                            },
                          )}
                        >
                          <div className="flex h-full  min-w-0 max-w-full shrink-0 flex-col  justify-center">
                            <div className="px-2">
                              <Link
                                href={'#'}
                                className="group/infoNav relative z-0 m-0 flex w-full min-w-0 p-0"
                              >
                                <div className="flex h-full min-w-0 items-center justify-between gap-x-3 p-2">
                                  {/* avatar */}
                                  <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full">
                                    <Image
                                      src="/images/avatar.jpg"
                                      alt="avtar"
                                      fill
                                    />
                                  </div>
                                  {/* name */}
                                  <div className="flex min-w-0 max-w-full flex-col items-start justify-center">
                                    <span className="block min-w-0 max-w-full break-before-all text-base  font-semibold text-secondary-text">
                                      Huu Thong
                                    </span>
                                  </div>
                                </div>
                                <div className="absolute inset-0 h-full w-full rounded-md bg-hover-overlay opacity-0 group-hover/infoNav:opacity-100"></div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex min-w-0 shrink-0 grow-0 flex-col self-center">
                    <div className="flex shrink-0 cursor-pointer items-center justify-center rounded-md bg-secondary-btn-bg px-3 py-2 hover:bg-fourth-clr">
                      <EllipsisHorizontalIcon className="h-5 w-5 text-primary-text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* main */}
          <div className=" relative z-0 flex min-h-[2000px] w-full max-w-full  flex-col items-center bg-zinc-600">
            {/* something here */}
            <div></div>
            <div className="mt-4 box-border w-full max-w-[1218px] px-4">
              <div className="z-0 -m-2 flex flex-wrap items-stretch justify-center text-primary-text">
                {/* left : intro, photos, friends */}
                <div className="m-2 flex max-w-[600px] grow-[18] basis-[360px]  bg-red-300">
                  <div className="sticky grow">
                    <div className="flex flex-col ">
                      {/* intro */}
                      <div className="">
                        <div className="relative z-0 mb-4 overflow-hidden rounded-lg bg-surface-bg">
                          <div className="flex flex-col pb-1 pt-5">
                            <div className="z-0 flex min-h-0 grow flex-col">
                              <div className="flex shrink-0 grow flex-col px-4">
                                <div className="my-[6px] flex flex-col">
                                  <span className="block min-w-0 max-w-full  break-before-all text-[1.25rem] font-bold leading-[1.2] text-primary-text">
                                    <span>intro</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/*  */}
                          <div className="mb-5">
                            {/* edit Bio */}
                            <div className="relative flex flex-col px-4 pt-4">
                              <div className="flex min-w-0 shrink grow flex-col items-center  ">
                                <div className="flex flex-col ">
                                  <span className="block min-w-0 max-w-full  break-before-all text-md font-normal text-primary-text ">
                                    <span>
                                      There are no gains without pains
                                    </span>
                                  </span>
                                </div>
                                <div className="mt-4 w-full">
                                  <div className="flex h-[36px] w-full flex-col items-center justify-center  ">
                                    <div className="flex h-full w-full  flex-col items-center justify-center rounded-md bg-third-clr active:scale-x-[0.96] active:scale-y-[0.98] active:bg-fourth-clr">
                                      <button className="block w-full min-w-0 max-w-full  break-before-all  text-md font-semibold text-primary-text ">
                                        Edit Bio
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* edit details */}
                            <div className="relative flex flex-col px-4 pt-2">
                              <div className="flex min-w-0 shrink grow flex-col items-center">
                                <div className="mt-4 w-full">
                                  <div className="flex h-[36px] w-full flex-col items-center justify-center  ">
                                    <div className="flex h-full w-full  flex-col items-center justify-center rounded-md bg-third-clr active:scale-x-[0.96] active:scale-y-[0.98] active:bg-fourth-clr">
                                      <button className="block w-full min-w-0 max-w-full  break-before-all  text-md font-semibold text-primary-text ">
                                        Edit details
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* add hobbies */}
                            <div className="relative flex flex-col px-4 pt-2">
                              <div className="flex min-w-0 shrink grow flex-col items-center">
                                <div className="mt-4 w-full">
                                  <div className="flex h-[36px] w-full flex-col items-center justify-center  ">
                                    <div className="flex h-full w-full  flex-col items-center justify-center rounded-md bg-third-clr active:scale-x-[0.96] active:scale-y-[0.98] active:bg-fourth-clr">
                                      <button className="block w-full min-w-0 max-w-full  break-before-all  text-md font-semibold text-primary-text ">
                                        Add Hobbies
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="relative flex flex-col px-4 pt-2">
                              <div className="relative flex grow flex-col items-center">
                                {/*story collection */}
                                <div className=" flex w-full bg-zinc-500">
                                  <Collection />
                                </div>

                                {/* edit feawtured */}
                                <div className="w-full">
                                  <div className="flex min-w-0 shrink grow flex-col items-center">
                                    <div className="mt-4 w-full">
                                      <div className="flex h-[36px] w-full flex-col items-center justify-center  ">
                                        <div className="flex h-full w-full  flex-col items-center justify-center rounded-md bg-third-clr active:scale-x-[0.96] active:scale-y-[0.98] active:bg-fourth-clr">
                                          <button className="block w-full min-w-0 max-w-full  break-before-all  text-md font-semibold text-primary-text ">
                                            Edit Featured
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* right : post */}
                <div className="z-0 m-2 flex min-w-0 max-w-[680px] shrink grow-[25] basis-[500px] bg-red-400">
                  bb
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const navigationEditProfile = [
  {
    name: 'Add to story',
    href: '#',
    icon: PlusSmIcon,
    color: 'bg-primary-btn-bg',
    hoverColor: 'hover:bg-primary-btn-bg-hover',
  },
  {
    name: 'Edit Profile',
    href: '#',
    icon: PencilIconn,
    color: 'bg-secondary-btn-bg',
    hoverColor: 'hover:bg-fourth-clr',
  },
  {
    name: '',
    href: '#',
    icon: ChevronDownIconn,
    color: 'bg-secondary-btn-bg',
    hoverColor: 'hover:bg-fourth-clr',
  },
];

const navigation = [
  {
    name: 'Post',
    href: '#',
    active: true,
  },
  {
    name: 'About',
    href: '#',
    active: false,
  },
  {
    name: 'Friends',
    href: '#',
    active: false,
  },
  {
    name: 'Photos',
    href: '#',
    active: false,
  },
  {
    name: 'Videos',
    href: '#',
    active: false,
  },
  {
    name: 'Reels',
    href: '#',
    active: false,
  },
];
