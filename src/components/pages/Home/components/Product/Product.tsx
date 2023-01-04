import MyButton from '../../UI/button/MyButton';
import { ProductProps } from '../../types/types';

export default function Product({ product }: ProductProps) {
  return (
    <div className='product'>
      <h3>{product.title}</h3>
      <div>
        <ul className='productValues'>
          <li>Category: {product.category}</li>
          <li>Brand: {product.brand}</li>
          <li>Price: {product.price}</li>
          <li>Discount: {product.discountPercentage}</li>
          <li>Rating: {product.rating}</li>
          <li>Stock: {product.stock}</li>
        </ul>
        <MyButton name='add to card' id={product.id} price={product.price} />
        <MyButton name='details' id={product.id} price={product.price} />
      </div>
    </div>
  );
}
