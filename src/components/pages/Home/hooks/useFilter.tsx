import { useMemo } from 'react';
import { IProduct, ISelectedSort } from '../types/types';

interface ISlider {
  query: string[];
  min: number;
  max: number;
  isDefault: boolean;
}

export function useSortedPost(products: IProduct[], sort: FilterName<string>) {
  const getSortedProducts = useMemo(() => {
    if (sort === null || sort === undefined) return [...products];
    const sortValue = sort.split('-')[0] as keyof ISelectedSort;
    const reverse = sort.split('-')[1];
    if (sortValue === 'default') return [...products];
    const sorted = [...products].sort((a, b) => b[sortValue] - a[sortValue]);
    return reverse === 'ASC' ? sorted : sorted.reverse();
  }, [sort, products]);
  return getSortedProducts;
}

export function useSearchProducts(products: IProduct[], query: FilterName<string>) {
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
  const sortByPrice = useMemo(() => {
    if (price === undefined) {
      return [...products];
    }
    if (price.isDefault) {
      return [...products];
    }
    return [...products].filter(
      (product) => product.price >= price.min && product.price <= price.max,
    );
  }, [products, price]);
  return sortByPrice;
}

export function useSortByStock(products: IProduct[], stock: ISlider) {
  const SortByStock = useMemo(() => {
    if (stock === undefined) {
      return [...products];
    }
    if (stock.isDefault) {
      return [...products];
    }
    return [...products].filter(
      (product) => product.stock >= stock.min && product.stock <= stock.max,
    );
  }, [products, stock]);
  return SortByStock;
}

export function useFilterByBrand(product: IProduct[], brandNames: string[] | undefined | string) {
  const filteredByBrand = useMemo(() => {
    if (brandNames === undefined || !Array.isArray(brandNames)) return product;
    if (!brandNames.length) {
      return product;
    }
    const result: IProduct[] = [];
    for (let i = 0; i < brandNames.length; i += 1) {
      for (let j = 0; j < product.length; j += 1) {
        if (product[j].brand.toLowerCase() === brandNames[i].toLowerCase()) {
          result.push(product[j]);
        }
      }
    }
    return result;
  }, [product, brandNames]);
  return filteredByBrand;
}

export function useFilterByCategory(
  product: IProduct[],
  categoryNames: string[] | undefined | string,
) {
  const filteredByCategory = useMemo(() => {
    if (categoryNames === undefined || !Array.isArray(categoryNames)) return product;
    if (!categoryNames.length) {
      return product;
    }
    const result: IProduct[] = [];
    for (let i = 0; i < categoryNames.length; i += 1) {
      for (let j = 0; j < product.length; j += 1) {
        if (product[j].category.toLowerCase() === categoryNames[i].toLowerCase()) {
          result.push(product[j]);
        }
      }
    }
    return result;
  }, [product, categoryNames]);
  return filteredByCategory;
}

type FilterName<T> = T | null | undefined;

export function useFilterProducts(
  products: IProduct[],
  sort: FilterName<string>,
  query: FilterName<string>,
  price: ISlider,
  stock: ISlider,
  category: string[] | undefined | string,
  brand: string[] | undefined | string,
) {
  const filteredByCategory = useFilterByCategory(products, category);
  const filteredByBrand = useFilterByBrand(filteredByCategory, brand);
  const sortedProducts = useSortedPost(filteredByBrand, sort);
  const sortedAndSearchProducts = useSearchProducts(sortedProducts, query);
  const sortedWithPriceAndSearchProduects = useSortByPrice(sortedAndSearchProducts, price);
  const sortedWithPriceStockSearchProducts = useSortByStock(
    sortedWithPriceAndSearchProduects,
    stock,
  );
  return sortedWithPriceStockSearchProducts;
}
