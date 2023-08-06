import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import ProductList from './components/ProductList/ProductList';
import Container from './components/Container/Container';
import ProductFilter from './components/ProductsFilter/ProductFilter';
import { KeysOfProduct, IQuery } from './types/types';
import { useFilterProducts } from './hooks/useFilter';
import dataProducts from '../../../assets/json/products.json';
import findInterval from './functions/functions';
import { setPrice, setStock } from '../../store/filterSlice';

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.filter);
  const { query, sort, category, brand, price, stock } = filter;

  useEffect(() => {
    const myFilter: IQuery = {};
    if (filter.query) myFilter.query = filter.query;
    if (filter.sort) myFilter.sort = filter.sort;
    if (filter.brand) myFilter.brand = filter.brand.join(' ');
    if (filter.category) myFilter.category = filter.category.join(' ');
    if (filter.price && !filter.price.isDefault) myFilter.price = filter.price?.query.join('-');
    if (filter.stock && !filter.stock.isDefault) myFilter.stock = filter.stock?.query.join('-');
    if (filter.big !== undefined) myFilter.big = String(filter.big);
    setSearchParams(myFilter);
  }, [setSearchParams, filter]);

  const productsArray = dataProducts.products;
  const [products] = useState(productsArray);
  const filteredProducts = useFilterProducts(products, sort, query, price, stock, category, brand);
  const resultPrice = findInterval(filteredProducts, KeysOfProduct.price);
  const resultStock = findInterval(filteredProducts, KeysOfProduct.stock);

  useEffect(() => {
    if (price.isDefault) {
      dispatch(
        setPrice({
          query: [String(resultPrice.min), String(resultPrice.max)],
          min: resultPrice.min,
          max: resultPrice.max,
          isDefault: true,
        }),
      );
    }
  }, [resultPrice.min, resultPrice.max, price.isDefault, dispatch]);

  useEffect(() => {
    if (stock.isDefault) {
      dispatch(
        setStock({
          query: [String(resultStock.min), String(resultStock.max)],
          min: resultStock.min,
          max: resultStock.max,
          isDefault: true,
        }),
      );
    }
  }, [resultStock.min, resultStock.max, stock.isDefault, dispatch]);

  return (
    <Container>
      <ProductFilter products={filteredProducts} searchParams={searchParams} />
      <ProductList products={filteredProducts} />
    </Container>
  );
}

export default Home;
