import Product from '../Product/Product';
import { IProduct } from '../../types/types';
import './ProductList.css';
import ToggleButtons from '../ToggleButtons/ToggleButtons';

export interface ProductListProps {
  products: IProduct[] | undefined;
  big: boolean | undefined;
  setBig: (value: boolean) => void;
}
export default function ProductList({ products, big, setBig }: ProductListProps) {
  const isBig = big === undefined || big === true;

  if (products?.length === 0) {
    return <h1>Posts not find</h1>;
  }
  if (products !== undefined) {
    return (
      <main className='product-list-wrapper'>
        <ToggleButtons setBig={setBig} />
        <h3>Found: {products.length}</h3>
        <div className={`product-list ${isBig ? '' : 'product-list-small'}`}>
          {products.map((item) => (
            <Product product={item} key={item.id} />
          ))}
        </div>
      </main>
    );
  }
  return <h1>Posts not find</h1>;
}
