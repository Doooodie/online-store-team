import { useState } from 'react';
import { useAppSelector } from '../../../../hooks';
import Product from './components/Product/Product';

import './Products.css';

function Products() {
  const productsInCart = useAppSelector((state) => state.cart.products);
  const productComponents = productsInCart.map((product, index) => {
    const productIndex = index + 1;
    return <Product id={product.id} index={productIndex} key={product.id} />;
  });

  const [value, setValue] = useState('1');

  return (
    <section className='products-container'>
      <div className='products-header'>
        <h2 className='products-heading'>Products in Cart</h2>
        <div className='header-controls'>
          <div className='products-limit'>
            <span className='controls-text'>Limit: </span>
            <input
              type='number'
              min='1'
              max='10'
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className='limit-input'
            />
          </div>
          <div className='products-pagination'>
            <span className='controls-text'>Page: </span>
            <button type='button' className='pagination-button'>
              &lt;
            </button>
            <span className='pagination-number'>1</span>
            <button type='button' className='pagination-button'>
              &gt;
            </button>
          </div>
        </div>
      </div>

      {productComponents}
    </section>
  );
}

export default Products;
