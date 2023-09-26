This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.ts`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


navbar : z-40 

<span className=" line-clamp-2 "> if u put inline-block, then it does not work
</span>

focus:outline-none focus-visible:ring ring-blue-500 ring-offset-2 ring-offset-white

inline-flex wont take effect
<span className="block text-center md:text-left ">
   89 friends
 </span>


 inputpost
 ---------------------------------
 'use client'
// @ts-expect-error
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
// @ts-expect-error

import { experimental_useFormState as useFormState } from 'react-dom'

import { useRef, useState } from 'react'
import create from './action';
import { GrImage } from 'react-icons/gr'
// import "@uploadthing/react/styles.css";
import { UploadButton, Uploader, UploadDropzone } from '@/lib/uploadthing';
import { FileUpload } from "@/components/file-upload";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from '../ui/button';
import { DialogFooter } from '../ui/dialog';


const formSchema = z.object({
  imageUrl: z.string().min(1, {
    message: "Server image is required."
  })
});


export default function InputPost() {
  const [message, setMessage] = useState('a');
  const fileInput = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File[]>([]);

  async function onCreate(formData: FormData) {
    await create(formData);
  }
  const selectImage = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  function onFileChange (e: React.FormEvent<HTMLInputElement>) {
    const files = e.currentTarget.files;
    if (!files) return;
    const newFiles: File[] = e.currentTarget.files ? Array.from(e.currentTarget.files) : [];
    setSelectedFile(newFiles);
  }

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      imageUrl: "",
    }
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log("hello!");
      // await axios.post("/api/servers", values);

      // form.reset();
      // router.refresh();
      // onClose();
    } catch (error) {
      console.log(error);
    }
  }
  const isLoading = form.formState.isSubmitting;
  return (
    <div>
      <form action={onCreate}>
        
        <input
          value={message}
          onChange={e => setMessage(e.target.value)}
          name='messageForPost'
        />
        <div className='flex items-center justify-center mt-3'>
          <div className='w-[36px] h-[36px]  rounded-[9999px] flex items-center justify-center cursor-pointer overflow-hidden hover:bg-interHoverIcon active:bg-interHoverIconActive  '
            onClick={selectImage
            }
          >
            <div className='flex items-center justify-center grow '>
              <GrImage className='fill-white stroke-slate-400' />
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
{/*       
      {selectedFile.length > 0 &&selectedFile.map((file)=>(
        <li key={file.name}  >
          <img src={URL.createObjectURL(file)} alt={file.name} />
        </li>
      ))}
      <UploadButton
        endpoint="postFile"
        content={{
          button({ ready }) {
            if (ready) return <div>Upload stuff</div>;

            return "Getting ready...";
          },
          allowedContent({ ready, fileTypes, isUploading }) {
            if (!ready) return "Checking what you allow";
            if (isUploading) return "Seems like stuff is uploading";
            return `Stuff you can upload: ${fileTypes.join(", ")}`;
          },
        }}
      />
      <UploadButton

        className='bg-black text-[12px] text-emerald-200'
        endpoint="postFile"
        onUploadBegin={(res)=>{
          console.log(res,"res");
        }}
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      <Uploader    endpoint='postFile' />
      <UploadDropzone
        onClientUploadComplete={(res) => {
          
          console.log("log it out bro",res)
          console.log(res?.[0].url);
        }}
        onUploadBegin={(res) => {
          console.log("log it out bro 9099", res)
      }} className=" bg-slate-800 ut-button:bg-red-400 ut-label:text-[5px] ut-allowed-content:ut-uploading:text-red-300 ut-upload-icon:bg-blue-500" endpoint='postFile'/>
      
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-8 px-6">
            <div className="flex items-center justify-center text-center">
              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <FileUpload
                        endpoint="postFile"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
                
              />
            </div>

            
          </div>
          <DialogFooter className="bg-gray-100 px-6 py-4">
            <Button type='submit' variant="ghost" disabled={isLoading}>
              Create
            </Button>
          </DialogFooter>
        </form>
      </Form> */}
      
    </div>
  )
}
-------------------------------------------------