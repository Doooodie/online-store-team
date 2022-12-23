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
    minPrice: 0,
    maxPrice: 1749,
  });
  const filteredProducts = useFilterProducts(
    products,
    filter.sort,
    filter.query,
    filter.minPrice,
    filter.maxPrice,
  );

  return (
    <Container>
      <ProductFilter filter={filter} setFilter={setFilter} />
      <ProductList products={filteredProducts} />
    </Container>
  );
}

export default Home;
