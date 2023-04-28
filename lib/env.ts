import {z} from 'zod';
// declare a zod schema  that describes the shape of our environment variables
const envSchema = z.object({
  DATABASE_URL: z.string(),
  DISCORD_CLIENT_ID: z.string(),
  DISCORD_CLIENT_SECRET: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_CLIENT_SECRET: z.string(),
  LOCAL_AUTH_URL: z.string(),
  NEXTAUTH_SECRET: z.string(),
  NEXTAUTH_URL: z.string(),
  NEXT_PUBLIC_WS_URL: z.string(),
});

//Derive a typescript type from the schema

export type Env = z.infer<typeof envSchema>;

// export env object for  typesage access throughout the app
export const env: Env = {
  DATABASE_URL: process.env.DATABASE_URL!,
  DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID!,
  DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET!,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID!,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET!,
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID!,
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET!,
  LOCAL_AUTH_URL: process.env.LOCAL_AUTH_URL!,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET!,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL!,
  NEXT_PUBLIC_WS_URL: process.env.NEXT_PUBLIC_WS_URL!,
};

// assure the expected env vars are present. if not throw an error
envSchema.parse(env);