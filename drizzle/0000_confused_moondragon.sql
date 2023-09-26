-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `comments` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`post_id` int,
	`content` text NOT NULL,
	`author_Id` int NOT NULL,
	`parent_id` int,
	`created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `comments_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `conversations` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`lastMessage  Id` int,
	`user_id` int,
	`created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `conversations_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `likes` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`postId` int,
	`commentId` int,
	`userId` varchar(191) NOT NULL,
	`createdAt` timestamp DEFAULT now(),
	CONSTRAINT `likes_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `messages` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`messageText` text,
	`fileUrl` text,
	`senderId` int,
	`conversationId` int,
	`deleted` tinyint DEFAULT 0,
	`created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `messages_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `posts` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`author_Id` int,
	`content` text,
	`imageUrls` json,
	`imgURL` varchar(255),
	`created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `posts_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`userId` varchar(255) NOT NULL,
	`name` varchar(255) NOT NULL,
	`imageUrl` varchar(255),
	`email` varchar(255) NOT NULL,
	`created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `usersToConversations` (
	`user_id` int NOT NULL,
	`conversation_id` int NOT NULL,
	`role` enum('owner','admin','member') DEFAULT 'member',
	CONSTRAINT `usersToConversations_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `parent_id_idx` ON `comments` (`parent_id`);--> statement-breakpoint
CREATE INDEX `post_id_idx` ON `comments` (`post_id`);--> statement-breakpoint
CREATE INDEX `last_message_id_idx` ON `conversations` (`lastMessage  Id`);--> statement-breakpoint
CREATE INDEX `commentId_idx` ON `likes` (`commentId`);--> statement-breakpoint
CREATE INDEX `postId_idx` ON `likes` (`postId`);--> statement-breakpoint
CREATE INDEX `userId_idx` ON `likes` (`userId`);--> statement-breakpoint
CREATE INDEX `conversation_id_idx` ON `messages` (`conversationId`);--> statement-breakpoint
CREATE INDEX `profile_id_idx` ON `posts` (`author_Id`);
*/