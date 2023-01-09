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
  const dispatch = useAppDispatch();
  const price = useAppSelector((state) => state.filter.price);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    const minValue: number = Math.min.apply(null, newValue as number[]);
    const maxValue: number = Math.max.apply(null, newValue as number[]);
    dispatch(
      setPrice({
        query: [String(minValue), String(maxValue)],
        min: minValue,
        max: maxValue,
        isDefault: minValue === 0 && maxValue === 1750,
      }),
    );
  };

  return (
    <Box
      sx={{
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '1rem',
      }}
    >
      <h3>{title}</h3>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={[price.min, price.max]}
        onChange={handleChange}
        valueLabelDisplay='auto'
        getAriaValueText={valuetext}
        min={0}
        max={1750}
        step={step}
      />
    </Box>
  );
}
