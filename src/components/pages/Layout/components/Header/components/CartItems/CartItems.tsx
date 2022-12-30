import { useAppSelector } from '../../../../../../hooks';

function CartItems() {
  const products = useAppSelector((state) => state.cart.products);
  const itemsCount = products.length;

  return (
    <span>
      Cart items: <strong>{itemsCount}</strong>
    </span>
  );
}

export default CartItems;
