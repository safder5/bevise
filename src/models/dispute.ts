export interface Dispute {
  id: string;
  projectId: string;
  raisedBy: string;
  reason: string;
  status: string;
  createdAt: Date;
  resolvedAt?: Date;
}
