import {
  mysqlTable,
  mysqlSchema,
  AnyMySqlColumn,
  index,
  primaryKey,
  serial,
  int,
  text,
  timestamp,
  varchar,
  tinyint,
  json,
  mysqlEnum,
} from 'drizzle-orm/mysql-core';
import { sql } from 'drizzle-orm';

export const comments = mysqlTable(
  'comments',
  {
    id: serial('id').notNull(),
    postId: int('post_id'),
    content: text('content').notNull(),
    authorId: int('author_Id').notNull(),
    parentId: int('parent_id'),
    createdAt: timestamp('created_at', { mode: 'string' }).default(
      sql`CURRENT_TIMESTAMP`,
    ),
    updatedAt: timestamp('updated_at', { mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .onUpdateNow(),
  },
  (table) => {
    return {
      postIdIdx: index('post_id_idx').on(table.postId),
      parentIdIdx: index('parent_id_idx').on(table.parentId),
      commentsId: primaryKey(table.id),
    };
  },
);

export const conversations = mysqlTable(
  'conversations',
  {
    id: serial('id').notNull(),
    lastMessageId: int('lastMessage  Id'),
    userId: int('user_id'),
    createdAt: timestamp('created_at', { mode: 'string' }).default(
      sql`CURRENT_TIMESTAMP`,
    ),
  },
  (table) => {
    return {
      lastMessageIdIdx: index('last_message_id_idx').on(table.lastMessageId),
      conversationsId: primaryKey(table.id),
    };
  },
);

export const likes = mysqlTable(
  'likes',
  {
    id: serial('id').notNull(),
    postId: int('postId'),
    commentId: int('commentId'),
    userId: int('userId').notNull(),
    createdAt: timestamp('createdAt', { mode: 'string' }).defaultNow(),
  },
  (table) => {
    return {
      userIdIdx: index('userId_idx').on(table.userId),
      postIdIdx: index('postId_idx').on(table.postId),
      commentIdIdx: index('commentId_idx').on(table.commentId),
      likesId: primaryKey(table.id),
    };
  },
);

export const messages = mysqlTable(
  'messages',
  {
    id: serial('id').notNull(),
    messageText: text('messageText'),
    fileUrl: text('fileUrl'),
    senderId: int('senderId'),
    conversationId: int('conversationId'),
    deleted: tinyint('deleted').default(0),
    createdAt: timestamp('created_at', { mode: 'string' }).default(
      sql`CURRENT_TIMESTAMP`,
    ),
  },
  (table) => {
    return {
      conversationIdIdx: index('conversation_id_idx').on(table.conversationId),
      messagesId: primaryKey(table.id),
    };
  },
);

export const posts = mysqlTable(
  'posts',
  {
    id: serial('id').notNull(),
    authorId: int('author_Id'),
    content: text('content'),
    imageUrls: json('imageUrls'),
    imgUrl: varchar('imgURL', { length: 255 }),
    createdAt: timestamp('created_at', { mode: 'string' }).default(
      sql`CURRENT_TIMESTAMP`,
    ),
    updatedAt: timestamp('updated_at', { mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .onUpdateNow(),
    img: text('img'),
  },
  (table) => {
    return {
      profileIdIdx: index('profile_id_idx').on(table.authorId),
      postsId: primaryKey(table.id),
    };
  },
);

export const users = mysqlTable(
  'users',
  {
    id: serial('id').notNull(),
    userId: varchar('userId', { length: 255 }).notNull(),
    name: varchar('name', { length: 255 }).notNull(),
    imageUrl: varchar('imageUrl', { length: 255 }),
    email: varchar('email', { length: 255 }).notNull(),
    createdAt: timestamp('created_at', { mode: 'string' }).default(
      sql`CURRENT_TIMESTAMP`,
    ),
    updatedAt: timestamp('updated_at', { mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .onUpdateNow(),
  },
  (table) => {
    return {
      usersId: primaryKey(table.id),
    };
  },
);

export const usersToConversations = mysqlTable(
  'usersToConversations',
  {
    userId: int('user_id').notNull(),
    conversationId: int('conversation_id').notNull(),
    role: mysqlEnum('role', ['owner', 'admin', 'member']).default('member'),
  },
  (table) => {
    return {
      usersToConversationsId: primaryKey(table.userId, table.conversationId),
    };
  },
);
