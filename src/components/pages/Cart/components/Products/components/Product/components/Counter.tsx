import { useAppDispatch, useAppSelector } from '../../../../../../../hooks';
import { addCount, substractCount, removeFromCart } from '../../../../../../../store/cartSlice';
import productsData from '../../../../../../../../assets/json/products.json';

import './Counter.css';

interface ICounter {
  id: number;
}

function Counter({ id }: ICounter) {
  const productsInCart = useAppSelector((state) => state.cart.products);
  const productCount = productsInCart.find((item) => item.id === id)?.count as number;
  const productStock = productsData.products.find((item) => item.id === id)?.stock;
  const dispatch = useAppDispatch();

  const changeProductCount = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;

    if (target.textContent === '+') {
      dispatch(addCount({ id, productStock }));
    } else if (productCount > 1) {
      dispatch(substractCount({ id }));
    } else dispatch(removeFromCart({ id, price: 1, count: 1 }));
  };

  return (
    <div className='details-counter'>
      <button type='button' className='counter-button' onClick={changeProductCount}>
        -
      </button>
      <span className='counter-number'>{productCount}</span>
      <button type='button' className='counter-button' onClick={changeProductCount}>
        +
      </button>
    </div>
  );
}

export default Counter;
