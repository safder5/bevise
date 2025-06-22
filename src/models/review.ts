export interface Review {
  id: string;
  projectId: string;
  reviewerId: string; // userId
  revieweeId: string; // userId or teamId
  rating: number; // 1-5
  comment?: string;
  createdAt: Date;
}
