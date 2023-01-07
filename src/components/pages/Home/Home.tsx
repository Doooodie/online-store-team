import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import ProductList from './components/ProductList/ProductList';
import Container from './components/Container/Container';
import ProductFilter from './components/ProductsFilter/ProductFilter';
import { KeysOfProduct } from './types/types';
import { useFilterProducts } from './hooks/useFilter';
import dataProducts from '../../../assets/json/products.json';
import findInterval from './functions/functions';

function Home() {
  const filter = useAppSelector((state) => state.filter);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const sort = searchParams.get('sort') || 'default';

  useEffect(() => {
    const params: any = {};
    if (filter.query.length) params.query = filter.query;
    if (filter.sort !== 'default') params.sort = filter.sort;
    setSearchParams(params);
  }, [filter, setSearchParams]);

  const productsArray = dataProducts.products;
  const [products] = useState(productsArray);

  const [price, setPrice] = useState({
    min: 0,
    max: 1750,
    isDefault: true,
  });

  const [stock, setStock] = useState({
    min: 2,
    max: 150,
    isDefault: true,
  });

  const [category, setCategory] = useState<Array<string>>([]);
  const [brand, setBrand] = useState<Array<string>>([]);
  const [big, setBig] = useState<boolean | undefined>(undefined);

  const filteredProducts = useFilterProducts(products, sort, query, price, stock, category, brand);

  const resultPrice = findInterval(filteredProducts, KeysOfProduct.price);
  const resultStock = findInterval(filteredProducts, KeysOfProduct.stock);

  useEffect(() => {
    if (price.isDefault) {
      setPrice({ min: resultPrice.min, max: resultPrice.max, isDefault: true });
    }
  }, [resultPrice.min, resultPrice.max, price.isDefault]);

  useEffect(() => {
    if (stock.isDefault) {
      setStock({ min: resultStock.min, max: resultStock.max, isDefault: true });
    }
  }, [resultStock.min, resultStock.max, stock.isDefault]);

  return (
    <Container>
      <ProductFilter
        price={price}
        stock={stock}
        products={filteredProducts}
        setPrice={setPrice}
        setStock={setStock}
        category={category}
        setCategory={setCategory}
        brand={brand}
        setBrand={setBrand}
      />
      <ProductList big={big} setBig={setBig} products={filteredProducts} />
    </Container>
  );
}

export default Home;
