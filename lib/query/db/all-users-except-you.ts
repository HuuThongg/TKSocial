'server-only';
import { db } from '@/db';
import { auth } from '@clerk/nextjs';
import { sql } from 'drizzle-orm';
import { User, users } from '@/db/schema';
import { unstable_cache as cache } from 'next/cache';
import { currentUserId } from './current-userId';
export const allUsersExceptYou = async (): Promise<User[] | null> => {
  const userId = currentUserId();
  if (!userId) {
    return null;
  }
  console.log('userIdddd: ' + userId);
  const results: User[] = await db
    .select()
    .from(users)
    .where(sql`${users.userIdAuth}!= ${userId}`);
  return results;
};

// export const allUsersExceptYou = cache(async ():Promise<User[] | null>  => {
//   const userId = currentUserId();
//   if (!userId) {
//     return null;
//   }
//   console.log("userIdddd: " + userId);
//   const results: User[] = await db
//     .select()
//     .from(users)
//     .where(sql`${users.userIdAuth}!= ${userId}`);
//   return results;
// });
