export interface Character {
  id: number;
  name: string;
  imageUrl: string;
  isFavorite: boolean;
  comic?: Comic[];
  description?: string;
}

interface Comic {
  title: string;
  year: number;
  imageUrl: string;
}
