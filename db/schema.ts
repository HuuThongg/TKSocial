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
import { timeStamp } from 'console';



export const profile = mysqlTable(
  'profile',
  {
    id: serial('int').primaryKey(),
    userId: varchar('userId', { length: 255 }).notNull(),
    name: varchar('name', { length: 255 }).notNull(),
    imageUrl: varchar('imageUrl', { length: 255 }),
    email: varchar('email', { length: 255 }).notNull(),
    createdAt: timestamp('created_at', { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
    updatedAt: timestamp('updated_at', { mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .onUpdateNow(),
  }
);


export const posts = mysqlTable(
  'posts',
  {
    id: serial('int').primaryKey(),
    authorId: int('author_Id'),
    content: text('content'),
    imageUrls: json('imageUrls'),
    createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
    updated_at: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
  },
  (table) => {
    return {
      profileIdx: index('profile_id_idx').on(table.authorId),
    };
  },
);



export const comments = mysqlTable(
  'comments',
  {
    id: serial('id').primaryKey(),
    postId: int('post_id'),
    comment: text('content').notNull(),
    authorId: int('author_Id'),
    parentId: int('parent_id'),
    likes: int('likes').default(0),
    repliesAmount: int('repliesAmount').default(0),
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
export const conversations = mysqlTable(
  'conversation',
  {
    id: serial('id').primaryKey(),
    lastMessageId: int('lastMessageId'),
    profileId: int('profileId'),
    createdAt: timestamp('created_at', { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => {
    return {
      lastMessageIdx: index('last_message_id_idx').on(table.lastMessageId),
    };
  },
);

export const message = mysqlTable(
  'message',
  {
    id: serial('id').primaryKey(),
    messageText: text('messageText').notNull(),
    profileId: int('profileId'),
    conversationId: int('conversationId'),
    createdAt: timestamp('created_at', { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => {
    return {
      conversationIdx: index('conversation_id_idx').on(table.conversationId),
    };
  },
);


export const profilesRelations = relations(profile, ({ many }) => ({
  posts: many(posts),
  // conversations: many(conversations),
  usersToConversations: many(usersToConversations),
}));
export const postsRelations = relations(posts, ({ one, many }) => ({
  profile: one(profile, {
    fields: [posts.authorId],
    references: [profile.id],
  }),
  comments: many(comments),
}));

export const commentsRelations = relations(comments, ({ one }) => ({
  posts: one(posts, {
    fields: [comments.postId],
    references: [posts.id],
  }),
}));

export const conversationRelations = relations(conversations, ({ one, many }) => ({
  profile: one(profile, {
    fields: [conversations.profileId],
    references: [profile.id],
  }),
  message: many(message),
  usersToConversations: many(usersToConversations),
}));

export const messageRelations = relations(message, ({ one }) => ({
  conversation: one(conversations, {
    fields: [message.conversationId],
    references: [conversations.id],
  }),
}));


// export const groups = mysqlTable('groups', {
//   id: serial('id').primaryKey(),
//   name: text('name'),
// });
// export const groupsRelations = relations(groups, ({ many }) => ({
//   usersToGroups: many(usersToGroups),
// }));
// export const usersToGroups = mysqlTable(
//   'users_to_groups',
//   {
//     userId: int('user_id')
//       .notNull(),
//     groupId: int('group_id')
//       .notNull()
//   },
//   (t) => ({
//     pk: primaryKey(t.userId, t.groupId),
//   }),
// );

// export const usersToGroupsRelations = relations(usersToGroups, ({ one }) => ({
//   group: one(groups, {
//     fields: [usersToGroups.groupId],
//     references: [groups.id],
//   }),
//   profile: one(profile, {
//     fields: [usersToGroups.userId],
//     references: [profile.id],
//   }),
// }));


export const usersToConversations = mysqlTable(
  'usersToConversations',
  {
    userId: int('user_id')
      .notNull(),
    conversationId: int('group_id')
      .notNull(),
  },
  (t) => ({
    pk: primaryKey(t.userId, t.conversationId),
  }),
);

export const usersToConversationsRelations = relations(usersToConversations, ({ one }) => ({
  conversation: one(conversations, {
    fields: [usersToConversations.conversationId],
    references: [conversations.id],
  }),
  user: one(profile, {
    fields: [usersToConversations.userId],
    references: [profile.id],
  }),
}));