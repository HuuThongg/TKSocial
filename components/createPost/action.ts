'use server';

import { db } from '@/db';
import { posts } from '@/drizzle/schema';
import { currentProfile } from '@/lib/query/db/getCurrentProfile';
import { redirectToSignIn } from '@clerk/nextjs';
import { revalidatePath } from 'next/cache';

export default async function create(formData: FormData) {
  const profile = await currentProfile();
  if (!profile) {
    return redirectToSignIn();
  }

  const messageForPost = formData.get('messageForPost') as string;

  console.log(messageForPost, 'messageForPost');
  await db.insert(posts).values({
    content: messageForPost,
    profileId: profile[0].id,
  } );
  console.log("done")
  revalidatePath('/');
}
