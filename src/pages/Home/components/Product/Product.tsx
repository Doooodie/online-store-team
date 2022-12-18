import MyButton from '../../UI/button/MyButton';
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
        <MyButton name='add to card' />
        <MyButton name='details' />
      </div>
    </div>
  );
}
