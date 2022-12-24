import MyInput from '../../UI/input/MyInput';
import MySelect from '../../UI/select/MySelect';
import { IProductFilter } from '../../types/types';
import RangeSlider from '../../UI/rangeSlider/MyRangeSlider';
import RangeSliderStock from '../../UI/rangeSlider/MyRangeSliderStock';

export default function ProductFilter({ filter, setFilter }: IProductFilter) {
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
      <RangeSlider filter={filter} setFilter={setFilter} title='Price' step={5} />
      <RangeSliderStock filter={filter} setFilter={setFilter} title='Stock' step={1} />
    </div>
  );
}
