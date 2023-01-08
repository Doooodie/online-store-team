import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { setPrice } from '../../../../store/filterSlice';

interface SliderProps {
  title: string;
  step: number;
}
function valuetext(value: number) {
  return `${value}°C`;
}

export default function RangeSliderPrice({ title, step }: SliderProps) {
  const init = {
    min: 0,
    max: 1750,
  };
  const dispatch = useAppDispatch();
  const price = useAppSelector((state) => state.filter.price) || init;

  const handleChange = (_event: Event, newValue: number | number[]) => {
    const minValue: number = Math.min.apply(null, newValue as number[]);
    const maxValue: number = Math.max.apply(null, newValue as number[]);
    dispatch(
      setPrice({
        query: [String(minValue), String(maxValue)],
        min: minValue,
        max: maxValue,
        isDefault: false,
      }),
    );
  };

  return (
    <Box sx={{ width: 200 }}>
      <h2>{title}</h2>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={[price.min, price.max]}
        onChange={handleChange}
        valueLabelDisplay='auto'
        getAriaValueText={valuetext}
        min={0}
        max={1500}
        step={step}
      />
    </Box>
  );
}
