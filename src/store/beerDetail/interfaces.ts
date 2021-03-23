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

export interface Mash {
  duration: number;
  temp: { unit: string; value: number };
}

export interface Method {
  fermentation: { temp: { unit: string; value: number } };
  mashTemp: Mash[];
  twist: string;
}

export interface SingleBeer {
  name: string;
  tagline: string;
  description: string;
  image_url: string;
  abv: number;
  ebc: number;
  ibu: number;
  food_pairing: string[];
  brewers_tips: string;
  ingredients: Ingredients;
  method: Method;
}

export interface BeerDetailState {
  loading: boolean;
  error: string;
  beer: SingleBeer;
}
