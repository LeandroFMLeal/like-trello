export interface Board {
  name: string;
  columns: Column[];
}

export interface Column {
  id: number;
  title: string;
  cards: GeneralCard[];
}

export interface GeneralCard {
  id: number;
  company: string;
  user: string;
  views: number;
  proposals: number;
  proposalMin: string;
  proposalMax: string;
  daysLeft: number;
  hasTransaction: boolean;
  ticket: string;
  labels: string[];
  canDrag: boolean;
}
