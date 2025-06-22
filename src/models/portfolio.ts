export interface PortfolioEntry {
  id: string;
  teamId?: string;
  userId?: string;
  title: string;
  description?: string;
  images?: string[];
  createdAt: Date;
}

export interface Portfolio {
  id: string;
  teamId?: string;
  userId?: string;
  entries: PortfolioEntry[];
  createdAt: Date;
}
