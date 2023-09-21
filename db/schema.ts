import {
  mysqlTable,
  mysqlSchema,
  AnyMySqlColumn,
  primaryKey,
  unique,
  int,
  varchar,
  serial,
  mysqlEnum,
  index,
  text,
  timestamp,
  json
} from 'drizzle-orm/mysql-core';
import { relations, sql } from 'drizzle-orm';

export var profile = mysqlTable(
  'profile',
  {
    id: int('id').autoincrement().notNull(),
    userId: varchar('userId', { length: 255 }).notNull(),
    name: varchar('name', { length: 255 }).notNull(),
    imageUrl: varchar('imageUrl', { length: 255 }),
    email: varchar('email', { length: 255 }).notNull(),
    createdAt: timestamp('created_at', { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
    updatedAt: timestamp('updated_at', { mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .onUpdateNow(),
  },
  (table) => {
    return {
      profileId: primaryKey(table.id),
    };
  },
);

export var conversations = mysqlTable(
  'conversations',
  {
    id: int('id').autoincrement().notNull(),
    lastMessageId: int('lastMessageId').notNull(),
    createdAt: timestamp('created_at', { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => {
    return {
      conversationsId: primaryKey(table.id),
    };
  },
);

export var conversationUsers = mysqlTable('conversationUsers', {
  id: int('id').autoincrement().notNull(),
  profileId: int('id').notNull(),
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
});

export var posts = mysqlTable(
  'posts',
  {
    id: int('id').autoincrement().notNull(),
    profileId: int('profile_Id').notNull(),
    content: text('content'),
    imageUrls: json('imageUrls'),
    createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
    updatedAt: timestamp('updated_at')
      .default(sql`CURRENT_TIMESTAMP`)
      .onUpdateNow(),
  },
  (table) => {
    return {
      postId: primaryKey(table.id),
      profileIdx: index('profile_id_idx').on(table.profileId),
    };
  },
);



export var comments = mysqlTable(
  'comments',
  {
    id: int('id').autoincrement().notNull(),
    postId: int('post_id').notNull(),
    comment: text('content').notNull(),
    profileId: int('profile_Id').notNull(),
    parentId: int('parent_id').notNull(),
    likes: int('likes').default(0),
    repliesAmount: int('repliesAmount').default(0),
    createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
    updatedAt: timestamp('updated_at')
      .default(sql`CURRENT_TIMESTAMP`)
      .onUpdateNow(),
  },
  (table) => {
    return {
      commentId: primaryKey(table.id),
      postIdx: index('post_id_idx').on(table.postId),
      parentIdx: index('parent_id_idx').on(table.parentId), // Index for the parentId column
    };
  },
);

export var profilesRelations = relations(profile, ({ many }) => ({
  posts: many(posts),
  relations: many(comments),
  conversations: many(conversations),
}));



