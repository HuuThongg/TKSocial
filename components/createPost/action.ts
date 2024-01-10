'use server';

import { db } from '@/db';
import { posts } from '@/drizzle/schema';
import { currentProfile } from '@/lib/query/db/current-profile';
import { redirectToSignIn } from '@clerk/nextjs';
import { revalidatePath } from 'next/cache';
import * as z from 'zod';

const formSchema = z.object({
  message: z.string().min(1, {
    message: 'Message is required.',
  }),
});

// export  async function create(formData: FormData) {
//   const user = await currentProfile();
//   if (!user) {
//     return redirectToSignIn();
//   }

//   const message = formData.get('message') as string;

//   console.log(message, 'message');

//   let formDataa, urls,url;
//   let hasImage = false, done = false;
//   formData.forEach((value, key) => {
//       console.log('hello');

//     if (key === 'imageUrl') {
//       hasImage = true;

//       formDataa = new FormData();
//       formDataa.append('file', value);

//       formDataa.append('timestamp', Math.floor(Date.now() / 1000).toString());
//       formDataa.append('upload_preset', 'yycy7yc2');
//       fetch('https://api.cloudinary.com/v1_1/dlndipher/image/upload', {
//         method: 'POST',
//         body: formDataa,
//       })
//         .then((response) => {
//           return response.json();
//         })
//         .then((data) => {
//           done = true;
//           console.log('data', data);
//           url = data.secure_url;
//           urls = { secure_url: data.secure_url };
//           db.insert(posts).values({
//             authorId: user[0].id,
//             content: message,
//             imageUrls: JSON.stringify(urls),
//             imgUrl: url,
//             img: url,
//           });
//       console.log('insert img and message');

//         })
//         .catch((error) => {
//           console.error("errrrrrrr ",error);
//         });
//     }else{
//       db.insert(posts).values({
//         authorId: user[0].id,
//         content: message,
//       });
//       console.log("insert message");
//     }
//   });

//   console.log('done');
//   revalidatePath('/');
// }

export default async function create(formData: FormData) {
  const user = await currentProfile();
  if (!user) {
    return redirectToSignIn();
  }

  // const message = formData.get('message') as string;
  const data = formSchema.parse({
    message: formData.get('message'),
  });

  let formDataa, urls, url;
  let hasImage = false;
  formData.forEach((value, key) => {
    if (key === 'imageUrl') {
      hasImage = true;
      formDataa = new FormData();
      formDataa.append('file', value);

      formDataa.append('timestamp', Math.floor(Date.now() / 1000).toString());
      formDataa.append('upload_preset', 'yycy7yc2');
    }
  });

  if (hasImage) {
    try {
      const cloudinaryResponse = await fetch(
        'https://api.cloudinary.com/v1_1/dlndipher/image/upload',
        {
          method: 'POST',
          body: formDataa,
        },
      );
      const cloudinaryData = await cloudinaryResponse.json();
      console.log('Cloudinary data:', cloudinaryData);
      url = cloudinaryData.secure_url;
      urls = { secure_url: cloudinaryData.secure_url };
    } catch (error) {
      console.error('Error uploading to Cloudinary:', error);
    }
  }

  // Perform database insertion
  const postData = {
    authorId: user[0].id,
    content: data.message,
    imageUrls: JSON.stringify(urls),
    imgUrl: url,
    img: url,
  };

  try {
    await db.insert(posts).values(postData);
    console.log('Database insertion successful');
  } catch (error) {
    console.error('Error inserting into the database:', error);
  }

  console.log('done');
  revalidatePath('/');
}
