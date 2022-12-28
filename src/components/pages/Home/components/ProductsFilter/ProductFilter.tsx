import MyInput from '../../UI/input/MyInput';
import MySelect from '../../UI/select/MySelect';
import { IProductFilter } from '../../types/types';
import RangeSliderPrice from '../../UI/rangeSlider/MyRangeSliderPrice';
import RangeSliderStock from '../../UI/rangeSlider/MyRangeSliderStock';
import CheckboxLabels from './FilterCategory/FilterCheckbox';

export default function ProductFilter({
  filter,
  setFilter,
  price,
  stock,
  setPrice,
  setStock,
  products,
}: IProductFilter) {
  return (
    <div>
      <MyInput
        placeholder='Search...'
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        defaultValue='Sort options...'
        value={filter.sort}
        options={[
          { value: 'price-ASC', name: 'Sort by price ASC' },
          { value: 'price-DESC', name: 'Sort by price DESC' },
          { value: 'name-ASC', name: 'Sort by rating ASC' },
          { value: 'name-DESC', name: 'Sort by rating DESC' },
          { value: 'discount-ASC', name: 'Sort by discount ASC' },
          { value: 'discount-DESC', name: 'Sort by discount DESC' },
        ]}
        onChange={(e) => setFilter({ ...filter, sort: e.target.value })}
      />
      <RangeSliderPrice price={price} setPrice={setPrice} title='Price' step={5} />
      <RangeSliderStock stock={stock} setStock={setStock} title='Stock' step={1} />
      <CheckboxLabels title='Category' products={products} />
    </div>
  );
}
