import { currentUser, redirectToSignIn } from '@clerk/nextjs';

import { db } from '@/db';
import { User,users, NewUser } from '@/db/schema';

import { sql } from 'drizzle-orm';

export const initialProfile = async () => {
  const user = await currentUser();
  if (!user) {
    return redirectToSignIn();
  }
  const data_profile: User[] = await db
    .select()
    .from(users)
    .where(sql`${user.id} = ${users.userIdAuth}`);

  if (data_profile.length !== 0) {
    return data_profile;
  }


  const newProfile = await db.insert(users).values({
    userIdAuth: user.id,
    name: `${user.firstName} ${user.lastName}`,
    imageUrl: user.imageUrl,
    email: user.emailAddresses[0].emailAddress,
  });
  return newProfile;
};

