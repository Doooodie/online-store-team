import { useDispatch } from 'react-redux';
import styles from './MyInput.module.css';
import { useAppSelector } from '../../../../hooks';
import { setQuery } from '../../../../store/filterSlice';

interface MyInputProps {
  placeholder: string;
}

export default function MyInput({ placeholder }: MyInputProps) {
  const dispatch = useDispatch();

  const query = useAppSelector((state) => state.filter.query);
  return (
    <div className={styles['floating-label']}>
      <input
        className={styles['floating-label-input']}
        placeholder={placeholder}
        value={query}
        onChange={(e) => dispatch(setQuery(e.target.value))}
      />
    </div>
  );
}
