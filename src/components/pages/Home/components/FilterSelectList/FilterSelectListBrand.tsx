import { Checkbox, FormControlLabel } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setBrand } from '../../../../store/filterSlice';
import { useAppSelector } from '../../../../hooks';
import { IFilterSelectListProps, ICheckBox } from '../../types/types';
import styles from './FilterSelectList.module.css';

export default function FilterSelectList({ products, filterNames }: IFilterSelectListProps) {
  const dispatch = useDispatch();

  const stateBrand = useAppSelector((state) => state.filter.brand);
  const brand = stateBrand || [];

  function convertStringToObject(array: [string, number][]) {
    const result: ICheckBox[] = [];
    array.map((brandName, index) => {
      let count = 0;
      products.map((product) => {
        if (product.brand === brandName[0]) count += 1;
        return undefined;
      });
      result.push({
        id: index,
        name: brandName[0],
        checked: brand.indexOf(brandName[0]) > -1,
        count,
        maxCount: brandName[1],
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
        onChange={() => dispatch(setBrand([filterName[filter.id].name]))}
        key={`${filter.id} + ${filter.name}`}
        label={`${filter.name} ${filter.count}/${filter.maxCount}`}
        checked={filter.checked}
      />
    );
  }
  return (
    <section className='checkbox-filter'>
      <h3>Brand</h3>
      <div className={styles['filter-select-list']}>
        {filterName.map((name) => renderCheckBox(name))}
      </div>
    </section>
  );
}
