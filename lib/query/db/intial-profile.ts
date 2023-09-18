import { currentUser, redirectToSignIn } from '@clerk/nextjs';

import { db } from '@/db';
import { profile } from '@/drizzle/schema';
import { sql } from 'drizzle-orm';
type NewProfile = typeof profile.$inferInsert;
type Profile = typeof profile.$inferSelect;

export const initialProfile = async () => {
  const user = await currentUser();
  const id = user?.id;
  if (!user) {
    return redirectToSignIn();
  }

  const data_profile = await db
    .select()
    .from(profile)
    .where(sql`${user.id} = ${profile.userId}`);

  if (data_profile.length !== 0) {
    return data_profile;
  }

  const newProfile = await db.insert(profile).values({
    userId: user.id,
    name: `${user.firstName} ${user.lastName}`,
    imageUrl: user.imageUrl,
    email: user.emailAddresses[0].emailAddress,
  });

  return newProfile;
};

