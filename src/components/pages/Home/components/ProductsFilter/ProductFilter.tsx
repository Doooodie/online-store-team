import { useDispatch } from 'react-redux';
import { useState } from 'react';
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
import './ProductFilter.css';

export default function ProductFilter({ products, searchParams }: IProductFilter) {
  const dispatch = useDispatch();
  const [linkText, setLinkText] = useState('Copy');
  const categories = getListFilterNames('category', dataProducts.products);
  const brandes = getListFilterNames('brand', dataProducts.products);

  function copiedLink() {
    const link = window.location.href;
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setLinkText('Copied!');
        setTimeout(() => setLinkText('Copy'), 1000);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  return (
    <aside className='product-filter'>
      <Button
        sx={{ margin: '1rem 0', width: '100%' }}
        onClick={() => dispatch(resetFilter(true))}
        size='small'
        variant='outlined'
        startIcon={<DeleteIcon />}
      >
        Reset Filters
      </Button>
      <Button
        sx={{ marginBottom: '1rem', width: '100%' }}
        onClick={() => copiedLink()}
        size='small'
        variant='outlined'
        startIcon={<DeleteIcon />}
      >
        {linkText}
      </Button>
      <MyInput searchParams={searchParams} placeholder='Search...' />
      <MySelect
        defaultValue='Sort options...'
        options={[
          { value: 'price-ASC', name: 'Sort by price ASC' },
          { value: 'price-DESC', name: 'Sort by price DESC' },
          { value: 'discountPercentage-ASC', name: 'Sort by discount ASC' },
          { value: 'discountPercentage-DESC', name: 'Sort by discount DESC' },
        ]}
        searchParams={searchParams}
      />
      <RangeSliderPrice title='Price' step={5} />
      <RangeSliderStock title='Stock' step={1} />
      <FilterSelectListCategory products={products} filterNames={categories} />
      <FilterSelectListBrand products={products} filterNames={brandes} />
    </aside>
  );
}
