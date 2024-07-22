export interface OfferProps {
  name: string;
  short_description: string;
  image_url: string;
}

export interface ComboProps {
  name: string;
  price: number;
  image_url: string;
}

export interface CityProps {
  name: string;
  properties: number;
  image_url: string;
}

export interface PropertyProps {
  name: string;
  image_url: string;
}

export interface DealProps {
  name: string;
  address: string;
  score: float;
  review_number: number;
  night_number: number;
  real_price: number;
  discount_price: number;
  is_genius: boolean;
  special_deal: string;
  image_url: string;
}
