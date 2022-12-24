import { useMemo } from 'react';
import { IProduct, ISelectedSort } from '../types/types';

interface ISlider {
  min: number;
  max: number;
}

export function useSortedPost(products: IProduct[], sort: string) {
  const getSortedProducts = useMemo(() => {
    const sortValue = sort.split('-')[0] as keyof ISelectedSort;
    const reverse = sort.split('-')[1];
    if (sortValue === 'default') return [...products];
    const sorted = [...products].sort((a, b) => b[sortValue] - a[sortValue]);
    return reverse === 'ASC' ? sorted : sorted.reverse();
  }, [sort, products]);
  return getSortedProducts;
}

export function useSearchProducts(products: IProduct[], query: string) {
  const searchProducts = useMemo(() => {
    if (query) {
      return [...products].filter(
        (product) =>
          product.title.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase()) ||
          product.brand.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase()) ||
          String(product.price).includes(query.toLowerCase()) ||
          String(product.discountPercentage).includes(query.toLowerCase()) ||
          String(product.rating).includes(query.toLowerCase()) ||
          String(product.stock).includes(query.toLowerCase()),
      );
    }
    return [...products];
  }, [products, query]);
  return searchProducts;
}

export function useSortByPrice(products: IProduct[], price: ISlider) {
  const sortByPrice = useMemo(
    () => [...products].filter((product) => product.price > price.min && product.price < price.max),
    [products, price.min, price.max],
  );
  return sortByPrice;
}

export function useSortByStock(products: IProduct[], stock: ISlider) {
  const sortByPrice = useMemo(
    () => [...products].filter((product) => product.stock > stock.min && product.stock < stock.max),
    [products, stock.min, stock.max],
  );
  return sortByPrice;
}

export function useFilterProducts(
  products: IProduct[],
  sort: string,
  query: string,
  price: ISlider,
  stock: ISlider,
) {
  const sortedProducts = useSortedPost(products, sort);
  const sortedAndSearchProducts = useSearchProducts(sortedProducts, query);
  const sortedWithPriceAndSearchProduects = useSortByPrice(sortedAndSearchProducts, price);
  const sortedWithPriceStockSearchProducts = useSortByStock(
    sortedWithPriceAndSearchProduects,
    stock,
  );
  return sortedWithPriceStockSearchProducts;
}
