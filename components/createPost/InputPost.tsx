'use client'

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
      {/* <Uploader    endpoint='postFile' /> */}
      <UploadDropzone
        onClientUploadComplete={(res) => {
          
          console.log("log it out bro",res)
          console.log(res?.[0].url);
        }}
        onUploadBegin={(res) => {
          console.log("log it out bro 9099", res)
      }} className=" bg-slate-800 ut-button:bg-red-400 ut-label:text-[5px] ut-allowed-content:ut-uploading:text-red-300 ut-upload-icon:bg-blue-500" endpoint='postFile'/>
      
      
      <Form {...form}>
        daswdas
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
            <Button variant="ghost" disabled={isLoading}>
              Create
            </Button>
          </DialogFooter>
        </form>
      </Form>
      
    </div>
  )
}