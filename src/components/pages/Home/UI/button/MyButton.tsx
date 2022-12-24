import styles from './MyButton.module.css';

interface MyButtonProps {
  name: string;
  id?: number;
  price?: number;
}

export default function MyButton({ name, id, price }: MyButtonProps) {
  function saveDetails() {
    if (!localStorage.doodieStore) {
      const productInfo = JSON.stringify([{ id, price }]);
      localStorage.setItem('doodieStore', productInfo);
    } else {
      const storage = JSON.parse(localStorage.doodieStore);
      const productsInfo = JSON.stringify([...storage, { id, price }]);
      localStorage.setItem('doodieStore', productsInfo);
    }
  }

  return (
    <button type='button' className={styles.button} onClick={saveDetails}>
      {name}
    </button>
  );
}

MyButton.defaultProps = {
  id: 0,
  price: 0,
};
