type RatingType = {
  rate: number;
  count: number;
};

export interface ProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingType;
}

export interface ProductsState {
  collection: ProductProps[];
  status: 'idle' | 'loading' | 'failed';
}
