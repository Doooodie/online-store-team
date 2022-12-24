import styles from './MyButton.module.css';

interface MyButtonProps {
  name: string;
}
export default function MyButton({ name }: MyButtonProps) {
  return (
    <button type='button' className={styles.button}>
      {name}
    </button>
  );
}
