import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import MyInput from '../../UI/input/MyInput';
import MySelect from '../../UI/select/MySelect';
import { ICheckBox, IProductFilter } from '../../types/types';
import RangeSliderPrice from '../../UI/rangeSlider/MyRangeSliderPrice';
import RangeSliderStock from '../../UI/rangeSlider/MyRangeSliderStock';
import FilterSelectList from '../FilterSelectList/FilterSelectList';
import dataProducts from '../../../../../assets/json/products.json';
import { getListFilterNames, convertStringToObject } from '../../functions/functions';
import styles from './ProductFilter.module.css';

export default function ProductFilter({
  price,
  stock,
  setPrice,
  setStock,
  products,
  category,
  setCategory,
  brand,
  setBrand,
}: IProductFilter) {
  const categories = getListFilterNames('category', dataProducts.products);
  const brandes = getListFilterNames('brand', dataProducts.products);
  const filterNamesCategory = convertStringToObject(categories, 'category', products);
  const filterNamesBrand = convertStringToObject(brandes, 'brand', products);
  const [boxListCategory, setBoxListCategory] = useState<Array<ICheckBox>>(filterNamesCategory);
  const [boxListBrand, setBoxListBrand] = useState<Array<ICheckBox>>(filterNamesBrand);

  function resetFilters() {
    setPrice({
      min: 0,
      max: 1499,
      isDefault: true,
    });
    setStock({
      min: 2,
      max: 150,
      isDefault: true,
    });
    setCategory([]);
    setBrand([]);

    setBoxListCategory(filterNamesCategory);
    setBoxListBrand(filterNamesBrand);
  }

  return (
    <aside className={styles['product-filter']}>
      <Button
        onClick={() => resetFilters()}
        size='small'
        variant='outlined'
        startIcon={<DeleteIcon />}
      >
        Reset Filters
      </Button>
      <MyInput placeholder='Search...' />
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
      />
      <RangeSliderPrice price={price} setPrice={setPrice} title='Price' step={5} />
      <RangeSliderStock stock={stock} setStock={setStock} title='Stock' step={1} />
      <FilterSelectList
        products={products}
        filterNames={categories}
        filterName='Category'
        keys={category}
        setKeys={setCategory}
        checkBoxList={boxListCategory}
        setCheckBoxList={setBoxListCategory}
      />
      <FilterSelectList
        products={products}
        filterNames={brandes}
        filterName='Brand'
        keys={brand}
        setKeys={setBrand}
        checkBoxList={boxListBrand}
        setCheckBoxList={setBoxListBrand}
      />
    </aside>
  );
}
