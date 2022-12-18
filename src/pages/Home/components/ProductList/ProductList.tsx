import styles from './ProductList.module.css';
import Product from '../Product/Product';
import { IProduct } from '../../types/types';

export interface ProductListProps {
  products: IProduct[];
}
export default function ProductList({ products }: ProductListProps) {
  return (
    <div className={styles.productList}>
      {products.map((item) => (
        <Product product={item} key={item.id} />
      ))}
    </div>
  );
}
