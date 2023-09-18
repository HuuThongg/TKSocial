import { db } from '@/db';
import { auth } from '@clerk/nextjs';

import { profile } from '@/drizzle/schema';
import { sql } from 'drizzle-orm';

type NewProfile = typeof profile.$inferInsert;
type Profile = typeof profile.$inferSelect;

export const currentProfile = async () => {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  const results: Profile[] = await db.select().from(profile).where(sql`${profile.userId}= ${userId}`);
  return results;
};

