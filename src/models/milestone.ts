export interface Milestone {
  id: string;
  projectId: string;
  title: string;
  description?: string;
  amount?: number;
  status: string;
  dueDate?: Date;
  completedAt?: Date;
}
