import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { auth } from '@clerk/nextjs';

const f = createUploadthing();

const handleAuth = ()=> {
  const {userId} = auth();
  if (!userId) throw new Error('Unauthorzied');
  console.log("object", userId);
  return {userId :userId}
}

export const ourFileRouter = {
  
  postFile: f(['image', 'video'])
    .middleware(() => handleAuth())
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log('Upload complete for userId:', metadata);

      console.log('file url', file.url);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
