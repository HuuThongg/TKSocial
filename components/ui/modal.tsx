'use client'
import { Dialog } from '@headlessui/react'
import { motion } from 'framer-motion'
import { useParams, useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import useKeypress from 'react-use-keypress'
import { useSearchParams } from 'next/navigation'
import SharedModal from './share-modal'
import { current } from 'tailwindcss/colors'

export interface ImageProps {
  id: number
  height: string
  width: string
  src: string
  format: string
  blurDataUrl?: string
}

export default function Modal({
  images,
  onClose,
}: {
  images: ImageProps[]
  onClose: () => void
}) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const params = useParams()
  const photoId = params?.photoId
  let index = Number(photoId)
  console.log("index: " + index);
  const [direction, setDirection] = useState(0)
  const [curIndex, setCurIndex] = useState(index)

  function handleClose() {
    router.push('/')
    onClose()
  }

  function changePhotoId(newVal: number) {
    console.log("newVal" + newVal);
    if (newVal > index) {
      setDirection(1)
    } else {
      setDirection(-1)
    }
    setCurIndex(newVal)
    router.push(`/photo/${newVal}`)
  }

  useKeypress('ArrowRight', () => {
    if (index + 1 < images.length) {
      changePhotoId(index + 1)
    }
  })

  useKeypress('ArrowLeft', () => {
    if (index > 0) {
      changePhotoId(index - 1)
    }
  })
  console.log("current Index: " + curIndex);
  return (
    <Dialog
      static
      open={true}
      onClose={handleClose}
      initialFocus={overlayRef}
      className="fixed inset-0 z-10 flex items-center justify-center"
    >
      <Dialog.Overlay
        ref={overlayRef}
        as={motion.div}
        key="backdrop"
        className="fixed inset-0 z-30 bg-black/60 backdrop-blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <SharedModal
        index={curIndex}
        direction={direction}
        images={images}
        changePhotoId={changePhotoId}
        closeModal={handleClose}
        navigation={true}
      />
    </Dialog>
  )
}