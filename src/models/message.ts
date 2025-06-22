export interface MessageThread {
  id: string;
  projectId: string;
  createdAt: Date;
}

export interface Message {
  id: string;
  threadId: string;
  senderId: string; // userId
  content: string;
  sentAt: Date;
  read: boolean;
}
