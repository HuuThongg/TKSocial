'use client'

import Image from "next/image";
import Link from "next/link"

const contacts = [
  {
    name: 'Kim Chi',
    href: '#',
    url: '/images/contact/kimchi.jpg',
    haveStories: true,
    seen: true,
  },
  {
    name: 'Tran Thanh Nha',
    href: '##',
    url: '/images/contact/tranthanhnha.jpg',
    haveStories: true,
    seen: false,
  },
  {
    name: 'Trang Duong',
    href: '##',
    url: '/images/contact/trangduong.jpg',
    haveStories: false,
    seen: false,
  },
  {
    name: 'Duc ri',
    href: '##',
    url: '/images/contact/ducri.jpg',
    haveStories: false,
    seen: false,
  },
  {
    name: 'Diem Quynh',
    href: '##',
    url: '/images/contact/diemquynh.jpg',
    haveStories: true,
    seen: false,
  },
  {
    name: 'Duyen',
    href: '##',
    url: '/images/contact/duyen.jpg',
    haveStories: false,
    seen: false,
  },
  {
    name: 'Trang La',
    href: '##',
    url: '/images/contact/trangla.png',
    haveStories: false,
    seen: false,
  },
  {
    name: 'Duy Hung',
    href: '##',
    url: '/images/contact/duyhuynh.png',
    haveStories: false,
    seen: false,
  },
  {
    name: 'An Khuong',
    href: '##',
    url: '/images/contact/ankhuong.jpg',
    haveStories: false,
    seen: false,
  },
  {
    name: 'Kieu Trinh',
    href: '##',
    url: '/images/contact/kieutrinh.jpg',
    haveStories: false,
    seen: false,
  },
  {
    name: 'Hoai Bao',
    href: '##',
    url: '/images/contact/hoaibao.jpg',
    haveStories: true,
    seen: false,
  },
  {
    name: 'My lan',
    href: '##',
    url: '/images/contact/mylan.jpg',
    haveStories: false,
    seen: false,
  },
  {
    name: 'Hung Duong',
    href: '##',
    url: '/images/contact/hungduong.jpg',
    haveStories: true,
    seen: true,
  },
];
const ImageSection = ({postId,imageUrl}:{postId:number; imageUrl:string}) => {
  return (
    <div className="relative">
      {/* <Link href={`/photo/${postId}`} className="relative m-0 min-h-0 min-w-0 p-0"
      > */}
      <div className="relative m-0 min-h-0 min-w-0 p-0">

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black">
          {/* use hook to measure element dimension */}
          <div className="w-[calc((100vh-325px)*1.1257)] min-w-[500px] max-w-full ">
            <div className="relative h-0 overflow-hidden pt-[88.83333%]">
              <div className="absolute left-0 top-0 h-full w-full">
                <div className="flex h-full w-full items-center justify-center  object-cover">
                  <Link
                    href={`/?photoId=${postId}`}
                    as={`/photo/${postId}`}
                    
                  >
                    <Image
                      style={{ transform: 'translate3d(0, 0, 0)' }}
                      src={imageUrl}
                      alt="content"
                      width={800}
                      height={800}
                      sizes="(max-width: 640px) 100vw,
                      (max-width: 1280px) 50vw,
                      (max-width: 1536px) 33vw,
                      25vw"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </Link> */}
    </div>

    </div>
  )
}

export default ImageSection
