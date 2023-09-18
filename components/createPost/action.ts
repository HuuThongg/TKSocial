'use server';

import { db } from '@/db';
import { posts } from '@/drizzle/schema';
import { currentProfile } from '@/lib/query/db/getCurrentProfile';
import { redirectToSignIn } from '@clerk/nextjs';
import { revalidatePath } from 'next/cache';

export default async function create({message} :{message:string}) {
  const profile = await currentProfile();
  if (!profile) {
    return redirectToSignIn();
  }

  const data = await db.insert(posts).values({
    content: message,
    profileId: profile[0].id
  })
  console.log(data);
  console.log("done")
  revalidatePath('/');
}
