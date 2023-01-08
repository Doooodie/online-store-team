import Products from './components/Products/Products';
import Summary from './components/Summary/Summary';
import { useAppSelector } from '../../hooks';

import './Cart.css';

function Cart() {
  const products = useAppSelector((state) => state.cart.products);

  if (!products.length)
    return (
      <main className='main'>
        <div className='container no-page-container'>
          <h1 className='no-page-header'>Cart is empty 😔</h1>
        </div>
      </main>
    );

  return (
    <main className='main'>
      <div className='container cart-container'>
        <Products />
        <Summary />
      </div>
    </main>
  );
}

export default Cart;
