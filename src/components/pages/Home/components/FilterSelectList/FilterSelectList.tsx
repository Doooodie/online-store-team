import { Checkbox, FormControlLabel } from '@mui/material';
import { IFilterSelectListProps, ICheckBox, IProduct } from '../../types/types';
import styles from './FilterSelectList.module.css';

export default function FilterSelectList({
  products,
  filterNames,
  filterName,
  keys,
  setKeys,
  checkBoxList,
  setCheckBoxList,
}: IFilterSelectListProps) {
  function convertStringToObject(array: [string, number][]) {
    const result: ICheckBox[] = [];
    array.map((category, index) => {
      let count = 0;
      products.map((product) => {
        if (product[filterName.toLowerCase() as keyof IProduct] === category[0]) count += 1;
        return undefined;
      });
      result.push({
        id: index,
        name: category[0],
        checked: false,
        count,
        maxCount: category[1],
      });
      return undefined;
    });
    return result;
  }
  const filterNamesObject = convertStringToObject(filterNames);

  function handleChange(id: number) {
    const newCheckBoxList = [...checkBoxList];
    newCheckBoxList[id].checked = !newCheckBoxList[id].checked;
    setCheckBoxList(newCheckBoxList);

    const newKeys = [...keys];
    const categoryName = checkBoxList[id].name;
    if (newKeys.indexOf(categoryName) > -1) {
      newKeys.splice(newKeys.indexOf(categoryName), 1);
    } else {
      newKeys.push(categoryName);
    }
    setKeys(newKeys);
  }

  function renderCheckBox(filter: ICheckBox) {
    return (
      <FormControlLabel
        control={<Checkbox />}
        onChange={() => handleChange(filter.id)}
        key={filter.id}
        label={`${filter.name} ${filter.count}/${filter.maxCount}`}
        checked={checkBoxList[filter.id].checked}
      />
    );
  }
  return (
    <section>
      <h2>{filterName}</h2>
      <div className={styles['filter-select-list']}>
        {filterNamesObject.map((name) => renderCheckBox(name))}
      </div>
    </section>
  );
}
