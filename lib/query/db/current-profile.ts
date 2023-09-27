import { db } from '@/db';
import { auth } from '@clerk/nextjs';

import { User, users } from '@/db/schema';

import { sql } from 'drizzle-orm';


export const currentProfile = async ():Promise<User[] | null>  => {
  const { userId } = auth();

  if (!userId) {
    return null;
  }


  const results: User[] = await db
    .select()
    .from(users)
    .where(sql`${users.userIdAuth}= ${userId}`);
  return results;
};
