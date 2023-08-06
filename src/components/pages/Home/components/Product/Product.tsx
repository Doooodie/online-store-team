import AddToCartButton from '../../UI/buttons/AddToCartButton';
import ShowProductDetails from '../../UI/buttons/ShowProductDetails';
import { ProductProps } from '../../types/types';
import './Product.css';

export default function Product({ product }: ProductProps) {
  return (
    <div className='product' style={{ backgroundImage: `url(${product.images[0]})` }}>
      <div className='product-header'>{product.title}</div>

      <div className='product-description'>
        <ul className='product-description-list'>
          <li className='product-description-item'>Category: {product.category}</li>
          <li className='product-description-item'>Brand: {product.brand}</li>
          <li className='product-description-item'>Price: {product.price}</li>
          <li className='product-description-item'>Discount: {product.discountPercentage}</li>
          <li className='product-description-item'>Rating: {product.rating}</li>
          <li className='product-description-item'>Stock: {product.stock}</li>
        </ul>
      </div>
      <div className='product-footer'>
        <AddToCartButton id={product.id} price={product.price} className='product-card-button' />
        <ShowProductDetails id={product.id} />
      </div>
    </div>
  );
}
