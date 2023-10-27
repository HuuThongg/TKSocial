'use client';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import clsx from 'clsx';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';
const Search = () => {
  const [innerWidth, setInnerWidth] = useState<number>(0);
  const [isSearchOpen, setIsSearchOpen] = useState<Boolean>(false);
  const [isSearchFocused, setIsSearchFocused] = useState<Boolean>(false);
  const inputRef = useRef(null);
  const hidden = true;
  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, []);
  let styleWdith = {
    width: `500px`,
  };
  if (innerWidth < 692 && !isSearchOpen) {
    // i want to render width dynamicly insteading of hard code  w-[500px]. if this is true then we need to render the search bar with width: 40px;
    styleWdith = {
      width: `40px`,
    };
  } else {
    styleWdith = {
      width: `500px`,
    };
  }
  const w = `40px`;
  console.log(onlineContacts);
  return (
    <div className="  flex w-full min-w-0 grow basis-[744px]  items-center justify-center px-0 lg:px-8">
      <div
        className={`${styleWdith}  w-[${w}] z-[4]  h-full max-w-full ss:max-w-[320px] 2sm:w-[680px] md:max-w-[532px] lg:w-[680px] lg:max-w-full `}
      >
        {/* transition data- insaimatedlayout */}
        <div className="relative h-full min-h-0   origin-top-left">
          <Menu as="div" className="flex w-full flex-col ">
            {({ open }) => (
              <>
                {/* search form */}
                <div className="flex h-[56px] w-full items-center">
                  <Menu.Button
                    as="label"
                    htmlFor=""
                    className={clsx(
                      'relative flex min-h-[40px] w-full min-w-[40px] items-stretch rounded-[50px] bg-third-clr align-middle text-xs font-semibold outline-none hover:bg-fourth-clr',
                    )}
                    onClick={() => setIsSearchFocused(!isSearchFocused)}
                  >
                    <span className="pointer-events-none flex items-center whitespace-nowrap pl-3 ease-linear">
                      <MagnifyingGlassIcon className="h-4 w-4 text-primary-text" />
                    </span>
                    <input
                      type="text"
                      className="h-[40px] w-full shrink grow basis-auto cursor-text rounded-[50px]  bg-transparent px-2 pb-[9px] pt-[7px] text-left text-[15px] font-normal text-primary-text"
                      placeholder="Search T&K Social Media"
                    />
                  </Menu.Button>
                </div>
                {/* search result */}
                {/* add box shadow */}
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <div
                    className={clsx(
                      'mt-2 flex max-h-[calc(100vh_-_80px)]  shrink rounded-[8px]  bg-secondary-clr p-2',
                    )}
                  >
                    <div className="relative z-0 flex w-full flex-col overflow-y-auto overflow-x-hidden">
                      <div className="flex flex-col ">
                        <div>
                          <div className="mb-2">
                            <div className="z-0 flex max-w-full flex-col pb-2 pt-3">
                              <div className="relative z-0 flex min-h-0 w-full grow flex-col">
                                <div className=",mt-[5px] px-2 ">
                                  <div className="flex w-full flex-nowrap items-center justify-between">
                                    <div className="grow">
                                      <h2 className="text-base font-semibold text-white">
                                        Recent
                                      </h2>
                                    </div>
                                    <div className="grow-0 ">
                                      <button className="rounded-md bg-hover-overlay p-2 py-[6px] text-sm font-medium text-blue-500">
                                        Edit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Menu.Items
                            as="ul"
                            className={'border-none outline-none'}
                          >
                            {Array.from(Array(3).keys()).map((item, index) => (
                              <Menu.Item as="li" key={index} className="w-full">
                                {({ active }) => (
                                  <div
                                    className={clsx(
                                      'relative my-0 flex cursor-pointer space-y-1 overflow-hidden rounded-[8px] p-2 py-1 text-left text-xs leading-5 text-primary-text  hover:bg-comment-bg-clr-hover',
                                      {
                                        'bg-third-clr': active,
                                      },
                                    )}
                                  >
                                    <Link href={'/'} className="w-full ">
                                      <div className="relative z-0 flex w-full items-center justify-between ">
                                        <div className="flex shrink-0 select-none flex-col p-[6px]">
                                          <div className="flex h-[36px] w-[36px] items-center justify-center overflow-hidden rounded-full">
                                            <Image
                                              src="/images/avatar.jpg"
                                              alt="avatar"
                                              width={40}
                                              height={40}
                                            />
                                          </div>
                                        </div>
                                        <div className="flex min-w-0 max-w-full shrink grow basis-0   flex-col p-[6px] ">
                                          <div className="my-[5px]">
                                            <span>J2TeamComminuty</span>
                                          </div>
                                        </div>
                                        {/* delete */}
                                        <div className="flex min-w-0 max-w-full flex-col rounded-full p-[6px] hover:bg-primary-icon-clr-hover">
                                          <div className="flex h-[20px] w-[20px] cursor-pointer items-center justify-center overflow-hidden rounded-full">
                                            <XMarkIcon />
                                          </div>
                                        </div>
                                      </div>
                                    </Link>
                                  </div>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </div>
                      </div>
                    </div>
                  </div>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Search;

type OnlineContact = {
  name: string;
  href: string;
  url: string;
};

const onlineContacts: OnlineContact[] = [
  {
    name: 'Kim Chi',
    href: '#',
    url: '/images/contact/kimchi.jpg',
  },
  {
    name: 'Tran Thanh Nha',
    href: '##',
    url: '/images/contact/tranthanhnha.jpg',
  },
  {
    name: 'Trang Duong',
    href: '##',
    url: '/images/contact/trangduong.jpg',
  },
  {
    name: 'Duc ri',
    href: '##',
    url: '/images/contact/ducri.jpg',
  },
  {
    name: 'Diem Quynh',
    href: '##',
    url: '/images/contact/diemquynh.jpg',
  },
  {
    name: 'Duyen',
    href: '##',
    url: '/images/contact/duyen.jpg',
  },
  {
    name: 'Trang La',
    href: '##',
    url: '/images/contact/trangla.png',
  },
  {
    name: 'Duy Hung',
    href: '##',
    url: '/images/contact/duyhuynh.png',
  },
  {
    name: 'An Khuong',
    href: '##',
    url: '/images/contact/ankhuong.jpg',
  },
  {
    name: 'Kieu Trinh',
    href: '##',
    url: '/images/contact/kieutrinh.jpg',
  },
  {
    name: 'Hoai Bao',
    href: '##',
    url: '/images/contact/hoaibao.jpg',
  },
  {
    name: 'My lan',
    href: '##',
    url: '/images/contact/mylan.jpg',
  },
  {
    name: 'Hung Duong',
    href: '##',
    url: '/images/contact/hungduong.jpg',
  },
];
