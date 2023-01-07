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
  price: SliderChange;
  stock: SliderChange;
  products: IProduct[];
  setStock: (model: SliderChange) => void;
  setPrice: (model: SliderChange) => void;
  category: string[];
  setCategory: (model: string[]) => void;
  brand: string[];
  setBrand: (model: string[]) => void;
}

export type SliderChange = {
  min: number;
  max: number;
  isDefault: boolean;
};

export interface MySelectProps {
  defaultValue: string;
  options: IOptions[];
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
  filterName: string;
  keys: string[];
  setKeys: (model: string[]) => void;
  checkBoxList: ICheckBox[];
  setCheckBoxList: (model: ICheckBox[]) => void;
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
