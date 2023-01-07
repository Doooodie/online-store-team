import { useDispatch } from 'react-redux';
import { MySelectProps } from '../../types/types';
import { useAppSelector } from '../../../../hooks';
import { setSort } from '../../../../store/filterSlice';

export default function MySelect({ defaultValue, options }: MySelectProps) {
  const dispatch = useDispatch();
  const query = useAppSelector((state) => state.filter.sort);

  return (
    <select value={query} onChange={(e) => dispatch(setSort(e.target.value))}>
      <option value='default'> {defaultValue} </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
