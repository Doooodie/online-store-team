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

export function useFilterProducts(products: IProduct[], sort: string, query: string) {
  const sortedProducts = useSortedPost(products, sort);
  const getSortedAndSearchProducts = useMemo(() => {
    if (query) {
      return [...sortedProducts].filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase()),
      );
    }
    return sortedProducts;
  }, [sortedProducts, query]);
  return getSortedAndSearchProducts;
}
