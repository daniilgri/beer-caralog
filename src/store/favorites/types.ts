export interface SingleBeer {
  id: number;
  name: string;
  tagline: string;
}

export interface FavoritesState {
  favorites: SingleBeer[];
}
