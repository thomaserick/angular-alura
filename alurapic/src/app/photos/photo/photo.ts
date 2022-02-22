export interface Photo {
  id: number;
  postDate?: Date;
  url: string;
  description: string;
  allosComments: boolean;
  likes: number;
  comments: number;
  userId: number;
}

export type Photos = Array<Photo>;
