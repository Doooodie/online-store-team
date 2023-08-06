import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks';
import Product from './components/Product/Product';
import Pagination from './components/Pagination/Pagination';

import './Products.css';

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const limitQuery = searchParams.get('limit') || '';
  const pageQuery = searchParams.get('page') || '';

  const [limit, setLimit] = useState(+limitQuery || 3);
  const [page, setPage] = useState(+pageQuery || 1);

  const productsInCart = useAppSelector((state) => state.cart.products);
  const productComponents = productsInCart.map((product, index) => {
    const isNotFirstPage = Number(page !== 1);
    if (productsInCart.length < limit * page - limit + isNotFirstPage) setPage(page - 1);

    const productIndex = index + 1;
    if (productIndex >= limit * page - limit + isNotFirstPage && productIndex <= limit * page) {
      return <Product id={product.id} index={productIndex} key={product.id} />;
    }

    return null;
  });

  return (
    <section className='products-container'>
      <div className='products-header'>
        <h2 className='products-heading'>Products in Cart</h2>
        <Pagination
          limit={limit}
          page={page}
          setLimit={setLimit}
          setPage={setPage}
          setSearchParams={setSearchParams}
        />
      </div>

      {productComponents}
    </section>
  );
}

export default Products;
