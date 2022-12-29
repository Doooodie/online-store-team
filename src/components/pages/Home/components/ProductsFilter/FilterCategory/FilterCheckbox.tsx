import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { IProduct } from '../../../types/types';

interface CheckboxLabelsProps {
  products: IProduct[];
  title: string;
  filter: keyof IProduct;
}

export default function CheckboxLabels({ products, title, filter }: CheckboxLabelsProps) {
  const collection = new Map();

  products.map((product) => {
    if (collection.has(product[filter])) {
      const number = collection.get(product[filter]);
      collection.set(product[filter], number + 1);
    } else {
      collection.set(product[filter], 1);
    }
    return undefined;
  });

  const filterValueArray = Array.from(collection);
  return (
    <div>
      <h2>{title}</h2>
      {filterValueArray.map((filterValue) => (
        <FormControlLabel
          control={<Checkbox />}
          key={Math.random()}
          label={`${filterValue[0]} ${filterValue[1]}`}
        />
      ))}
    </div>
  );
}
