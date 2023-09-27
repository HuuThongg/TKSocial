'use server'

import { db } from '@/db';
import { posts, likes } from '@/drizzle/schema';
import { currentProfile } from '@/lib/query/db/current-profile';
import { redirectToSignIn } from '@clerk/nextjs';
import { and, eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';


export default async function likeButtonFn({ postId, isLiked }: { postId: number; isLiked : boolean}) {
  const user = await currentProfile();
  if (!user) {
    return redirectToSignIn();
  }
  try {
    if (!isLiked){
      await db.insert(likes).values({
        userId: user[0].id,
        postId,
      });
    }else{
      await db.delete(likes).where(and(eq(likes.postId ,postId),eq(likes.userId,user[0].id)))
    }
    revalidatePath('/');
    console.log('Database insertion like successful');
  } catch (error) {
    console.error('Error inserting like into the database:', error);
  }
}

//  const existingLike = await db
//       .from(likes)
//       .select()
//       .eq('userId', user[0].id)
//       .eq('postId', postId)
//       .single();
//     if (existingLike) {
//       console.log('User already liked this post');
//       return;
//     }