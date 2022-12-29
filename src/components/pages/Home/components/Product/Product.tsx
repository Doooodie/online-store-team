import AddToCartButton from '../../UI/buttons/AddToCartButton';
import ShowProductDetails from '../../UI/buttons/ShowProductDetails';
import styles from './Product.module.css';
import { ProductProps } from '../../types/types';

export default function Product({ product }: ProductProps) {
  return (
    <div className={styles.product}>
      <h3>{product.title}</h3>
      <div>
        <ul>
          <li>Category: {product.category}</li>
          <li>Brand: {product.brand}</li>
          <li>Price: {product.price}</li>
          <li>Discount: {product.discountPercentage}</li>
          <li>Rating: {product.rating}</li>
          <li>Stock: {product.stock}</li>
        </ul>

        <div className={styles.buttonsContainer}>
          <AddToCartButton id={product.id} price={product.price} className='product-card-button' />
          <ShowProductDetails id={product.id} />
        </div>
      </div>
    </div>
  );
}
