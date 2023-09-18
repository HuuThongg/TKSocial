import { mysqlTable, mysqlSchema, AnyMySqlColumn, index, primaryKey, int, text, timestamp, varchar } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const comments = mysqlTable("comments", {
	id: int("id").autoincrement().notNull(),
	postId: int("post_id").notNull(),
	content: text("content").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).onUpdateNow(),
},
(table) => {
	return {
		postIdIdx: index("post_id_idx").on(table.postId),
		commentsId: primaryKey(table.id),
	}
});

export const posts = mysqlTable("posts", {
	id: int("id").autoincrement().notNull(),
	profileId: int("profile_Id").notNull(),
	content: text("content").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).onUpdateNow(),
},
(table) => {
	return {
		profileIdIdx: index("profile_id_idx").on(table.profileId),
		postsId: primaryKey(table.id),
	}
});

export const profile = mysqlTable("profile", {
	id: int("id").autoincrement().notNull(),
	userId: varchar("userId", { length: 255 }).notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	imageUrl: varchar("imageUrl", { length: 255 }),
	email: varchar("email", { length: 255 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).onUpdateNow(),
},
(table) => {
	return {
		profileId: primaryKey(table.id),
	}
});