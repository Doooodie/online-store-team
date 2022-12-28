/* eslint-disable */
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { IProduct } from '../../../types/types';
import { Collection } from 'typescript';

interface CheckboxLabelsProps {
  products: IProduct[];
  title: string;
}

interface IFilterItem {
  category: string;
  count: number;
  all: number;
}

export default function CheckboxLabels({ products }: CheckboxLabelsProps) {

const result = new Map();

products.map((product) => {
  if(result.has(product.category)) {
    const number = result.get(product.category);
    result.set(product.category, number+1);
  } else {
    result.set(product.category, 1);
  }
});

{/* <h2>{title}</h2>
      {categories.forEach((cat: IFilterItem) => (
            <FormControlLabel control={<Checkbox />} label={cat.category} />
          ))} */}

  console.log(result);
  return (
    <div>
      
    </div>
  );
}
