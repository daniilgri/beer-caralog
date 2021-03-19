export interface Hop {
  add: string;
  amount: { unit: string; value: number };
  attribute: string;
  name: string;
}

export interface Malt {
  amount: { unit: string; value: number };
  name: string;
}

export interface Ingredients {
  hops: Hop[];
  malt: Malt[];
  yeast: string;
}

export interface SingleBeer {
  name: string;
  tagline: string;
  description: string;
  imageUrl: string;
  abv: number;
  ebc: number;
  ibu: number;
  foodPairing: string[];
  brewersTips: string;
  ingredients: Ingredients;
}

export interface BeerDetailState {
  loading: boolean;
  error: string;
  beer: SingleBeer;
}
