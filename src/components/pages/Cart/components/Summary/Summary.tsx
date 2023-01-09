import CartItems from '../../../Layout/components/Header/components/CartItems/CartItems';
import CartTotal from '../../../Layout/components/Header/components/CartTotal/CartTotal';

import './Summary.css';

function Summary() {
  return (
    <section className='summary-container'>
      <h2 className='summary-heading'>Summary</h2>
      <p className='summary-info'>
        <CartItems />
      </p>
      <p className='summary-info'>
        <CartTotal />
      </p>
      <input type='search' placeholder='Enter promocode' className='summary-promo-input' />
      <p className='summary-promo-info'>
        Promo for test: <strong>RS</strong>
      </p>
      <button type='button' className='buy-button summary-button'>
        Buy Now
      </button>
    </section>
  );
}

export default Summary;
