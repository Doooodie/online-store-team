import { useAppSelector } from '../../../../../../hooks';

function CartItems() {
  const products = useAppSelector((state) => state.cart.products);
  const itemsCount = products.reduce((sum, current) => sum + current.count, 0);

  return (
    <span>
      Products: <strong>{itemsCount}</strong>
    </span>
  );
}

export default CartItems;
