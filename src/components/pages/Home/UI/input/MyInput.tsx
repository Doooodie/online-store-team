import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import styles from './MyInput.module.css';
import { useAppSelector } from '../../../../hooks';
import { setQuery } from '../../../../store/filterSlice';

interface MyInputProps {
  placeholder: string;
  searchParams: URLSearchParams;
}

export default function MyInput({ placeholder, searchParams }: MyInputProps) {
  const dispatch = useDispatch();

  useMemo(() => {
    const current = searchParams.get('query');
    if (current === null) dispatch(setQuery(''));
    if (current !== null) dispatch(setQuery(current));
  }, [searchParams, dispatch]);

  const stateQuery = useAppSelector((state) => state.filter.query);
  const value = stateQuery || '';
  return (
    <div className={styles['floating-label']}>
      <input
        className={styles['floating-label-input']}
        placeholder={placeholder}
        value={value}
        onChange={(e) => dispatch(setQuery(e.target.value))}
      />
    </div>
  );
}
