import { useAppSelector } from '../../../../../../hooks';

function SummaryTotal() {
  const products = useAppSelector((state) => state.cart.products);
  const price = products.reduce((sum, current) => sum + current.price * current.count, 0);

  return (
    <span>
      Total: <strong>€{price}</strong>
    </span>
  );
}

export default SummaryTotal;
