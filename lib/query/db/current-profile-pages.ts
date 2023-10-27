'server-only';
import { db } from '@/db';
import { getAuth } from '@clerk/nextjs/server';
import { sql } from 'drizzle-orm';
import { NextApiRequest } from 'next';
import { User, users } from '@/db/schema';
import { unstable_cache as cache } from 'next/cache';

export const currentProfilePages = cache(async (req: NextApiRequest) => {
  const { userId } = getAuth(req);

  if (!userId) {
    return null;
  }

  const results: User[] = await db
    .select()
    .from(users)
    .where(sql`${users.userIdAuth}= ${userId}`);
  return results;
});
