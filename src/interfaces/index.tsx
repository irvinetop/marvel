export interface Character {
  id: number;
  name: string;
  imageUrl: string;
  isFavorite: boolean;
  comic?: Comic[];
  description?: string;
}

export interface Comic {
  name: string;
  year: number;
  imageUrl: string;
}
