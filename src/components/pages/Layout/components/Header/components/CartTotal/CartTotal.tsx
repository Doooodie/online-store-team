import { useAppSelector } from '../../../../../../hooks';

function CartTotal() {
  const products = useAppSelector((state) => state.cart.products);
  const price = products.reduce((sum, current) => sum + current.price, 0);

  return (
    <span>
      Cart total: <strong>{price}</strong>
    </span>
  );
}

export default CartTotal;
