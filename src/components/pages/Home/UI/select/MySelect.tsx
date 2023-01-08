import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { MySelectProps } from '../../types/types';
import { useAppSelector } from '../../../../hooks';
import { setSort } from '../../../../store/filterSlice';

export default function MySelect({ defaultValue, options, searchParams }: MySelectProps) {
  const dispatch = useDispatch();
  useMemo(() => {
    const current = searchParams.get('sort');
    if (current === null) dispatch(setSort('default'));
    if (current !== null) dispatch(setSort(current));
  }, [searchParams, dispatch]);

  const value = useAppSelector((state) => state.filter.sort);

  return (
    <select value={value} onChange={(e) => dispatch(setSort(e.target.value))}>
      <option value='default'> {defaultValue} </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
