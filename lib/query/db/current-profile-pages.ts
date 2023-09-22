import { db } from '@/db';
import { getAuth } from '@clerk/nextjs/server';

import { profile } from '@/drizzle/schema';
import { sql } from 'drizzle-orm';
import { NextApiRequest } from 'next';

type NewProfile = typeof profile.$inferInsert;
type Profile = typeof profile.$inferSelect;

export const currentProfilePages = async (req: NextApiRequest) => {
  const { userId } = getAuth(req);

  if (!userId) {
    return null;
  }

  const results: Profile[] = await db
    .select()
    .from(profile)
    .where(sql`${profile.userId}= ${userId}`);
  return results;
};

