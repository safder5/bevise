export type UserRole = "buyer" | "seller";

export interface User {
  id: string; // uuid
  email: string;
  name: string;
  avatarUrl?: string;
  bio?: string;
  role: UserRole;
  status?: "active" | "banned" | "pending";
  createdAt: Date;
}
