export interface ISelectedSort {
  price: string;
  discountPercentage: string;
  rating: string;
  default: string;
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

export interface IProductFilter {
  products: IProduct[];
  searchParams: URLSearchParams;
}

export type SliderChange = {
  query: string[];
  min: number;
  max: number;
  isDefault: boolean;
};

export interface MySelectProps {
  defaultValue: string;
  options: IOptions[];
  searchParams: URLSearchParams;
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
}

export enum KeysOfProduct {
  price = 'price',
  stock = 'stock',
}

export interface IFilterSelectListProps {
  products: IProduct[];
  filterNames: [string, number][];
}

export interface ICheckBox {
  id: number;
  name: string;
  checked: boolean;
  count: number;
  maxCount: number;
}

export interface IParams {
  query?: string;
  sort?: string;
}

export type IQuery = {
  query?: string;
  sort?: string;
  category?: string;
  brand?: string;
  price?: string;
  stock?: string;
};
