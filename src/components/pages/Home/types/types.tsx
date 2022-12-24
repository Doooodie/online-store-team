export interface ISelectedSort {
  price: string
  discountPercentage: string
  rating: string
  default: string
}
    
export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface IProductFilter  {
  filter: IFilter;
  setFilter: (e: any) => any;
}

export interface MySelectProps {
  defaultValue: string;
  value: string;
  options: IOptions[];
  onChange: (e: any) => void;
}
  
export interface IOptions {
  value: string;
  name: string;
}

export interface ProductProps {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  };
}
export interface IFilter { 
  sort: string;
  query: string;
  price: {
    min: number
    max: number
  }
  stock: {
    min: number,
    max: number,
  }
}