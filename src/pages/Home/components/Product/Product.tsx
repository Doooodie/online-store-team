/* eslint-disable */
import styles from './Product.module.css';

interface ProductProps {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }
}

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
        <button type='button'>Add to card</button>
        <button type='button'>Details</button>
      </div>
    </div>
  );
}
