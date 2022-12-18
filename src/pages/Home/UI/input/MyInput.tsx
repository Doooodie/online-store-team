import styles from './MyInput.module.css';

interface MyInputProps {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => string;
}

export default function MyInput({ placeholder, value, onChange }: MyInputProps) {
  return (
    <div className={styles.floatingLabel}>
      <input
        className={styles.floatingLabelInput}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
