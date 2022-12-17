/* eslint-disable */
import dataProducts from '../../assets/json/products.json';
import ProductList from './components/ProductList/ProductList';
import { useMemo, useState } from 'react';
import './Home.css';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

function Home() {
  const productsArray = dataProducts.products;
  const [products, setProducts] = useState(productsArray);
  const [searchQuery, setSearchQuery] = useState('');

  const [sortQuery, setSortQuery] = useState('default');



  const searchProducts = useMemo(() => {
    return [...products].filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery])

  return (
    <div>
      <div>
        <MyInput 
            placeholder='Search...'
            value={searchQuery}
            onChange={(e: any) => setSearchQuery(e.target.value)}
          />

          <MySelect 
            defaultValue='Sort options...'
            options={[
              {value: 'priceASC', name: 'Sort by price ASC'},
              {value: 'priceDESC', name: 'Sort by price DESC'},
              {value: 'ratingASC', name: 'Sort by rating ASC'},
              {value: 'ratingDESC', name: 'Sort by rating DESC'},
              {value: 'discountASC', name: 'Sort by discount ASC'},
              {value: 'discountDESC', name: 'Sort by discount DESC'},
            ]}
          />
      </div>
        <ProductList products={searchProducts}/>
    </div>
    
  );
}

export default Home;
