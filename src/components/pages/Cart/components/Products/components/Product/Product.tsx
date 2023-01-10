import { Link } from 'react-router-dom';
import productsData from '../../../../../../../assets/json/products.json';
import Counter from './components/Counter';

import './Product.css';

interface IProduct {
  id: number;
  index: number;
}

function Product({ id, index }: IProduct) {
  const product = productsData.products.find((item) => item.id === id);

  return (
    <div className='cart-product-container'>
      <div className='cart-product-index'>{index}</div>
      <Link to={`/product-details/${id}`} className='cart-product-info'>
        <img
          src={product?.images[0]}
          alt={`${product?.title} logo`}
          className='cart-product-image'
        />
        <div className='cart-product-details'>
          <h3 className='cart-product-title'>{product?.title}</h3>
          <p className='cart-product-description'>{product?.description}</p>
          <div className='cart-product-details-bottom'>
            <span className='details-bottom-info'>Rating: {product?.rating}</span>
            <span className='details-bottom-info'>Discount: {product?.discountPercentage}%</span>
          </div>
        </div>
      </Link>
      <div className='details-count'>
        <p>Stock: {product?.stock}</p>
        <Counter id={id as number} />
        <p>€{product?.price}</p>
      </div>
    </div>
  );
}

export default Product;
