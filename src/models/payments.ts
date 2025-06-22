export interface Payment {
  id: string;
  milestoneId: string;
  payerId: string;
  payeeId: string;
  amount: number;
  currency: string;
  status: string;
  paymentProvider?: string;
  transactionId?: string;
  paidAt?: Date;
}
