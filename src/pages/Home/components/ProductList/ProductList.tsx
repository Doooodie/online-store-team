import styles from './ProductList.module.css';
import Product from '../Product/Product';
import { IProduct } from '../../types/types';

export interface ProductListProps {
  products: IProduct[] | undefined;
}
export default function ProductList({ products }: ProductListProps) {
  if (products?.length === 0) {
    return <h1>Posts not find</h1>;
  }
  if (products !== undefined) {
    return (
      <div className={styles.productList}>
        {products.map((item) => (
          <Product product={item} key={item.id} />
        ))}
      </div>
    );
  }
  return <h1>Posts not find</h1>;
}