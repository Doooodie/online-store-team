import { useAppSelector } from '../../../../hooks';
import Product from './components/Product/Product';
import Pagination from './components/Pagination/Pagination';

import './Products.css';

function Products() {
  const productsInCart = useAppSelector((state) => state.cart.products);
  const productComponents = productsInCart.map((product, index) => {
    const productIndex = index + 1;
    return <Product id={product.id} index={productIndex} key={product.id} />;
  });

  return (
    <section className='products-container'>
      <div className='products-header'>
        <h2 className='products-heading'>Products in Cart</h2>
        <Pagination />
      </div>

      {productComponents}
    </section>
  );
}

export default Products;
