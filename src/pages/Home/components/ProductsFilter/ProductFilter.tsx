import MyInput from '../../UI/input/MyInput';
import MySelect from '../../UI/select/MySelect';
import { IProductFilter } from '../../types/types';

export default function ProductFilter({ filter, setFilter }: IProductFilter) {
  return (
    <div>
      <MyInput
        placeholder='Search...'
        value={filter.query}
        onChange={(e: any) => setFilter({ ...filter, query: e.target.value })}
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
        onChange={(e: any) => setFilter({ ...filter, sort: e.target.value })}
      />
    </div>
  );
}
