import React from 'react';
import { useAppDispatch } from '../../../../hooks';
import { addToCart } from '../../../../store/cartSlice';
import './productCardButton.css';

interface AddToCartButtonProps {
  id: number;
  price: number;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = function AddToCartButton({ id, price }) {
  const dispatch = useAppDispatch();
  const addTask = () => dispatch(addToCart({ id, price }));

  return (
    <button type='button' className='product-card-button' onClick={addTask}>
      Add to cart
    </button>
  );
};

export default AddToCartButton;
