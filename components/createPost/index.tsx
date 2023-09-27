'use client'
import NextImage from "next/image";
import { VideoCameraIcon, PhotoIcon, FaceSmileIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useRef, useState } from 'react'
import ReactTextareaAutosize from 'react-textarea-autosize'
import { EmojiPicker } from './EmojiPicker'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import   create  from "./action";
import { ChevronDownIcon } from "lucide-react";

const formSchema = z.object({
  message: z.string().min(1, {
    message: "Message is required."
  })
})

export function CreatePost() {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File[]>([]);
  const fileInput = useRef<HTMLInputElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [text, setText] = useState<string>("")
  const scrollStyle = "scrollbar-thumb-fifth-clr scrollbar-track-transparent hover:scrollbar-track-[#2c2d2f]  scrollbar   scrollbar-w-2 scrollbar-thumb-rounded-md";
  const handleCLose = () =>{
    form.reset();
    setIsModalOpen(!isModalOpen);
  } 
  // async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   console.log("object");
  // }
  const selectImage = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message:""
    }
  });
  function onFileChange(e: React.FormEvent<HTMLInputElement>) {
    const files = e.currentTarget.files;
    if (!files) return;
    const newFiles: File[] = e.currentTarget.files ? Array.from(e.currentTarget.files) : [];
    setSelectedFile(newFiles);
  }
  async function onCreate(formData: FormData) {
    await create(formData);
    form.reset();
    setSelectedFile([]);
    setIsModalOpen(!isModalOpen);
    router.refresh();
  }
  return(
    <div className='mb-4   max-w-full w-full relative rounded-lg overflow-x-hidden z-0 shadow-xl bg-secondary-clr '>
      <div className='flex flex-wrap pt-[12px] px-4 pb-[10px] justify-center   '>
        {/* what's on your mind */}
        <div className='flex w-full grow shrink gap-x-2 items-start'>
          <Link href={"/"} className='p-0 m-0 cursor-pointer flex justify-center items-center rounded-full w-[40px] h-[40px] overflow-hidden focus:outline-none focus-visible:ring ring-blue-500 ring-offset-2 ring-offset-white grow-0 shrink-0'
          tabIndex={0}>
            <NextImage src={"/images/avatar.jpg"} alt='avatar' width={40} height={40} />
          </Link>
          <Dialog open={isModalOpen} onOpenChange={handleCLose} >
            <DialogTrigger asChild >
              <div className='py-2 px-3 rounded-2xl select-none flex justify-start items-center relative cursor-pointer focus:outline-none focus-visible:ring ring-blue-500 ring-offset-2 ring-offset-white bg-third-clr hover:bg-fourth-clr min-w-0 basis-0 grow shrink' tabIndex={0}>
                <div className='w-full'>
                  <span className='line-clamp-2 text-secondary-text'>{text === '' ? `what's on your thoughts?` : text}</span>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className='bg-secondary-clr max-h-[80vh] flex flex-col overflow-hidden'>
              <Form {...form}  >
                <form className='' action={onCreate} >
                  <div className='shrink-0'>
                    <DialogHeader>
                      <DialogTitle className='text-lg text-center  pb-4 -mx-4  border-b border-primary-icon-clr-hover font-bold'>Create Post</DialogTitle>
                    </DialogHeader>
                    <div className=' flex items-start pt-4 pb-2'>
                      {/* avatar */}
                      <div className='mr-2'>
                        <Link href={"/"} className=' flex cursor-pointer m-0 p-0 rounded-full overflow-hidden w-[40px] h-[40px]'>
                          <NextImage src="/images/avatar.jpg" alt="avatar " width={40} height={40} />
                        </Link>
                      </div>
                      <div className='grow flex flex-col -mt-2'>
                        <div className='my-1'>
                          <span className='block min-w-0 break-words max-w-full font-semibold text-left text-xs'>
                            <h4 className='mt-1 text-left text-sd'>
                              <Link href={"/"} className='cursor-pointer hover:underline'>
                                Huu Thong
                              </Link>
                            </h4>
                          </span>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  
                    {/* The reason why you need to wrap a div outside to make the overflow-y-auto work is because the overflow-y-auto property only works on block-level elements. By default, a flex container will not expand to fit its contents, so if the contents of the container are larger than the container itself, the overflow-y-auto property may not work as expected. */}
                  <div className='flex flex-col   overflow-x-hidden overflow-y-scroll scrollbar-thumb-fifth-clr scrollbar-track-transparent hover:scrollbar-track-[#2c2d2f]    scrollbar-w-2 scrollbar-thumb-rounded-md scrollbar relative max-h-[50vh]  '>
                    <div>
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className='relative'>
                                <div className=' overflow-y-auto max-h-[768px] min-h-[55px] w-full' >
                                  <div className='  h-full relative '>
                                    <div className=" relative flex  flex-col  border-none rounded-md 
                                        cursor-text text-left text-xl  w-full "> 
                                      <ReactTextareaAutosize
                                        minRows={1}
                                        maxRows={10}
                                        placeholder="what&apos;s on your thoughts?"
                                        // value={text}
                                        {...field}
                                        // onChange={()=>{
                                        //   setText(field.value)
                                        // }}
                                        className={cn('growresize-none bg-transparent text-primary-text overflow-x-hidden overflow-y-scroll',scrollStyle)}
                                        // onChange={onChangeInputText}
                                      />
                                    </div>
                                  </div>
                                </div>
                                
                                <div className='absolute right-0 -bottom-2'>
                                  <div className='p-2 rounded-full  hover:bg-third-clr flex justify-center items-center flex-auto cursor-pointer focus:outline-none focus-visible:ring ring-blue-500 ring-offset-2 ring-offset-white' tabIndex={1}>
                                    <EmojiPicker
                                      onChange={(emoji: string) => field.onChange(`${field.value} ${emoji}`)}
                                    />
                                  </div>
                                </div>
                                
                                
                              </div>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <div className={cn(`p-2 rounded-md border border-disabled-icon my-3 relative overflow-hidden w-full`,{
                        'hidden': selectedFile.length <= 0
                      })}>
                        {selectedFile.length > 0 && selectedFile.map((file) => {  
                          let  url = URL.createObjectURL(file);
                          const img = new Image();
                          img.src = "url";
                          let w,h;
                          let width = 0, height = 0;
                          img.onload = () => {
                            console.log("object");
                            width = img.width;
                            height = img.naturalHeight;
                            console.log("height",height);
                            w= `w-[${width}px]`;
                            h = `h-[${height}px]`;
                            console.log("w" ,w);
                          };
                          return (
                          <li key={file.name} className={`flex max-h-[700px]  relative h-[${h}] h-[500px] `}  >
                            <div className='flex justify-center items-center overflow-hidden absolute pointer-events-auto inset-0'>
                              <div className='relative w-full h-full'>
                                  <NextImage draggable="false" src={url} alt={file.name} 
                                  quality={95}
                                  fill={true}
                                  sizes="100vw"
                                  style={{ objectFit: "cover" }} 
                                  />
                              </div>
                            </div>
                          </li>
                        )
                        })}
                        {/* reset selecting Image */}
                        <div className="absolute top-4 right-4  ">
                          <div className="flex justify-center items-center bg-neutral-700 hover:bg-neutral-600 p-[6px] rounded-full cursor-pointer w-full h-full">
                            <XMarkIcon onClick={()=>
                            setSelectedFile([])
                          } className=' w-6 h-6 ' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* post */}
                  <div className="min-h-0 shrink-0 grow">
                    <div className='pb-1 mt-2 px-3 rounded-md flex justify-between items-center border border-border-primary-icon-clr-hover'>
                      <h4 className='text-sd cursor-pointer'>Add to your post</h4>
                      <div className='flex'>
                        <div className='relative p-2 rounded-full  hover:bg-third-clr flex justify-center items-center flex-auto cursor-pointer focus:outline-none focus-visible:ring ring-blue-500 ring-offset-2 ring-offset-white ' tabIndex={1}
                          onClick={selectImage}
                        > 
                          <input
                            placeholder='pick files'
                            className=' w-[0.1px] h-[0.1px] z-[-1] opacity-0 absolute overflow-hidden appearance-none cursor-default'
                            type="file" multiple accept='image/jpeg,image/png,image/webp,image/gif,video/mp4,video/quicktime'
                            name="imageUrl"
                            ref={fileInput} 
                            onChange={onFileChange}
                          />
                          <PhotoIcon className='w-6 h-6 stroke-2 stroke-green-500' />
                        </div>

                      </div>
                    </div>
                    <Button type='submit'  className='w-full rounded-md mt-4  py-2 text-center bg-blue-600 hover:bg-blue-500 cursor-pointer text-base font-semibold grow-0'>
                      <span>Post</span>
                    </Button>
                  </div>
                  
                  </form>
              </Form>
            </DialogContent>
            
          </Dialog>
        </div>
        {/* live/video/phto/ feeling */}
        <div className='border-t border-t-third-clr flex  w-full  overflow-hidden justify-stretch flex-wrap pt-2 pb-1 mt-3 '>
          <div className='p-2 rounded-lg  hover:bg-third-clr flex justify-center items-center  grow flex-auto cursor-pointer focus:outline-none focus-visible:ring ring-blue-500 ring-offset-2 ring-offset-white' tabIndex={1}>
            <div className='flex justify-center items-center overflow-hidden gap-2'>
              <span>
                <VideoCameraIcon className='w-6 h-6 stroke-2 stroke-red-500' />
              </span>
              <div className='flex justify-center items-center font-semibold break-words text-[15px] max-w-full min-w-0 text-start m-0 p-0'>
                  <span className='inline-block relative  overflow-x-hidden text-ellipsis whitespace-nowrap leading-5 text-secondary-text'>Live Video</span>
              </div>
            </div>
          </div>
          <div className='p-2 rounded-lg grow hover:bg-third-clr flex justify-center items-center flex-auto cursor-pointer focus:outline-none focus-visible:ring ring-blue-500 ring-offset-2 ring-offset-white' tabIndex={1} onClick={()=>{
            setIsModalOpen(!isModalOpen);
          }}>
            <div className='flex justify-center items-center overflow-hidden gap-2'>
              <span>
                <PhotoIcon className='w-6 h-6 stroke-2 stroke-green-500' />
              </span>
              <div className='flex justify-center items-center font-semibold break-words text-[15px] max-w-full min-w-0 text-start m-0 p-0'>
                <span className='inline-block relative  overflow-x-hidden text-ellipsis whitespace-nowrap leading-5 text-secondary-text'>Photo/Video</span>
              </div>
            </div>
          </div>
          <div className=' hidden xs:flex p-2 grow rounded-lg hover:bg-third-clr  justify-center items-center flex-auto cursor-pointer focus:outline-none focus-visible:ring ring-blue-500 ring-offset-2 ring-offset-white ' tabIndex={1}>
            <div className='flex justify-center items-center overflow-hidden gap-2'>
              <span>
                <FaceSmileIcon className='w-6 h-6 stroke-yellow-500 stroke-2' />
              </span>
              <div className='flex justify-center items-center font-semibold break-words text-[15px] max-w-full min-w-0 text-start m-0 p-0'>
                <span className='inline-block relative  overflow-x-hidden text-ellipsis whitespace-nowrap leading-5 text-secondary-text'>Feeling/Activity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}