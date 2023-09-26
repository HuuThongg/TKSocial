'use server'

import { db } from '@/db';
import { posts, likes } from '@/drizzle/schema';
import { currentProfile } from '@/lib/query/db/current-profile';
import { redirectToSignIn } from '@clerk/nextjs';
import { revalidatePath } from 'next/cache';


export default async function likeButtonFn({ postId }: { postId :number}) {
  console.log('like button called');
  const user = await currentProfile();
  if (!user) {
    return redirectToSignIn();
  }
  try {
    await db.insert(likes).values({
      userId: user[0].id,
      postId,
    });
    revalidatePath('/');
    console.log('Database insertion like successful');
  } catch (error) {
    console.error('Error inserting like into the database:', error);
  }
}