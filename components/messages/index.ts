import { Profiles } from "@/drizzle/schema";

export interface MessagesState {
  addToConvoQueue: (conversationId: string, recipient: Partial<Profile>) => void;
  closeMessages: () => void;
}

