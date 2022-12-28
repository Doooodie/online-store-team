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
  });

  const [sliderIntervalPrice, setSliderIntervalPrice] = useState({
    min: 0,
    max: 1499,
    isDefault: true,
  });

  const [sliderIntervalStock, setSliderIntervalStock] = useState({
    min: 2,
    max: 150,
    isDefault: true,
  });

  const filteredProducts = useFilterProducts(
    products,
    filter.sort,
    filter.query,
    sliderIntervalPrice,
    sliderIntervalStock,
  );

  const resultPrice = findInterval(filteredProducts, KeysOfProduct.price);
  const resultStock = findInterval(filteredProducts, KeysOfProduct.stock);

  useEffect(() => {
    if (sliderIntervalPrice.isDefault) {
      setSliderIntervalPrice({ min: resultPrice.min, max: resultPrice.max, isDefault: true });
    }
  }, [resultPrice.min, resultPrice.max, sliderIntervalPrice.isDefault]);

  useEffect(() => {
    if (sliderIntervalStock.isDefault) {
      setSliderIntervalStock({ min: resultStock.min, max: resultStock.max, isDefault: true });
    }
  }, [resultStock.min, resultStock.max, sliderIntervalStock.isDefault]);

  return (
    <Container>
      <ProductFilter
        filter={filter}
        setFilter={setFilter}
        price={sliderIntervalPrice}
        stock={sliderIntervalStock}
        setPrice={setSliderIntervalPrice}
        setStock={setSliderIntervalStock}
      />
      <ProductList products={filteredProducts} />
    </Container>
  );
}

export default Home;
