/* eslint-disable */
import styles from './ProductList.module.css';
import Product from "../Product/Product";

export default function ProductList({ products }) {
    return(
        <div className={styles.productList}>
            {products.map((item) => (
                <Product product={item} key={item.id} />
            ))}
    </div>
    )
}