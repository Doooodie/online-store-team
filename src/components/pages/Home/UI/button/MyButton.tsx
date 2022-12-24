import React from 'react';
import styles from './MyButton.module.css';
import { useAppDispatch } from '../../../../hooks';
import { addToCart } from '../../../../store/cartSlice';

interface MyButtonProps {
  name: string;
  id: number;
  price: number;
}

const MyButton: React.FC<MyButtonProps> = function MyButton({ name, id, price }) {
  const dispatch = useAppDispatch();
  const addTask = () => dispatch(addToCart({ id, price }));

  return (
    <button type='button' className={styles.button} onClick={addTask}>
      {name}
    </button>
  );
};

export default MyButton;
