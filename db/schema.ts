import {
  mysqlTable,
  serial,
  int,
  varchar,
  text,
  timestamp,
  json,
  primaryKey,
  uniqueIndex,
  mysqlEnum,
  boolean,
  index,
} from 'drizzle-orm/mysql-core';
import { relations, sql } from 'drizzle-orm';
export const ADMIN_ROLE = 'admin';
export const MEMBER_ROLE = 'member';
export const OWNER_ROLE = 'owner';
export const ROLES = [OWNER_ROLE, ADMIN_ROLE, MEMBER_ROLE] as const;
export type Role = (typeof ROLES)[number];
// Profile table
export const users = mysqlTable('users', {
  id: serial('id').primaryKey(),
  userIdAuth: varchar('userId', { length: 255 }).notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  imageUrl: varchar('imageUrl', { length: 255 }),
  email: varchar('email', { length: 255 }).notNull(),
  createdAt: timestamp('created_at', { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp('updated_at', { mode: 'string' })
    .default(sql`CURRENT_TIMESTAMP`)
    .onUpdateNow(),
});
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

// Posts table
export const posts = mysqlTable(
  'posts',
  {
    id: serial('id').primaryKey(),
    authorId: int('author_Id'),
    content: text('content'),
    imageUrls: json('imageUrls'),
    imgURL: varchar('imgURL', { length: 255 }),
    img:text('img'),
    // likes: int('likes'),
    createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
    updatedAt: timestamp('updated_at')
      .default(sql`CURRENT_TIMESTAMP`)
      .onUpdateNow(),
  },
  
  (table) => {
    return {
      profileIdx: index('profile_id_idx').on(table.authorId),
    };
  },
);
export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;
// Comments table
export const comments = mysqlTable(
  'comments',
  {
    id: serial('id').primaryKey(),
    postId: int('post_id'),
    comment: text('content').notNull(),
    authorId: int('author_Id').notNull(),
    parentId: int('parent_id'),
    // likes: int('likes').default(0),
    createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
    updatedAt: timestamp('updated_at')
      .default(sql`CURRENT_TIMESTAMP`)
      .onUpdateNow(),
  },
  (table) => {
    return {
      postIdx: index('post_id_idx').on(table.postId),
      parentIdx: index('parent_id_idx').on(table.parentId),
    };
  },
);
export type Comment = typeof comments.$inferSelect;
export type NewComment = typeof comments.$inferInsert;
// Conversations table
export const conversations = mysqlTable(
  'conversations',
  {
    id: serial('id').primaryKey(),
    lastMessageId: int('lastMessage  Id'),
    userId: int('user_id'),
    createdAt: timestamp('created_at', { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => {
    return {
      lastMessageIdx: index('last_message_id_idx').on(table.lastMessageId),
    };
  },
);
export type Conversation = typeof conversations.$inferSelect;

export type NewConversation = typeof conversations.$inferInsert;

// likes
export const likes = mysqlTable(
  'likes',
  {
    id: serial('id').primaryKey(),
    postId: int('postId'),
    commentId: int('commentId'),
    userId:int('userId').notNull(),
    createdAt: timestamp('createdAt').defaultNow(),
  },
  (table) => ({
    userIdx: index('userId_idx').on(table.userId),
    postIdx: index('postId_idx').on(table.postId),
    commentIdx: index('commentId_idx').on(table.commentId),
  }),
);

export type Like = typeof likes.$inferSelect;
export type NewLike = typeof likes.$inferInsert;

// Message table
export const messages = mysqlTable(
  'messages',
  {
    id: serial('id').primaryKey(),
    content: text('messageText'),
    fileUrl: text('fileUrl'),
    senderId: int('senderId'),
    conversationId: int('conversationId'),
    deleted: boolean('deleted').default(false),
    createdAt: timestamp('created_at', { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => {
    return {
      conversationIdx: index('conversation_id_idx').on(table.conversationId),
    };
  },
);

export type Message = typeof messages.$inferSelect;
export type NewMessage = typeof messages.$inferInsert;

export const likesRelations = relations(likes, ({ one }) => ({
  posts: one(posts, {
    fields: [likes.postId],
    references: [posts.id],
  }),
  comments: one(comments, {
    fields: [likes.commentId],
    references: [comments.id],
  }),
}));

// UsersToConversations table
export const usersToConversations = mysqlTable(
  'usersToConversations',
  {
    userId: int('user_id').notNull(),
    conversationId: int('conversation_id').notNull(),
    role: mysqlEnum('role', ROLES).default('member'),
  },
  (t) => ({
    pk: primaryKey(t.userId, t.conversationId),
  }),
);
export type UsersToConversation = typeof usersToConversations.$inferSelect;
export type NewUsersToConversation = typeof usersToConversations.$inferInsert;

usersToConversations;

// export const usersToPosts = mysqlTable(
//   'usersToPosts',
//   {
//     userId: int('user_id').notNull(),
//     postId: int('post_id').notNull(),
//   },
//   (t) => ({
//     pk: primaryKey(t.userId, t.postId),
//   }),
// );
// export type UsersToPosts = typeof usersToPosts.$inferSelect;
// export type newUsersToPost = typeof usersToPosts.$inferInsert;

// export const usersToPostsRelations = relations(usersToPosts, ({ one }) => ({
//   post: one(posts, {
//     fields: [usersToPosts.postId],
//     references: [posts.id],
//   }),
//   user: one(users, {
//     fields: [usersToPosts.userId],
//     references: [users.id],
//   }),
// }));

// Define relations
export const usersRelations = relations(users, ({ many }) => ({
  // usersToPosts: many(usersToPosts),
  posts: many(posts),
  usersToConversations: many(usersToConversations),
}));

export const postsRelations = relations(posts, ({ one, many }) => ({
  author: one(users, {
    fields: [posts.authorId],
    references: [users.id],
  }),
  likes: many(likes),
  comments: many(comments),
  // subComments: many(comments, {
  //   relationName: 'subComments',
  // }),
}));

export const commentsRelations = relations(comments, ({ one, many }) => ({
  posts: one(posts, {
    fields: [comments.postId],
    references: [posts.id],
  }),
  likes: many(likes),
}));

export const conversationRelations = relations(conversations, ({ one, many }) => ({
  user: one(users, {
    fields: [conversations.userId],
    references: [users.id],
  }),
  message: many(messages),
  usersToConversations: many(usersToConversations),
}));

export const messageRelations = relations(messages, ({ one }) => ({
  conversation: one(conversations, {
    fields: [messages.conversationId],
    references: [conversations.id],
  }),
}));

export const usersToConversationsRelations = relations(usersToConversations, ({ one }) => ({
  conversation: one(conversations, {
    fields: [usersToConversations.conversationId],
    references: [conversations.id],
  }),
  user: one(users, {
    fields: [usersToConversations.userId],
    references: [users.id],
  }),
}));
