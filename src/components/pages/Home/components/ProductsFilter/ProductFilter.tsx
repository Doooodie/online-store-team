import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { resetFilter } from '../../../../store/filterSlice';
import MyInput from '../../UI/input/MyInput';
import MySelect from '../../UI/select/MySelect';
import { IProductFilter } from '../../types/types';
import RangeSliderPrice from '../../UI/rangeSlider/MyRangeSliderPrice';
import RangeSliderStock from '../../UI/rangeSlider/MyRangeSliderStock';
import FilterSelectListCategory from '../FilterSelectList/FilterSelectListCategory';
import FilterSelectListBrand from '../FilterSelectList/FilterSelectListBrand';
import dataProducts from '../../../../../assets/json/products.json';
import { getListFilterNames } from '../../functions/functions';
import styles from './ProductFilter.module.css';

export default function ProductFilter({
  price,
  stock,
  setPrice,
  setStock,
  products,
  searchParams,
}: IProductFilter) {
  const dispatch = useDispatch();
  const categories = getListFilterNames('category', dataProducts.products);
  const brandes = getListFilterNames('brand', dataProducts.products);

  return (
    <aside className={styles['product-filter']}>
      <Button
        onClick={() => dispatch(resetFilter(true))}
        size='small'
        variant='outlined'
        startIcon={<DeleteIcon />}
      >
        Reset Filters
      </Button>
      <MyInput searchParams={searchParams} placeholder='Search...' />
      <MySelect
        defaultValue='Sort options...'
        options={[
          { value: 'price-ASC', name: 'Sort by price ASC' },
          { value: 'price-DESC', name: 'Sort by price DESC' },
          { value: 'name-ASC', name: 'Sort by rating ASC' },
          { value: 'name-DESC', name: 'Sort by rating DESC' },
          { value: 'discount-ASC', name: 'Sort by discount ASC' },
          { value: 'discount-DESC', name: 'Sort by discount DESC' },
        ]}
        searchParams={searchParams}
      />
      <RangeSliderPrice price={price} setPrice={setPrice} title='Price' step={5} />
      <RangeSliderStock stock={stock} setStock={setStock} title='Stock' step={1} />
      <FilterSelectListCategory products={products} filterNames={categories} />
      <FilterSelectListBrand products={products} filterNames={brandes} />
    </aside>
  );
}
