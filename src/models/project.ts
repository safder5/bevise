export type ProjectStatus =
  | "pending"
  | "in_progress"
  | "needs_review"
  | "completed"
  | "cancelled";

export interface Project {
  id: string;
  teamId: string;
  clientId: string; // userId
  title: string;
  description?: string;
  budget?: number;
  status: ProjectStatus;
  startDate?: Date;
  endDate?: Date;
  createdAt: Date;
}
