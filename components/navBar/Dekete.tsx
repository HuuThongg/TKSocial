'use client'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid'
const Search = () => {
  const [innerWidth, setInnerWidth] = useState<number>(0)
  const [isSearchOpen, setIsSearchOpen] = useState<Boolean>(false)
  const [isSearchFocused, setIsSearchFocused] = useState<Boolean>(false)
  const inputRef = useRef(null);
  const hidden = true;
  useEffect(() => {
    setInnerWidth(window.innerWidth)
  }, [])
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
  console.log(onlineContacts)
  return (
    <div className='  min-w-0 flex justify-center items-center basis-[744px]  px-0 lg:px-8 w-full grow' >
      <div className={`${styleWdith}  w-[${w}] max-w-full  ss:max-w-[320px] md:max-w-[532px] 2sm:w-[680px] lg:w-[680px] lg:max-w-full h-full z-[4] `}>
        {/* transition data- insaimatedlayout */}
        <div className='relative min-h-0 h-full   origin-top-left' >
          <Menu as="div" className='w-full flex flex-col '>
            {({ open }) => (
              <>
                {/* search form */}
                <div className='flex h-[56px] items-center w-full'>
                  <Menu.Button as="label" htmlFor="" className={clsx('rounded-[50px] flex items-stretch w-full relative outline-none min-h-[40px] min-w-[40px] text-xs font-semibold align-middle hover:bg-fourth-clr bg-third-clr')}
                    onClick={() => setIsSearchFocused(!isSearchFocused)}
                  >
                    <span className='flex items-center whitespace-nowrap pointer-events-none ease-linear pl-3'>
                      <MagnifyingGlassIcon className='w-4 h-4 text-primary-text' />
                    </span>
                    <input type="text" className='w-full bg-transparent grow shrink pt-[7px] px-2 pb-[9px]  rounded-[50px] cursor-text text-left basis-auto text-[15px] h-[40px] text-primary-text font-normal' placeholder='Search T&K Social Media' />
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

                  <div className={clsx('mt-2 p-2 flex  rounded-[8px] bg-secondary-clr  max-h-[calc(100vh_-_80px)] shrink')}>
                    <div className='overflow-x-hidden overflow-y-auto flex flex-col relative z-0 w-full'>
                      <div className='flex flex-col '>
                        <div >
                          <div className='mb-2'>
                            <div className='flex flex-col pt-3 pb-2 max-w-full z-0'>
                              <div className='min-h-0 flex flex-col grow relative z-0 w-full'>
                                <div className='px-2 ,mt-[5px] '>
                                  <div className='flex items-center justify-between flex-nowrap w-full'>
                                    <div className='grow'>
                                      <h2 className='text-white text-base font-semibold'>Recent</h2>
                                    </div>
                                    <div className='grow-0 '>
                                      <button className='text-blue-500 text-sm font-medium bg-hover-overlay p-2 py-[6px] rounded-md'>Edit</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Menu.Items as="ul" className={'outline-none border-none'}>
                            {Array.from(Array(3).keys()).map((item, index) => (
                              <Menu.Item as="li" key={index} className='w-full'>
                                {({ active }) => (
                                  <div className={clsx('rounded-[8px] cursor-pointer flex p-2 py-1 text-left relative overflow-hidden my-0 text-primary-text text-xs leading-5 space-y-1  hover:bg-comment-bg-clr-hover', {
                                    'bg-third-clr': active,
                                  })}>
                                    <Link href={"/"} className='w-full '

                                    >
                                      <div className='flex items-center justify-between z-0 relative w-full '>
                                        <div className='p-[6px] flex shrink-0 flex-col select-none'>
                                          <div className='flex items-center justify-center w-[36px] h-[36px] rounded-full overflow-hidden'>
                                            <Image src="/images/avatar.jpg" alt="avatar" width={40} height={40} />
                                          </div>

                                        </div>
                                        <div className='flex flex-col grow shrink min-w-0 basis-0   max-w-full p-[6px] '>
                                          <div className='my-[5px]'>
                                            <span>
                                              J2TeamComminuty
                                            </span>
                                          </div>
                                        </div>
                                        {/* delete */}
                                        <div className='flex flex-col p-[6px] hover:bg-primary-icon-clr-hover min-w-0 max-w-full rounded-full'>
                                          <div className='flex items-center justify-center w-[20px] h-[20px] rounded-full overflow-hidden cursor-pointer'>
                                            <XMarkIcon />
                                          </div>
                                        </div>
                                      </div>
                                    </Link>
                                  </div>
                                )}
                              </Menu.Item>
                            ))
                            }
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
  )
}

export default Search


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

