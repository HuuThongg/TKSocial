'use client'
import { useState, useRef, useEffect, forwardRef, Fragment } from "react";
import clsx from "clsx";

import {
  useFloating,
  useInteractions,
  useListNavigation,
  useClick,
  useDismiss,
  FloatingFocusManager,
  useRole,
  autoUpdate,
  useId,
  useFloatingPortalNode,
} from "@floating-ui/react";
import type { Placement } from "@floating-ui/react";
import Image from 'next/image'
import Link from 'next/link'

import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid'

type OptionProps = React.HTMLAttributes<HTMLDivElement> & {
  name: string;
  active: boolean;
  selected: boolean;
  children: React.ReactNode;
  img: string;
  url: string;
  handleDelete: (name: string) => void;
}

const Options = forwardRef<HTMLDivElement, OptionProps>(function Options({ handleDelete, img, url, name, active, selected, children, ...props }, ref) {
  const id = useId();
  return (


        <div key={name} className='w-full'
          {...props}
          ref={ref}
          role="option"
          aria-selected={selected}
        >
          <div className={clsx('rounded-[8px] cursor-pointer flex px-1 py-[2px] text-left relative overflow-hidden my-0 text-primary-text text-xs leading-5 space-y-1  hover:bg-third-clr', {
            'bg-third-clr': active,
          })}>
            <Link href={url} className='w-full'>
              <div className='flex items-center justify-between z-0 relative w-full'>
                <div className='p-[6px] flex shrink-0 flex-col select-none'>
                  <div className='flex items-center justify-center w-[36px] h-[36px] rounded-full overflow-hidden'>
                    <Image src={img} alt="avatar" width={40} height={40} />
                  </div>
                </div>
                <div className='flex flex-col grow shrink min-w-0 basis-0   max-w-full p-[6px] '>
                  <div className='my-[5px]'>
                    <span>
                      {name}
                    </span>
                  </div>
                </div>
                {/* delete */}
                <div className='flex flex-col p-[6px] hover:bg-primary-icon-clr-hover min-w-0 max-w-full rounded-full'>
                  <div className='flex items-center justify-center w-[20px] h-[20px] rounded-full overflow-hidden cursor-pointer'
                    onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                      event.stopPropagation();
                      handleDelete(name);
                    }}
                  >
                    <XMarkIcon />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )
    })

    const Search = () => {

      const [onlineContacts, setOnlineContacts] = useState<OnlineContact[]>(onlineContactsData);

      const [open, setOpen] = useState(false);
      const [search, setSearch] = useState("");
      const [alternativeSearch, setAlternativeSearch] = useState("")
      const [selectedPerson, setSelectedPerson] = useState<string | null>(null);
      const [activeIndex, setActiveIndex] = useState<number | null>(null);
      const [placement, setPlacement] = useState<Placement | null>(null);
      const listRef = useRef<Array<HTMLDivElement | null>>([]);

      const noResultsId = useId();
      const buttonId = useId();
      const listboxId = useId();

      const { refs, context, placement: resultantPlacement } = useFloating({
        open,
          placement: placement ?? "bottom-start",
    onOpenChange: setOpen,

    whileElementsMounted: autoUpdate,
  })

  // handles opening the floating element via clicking on the search button
  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useDismiss(context),
    useRole(context, {
      role: "listbox"
    })
  ]);

  const handleOnNavgiate = () => {
    setActiveIndex
  }

  // handle the list navigation where the  reference is the inner input . not the button that opens the floating element
  const {
    getReferenceProps: getInputProps,
    getFloatingProps: getListFloatingProps,
    getItemProps
  } = useInteractions([
    useListNavigation(context, {
      listRef,
      // onNavigate: open ? setActiveIndex : undefined,
      onNavigate(index) {
        setActiveIndex(index);
        // if (index !== null){
        //   setAlternativeSearch(filteredSearch[index].name)
        // }
      },
      activeIndex,
      cols: 1,
      orientation: "vertical",
      loop: true,
      focusItemOnOpen: false,
      virtual: true,
      allowEscape: true,
      focusItemOnHover: false,
    })
  ]);

  useEffect(() => {
    if (open) {
      setPlacement(resultantPlacement)
    } else {
      // setSearch("");
      setActiveIndex(null);
      setPlacement(null);
    }
  }, [open, resultantPlacement]);

  const filteredSearch = onlineContacts.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()));
  const handlePersonClick = (index: number) => {
    const name = filteredSearch[index].name
    setSelectedPerson(name);
    setOpen(false);
    setSearch(name)
    // setAlternativeSearch("");
  }

  const handleKeydown = (event) => {
    if (event.key === "Enter" && activeIndex !== null) {
      event.preventDefault();
      handlePersonClick(activeIndex);
      // setAlternativeSearch("");

    }
  }

  const handleInputSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActiveIndex(null);
    setSearch(event.target.value);
  }

  const handleDelete = (name: string) => {

    const updatedContacts = onlineContacts.filter((person) => person.name.toLowerCase() !== name.toLowerCase());
    setOnlineContacts(updatedContacts);
    console.log("online");
  }


  const [innerWidth, setInnerWidth] = useState<number>(0)

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let w = `40px`;

  if (innerWidth < 692 && open) {
    // i want to render width dynamicly insteading of hard code  w-[500px]. if this is true then we need to render the search bar with width: 40px;
    w = `500px`;

  } else {
    w = `40px`;
  }

  return (
    <div className='  min-w-0 flex justify-center items-center basis-[744px]  px-0 lg:px-8 w-full grow' >
      <div className={`  w-[${w}] max-w-full  ss:max-w-[320px] md:max-w-[532px] 2sm:w-[680px] lg:w-[680px] lg:max-w-full h-full z-[4] `}>
        {/* transition data- insaimatedlayout */}
        <div className='relative min-h-0 h-full   origin-top-left' >
          <div className='w-full flex flex-col '>
            {/* search form */}
            <div className='flex h-[56px] items-center w-full'>
              <label htmlFor="" className={clsx('rounded-[50px] flex items-stretch w-full relative outline-none min-h-[40px] min-w-[40px] text-xs font-semibold align-middle hover:bg-fourth-clr bg-third-clr')}
                ref={refs.setReference}

                id={buttonId}
                {...getReferenceProps()}
                aria-label="choose a search"
                aria-describedby="search input label"
              >
                <span className='flex items-center whitespace-nowrap pointer-events-none ease-linear pl-3'>
                  <MagnifyingGlassIcon className='w-4 h-4 text-primary-text' />
                </span>
                <input type="text" className={clsx(`w-full bg-transparent grow shrink pt-[7px] px-2 pb-[9px]  rounded-[50px] cursor-text text-left basis-auto text-[15px] h-[40px]  font-normal`, {
                  'text-secondary-text': !open,
                  'text-primary-text': open,
                })} placeholder='Search T&K Social Media'
                  // value={ alternativeSearch !== "" ? alternativeSearch : search} 
                  value={search}

                  {...getInputProps({
                    ref: refs.setReference,
                    onKeyDown: handleKeydown,
                    onChange: handleInputSearchChange,
                  })}
                />
              </label>
            </div>
            {/* add box shadow */}
            {open && (
              <FloatingFocusManager initialFocus={-1} context={context} modal={true} order={['content']} visuallyHiddenDismiss>
                <div
                  className="shadow-xl"
                  ref={refs.setFloating}
                  aria-describedby={buttonId}
                >

                  <div className={clsx('mt-2 px-2 flex  rounded-[8px] bg-secondary-clr  max-h-[calc(100vh_-_80px)] shrink')}>
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
                          <ul className={'outline-none border-none'}>
                            {filteredSearch.map(({ name, img, url }, index) => (
                              <Options
                                handleDelete={handleDelete}
                                key={name}
                                name={name}
                                img={img}
                                url={url}
                                ref={(node) => {
                                  if (listRef.current) {
                                    listRef.current[index] = node as HTMLDivElement;
                                  }
                                }}
                                selected={selectedPerson === name}
                                active={activeIndex === index}
                                {...getItemProps({
                                  onClick: () => {
                                    console.log("click");
                                    handlePersonClick(index)

                                  }
                                })}
                              >
                                {name}
                              </Options>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {filteredSearch.length === 0 && (
                    <p
                      key={search}
                      id={noResultsId}
                      className=""
                      role="region"
                      aria-atomic="true"
                      aria-live="assertive"
                    >
                      No results
                    </p>
                  )}
                </div>
              </FloatingFocusManager>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Search


type OnlineContact = {
  name: string;
  url: string;
  img: string;
};

const onlineContactsData: OnlineContact[] = [
  {
    name: 'Kim Chi',
    url: '#',
    img: '/images/contact/kimchi.jpg',
  },
  {
    name: 'Tran Thanh Nha',
    url: '#',
    img: '/images/contact/tranthanhnha.jpg',
  },
  {
    name: 'Trang Duong',
    url: '#',
    img: '/images/contact/trangduong.jpg',
  },
  {
    name: 'Duc ri',
    url: '#',
    img: '/images/contact/ducri.jpg',
  },
  {
    name: 'Diem Quynh',
    url: '#',
    img: '/images/contact/diemquynh.jpg',
  },
  {
    name: 'Duyen',
    url: '#',
    img: '/images/contact/duyen.jpg',
  },
  {
    name: 'Trang La',
    url: '#',
    img: '/images/contact/trangla.png',
  },
  {
    name: 'Duy Hung',
    url: '##',
    img: '/images/contact/duyhuynh.png',
  },
  // {
  //   name: 'An Khuong',
  //   href: '##',
  //   url: '/images/contact/ankhuong.jpg',
  // },
  // {
  //   name: 'Kieu Trinh',
  //   href: '##',
  //   url: '/images/contact/kieutrinh.jpg',
  // },
  // {
  //   name: 'Hoai Bao',
  //   href: '##',
  //   url: '/images/contact/hoaibao.jpg',
  // },
  // {
  //   name: 'My lan',
  //   href: '##',
  //   url: '/images/contact/mylan.jpg',
  // },
  // {
  //   name: 'Hung Duong',
  //   href: '##',
  //   url: '/images/contact/hungduong.jpg',
  // },
];

