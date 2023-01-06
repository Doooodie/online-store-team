import { IProduct, KeysOfProduct } from '../types/types';

export default function findInterval(
  productsArr: IProduct[],
  value: KeysOfProduct.price | KeysOfProduct.stock,
) {
  const priceArr: number[] = [];
  productsArr.map((product) => priceArr.push(product[value]));
  const minValue: number = Math.floor(Math.min.apply(null, priceArr) / 5) * 5;
  const maxValue: number = Math.ceil(Math.max.apply(null, priceArr) / 5) * 5;
  return { min: minValue, max: maxValue };
}

export function getListFilterNames(filterQuery: keyof IProduct, products: IProduct[]) {
  const collection = new Map();
  products.map((product) => {
    if (collection.has(product[filterQuery])) {
      const number = collection.get(product[filterQuery]);
      collection.set(product[filterQuery], number + 1);
    } else {
      collection.set(product[filterQuery], 1);
    }
    return undefined;
  });
  return Array.from(collection);
}
