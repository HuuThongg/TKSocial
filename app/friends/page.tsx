import { unstable_cache as cache } from 'next/cache';
import { db } from '@/db';
import { User, users } from '@/db/schema';
import { sql } from 'drizzle-orm';
import Image from 'next/image';
import { allUsersExceptYou } from '@/lib/query/db/all-users-except-you';

export default async function Page() {
  const allUsers: User[] = (await allUsersExceptYou()) || [];
  console.log(allUsers);

  return (
    <div className="pl-[300px]">
      <ul>
        {allUsers?.map((user) => (
          <li key={user.id}>
            <Image
              src={user.imageUrl!}
              width={50}
              height={50}
              alt="user Image"
            />
            <p>{user.name}</p>
            <button>AddFriend</button>
          </li>
        ))}
      </ul>
      Friend
    </div>
  );
}
