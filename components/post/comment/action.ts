'use server'
import { db } from '@/db';
import { and, eq } from 'drizzle-orm';
import { comments, likes } from '@/db/schema';
import { currentProfile } from '@/lib/query/db/current-profile';
import { redirectToSignIn } from '@clerk/nextjs';
import { revalidatePath } from 'next/cache';
import * as z from 'zod';

const formSchema = z.object({
  comment: z.string().min(1).nonempty(),
  parentId: z.number().optional(),
  postId: z.number(),
});
export default async function commentFn(formData:FormData) {
  const user = await currentProfile();
  if (!user) {
    return redirectToSignIn();
  }
  const data = formSchema.parse({
    comment: formData.get('comment'),
    postId: Number(formData.get('postId')),
    parentId: Number(formData.get('parentId')),
  });
  console.log("data: " + data.postId + "parentId" + data.postId);
  const postId = data.postId, parentId = data.parentId ? data.parentId  : null;
  console.log("parent ID " + parentId);
  try {
    await db.insert(comments).values({
      postId,
      authorId: user[0].id,
      comment: data.comment,
      parentId,
    });

    revalidatePath('/');
    console.log('Database insertion comment successful');
  } catch (error) {
    console.error('Error inserting comment into the database:', error);
  }
}


export async function likeCommentFn({
  postId,
  isLiked,
  commentId,
}: {
  postId: number;
  isLiked: boolean;
  commentId: number;
}) {
  const user = await currentProfile();
  if (!user) {
    return redirectToSignIn();
  }
  try {
    if (!isLiked) {
      await db.insert(likes).values({
        postId,
        userId: user[0].id,
        commentId,
      });
    } else {
      await db
        .delete(likes)
        .where(
          and(
            eq(likes.postId, postId),
            eq(likes.userId, user[0].id),
            eq(likes.commentId, commentId),
          ),
        );
    }
    revalidatePath('/');
    console.log('Database insertion like for specific comment successful');
  } catch (error) {
    console.error('Error inserting like into the database:', error);
  }
}
