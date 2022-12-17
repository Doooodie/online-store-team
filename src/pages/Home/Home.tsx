/* eslint-disable */
import dataProducts from '../../assets/json/products.json';
import ProductList from './components/ProductList/ProductList';
import { useMemo, useState } from 'react';
import './Home.css';
import { MyInput } from './UI/MyInput';

function Home() {
  const productsArray = dataProducts.products;
  const [products, setProducts] = useState(productsArray);
  const [searchQuery, setSearchQuery] = useState('');


  
  const searchProducts = useMemo(() => {
    console.log(searchQuery)
    return [...products].filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery])

  return (
    <div>
        <MyInput 
          placeholder='Search...'
          value={searchQuery}
          onChange={(e: any) => setSearchQuery(e.target.value)}
        />
        <ProductList products={searchProducts}/>
    </div>
    
  );
}

export default Home;
