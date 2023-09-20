"use client";

// import { FileIcon, X } from "lucide-react";
import { LuAlbum, LuArrowLeftFromLine } from "react-icons/lu";
import Image from "next/image";

import { UploadDropzone } from "@/lib/uploadthing";


interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "postFile"
}

export const FileUpload = ({
  onChange,
  value,
  endpoint
}: FileUploadProps) => {
  const fileType = value?.split(".").pop();
  console.log("value",value,"value");
  if (value && fileType !== "pdf") {
    return (
      <div className="relative h-20 w-20">
        <Image
          fill
          src={value}
          alt="Upload"
          className="rounded-full"
        />
        <button
          onClick={() => onChange("")}
          className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
          type="button"
          title="Clear uploaded file"
        >
          <LuAlbum className="h-4 w-4" />
        </button>
      </div>
    )
  }

  

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  )
}