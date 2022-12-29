import { ChangeEvent } from 'react';

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
  filter: IFilter;
  price: SliderChange;
  stock: SliderChange;
  products: IProduct[];
  setFilter: (e: IFilter) => void;
  setStock: (model: SliderChange) => void;
  setPrice: (model: SliderChange) => void;
}

export type SliderChange = {
  min: number;
  max: number;
  isDefault: boolean;
};

export interface MySelectProps {
  defaultValue: string;
  value: string;
  options: IOptions[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
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
