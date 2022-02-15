export interface Animal {
  id: number;
  pistDate: Date;
  url: string;
  description: string;
  allwComments: string;
  likes: string;
  comments: string;
  userId: number;
}

export type Animais = Array<Animal>
