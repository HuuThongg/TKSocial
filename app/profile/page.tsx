import Link from "next/link";
import { CameraIcon,PlusSmallIcon,PencilIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import clsx from "clsx";
import { ChevronDownIconn, PlusSmIcon ,DownIcon} from "@/components/icons";
import { PencilIconn } from "@/components/icons/PencilIconn";


export default function Page() {
  const haveStories = false
  const seen = false;
  const isTabChose = true;
  const flip=false;
  return (
    <div className=" relative flex flex-col   min-h-0   left-[60px]   origin-top-left mr-[60px]   ">
      <div className='relative min-h-[56px] overflow-visible w-full h-full flex '>
        <div className='flex flex-col relative grow min-w-0 z-0 shrink  items-center flex-nowrap basis-0 '>
          {/* Background and some info */}
          <div className="flex grow w-full">
            <div className="flex justify-center  grow">
              {/* maybe add padding here for the background image */}


              <div className="2sm:max-w-[1250px] bg-transparent flex flex-col justify-center items-center min-w-0 flex-1 w-full ">
                <div className=" flex justify-center items-center relative w-full overflow-hidden rounded-lg">
                  <Link href={"#"} className="cursor-pointer relative flex flex-col w-full">
                    <div className="pt-[37.037%]  relative h-0 w-full overflow-hidden">
                      <div className="p-0 m-0 flex flex-col min-w-0 min-h-0 absolute inset-0 justify-between">
                        <div className="absolute pt-[75%]  h-0 w-full overflow-hidden left-1/2 top-[64.5%] -translate-x-1/2 -translate-y-[64.5%]">
                          <div className="absolute inset-0 p-0 m-0 flex flex-col justify-between">
                            <img src="/images/backgroundCover.jpg" alt="background Image" draggable="false" />
                          </div>

                        </div>
                      </div>
                    </div>
                  </Link>
                  {/* edit cover photo */}
                  <div className="absolute bottom-0 left-0  w-full ">
                    <div className="px-5 relative bg-gradient-always-dark-gradient flex  justify-end">
                      <div className="flex   px-3 py-4 -m-[-6px]  justify-end ">
                        <div className="flex flex-col p-[6px] ">
                          <div className="mb-4">
                            <button className="inline-flex m-0 p-0 focus:outline-none focus-visible:ring ring-blue-500 ring-offset-2 ring-offset-white rounded-md ">
                            <div className="px-3 flex relative shrink-0">
                              <div className="flex justify-between items-center gap-x-1">
                                <CameraIcon className="w-5 h-5 fill-white"/>
                                <span className="text-white text-sm font-medium hidden md:inline-block">Edit Cover Photo</span>
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
          <div className="pb-4 flex  items-center justify-center    relative z-0 bg-secondary-clr flex-1 w-full">
            <div className="flex  px-4  min-w-0 relative max-w-[1218px] w-full">
              <div className="flex flex-col  md:flex-row  items-center relative w-full justify-center -mt-8">
                {/* avatar */}
                <div className=" mr-4">
                  <div className="p-1 rounded-full flex bg-secondary-clr">
                    <div className="flex p-0 m-0 border-0 border-none z-0 relative rounded-full overflow-hidden group/avatar cursor-pointer">
                      {/* <img className="w-[168px] h-[168px] object-cover" src="/images/bigAvatar.jpg" alt="dasdsad" /> */}
                      <svg className={clsx(`cursor-pointer `,{
                        'w-[132px] h-[132px]':haveStories,
                        'w-[168px] h-[168px]': !haveStories
                      })} aria-hidden="true" >
                        <mask id={`:1:`}>
                          <circle cx={clsx(``,{
                            '66':haveStories,
                            '84': !haveStories
                          })} cy={clsx(``, {
                            '66': haveStories,
                            '84': !haveStories
                          })} r={clsx(``, {
                            '66': haveStories,
                            '84': !haveStories
                          })} className='fill-white'  >
                          </circle>
                          
                          {/* has story  */}
                          {haveStories ? <circle cx="66" cy="66" fill="transparent" r="60" stroke="black" strokeWidth="4"></circle> : null}

                          {/* <circle cx="20" cy="20" r="4.5 " className='fill-black'  ></circle> */}

                        </mask>
                        <g mask={`url(#:1:)`}>
                          {/* has story : w-6 h-6 x=0 y=0 */}
                          <image x={`${haveStories ? '8' : '0'}`} y={`${haveStories ? '8' : '0'}`} className={clsx(` `, {
                            'w-[116px] h-[116px]': haveStories,
                            'w-[168px] h-[168px]': !haveStories
                          })}
                            xlinkHref={"/images/bigAvatar.jpg"}

                          />

                          {/* <circle className="stroke-4 fill-none  stroke-red-500" cx="66" cy="66" r="64"></circle> */}
                          {/* stroke-media-inner-border */}
                          {haveStories &&
                            <circle className={clsx(`stroke-[4] `, {
                              'stroke-blue-500': !seen,
                              'stroke-third-clr': seen,
                              'stroke-red-500': !haveStories
                            })}
                              cx="66" cy="66" fill="transparent" r="64" ></circle>
                          }

                        </g>
                      </svg> 
                      <div className="absolute  inset-0 group-hover/avatar:bg-hover-overlay">
                      </div>
                    </div>
                  </div>

                </div>
                {/* for layout */}
                {/* <div className="shrink-0 mr-4 w-[174px]">

                </div> */}
                {/* Name and friends */}
                <div className=" mt-5 md:mt-8 mb-4 self-center  flex md:mr-auto">
                  <div className="flex flex-col shrink-0 relative z-0 max-w-full grow ">
                    <div className="">
                      <span className="block min-w-0 max-w-full  text-primary-text break-before-all leading-[1.1875] text-[2rem] font-bold">
                        <h1 className=" text-center md:text-left ">
                          Huu Thong
                        </h1>
                      </span>
                    </div>
                    <div className="pt-3  flex flex-col relative shrink-0 max-w-full">
                      <span className="block min-w-0 max-w-full  text-secondary-text break-before-all leading-[1.1875] text-[0.9375rem] font-normal">
                        <span className="block text-center md:text-left ">
                          89 friends
                        </span>
                      </span>

                    </div>
                    {/* friend list */}
                    <div className="flex shrink-0 relative max-w-full flex-col">
                      <div className="flex flex-col shrink-0 relative  mt-2 -m-[6px] ">
                        <div className="flex -ml-1 p-[6px] mr-1 relative  min-w-0 max-w-full ">
                          <ul className="flex overflow-hidden h-8 w-full pl-2  select-none">
                            {Array.from(Array(8).keys()).map((item, index) => (
                              <li key={index} className="flex-shrink-0 relative -ml-1">
                                <Link href={"#"}>
                                  <div className="inline-block w-8 h-8 rounded-full overflow-hidden ">
                                    <img src="/images/avatar.jpg" alt="" />
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
                <div className="md:grow-0 md:ml-8 md:mt-8 md:mb-4 md:self-end max-w-[400px] self-center">
                  <div className="flex flex-col ">
                    <div className="flex  -mx-1  justify-between items-end">
                      {navigationEditProfile.map((item, index) => (
                        <div key={index} className="mt-2 mx-1">
                          <div className="w-full">
                            <Link href={"#"} aria-label="Add to story" className="p-0 m-0 flex justify-center items-center">
                              <div className={clsx(`flex justify-center items-center px-3 py-2 shrink-0 rounded-md  gap-x-1 ${item.color} ${item.hoverColor}`)}>
                                {/* logo */}
                                <div>
                                  <item.icon className='w-[18px] h-[18px] text-primary-text' />
                                  
                                </div>
                                {/* add to story */}
                                <div className="flex justify-center items-center">
                                  <span className="text-[0.875rem] leading-5 font-semibold min-w-0 max-w-full text-primary-text">
                                    <span >
                                      {item.name}
                                    </span>
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
          <div className="sticky top-[56px] z-auto flex w-full ">
            <div className="flex justify-center items-stretch flex-nowrap shrink-0 grow  bg-secondary-clr  ">
              <div className="flex flex-col max-w-[1218px] relative  min-w-0 flex-1 z-0 px-4 ">
                <div className="flex justify-between items-center relative z-0 border-t-2  border-third-clr">
                  <div className="shrink-0 flex flex-col  min-w-0 max-w-full flex-1 relative ">
                    <div className="flex  overflow-hidden relative z-0">
                      <div className={clsx(`transition-transform ease-quick-move-in `,{
                        'translate-y-0': !flip,
                        '-translate-y-full':flip
                      })}>
                        {/* first nav */}
                        <div className={clsx(`flex justify-between z-0 relative ease-fade-out min-h-[60px] flex-nowrap visible opacity-100  transition-opacity-visible duration-200-1000   `,{
                          'visible opacity-100': !flip,
                          'invisible opacity-0': flip

                        })}>
                          <div className="h-[60px]   overflow-hidden  z-0 flex justify-start items-center flex-wrap ">
                            {navigation.map((item) => (

                              <Link key={item.name} href={'#'} className="group/tab p-0 m-0 inline-block rounded-md relative box-border" role="tab">
                                <div className="flex justify-center min-h-4 items-center h-[60px] shrink-0 px-4 relative">
                                  <span className={clsx(`block min-w-0 max-w-full text-md break-before-all  font-semibold `,{
                                    'text-secondary-text': !item.active,
                                    'text-accent':item.active
                                  })}>
                                    {item.name}
                                  </span>

                                  {item.active ? (
                                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-accent">
                                    </div>
                                  ): null}

                                </div>
                                {/* for display hover */}
                                <div className="bg-hover-overlay  absolute inset-x-0 inset-y-1 rounded-md opacity-0 group-hover/tab:opacity-100">
                                </div>
                              </Link>
                            ))}
                            <div className="inline-block group/tab p-0 m-0  rounded-md relative cursor-pointer "  role="tab">
                              <div className="flex justify-center min-h-4 items-center h-[60px] shrink-0 px-4 relative gap-x-2">
                                <span className={clsx(`block min-w-0 max-w-full text-md break-before-all  font-semibold text-secondary-text`)}>
                                  More
                                </span>
                                <DownIcon className="fill-secondary-text"/>
                              </div>
                              {/* for display hover */}
                              <div className="bg-hover-overlay  absolute inset-x-0 inset-y-1 rounded-md opacity-0 group-hover/tab:opacity-100">
                              </div>
                            </div>
                          </div>

                        </div>
                        {/* this nav will be visible when the first nav is hidden */}
                        <div className={clsx(`absolute flex justify-between items-center w-full h-[60px]   z-0`,{
                          'invisible opacity-0': !flip,
                          'visible opacity-100': flip
                        })}>
                          <div className="flex flex-col  min-w-0 shrink-0 justify-center max-w-full  h-full">
                            <div className="px-2">
                              <Link href={'#'} className="p-0 m-0 w-full flex relative z-0 min-w-0 group/infoNav">
                                <div className="p-2 h-full flex justify-between items-center min-w-0 gap-x-4">
                                  {/* avatar */}
                                  <div className="flex justify-center items-center w-10 h-10 relative rounded-full overflow-hidden">
                                    <img src="/images/avatar.jpg" alt="avtar" />
                                  </div>
                                  {/* name */}
                                  <div className="flex flex-col justify-center items-start min-w-0 max-w-full">
                                    <span className="block min-w-0 max-w-full text-base break-before-all  font-semibold text-secondary-text">
                                      Huu Thong
                                    </span>
                                  </div>
                                </div>
                                <div className="absolute inset-0 w-full h-full rounded-md bg-hover-overlay opacity-0 group-hover/infoNav:opacity-100">

                                </div>
                              </Link>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 grow-0 flex flex-col self-center min-w-0">
                    <div className="flex justify-center items-center px-3 py-2 shrink-0 rounded-md bg-secondary-btn-bg hover:bg-fourth-clr cursor-pointer">
                      <EllipsisHorizontalIcon className="w-5 h-5 text-primary-text"/>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
          {/* main */}
          <div className="min-h-[2000px]">
          
          </div>
        </div>
      </div>
    </div>
  )
}


const navigationEditProfile=[
  {
    name:'Add to story',
    href:'#',
    icon: PlusSmIcon,
    color:'bg-primary-btn-bg',
    hoverColor:'hover:bg-primary-btn-bg-hover'
  },
  {
    name: 'Edit Profile',
    href: '#',
    icon: PencilIconn,
    color: 'bg-secondary-btn-bg',
    hoverColor: 'hover:bg-fourth-clr'
  },
  {
    name: '',
    href: '#',
    icon: ChevronDownIconn,
    color: 'bg-secondary-btn-bg',
    hoverColor: 'hover:bg-fourth-clr'
  },
] 

const navigation=[
  {
    name:'Post',
    href:'#',
    active:true
  },
  {
    name: 'About',
    href: '#',
    active: false
  },
  {
    name: 'Friends',
    href: '#',
    active: false
  }, {
    name: 'Photos',
    href: '#',
    active: false
  }, {
    name: 'Videos',
    href: '#',
    active: false
  },
  {
    name: 'Reels',
    href: '#',
    active: false
  },
]