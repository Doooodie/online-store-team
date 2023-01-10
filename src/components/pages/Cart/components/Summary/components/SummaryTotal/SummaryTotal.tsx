import { useAppSelector } from '../../../../../../hooks';

import './SummaryTotal.css';

function SummaryTotal() {
  const products = useAppSelector((state) => state.cart.products);
  const savedDiscounts = useAppSelector((state) => state.promo.codes);

  const discountPercentage = savedDiscounts.reduce((sum, current) => sum + current.discount, 0);
  const price = products.reduce((sum, current) => sum + current.price * current.count, 0);

  const discount = (price / 100) * discountPercentage;
  const result = price - discount;

  if (savedDiscounts.length) {
    return (
      <>
        <p className='price-total price-crossed'>
          Total: <strong>€{price}</strong>
        </p>
        <p className='price-total'>
          Total: <strong>€{result.toFixed(2)}</strong>
        </p>
      </>
    );
  }

  return (
    <p className='price-total'>
      Total: <strong>€{price}</strong>
    </p>
  );
}

export default SummaryTotal;
