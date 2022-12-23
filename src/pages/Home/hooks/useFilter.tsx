import { useMemo } from 'react';
import { IProduct, ISelectedSort } from '../types/types';

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

export function useSortByPrice(products: IProduct[], minPrice: number, maxPrice: number) {
  const sortByPrice = useMemo(
    () => [...products].filter((product) => product.price > minPrice && product.price < maxPrice),
    [products, minPrice, maxPrice],
  );
  return sortByPrice;
}

export function useSortByStock(products: IProduct[], minStock: number, maxStock: number) {
  const sortByStock = useMemo(
    () => [...products].filter((product) => product.stock > minStock && product.stock < maxStock),
    [products, minStock, maxStock],
  );
  return sortByStock;
}

export function useFilterProducts(
  products: IProduct[],
  sort: string,
  query: string,
  minPrice: number,
  maxPrice: number,
  minStock: number,
  maxStock: number,
) {
  const sortedProducts = useSortedPost(products, sort);
  const sortedAndSearchProducts = useSearchProducts(sortedProducts, query);
  const sortedWithPriceAndSearchProduects = useSortByPrice(
    sortedAndSearchProducts,
    minPrice,
    maxPrice,
  );
  const sortedWithPriceStockSearchProducts = useSortByStock(
    sortedWithPriceAndSearchProduects,
    minStock,
    maxStock,
  );
  return sortedWithPriceStockSearchProducts;
}
