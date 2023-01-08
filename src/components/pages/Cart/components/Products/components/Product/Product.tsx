import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../../../hooks';
import productsData from '../../../../../../../assets/json/products.json';

import './Product.css';

interface IProduct {
  id: number;
  index: number;
}

function Product({ id, index }: IProduct) {
  const productsInCart = useAppSelector((state) => state.cart.products);
  const productCount = productsInCart.find((item) => item.id === id)?.count;
  const product = productsData.products.find((item) => item.id === id);

  return (
    <div className='product-container'>
      <div className='product-index'>{index}</div>
      <Link to={`/product-details/${id}`} className='product-info'>
        <img src={product?.images[0]} alt={`${product?.title} logo`} className='product-image' />
        <div className='product-details'>
          <h3 className='product-title'>{product?.title}</h3>
          <p className='product-description'>{product?.description}</p>
          <div className='product-details-bottom'>
            <span className='details-bottom-info'>Rating: {product?.rating}</span>
            <span className='details-bottom-info'>Discount: {product?.discountPercentage}%</span>
          </div>
        </div>
      </Link>
      <div className='details-count'>
        <p>Stock: {product?.stock}</p>
        <div className='details-counter'>
          <button type='button' className='counter-button'>
            -
          </button>
          <span className='counter-number'>{productCount}</span>
          <button type='button' className='counter-button'>
            +
          </button>
        </div>
        <p>€{product?.price}</p>
      </div>
    </div>
  );
}

export default Product;
