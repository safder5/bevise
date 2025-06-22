export interface TeamMember {
  id: string;
  userId: string;
  teamId: string;
  memberRole: "owner" | "admin" | "member";
  joinedAt: Date;
}

export interface Team {
  id: string;
  name: string;
  description?: string;
  skills?: string[];
  location?: string;
  logoUrl?: string;
  createdBy: string; // userId
  createdAt: Date;
  members?: TeamMember[];
}
