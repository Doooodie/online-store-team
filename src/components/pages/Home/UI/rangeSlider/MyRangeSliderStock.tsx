import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { IFilter } from '../../types/types';

interface SliderProps {
  filter: IFilter;
  title: string;
  step: number;
  setFilter: (value: IFilter) => void;
}
function valuetext(value: number) {
  return `${value}°C`;
}

export default function RangeSliderStock({ filter, setFilter, title, step }: SliderProps) {
  const handleChange = (event: Event, newValue: number | number[]) => {
    const minValue: number = Math.min.apply(null, newValue as number[]);
    const maxValue: number = Math.max.apply(null, newValue as number[]);
    setFilter({ ...filter, stock: { min: minValue, max: maxValue } });
  };

  return (
    <Box sx={{ width: 200 }}>
      <h2>{title}</h2>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={[filter.stock.min, filter.stock.max]}
        onChange={handleChange}
        valueLabelDisplay='auto'
        getAriaValueText={valuetext}
        min={2}
        max={150}
        step={step}
      />
    </Box>
  );
}
