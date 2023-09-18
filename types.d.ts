import { Profile } from "./drizzle/schema";
type  NewProfile = typeof profile.$inferInsert;
type  Profile = typeof profile.$inferSelect;