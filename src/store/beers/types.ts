export interface SingleBeer {
  id: number;
  name: string;
  tagline: string;
  imageUrl: string;
  image_url: string;
}

export interface BeersState {
  loading: boolean;
  error: string;
  beers: SingleBeer[];
  limit: number;
  query: string;
  page: number;
  count: number;
  avm: number;
  ibu: number;
  ebc: number;
}
