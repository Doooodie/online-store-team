import { useEffect, useState } from 'react';
import ProductList from './components/ProductList/ProductList';
import Container from './components/Container/Container';
import ProductFilter from './components/ProductsFilter/ProductFilter';
import { IFilter, KeysOfProduct } from './types/types';
import { useFilterProducts } from './hooks/useFilter';
import dataProducts from '../../../assets/json/products.json';
import './Home.css';
import findInterval from './functions/functions';

function Home() {
  const productsArray = dataProducts.products;
  const [products] = useState(productsArray);
  const [filter, setFilter] = useState<IFilter>({
    sort: 'default',
    query: '',
    category: [],
    brand: [],
  });

  const [price, setPrice] = useState({
    min: 0,
    max: 1499,
    isDefault: true,
  });

  const [stock, setStock] = useState({
    min: 2,
    max: 150,
    isDefault: true,
  });

  const [category, setCategory] = useState<Array<string>>([]);
  const [brand, setBrand] = useState<Array<string>>([]);

  const filteredProducts = useFilterProducts(
    products,
    filter.sort,
    filter.query,
    price,
    stock,
    category,
    brand,
  );

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
        filter={filter}
        setFilter={setFilter}
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
      <ProductList products={filteredProducts} />
    </Container>
  );
}

export default Home;
