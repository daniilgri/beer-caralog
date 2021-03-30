export interface SingleBeer {
  id: number;
  name: string;
  tagline: string;
  image_url: string;
}

export interface BeersState {
  loading: boolean;
  beers: SingleBeer[];
  limit: number;
  query: string;
  page: number;
  count: number;
  avm: number;
  ibu: number;
  ebc: number;
}
