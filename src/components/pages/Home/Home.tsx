import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import ProductList from './components/ProductList/ProductList';
import Container from './components/Container/Container';
import ProductFilter from './components/ProductsFilter/ProductFilter';
import { KeysOfProduct } from './types/types';
import { useFilterProducts } from './hooks/useFilter';
import dataProducts from '../../../assets/json/products.json';
import findInterval from './functions/functions';
import { setPrice, setStock } from '../../store/filterSlice';

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.filter);
  const { query, sort, category, brand } = filter;
  const initPrice = {
    query: ['0', '1750'],
    min: 0,
    max: 1750,
    isDefault: false,
  };
  const initStock = {
    query: ['0', '150'],
    min: 0,
    max: 150,
    isDefault: false,
  };
  const price = filter.price || initPrice;
  const stock = filter.stock || initStock;

  type IQuery = {
    query?: string;
    sort?: string;
    category?: string;
    brand?: string;
    price?: string;
    stock?: string;
  };

  useEffect(() => {
    const myFilter: IQuery = {};
    if (filter.query) myFilter.query = filter.query;
    if (filter.sort) myFilter.sort = filter.sort;
    if (filter.brand) myFilter.brand = filter.brand.join(' ');
    if (filter.category) myFilter.category = filter.category.join(' ');
    if (filter.price && !filter.price.isDefault) myFilter.price = filter.price?.query.join('-');
    if (filter.stock && !filter.stock.isDefault) myFilter.stock = filter.stock?.query.join('-');
    setSearchParams(myFilter);
  }, [setSearchParams, filter]);

  const productsArray = dataProducts.products;
  const [products] = useState(productsArray);

  // const [price, setPrice] = useState({
  //   min: 0,
  //   max: 1750,
  //   isDefault: true,
  // });

  // const [stock, setStock] = useState({
  //   query: ['hello', 'hello'],
  //   min: 2,
  //   max: 150,
  //   isDefault: true,
  // });

  const [big, setBig] = useState<boolean | undefined>(undefined);

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
          isDefault: false,
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
          isDefault: false,
        }),
      );
    }
  }, [resultStock.min, resultStock.max, stock.isDefault, dispatch]);

  return (
    <Container>
      <ProductFilter products={filteredProducts} searchParams={searchParams} />
      <ProductList big={big} setBig={setBig} products={filteredProducts} />
    </Container>
  );
}

export default Home;
