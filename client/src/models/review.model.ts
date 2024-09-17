export interface ReviewItem {
  id: number;
  userName: string;
  content: string;
  createdAt: string;
  score: number;
}

export type ReviewItemWrite = Pick<ReviewItem, 'content' | 'score'>;
