'server-only';
import { auth } from '@clerk/nextjs';
import { unstable_cache as cache } from 'next/cache';

export const currentUserId = (): string | null => {
  const { userId } = auth();

  if (!userId) return null;

  return userId;
};
