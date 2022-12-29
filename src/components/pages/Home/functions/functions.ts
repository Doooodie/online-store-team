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
