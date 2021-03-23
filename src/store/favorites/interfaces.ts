export interface SingleBeer {
  id: number;
  name: string;
  tagline: string;
  image_url: string;
}

export interface FavoritesState {
  favorites: SingleBeer[];
}
