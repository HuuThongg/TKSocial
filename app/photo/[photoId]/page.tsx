'use client'

import Modal from "@/components/ui/modal"
import { useEffect, useRef } from "react";

export const onlineContacts = [
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
export interface ImageProps {
  id: number
  height: string
  width: string
  src: string
  format: string
  blurDataUrl?: string
}
const images: ImageProps[] = onlineContacts.map((contact,index) => ({
  id: index, // Generating a random ID for each image
  height: '100', // Example height value (you can adjust as needed)
  width: '100', // Example width value (you can adjust as needed)
  src: contact.url,
  format: contact.url.endsWith('.png') ? 'png' : 'jpg', // Deriving image format from URL
}));


import { createGlobalState } from 'react-hooks-global-state'

const initialState = { photoToScrollTo: null }
const { useGlobalState } = createGlobalState(initialState)

export const useLastViewedPhoto = () => {
  return useGlobalState('photoToScrollTo')
}


export default  function PhotoPage({ params }:{params:{photoId:string}}){
  const photoId = params.photoId
  
  const [lastViewedPhoto, setLastViewedPhoto] = useGlobalState('photoToScrollTo')

  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
    if (lastViewedPhoto && !photoId ) {
      if (lastViewedPhotoRef && lastViewedPhotoRef.current){

        lastViewedPhotoRef.current.scrollIntoView({ block: 'center' })
        setLastViewedPhoto(null)
      }
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto])

  return(
    <div className="relative left-[60px] mr-[60px] lg:left-[300px] lg:mr-[300px]   flex   min-h-0  origin-top-left flex-col   ">
      {/* <main className="mx-auto max-w-[1960px] p-4">
        <Carousel currentPhoto={currentPhoto} index={index} />
      </main> */}
      <Modal
        images={images}
        onClose={() => 
          setLastViewedPhoto(null)
        }
        
      />
      <div>
        {params.photoId}
      </div>
    </div>  
  )
}