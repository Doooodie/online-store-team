import styles from './MyInput.module.css';

interface MyInputProps {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function MyInput({ placeholder, value, onChange }: MyInputProps) {
  return (
    <div className={styles['floating-label']}>
      <input
        className={styles['floating-label-input']}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
