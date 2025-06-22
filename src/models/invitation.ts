export interface Invitation {
  id: string;
  invitedUserId: string;
  teamId: string;
  invitedBy: string;
  status: string;
  createdAt: Date;
}
