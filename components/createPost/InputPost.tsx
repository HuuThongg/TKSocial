'use client'

import { useRef, useState } from 'react'
import create from './action';
import { GrImage } from 'react-icons/gr'

export type ImageDimensions = {
  width: number;
  height: number;
};

export default function InputPost() {
  const [message, setMessage] = useState('a');
  const fileInput = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<string[]>([]);
  const [file, setFile] = useState<File[]>([]);
  const [imageDimensions, setImageDimensions] = useState<ImageDimensions>({ width: 0, height: 0 });

  
  async function onCreate(formData: FormData) {
    await create({message});
    console.log("dsadsa");
    // console.log(formData);
    // setMessage(res.message)
  }
  const selectImage = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  
  function onFileChange (e: React.FormEvent<HTMLInputElement>) {
    const files = e.currentTarget.files;
    if (!files) return;
    const fileList: File[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      console.log(file);
      fileList.push(file!);

      const reader = new FileReader();
      reader.onload = () => {
        console.log(reader);
        setImages(prevImages => {
          if (typeof reader.result === 'string') {
            return [...prevImages, reader.result];
          }
          return prevImages;
        });

        // if (i == 0) {

        //   const img = new Image();
        //   img.onload = () => {
        //     const width = img.width;
        //     const height = img.height;
        //     setImageDimensions({ width, height });
        //   }
        //   if (typeof reader.result === 'string') {
        //     img.src = reader.result;
        //   }
        // }
      }
      if (file) {
        reader.readAsDataURL(file);
      }
    }
    setFile(fileList);
  }
  return (
    <div>

      <form action={onCreate}>
        {/* <input type="text" name="item" /> */}
        
        <input
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <div className='flex items-center justify-center mt-3'>
          <div className='w-[36px] h-[36px]  rounded-[9999px] flex items-center justify-center cursor-pointer overflow-hidden hover:bg-interHoverIcon active:bg-interHoverIconActive  '
            onClick={selectImage
            }
          >
            <div className='flex items-center justify-center grow '>
              <GrImage />
            </div>
          </div>

          <input
            placeholder='pick files'
            className=' w-[0.1px] h-[0.1px] z-[-1] opacity-0 absolute overflow-hidden appearance-none cursor-default'
            type="file" multiple accept='image/jpeg,image/png,image/webp,image/gif,video/mp4,video/quicktime' onChange={onFileChange}
            ref={fileInput}
          />
          {/* BsEmojiSmile */}
        </div>

        <button type="submit">type here</button>
      </form>
      {images.length > 0 && images.map((url) => (
        <div key={url} className='w-[500px] h-[500px]'>
          <img src={url} alt="" className='w-full h-full' />
        </div>)
      )};
    </div>
  )
}