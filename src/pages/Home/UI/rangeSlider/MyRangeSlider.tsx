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

export default function RangeSlider({ filter, setFilter, title, step }: SliderProps) {
  const handleChange = (event: Event, newValue: number | number[]) => {
    const minValue: number = Math.min.apply(null, newValue as number[]);
    const maxValue: number = Math.max.apply(null, newValue as number[]);
    setFilter({ ...filter, minPrice: minValue, maxPrice: maxValue });
  };

  return (
    <Box sx={{ width: 200 }}>
      <h2>{title}</h2>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={[filter.minPrice, filter.maxPrice]}
        onChange={handleChange}
        valueLabelDisplay='auto'
        getAriaValueText={valuetext}
        min={0}
        max={1749}
        step={step}
      />
    </Box>
  );
}
