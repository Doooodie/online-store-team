import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { addToCart, removeFromCart } from '../../../../store/cartSlice';
import './productCardButton.css';

interface AddToCartButtonProps {
  id: number;
  price: number;
  className: string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = function AddToCartButton({
  id,
  price,
  className,
}) {
  const products = useAppSelector((state) => state.cart.products);
  const thisProduct = products.find((product) => product.id === id);
  const buttonText = thisProduct ? 'Drop from cart' : 'Add to cart';
  const [text, setText] = useState(buttonText);

  const dispatch = useAppDispatch();

  const addTask = () => {
    if (!thisProduct) {
      dispatch(addToCart({ id, price, count: 1 }));
      setText('Drop from cart');
    } else {
      dispatch(removeFromCart({ id, price, count: 1 }));
      setText('Add to cart');
    }
  };

  return (
    <button type='button' className={className} onClick={addTask}>
      {text}
    </button>
  );
};

export default AddToCartButton;
