'server-only';
import { db } from '@/db';
import { auth } from '@clerk/nextjs';
import { User, users } from '@/db/schema';
import { sql } from 'drizzle-orm';
import { unstable_cache as cache } from 'next/cache';

export const currentProfile = cache(async (): Promise<User[] | null> => {
  const { userId } = auth();
  console.log('userId: ' + userId);

  if (!userId) {
    return null;
  }

  const results: User[] = await db
    .select()
    .from(users)
    .where(sql`${users.userIdAuth}= ${userId}`);
  return results;
});
