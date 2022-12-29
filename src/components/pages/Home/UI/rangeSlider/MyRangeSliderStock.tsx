import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { SliderChange } from '../../types/types';

interface SliderProps {
  title: string;
  step: number;
  stock: SliderChange;
  setStock: (value: SliderChange) => void;
}
function valuetext(value: number) {
  return `${value}°C`;
}

export default function RangeSliderStock({ title, step, stock, setStock }: SliderProps) {
  const handleChange = (_event: Event, newValue: number | number[]) => {
    const minValue: number = Math.min.apply(null, newValue as number[]);
    const maxValue: number = Math.max.apply(null, newValue as number[]);
    setStock({ min: minValue, max: maxValue, isDefault: false });
  };

  return (
    <Box sx={{ width: 200 }}>
      <h2>{title}</h2>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={[stock.min, stock.max]}
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
