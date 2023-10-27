'use client';
import { useState, useRef, useEffect, forwardRef, Fragment } from 'react';
import clsx from 'clsx';

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
} from '@floating-ui/react';
import type { Placement } from '@floating-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';

type OptionProps = React.HTMLAttributes<HTMLDivElement> & {
  name: string;
  active: boolean;
  selected: boolean;
  children: React.ReactNode;
  img: string;
  url: string;
  handleDelete: (name: string) => void;
};

const Options = forwardRef<HTMLDivElement, OptionProps>(function Options(
  { handleDelete, img, url, name, active, selected, children, ...props },
  ref,
) {
  const id = useId();
  return (
    <div
      key={name}
      className="w-full"
      {...props}
      ref={ref}
      id={`option-${id}`}
      role="option"
      aria-selected={selected ? 'true' : 'false'}
    >
      <div
        className={clsx(
          'relative my-0 flex cursor-pointer space-y-1 overflow-hidden rounded-[8px] px-1 py-[2px] text-left text-xs leading-5 text-primary-text  hover:bg-third-clr',
          {
            'bg-third-clr': active,
          },
        )}
      >
        <Link href={url} className="w-full ">
          <div className="relative z-0 flex w-full items-center justify-between ">
            <div className="flex shrink-0 select-none flex-col p-[6px]">
              <div className="flex h-[36px] w-[36px] items-center justify-center overflow-hidden rounded-full">
                <Image src={img} alt="avatar" width={40} height={40} />
              </div>
            </div>
            <div className="flex min-w-0 max-w-full shrink grow basis-0   flex-col p-[6px] ">
              <div className="my-[5px]">
                <span>{name}</span>
              </div>
            </div>
            {/* delete */}
            <div className="flex min-w-0 max-w-full flex-col rounded-full p-[6px] hover:bg-primary-icon-clr-hover">
              <div
                className="flex h-[20px] w-[20px] cursor-pointer items-center justify-center overflow-hidden rounded-full"
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
  );
});

const Search = () => {
  const [onlineContacts, setOnlineContacts] =
    useState<OnlineContact[]>(onlineContactsData);

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [alternativeSearch, setAlternativeSearch] = useState('');
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [placement, setPlacement] = useState<Placement | null>(null);
  const listRef = useRef<Array<HTMLDivElement | null>>([]);

  const noResultsId = useId();
  const buttonId = useId();
  const listboxId = useId();

  const {
    refs,
    context,
    placement: resultantPlacement,
  } = useFloating({
    open,
    placement: placement ?? 'bottom-start',
    onOpenChange: setOpen,

    whileElementsMounted: autoUpdate,
  });

  // handles opening the floating element via clicking on the search button
  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useDismiss(context),
    useRole(context, {
      role: 'listbox',
    }),
  ]);

  const handleOnNavgiate = () => {
    setActiveIndex;
  };

  // handle the list navigation where the  reference is the inner input . not the button that opens the floating element
  const {
    getReferenceProps: getInputProps,
    getFloatingProps: getListFloatingProps,
    getItemProps,
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
      orientation: 'vertical',
      loop: true,
      focusItemOnOpen: false,
      virtual: true,
      allowEscape: true,
      focusItemOnHover: false,
    }),
  ]);

  useEffect(() => {
    if (open) {
      setPlacement(resultantPlacement);
    } else {
      // setSearch("");
      setActiveIndex(null);
      setPlacement(null);
    }
  }, [open, resultantPlacement]);

  const filteredSearch = onlineContacts.filter(({ name }) =>
    name.toLowerCase().includes(search.toLowerCase()),
  );
  const handlePersonClick = (index: number) => {
    const name = filteredSearch[index].name;
    setSelectedPerson(name);
    setOpen(false);
    setSearch(name);
    // setAlternativeSearch("");
  };

  const handleKeydown = (event) => {
    if (event.key === 'Enter' && activeIndex !== null) {
      event.preventDefault();
      handlePersonClick(activeIndex);
      // setAlternativeSearch("");
    }
  };

  const handleInputSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setActiveIndex(null);
    setSearch(event.target.value);
  };

  const handleDelete = (name: string) => {
    const updatedContacts = onlineContacts.filter(
      (person) => person.name.toLowerCase() !== name.toLowerCase(),
    );
    setOnlineContacts(updatedContacts);
    console.log('online');
  };

  const [innerWidth, setInnerWidth] = useState<number>(0);

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
    <div className="  flex w-full min-w-0 grow basis-[744px]  items-center justify-center px-0 lg:px-8">
      <div
        className={`  w-[${w}] z-[4]  h-full max-w-full ss:max-w-[320px] 2sm:w-[680px] md:max-w-[532px] lg:w-[680px] lg:max-w-full `}
      >
        {/* transition data- insaimatedlayout */}
        <div className="relative h-full min-h-0   origin-top-left">
          <div className="flex w-full flex-col ">
            {/* search form */}
            <div className="flex h-[56px] w-full items-center">
              <label
                htmlFor=""
                className={clsx(
                  'relative flex min-h-[40px] w-full min-w-[40px] items-stretch rounded-[50px] bg-third-clr align-middle text-xs font-semibold outline-none hover:bg-fourth-clr',
                )}
                ref={refs.setReference}
                id={buttonId}
                {...getReferenceProps()}
                aria-label="choose a search"
                aria-describedby="search input label"
              >
                <span className="pointer-events-none flex items-center whitespace-nowrap pl-3 ease-linear">
                  <MagnifyingGlassIcon className="h-4 w-4 text-primary-text" />
                </span>
                <input
                  type="text"
                  className={clsx(
                    `h-[40px] w-full shrink grow basis-auto cursor-text rounded-[50px]  bg-transparent px-2 pb-[9px] pt-[7px] text-left text-[15px]  font-normal`,
                    {
                      'text-secondary-text': !open,
                      'text-primary-text': open,
                    },
                  )}
                  placeholder="Search T&K Social Media"
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
              <FloatingFocusManager
                initialFocus={-1}
                context={context}
                modal={true}
                order={['content']}
                visuallyHiddenDismiss
              >
                <div
                  className="shadow-xl"
                  ref={refs.setFloating}
                  aria-describedby={buttonId}
                >
                  <div
                    className={clsx(
                      'mt-2 flex max-h-[calc(100vh_-_80px)]  shrink rounded-[8px]  bg-secondary-clr px-2',
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
                          <ul className={'border-none outline-none'}>
                            {filteredSearch.map(({ name, img, url }, index) => (
                              <Options
                                handleDelete={handleDelete}
                                key={name}
                                name={name}
                                img={img}
                                url={url}
                                ref={(node) => {
                                  if (listRef.current) {
                                    listRef.current[index] =
                                      node as HTMLDivElement;
                                  }
                                }}
                                selected={selectedPerson === name}
                                active={activeIndex === index}
                                {...getItemProps({
                                  onClick: () => {
                                    console.log('click');
                                    handlePersonClick(index);
                                  },
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
  );
};

export default Search;

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
