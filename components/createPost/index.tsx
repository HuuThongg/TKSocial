'use client';
import NextImage from 'next/image';
import {
  VideoCameraIcon,
  PhotoIcon,
  FaceSmileIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useRef, useState } from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { EmojiPicker } from './EmojiPicker';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import create from './action';
import { ChevronDownIcon } from 'lucide-react';

const formSchema = z.object({
  message: z.string().min(1, {
    message: 'Message is required.',
  }),
});

export function CreatePost() {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File[]>([]);
  const fileInput = useRef<HTMLInputElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [text, setText] = useState<string>('');
  const scrollStyle =
    'scrollbar-thumb-fifth-clr scrollbar-track-transparent hover:scrollbar-track-[#2c2d2f]  scrollbar   scrollbar-w-2 scrollbar-thumb-rounded-md';
  const handleCLose = () => {
    form.reset();
    setIsModalOpen(!isModalOpen);
  };
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
      message: '',
    },
  });
  function onFileChange(e: React.FormEvent<HTMLInputElement>) {
    const files = e.currentTarget.files;
    if (!files) return;
    const newFiles: File[] = e.currentTarget.files
      ? Array.from(e.currentTarget.files)
      : [];
    setSelectedFile(newFiles);
  }
  async function onCreate(formData: FormData) {
    await create(formData);
    form.reset();
    setSelectedFile([]);
    setIsModalOpen(!isModalOpen);
    router.refresh();
  }
  return (
    <div className="relative   z-0 mb-4 w-full max-w-full overflow-x-hidden rounded-lg bg-secondary-clr shadow-xl ">
      <div className="flex flex-wrap justify-center px-4 pb-[10px] pt-[12px]   ">
        {/* what's on your mind */}
        <div className="flex w-full shrink grow items-start gap-x-2 ">
          <Link
            href={'/'}
            className="m-0 flex h-[40px] w-[40px] shrink-0 grow-0 cursor-pointer items-center justify-center overflow-hidden rounded-full p-0 ring-blue-500 ring-offset-2 ring-offset-white focus:outline-none focus-visible:ring"
            tabIndex={0}
          >
            <NextImage
              src={'/images/avatar.jpg'}
              alt="avatar"
              width={40}
              height={40}
            />
          </Link>
          <Dialog open={isModalOpen} onOpenChange={handleCLose} >
            <DialogTrigger asChild>
              <div
                className="relative flex min-w-0 shrink grow basis-0 cursor-pointer select-none items-center justify-start rounded-2xl bg-third-clr px-3 py-2 ring-blue-500 ring-offset-2 ring-offset-white hover:bg-fourth-clr focus:outline-none focus-visible:ring"
                tabIndex={0}
              >
                <div className="w-full">
                  <span className="line-clamp-2 text-secondary-text">
                    {text === '' ? `what's on your thoughts?` : text}
                  </span>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="flex max-h-[80vh] flex-col overflow-hidden bg-secondary-clr">
              <Form {...form}>
                <form className="" action={onCreate}>
                  <div className="shrink-0">
                    <DialogHeader>
                      <DialogTitle className="-mx-4 border-b  border-primary-icon-clr-hover pb-4  text-center text-lg font-bold">
                        Create Post
                      </DialogTitle>
                    </DialogHeader>
                    <div className=" flex items-start pb-2 pt-4">
                      {/* avatar */}
                      <div className="mr-2">
                        <Link
                          href={'/'}
                          className=" m-0 flex h-[40px] w-[40px] cursor-pointer overflow-hidden rounded-full p-0"
                        >
                          <NextImage
                            src="/images/avatar.jpg"
                            alt="avatar "
                            width={40}
                            height={40}
                          />
                        </Link>
                      </div>
                      <div className="-mt-2 flex grow flex-col">
                        <div className="my-1">
                          <span className="block min-w-0 max-w-full break-words text-left text-xs font-semibold">
                            <h4 className="mt-1 text-left text-sd">
                              <Link
                                href={'/'}
                                className="cursor-pointer hover:underline"
                              >
                                Huu Thong
                              </Link>
                            </h4>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* The reason why you need to wrap a div outside to make the overflow-y-auto work is because the overflow-y-auto property only works on block-level elements. By default, a flex container will not expand to fit its contents, so if the contents of the container are larger than the container itself, the overflow-y-auto property may not work as expected. */}
                  <div className="relative flex   max-h-[50vh] flex-col overflow-x-hidden overflow-y-scroll scrollbar    scrollbar-track-transparent scrollbar-thumb-fifth-clr scrollbar-thumb-rounded-md scrollbar-w-2 hover:scrollbar-track-[#2c2d2f]  ">
                    <div>
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="relative">
                                <div className=" max-h-[768px] min-h-[55px] w-full overflow-y-auto">
                                  <div className="  relative h-full ">
                                    <div
                                      className=" relative flex  w-full  cursor-text flex-col 
                                        rounded-md border-none text-left  text-xl "
                                    >
                                      <ReactTextareaAutosize
                                        minRows={1}
                                        maxRows={10}
                                        placeholder="what's on your thoughts?"
                                        // value={text}
                                        {...field}
                                        // onChange={()=>{
                                        //   setText(field.value)
                                        // }}
                                        className={cn(
                                          'growresize-none overflow-x-hidden overflow-y-scroll bg-transparent text-primary-text',
                                          scrollStyle,
                                        )}
                                        // onChange={onChangeInputText}
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="absolute -bottom-2 right-0">
                                  <div
                                    className="flex flex-auto  cursor-pointer items-center justify-center rounded-full p-2 ring-blue-500 ring-offset-2 ring-offset-white hover:bg-third-clr focus:outline-none focus-visible:ring"
                                    tabIndex={1}
                                  >
                                    <EmojiPicker
                                      onChange={(emoji: string) =>
                                        field.onChange(
                                          `${field.value} ${emoji}`,
                                        )
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <div
                        className={cn(
                          `relative my-3 w-full overflow-hidden rounded-md border border-disabled-icon p-2`,
                          {
                            hidden: selectedFile.length <= 0,
                          },
                        )}
                      >
                        {selectedFile.length > 0 &&
                          selectedFile.map((file) => {
                            let url = URL.createObjectURL(file);
                            const img = new Image();
                            img.src = 'url';
                            let w, h;
                            let width = 0,
                              height = 0;
                            img.onload = () => {
                              console.log('object');
                              width = img.width;
                              height = img.naturalHeight;
                              console.log('height', height);
                              w = `w-[${width}px]`;
                              h = `h-[${height}px]`;
                              console.log('w', w);
                            };
                            return (
                              <li
                                key={file.name}
                                className={`relative flex  max-h-[700px] h-[${h}] h-[500px] `}
                              >
                                <div className="pointer-events-auto absolute inset-0 flex items-center justify-center overflow-hidden">
                                  <div className="relative h-full w-full">
                                    <NextImage
                                      draggable="false"
                                      src={url}
                                      alt={file.name}
                                      quality={95}
                                      fill={true}
                                      sizes="100vw"
                                      style={{ objectFit: 'cover' }}
                                    />
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        {/* reset selecting Image */}
                        <div className="absolute right-4 top-4  ">
                          <div className="flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-700 p-[6px] hover:bg-neutral-600">
                            <XMarkIcon
                              onClick={() => setSelectedFile([])}
                              className=" h-6 w-6 "
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* post */}
                  <div className="min-h-0 shrink-0 grow">
                    <div className="border-border-primary-icon-clr-hover mt-2 flex items-center justify-between rounded-md border px-3 pb-1">
                      <h4 className="cursor-pointer text-sd">
                        Add to your post
                      </h4>
                      <div className="flex">
                        <div
                          className="relative flex flex-auto  cursor-pointer items-center justify-center rounded-full p-2 ring-blue-500 ring-offset-2 ring-offset-white hover:bg-third-clr focus:outline-none focus-visible:ring "
                          tabIndex={1}
                          onClick={selectImage}
                        >
                          <input
                            placeholder="pick files"
                            className=" absolute z-[-1] h-[0.1px] w-[0.1px] cursor-default appearance-none overflow-hidden opacity-0"
                            type="file"
                            multiple
                            accept="image/jpeg,image/png,image/webp,image/gif,video/mp4,video/quicktime"
                            name="imageUrl"
                            ref={fileInput}
                            onChange={onFileChange}
                          />
                          <PhotoIcon className="h-6 w-6 stroke-green-500 stroke-2" />
                        </div>
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="mt-4 w-full grow-0  cursor-pointer rounded-md bg-blue-600 py-2 text-center text-base font-semibold hover:bg-blue-500"
                    >
                      <span>Post</span>
                    </Button>
                  </div>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
        {/* live/video/phto/ feeling */}
        <div className="mt-3 flex w-full  flex-wrap  justify-stretch overflow-hidden border-t border-t-third-clr pb-1 pt-2 ">
          <div
            className="flex flex-auto  grow cursor-pointer items-center justify-center  rounded-lg p-2 ring-blue-500 ring-offset-2 ring-offset-white hover:bg-third-clr focus:outline-none focus-visible:ring"
            tabIndex={1}
          >
            <div className="flex items-center justify-center gap-2 overflow-hidden">
              <span>
                <VideoCameraIcon className="h-6 w-6 stroke-red-500 stroke-2" />
              </span>
              <div className="m-0 flex min-w-0 max-w-full items-center justify-center break-words p-0 text-start text-[15px] font-semibold">
                <span className="relative inline-block  overflow-x-hidden text-ellipsis whitespace-nowrap leading-5 text-secondary-text">
                  Live Video
                </span>
              </div>
            </div>
          </div>
          <div
            className="flex flex-auto grow cursor-pointer items-center justify-center rounded-lg p-2 ring-blue-500 ring-offset-2 ring-offset-white hover:bg-third-clr focus:outline-none focus-visible:ring"
            tabIndex={1}
            onClick={() => {
              setIsModalOpen(!isModalOpen);
            }}
          >
            <div className="flex items-center justify-center gap-2 overflow-hidden">
              <span>
                <PhotoIcon className="h-6 w-6 stroke-green-500 stroke-2" />
              </span>
              <div className="m-0 flex min-w-0 max-w-full items-center justify-center break-words p-0 text-start text-[15px] font-semibold">
                <span className="relative inline-block  overflow-x-hidden text-ellipsis whitespace-nowrap leading-5 text-secondary-text">
                  Photo/Video
                </span>
              </div>
            </div>
          </div>
          <div
            className=" hidden flex-auto grow cursor-pointer items-center justify-center  rounded-lg p-2 ring-blue-500 ring-offset-2 ring-offset-white hover:bg-third-clr focus:outline-none focus-visible:ring xs:flex "
            tabIndex={1}
          >
            <div className="flex items-center justify-center gap-2 overflow-hidden">
              <span>
                <FaceSmileIcon className="h-6 w-6 stroke-yellow-500 stroke-2" />
              </span>
              <div className="m-0 flex min-w-0 max-w-full items-center justify-center break-words p-0 text-start text-[15px] font-semibold">
                <span className="relative inline-block  overflow-x-hidden text-ellipsis whitespace-nowrap leading-5 text-secondary-text">
                  Feeling/Activity
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
