import { useState } from 'react';
import ProductList from './components/ProductList/ProductList';
import Container from './components/Container/Container';
import ProductFilter from './components/ProductsFilter/ProductFilter';
import { IFilter } from './types/types';
import { useFilterProducts } from './hooks/useFilter';
import dataProducts from '../../assets/json/products.json';
import './Home.css';

function Home() {
  const productsArray = dataProducts.products;
  const [products] = useState(productsArray);
  const [filter, setFilter] = useState<IFilter>({
    sort: 'default',
    query: '',
    price: {
      min: 0,
      max: 1749,
    },
    stock: {
      min: 2,
      max: 150,
    },
  });
  const filteredProducts = useFilterProducts(
    products,
    filter.sort,
    filter.query,
    filter.price,
    filter.stock,
  );

  return (
    <Container>
      <ProductFilter filter={filter} setFilter={setFilter} />
      <ProductList products={filteredProducts} />
    </Container>
  );
}

export default Home;
