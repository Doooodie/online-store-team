import { Checkbox, FormControlLabel } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setCategory } from '../../../../store/filterSlice';
import { useAppSelector } from '../../../../hooks';
import { IFilterSelectListProps, ICheckBox } from '../../types/types';
import styles from './FilterSelectList.module.css';

export default function FilterSelectList({ products, filterNames }: IFilterSelectListProps) {
  const dispatch = useDispatch();
  const category = useAppSelector((state) => state.filter.category) || [];

  function convertStringToObject(array: [string, number][]) {
    const result: ICheckBox[] = [];
    array.map((categoryName, index) => {
      let count = 0;
      products.map((product) => {
        if (product.category === categoryName[0]) count += 1;
        return undefined;
      });
      result.push({
        id: index,
        name: categoryName[0],
        checked: category.indexOf(categoryName[0]) > -1,
        count,
        maxCount: categoryName[1],
      });
      return undefined;
    });
    return result;
  }
  const filterName = convertStringToObject(filterNames);

  function renderCheckBox(filter: ICheckBox) {
    return (
      <FormControlLabel
        control={<Checkbox />}
        onChange={() => dispatch(setCategory(filterName[filter.id].name))}
        key={filter.id}
        label={`${filter.name} ${filter.count}/${filter.maxCount}`}
        checked={filter.checked}
      />
    );
  }
  return (
    <section>
      <h2>Category</h2>
      <div className={styles['filter-select-list']}>
        {filterName.map((name) => renderCheckBox(name))}
      </div>
    </section>
  );
}
