export interface SingleBeer {
  id: number;
  name: string;
  tagline: string;
  imageUrl: string;
}

export interface FavoritesState {
  favorites: SingleBeer[];
}
