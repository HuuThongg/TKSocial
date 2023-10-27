import { User } from '@/db/schema';

export interface MessagesState {
  addToConvoQueue: (conversationId: string, recipient: Partial<User>) => void;
  closeMessages: () => void;
}
